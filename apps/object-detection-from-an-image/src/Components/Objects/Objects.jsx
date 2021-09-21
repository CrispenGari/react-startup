import React from 'react'
import './Objects.css'
import {Loop} from '@material-ui/icons'
import {ObjectDetected} from '../../Components'
const Objects = ({detectedObjects}) => {
    console.log(detectedObjects)
    return (
        <div className="objects">
            <div className="objects__header">
                <h1>Objects Detected</h1>
                <h1>{!detectedObjects? "No objects detected yet" : detectedObjects?.length }</h1>
            </div>
            {
                !detectedObjects?
                <div className="objects__list__loading">
                <Loop/>
                <p>Detecting...</p>
             </div>:
            <div className="objects__list">
                {
                    detectedObjects?.map((object_detected, index)=>{
                        return  <ObjectDetected key={index} object_detected={object_detected}/>
                    })
                }
            </div>

            }
        </div>
    )
}

export default Objects
