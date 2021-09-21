import React from 'react'
import './ObjectDetected.css'
import {CheckCircle} from '@material-ui/icons'
const ObjectDetected = ({object_detected}) => {
    return (
        <div className="objectdetected">
            <h1>{object_detected?.class}</h1>
            <CheckCircle/>
        </div>
    )
}

export default ObjectDetected
