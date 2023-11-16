import React from 'react'
import { makeStyles } from '@mui/styles'
import { Paper } from '@mui/material'
import { Tabs } from '@mui/material'
import { Tab } from '@mui/material'


const useStyles = makeStyles({
    root:{
        flexGrow:1,
    },
    tab:{
        fontSize:12,
        color:"5f6368",
        textTransform:"capitalize",
        height:10,
        fontWeight:600,
        fontFamily:"Google Sans,Roboto,Arial,sans-serif",
    },
    tabs:{
        height:10
    }
})

function Centeredtabs() {
  const classes = useStyles();
  return (
    <div>
        <Paper className={classes.root}>
            <Tabs
            className={classes.tabs}
            textColor="primary"
            indicateColor="primary"
            centered
            >
                <Tab label='Questions' className={classes.tab}>

                </Tab>
                <Tab label = 'Responses' className={classes.tab}>

                </Tab>
            </Tabs>
        </Paper>
    </div>
  )
}

export default Centeredtabs