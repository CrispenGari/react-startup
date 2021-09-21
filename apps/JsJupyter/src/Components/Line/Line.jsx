import React, { useState } from "react";
import marked from "marked";
import "./Line.css";

const Line = ({ number, textType }) => {
  const [lineContent, setLineContent] = useState("");
  const [output, setOutput] = useState("");
  const [message, setMessage] = useState("");
  const [markdown, setMarkDown] = useState("");

  const openConsole = () => {
    alert("Press F12 to open Dev Tools");
  };
  const runCurrentCode = (event) => {
    if (event.shiftKey && event.key === "Enter") {
      //  Check if the user is console logging the output to the screen
      if (textType.toLowerCase() === "markdown") {
        setMarkDown(marked(lineContent));
      } else {
        if (lineContent.toLowerCase().includes("console.")) {
          setOutput(
            "For console.log(..args) inspect the page to see the output. (Press F12)"
          );
          setMessage("line__output__message");
          event.preventDefault();
          return eval(lineContent.toLowerCase());
        } else if (lineContent.toLowerCase().includes("=")) {
          setOutput(
            "For complex assignments and multiple line code evaluation inspect the page to see the output. (Press F12)"
          );
          setMessage("line__output__message");
          event.preventDefault();
          return eval(lineContent.toLowerCase());
        }

        try {
          let output;
          setMessage("");
          eval(`output =()=> { return ${lineContent.toLowerCase()};}`);
          setOutput(output());
        } catch (error) {
          setMessage("line__output__message");
          setOutput(error);
        }

        event.preventDefault();
      }
    }
  };

  return textType.toLowerCase() === "markdown" ? (
    <div className="line">
      {!markdown ? (
        <div className="line__input">
          <h1>Ln [ ]:</h1>
          <textarea
            value={lineContent}
            onKeyDown={(e) => runCurrentCode(e)}
            rows={lineContent.split("\n").length}
            onChange={(e) => setLineContent(e.target.value)}
          ></textarea>
        </div>
      ) : (
        <div
          className="line__output__markdown"
          dangerouslySetInnerHTML={{ __html: markdown }}
        ></div>
      )}
    </div>
  ) : (
    <div className="line">
      <div className="line__input">
        <h1>Ln [ ]:</h1>
        <textarea
          value={lineContent}
          onKeyDown={(e) => runCurrentCode(e)}
          rows={lineContent.split("\n").length}
          onChange={(e) => setLineContent(e.target.value)}
        ></textarea>
      </div>
      <div className={`line__output ${!output && "line__output--hide"}`}>
        <h1>[ {number + 1} ]</h1>
        <pre className="line__output__code__container line__output__message--number">
          <code
            className={` ${
              message
                ? "line__output__message"
                : "line__output__message--number"
            } `}
          >
            {output}
          </code>
          {message && <button onClick={openConsole}>open</button>}
        </pre>
      </div>
    </div>
  );
};

export default Line;
