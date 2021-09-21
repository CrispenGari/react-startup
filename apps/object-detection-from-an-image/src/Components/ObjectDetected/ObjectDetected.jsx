import React from 'react'
import './ObjectDetected.css'
import {CheckCircle} from '@material-ui/icons'
import emoji from 'node-emoji'
const ObjectDetected = ({object_detected}) => {
    return (
        <div className="objectdetected">
            <h1>{object_detected?.class}</h1>
            <small className={`${object_detected?.score >.75? "best": object_detected?.score >=.50 ? "better": "good" }`}>
                {Math.round(object_detected?.score *100)} %
            </small>
            <CheckCircle/>
        </div>
    )
}

export default ObjectDetected
