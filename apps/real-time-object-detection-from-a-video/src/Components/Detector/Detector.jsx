import React, { useState, useRef, useEffect, useCallback } from "react";
import "./Detector.css";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import functions from "../../utils";
import vid_test from "./run.mp4";
const Detector = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const cocossdFunctAsync = async () => {
    const network = await cocossd.load();
    setInterval(() => {
      detectsObjectsAsync(network);
    }, 100);
  };
  const detectsObjectsAsync = async (network) => {
    if (
      typeof videoRef.current !== undefined &&
      videoRef.current !== null &&
      videoRef.current?.readyState === 4
    ) {
      const video = videoRef.current;
      const { videoWidth, videoHeight } = video;
      // console.log("The ready state is: ", videoRef.current?.readyState )
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      const detections = await network.detect(video);
      const canvas = canvasRef.current.getContext("2d");
      functions.drawRectangle(detections, canvas);
      // console.log(detections);
    }
  };
  useEffect(() => {
    cocossdFunctAsync();
  }, []);

  return (
    <div className="detector">
      <div className="detector__container">
        <video
          src={vid_test}
          autoPlay
          loop
          className="detector__video"
          ref={videoRef}
          muted
        ></video>
        <canvas ref={canvasRef} className="detector__canvas"></canvas>
      </div>
    </div>
  );
};
export default Detector;
