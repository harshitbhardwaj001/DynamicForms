import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material' 
import Drawer from '@mui/material/Drawer'
import { makeStyles } from '@mui/styles'
import List from '@mui/material/List'
import csirlogo from "../images/csirlogo.png"
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Divider from '@mui/material/Divider'
import "./Drawer.css"

const useStyles = makeStyles({
    listItem: {
        marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"grey"
    }
});

function TemporaryDrawer() {
    const classes = useStyles();
    const[state, setState] = React.useState({
        left: false
    })

    const toggleDrawer = (anchor, open) => (event) => {
        setState({...state, [anchor]: open});
    }

    const list = (anchor) => (
        <div  style={{width:"280px"}} role='presentation'>
            <Divider />
            <List>
                <ListItem >
                    <ListItemAvatar />
                    <img src={csirlogo} style={{height:"60px",width:"60px", marginLeft:"35px" }}/>
                </ListItem>
                <ListItem>
                    <ListItemText style={{fontSize:"48px", marginLeft:"5px"}}>
                        <span style={{color:"#004A99",fontWeight:"550",fontSize:"22px",fontFamily:"'Product Sans',Arial,sans-serif"}}>Data Collection Forms</span>
                    </ListItemText>
                </ListItem>
            </List>
            <Divider sx={{ background:"#000000",borderBottomWidth: 2 }} />
            <List style={{marginLeft:"08px",marginRight:"8px", marginTop:"15px", marginBottom:"15px"}}>
                <ListItem className='list_item'>
                    <div className={classes.listItem}>Computer</div>
                </ListItem>
                <ListItem className='list_item'>
                    <div className={classes.listItem}>System Data</div>
                </ListItem>
                <ListItem className='list_item'>
                    <div className={classes.listItem}>GIGW Compliant Website</div>
                </ListItem>
                <ListItem className='list_item'>
                    <div className={classes.listItem}>Video Conferenceing System Details</div>
                </ListItem>
                <ListItem className='list_item'>
                    <div className={classes.listItem}>Printer</div>
                </ListItem>
                <ListItem className='list_item'>
                    <div className={classes.listItem}>Scanner</div>
                </ListItem>
                <ListItem className='list_item'>
                    <div className={classes.listItem}>Server</div>
                </ListItem>
                <ListItem className='list_item'>
                    <div className={classes.listItem}>Xerox/Copier Machine</div>
                </ListItem>
                <ListItem className='list_item'>
                    <div className={classes.listItem}>In-House Developed Applications</div>
                </ListItem>
            </List>
            <Divider sx={{ background:"#000000",borderBottomWidth: 2 }}/>
            {/* <List style={{marginLeft:"08px",marginRight:"8px", marginTop:"20px", marginBottom:"15px"}}>
                <ListItem className='list_item1 justify-content-center align-items-center'>
                    <div>
                        Add New Form
                    </div>
                </ListItem>
            </List> */}
        </div>
    )

    return (
    <div>
        <React.Fragment>
        <IconButton className='m-2 p-2' onClick={toggleDrawer("left",true)}>
            <MenuIcon sx={{ fontSize: 30 }}/> 
        </IconButton>
        <Drawer open={state['left']} onClose={toggleDrawer("left",false)} anchor={'left'}>
            {list('left')}
        </Drawer>
        </React.Fragment>
    </div>
  )
}

export default TemporaryDrawer