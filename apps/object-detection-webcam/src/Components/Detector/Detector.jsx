import React, {useState, useRef, useEffect, useCallback} from 'react'
import './Detector.css'
import WebCam from 'react-webcam'
import * as tf from '@tensorflow/tfjs'
import * as cocossd from '@tensorflow-models/coco-ssd'
import functions from '../../utils'
const Detector = ({setDetectedObjects}) => {
    const webCamRef = useRef(null)
    const canvasRef = useRef(null)
    const videoConstraints = {
        facingMode: "user"
    };
    const cocossdFunctAsync = async ()=>{
        const network  = await cocossd.load();
        setInterval(()=>{
            detectsObjectsAsync(network)
        }, 100)
    }
    const detectsObjectsAsync = async (network) =>{
        if(typeof(webCamRef.current !== undefined) && webCamRef.current !== null && webCamRef.current.video.readyState === 4){
            const {video} = webCamRef.current
            const {videoWidth, videoHeight} = video
            // canvas videoWidth
            canvasRef.current.width = videoWidth
            canvasRef.current.height = videoHeight
            const detections = await network.detect(video)
            setDetectedObjects(detections)
            const canvas = canvasRef.current.getContext('2d')
            // console.log(detections)
            functions.drawRectangle(detections, canvas)
        }
    }
    useEffect(()=>{
        cocossdFunctAsync()
    },[])
    
    return (
        <div className="detector">   
            <div className="detector__container">
                    <WebCam
                    ref={webCamRef}
                    className="detector__webcam"
                    muted
                    videoConstraints ={videoConstraints}
                />
                <canvas
                    ref={canvasRef}
                    className="detector__canvas"
                ></canvas>
            </div>
         
        </div>
    )
}
export default Detector
