import React, { useState } from 'react'
import SearchBar from 'material-ui-search-bar'
import Tabcom from './Tabcom';
import data from '../data'
import logo from '../image/logo.jpg'
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Searchbox() {
    const searchString = "google search result page"
    const result = data.data
    const time = data.time
    const [inputValue, setInputValue] = useState("")
    const [content, visibleContnet] = useState(false)
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = e => {
        setInputValue(e)
    }
    const search = (e) => {
        if(e.toLowerCase() === searchString.toLowerCase())
            visibleContnet(true)
        else
            visibleContnet(false)
    }
    const accordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const renderTable = (e) =>{
        let res = e.content
        return(
            res.map((item, key) =>
                <Accordion expanded={expanded === `panel${key}`} onChange={accordionChange(`panel${key}`)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${key}`}
                        id={`panel${key}`}
                    >
                        <Typography  >{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{item.content}</Typography>
                    </AccordionDetails>
                </Accordion>
            )
        ) 
    }
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <img src={logo} />
                </Grid>
                <Grid item xs={8}>
                    <SearchBar
                        value = {inputValue}
                        onChange={handleChange}
                        onRequestSearch={search}
                    />
                </Grid>
                <Grid item xs={2}>
                    <AppsIcon />&nbsp;
                    <NotificationsNoneIcon/>&nbsp;&nbsp;
                    <AccountCircleIcon fontSize="large"/>
                </Grid>
            </Grid>
            
            <Tabcom />
            <h4>{content && time}</h4>
            <br />
            { 
                content && 
                result.map(item => 
                <div>
                    <h1 className="title">{item.title}</h1>
                    <p className="subtitle">{item.url}</p>
                    <p className="content">{item.content}</p>
                    <div className="panel-group" id="accordion">
                        {(() => {
                            if (item.table) 
                               return renderTable(item.table)
                        })()}
                    </div>
                    <p className="tag">{item.tag}</p>
                    <br />
                </div>)
        }
        </div>
    )
}

export default Searchbox
