import React, { useEffect, useRef, useState } from 'react';
import DataTable from 'react-data-table-component';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDownloadExcel } from "react-export-table-to-excel";

const AllResponses = () => {
    const { f_id } = useParams();
    const [inventory, setInventory] = useState({ responses: [], labs: [], questions: [] });
    const [search, setSearch] = useState("");
    const [labs, setLabs] = useState([]);
    const [filteredLabs, setFilteredLabs] = useState([]);
    const filename = window.localStorage.getItem("docName")

    const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        fileName: filename,
        sheet: "Responses",
    })

    useEffect(() => {
        axios.get(`http://localhost:8081/userResponse/${f_id}`)
            .then(res => {
                setInventory(prev => ({ ...prev, responses: res.data }));
            })
            .catch(err => console.log(err));

        axios.get("http://localhost:8081/labs")
            .then(res => {
                setInventory(prev => ({ ...prev, labs: res.data }));
                setLabs(res.data);
                setFilteredLabs(res.data);
            })
            .catch(err => console.log(err));

        axios.get(`http://localhost:8081/questions/${f_id}`)
            .then(res => {
                const parsedJsonOnce = res.data;
                const questions = JSON.parse(parsedJsonOnce);
                let questionTextArray = [];
                if (Array.isArray(questions)) {
                    questionTextArray = questions.map(question => question.questionText);
                } else {
                    console.error("Parsed JSON is not an array");
                }
                setInventory(prev => ({ ...prev, questions: questionTextArray }));
            })
            .catch(err => console.log(err));
    }, [f_id]);

    // useEffect(() => {
    //     const result = labs.filter(lab => {
    //         return lab.name.toLowerCase().match(search.toLowerCase());
    //     })

    //     setFilteredLabs(result);
    // }, [search])

    // Merge labs and responses based on lab_id
    const combinedData = inventory.labs.map(lab => {
        const correspondingResponse = inventory.responses.find(response => response.lab_id === lab.name);

    const labData = {
        Labs: lab.name,
        // Add other properties from labs as needed
    };

    if (correspondingResponse) {
        console.log('correspondingResponse:', correspondingResponse);
    
        const responseString = correspondingResponse.responses;
        console.log('responseString:', responseString);
    
        try {
            // Parse the stringified JSON first
            const parsedResponse1 = JSON.parse(responseString);
            const parsedResponse = JSON.parse(parsedResponse1);
            console.log(parsedResponse);
            console.log(parsedResponse["f_id"])

            // Extract 'question_*' properties
            for (const key in parsedResponse) {
                if (key.startsWith('question_')) {
                    const questionIndex = parseInt(key.split('_')[1]);
                    const questionText = parsedResponse.questions[questionIndex].questionText;
                    labData[questionText] = parsedResponse[key];
                }
            }

            // Parse the 'questions' property from the parsedResponse
            // const responseQuestionsArray = parsedResponse.questions || [];
            // console.log(responseQuestionsArray);
            // const responseValues = responseQuestionsArray.map(response => response.answer);

            // responseQuestionsArray.forEach((response, index) => {
            //     labData[`Question ${index + 1}`] = responseValues[index];
            // });

            console.log(labData);
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    } else {
        // If there's no response, set all question columns to "No Response"
        inventory.questions.forEach(questionText => {
            labData[questionText] = "No Response";
        });
    }

    return labData;
    });
    

    const allColumns = ['Labs'];
    combinedData.forEach((labData) => {
        Object.keys(labData).forEach((key) => {
            if (!allColumns.includes(key)) {
                allColumns.push(key);
            }
        });
    });

    // Create DataTable columns based on the unique column names
    const columns = allColumns.map(column => ({
        name: column,
        selector: column,
        key: column,
        // Add other column properties as needed
    }));
    

    return (
        <Sidebar>
            <div className='d-flex vh-100 flex-column bg-white justify-content-center align-items-center'>
                <h1 className='my-5'>{window.localStorage.getItem("DocName")} Responses</h1>
                {console.log(inventory)}
                <DataTable ref={tableRef} columns={columns} data={combinedData} pagination fixedHeader={true} fixedHeaderScrollHeight='500px' selectableRows selectableRowsHighlight highlightOnHover actions={
                    <button className='btn btn- md btn-info' onClick={onDownload}>Export</button> 
                } />
            </div>
        </Sidebar>
    );
};

export default AllResponses;
