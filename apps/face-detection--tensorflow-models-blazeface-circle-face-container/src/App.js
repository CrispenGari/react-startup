import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import WebCam from "react-webcam";
import drawFaceContainer from "./utils";
const blazeface = require("@tensorflow-models/blazeface");

function App() {
  const vidRef = useRef(null);
  const cxtRef = useRef(null);
  useEffect(() => {
    const timeIntervalId = setInterval(() => {
      (async () => {
        const network = await blazeface.load();
        const returnTensors = !true;

        // getting the video stream from the webcam
        if (
          vidRef.current !== null &&
          vidRef.current.video.readyState === 4 &&
          typeof vidRef.current !== undefined
        ) {
          // get the video dimensions from and set the width of the canvas to the video dimensions
          const { video } = vidRef.current;
          const { videoWidth, videoHeight } = video;
          // setting the dimensions of the ctx
          cxtRef.current.width = videoWidth;
          cxtRef.current.height = videoHeight;
          // detect some faces and landmarks
          const detections = await network.estimateFaces(video, returnTensors);

          // const detections = await network.getBoundingBoxes(video, returnTensors);

          const cxt = cxtRef.current.getContext("2d");
          // console.log(detections);
          drawFaceContainer(cxt, detections);
        }
      })();
    }, 100);

    return () => {
      clearInterval(timeIntervalId);
    };
  }, []);
  return (
    <div className="app">
      <div className="app__container">
        <WebCam
          className="app__webcam"
          muted
          audio={false}
          autoPlay
          ref={vidRef}
        />
        <canvas className="app__canvas" ref={cxtRef}></canvas>
      </div>
      <h1>
        Face Detector AI <span>--Crispen Gari</span>
      </h1>
    </div>
  );
}
export default App;
