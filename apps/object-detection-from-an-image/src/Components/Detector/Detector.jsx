import React, { useState, useRef, useEffect, useCallback } from "react";
import "./Detector.css";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
/*
  A LIST OF EXAMPES OF SUPPORTED IMAGES
  https://cdn.shopify.com/s/files/1/1479/5378/files/Home_Studio_BGTP002_1800_x_850_2000x.jpg?v=1585529877
  https://hips.hearstapps.com/pop.h-cdn.co/assets/15/47/1447961210-car-auction.jpg
  https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/car-auction.jpg
*/
const Detector = ({setDetectedObjects}) => {
  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const [error, setError] = useState(null)
  
  const [image ,setImage] = useState("https://cdn.shopify.com/s/files/1/1479/5378/files/Home_Studio_BGTP002_1800_x_850_2000x.jpg?v=1585529877")
  useEffect(()=>{
    const makedetections = async()=>{
      const network  = await cocossd.load();
        if(image && typeof(imageRef.current !== undefined) && imageRef.current !==null){
            const image_ = imageRef.current;
            const {naturalHeight, naturalWidth} = image_
            canvasRef.current.width = naturalWidth
            canvasRef.current.height = naturalHeight
            try{
              const detections = await network.detect(image_)
              // console.log("detections", detections)
              setDetectedObjects(detections)
              setError(null)
            }catch(e){
                setError(e)
            }
            const canvas = canvasRef.current.getContext('2d')
            // we are not going to draw anything to the image using canva
        }
    }
      makedetections()
  }, [imageRef, canvasRef, image, setDetectedObjects])
  const detect = (e) => {
    e.preventDefault();
    if(image){
        setImage(image)
    }
  };
  return (
    <div className="detector">
      <div className="detector__container">
        <form className="detector__form">
          <input type="text" placeholder="Past an Image URL here..." value={image} onChange={e=>setImage(e.target.value)} />
          <button type="submit" onClick={detect}>Detect</button>
        </form>
        {
          (image && !error)?  <img crossOrigin="anonymous" className="detector__image"src={image} alt="" ref={imageRef}/>
          : <p className="detector__error">
            
            Opps image not supported. <span>Try another URL</span></p>
        }
        <div className="detected__objects">

        </div>
        <canvas ref={canvasRef}  style={{display: 'none'}}className="detector__canvas"></canvas>
      </div>
    </div>
  );
};
export default Detector;
