import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './Widgets.css'

function Widgets() {

    const newsArticle = (heading,subtitle) => {
        return (
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Papa React is back","Tap news - 9999 readers")}
            {newsArticle("Coronavirus UK updates","Tap news - 987 readers")}
        </div>

    )
}

export default Widgets
