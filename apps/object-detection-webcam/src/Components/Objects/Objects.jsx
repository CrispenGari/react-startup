import React from 'react'
import './Objects.css'
import {ObjectDetected} from '../../Components'
const Objects = ({detectedObjects}) => {
    return (
        <div className="objects">
            <div className="objects__header">
                <h1>Objects Detected</h1>
                <h1>{detectedObjects?.length}</h1>
            </div>
            <div className="objects__list">
                {
                    detectedObjects?.map((object_detected, index)=>{
                        return  <ObjectDetected key={index} object_detected={object_detected}/>
                    })
                }
            </div>
        </div>
    )
}

export default Objects
