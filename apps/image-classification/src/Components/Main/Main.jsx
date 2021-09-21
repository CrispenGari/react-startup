import React, { useState } from "react";
import "./Main.css";
import { Form, Class } from "../../Components";

import { Loop } from "@material-ui/icons";
const Main = () => {
  const [classifications, setClassifications] = useState(null);
  const [exception, setException] = useState(null);

  console.log(exception);
  // console.log(classifications);
  return (
    <div className="main">
      <Form
        setClassifications={setClassifications}
        setException={setException}
      />
      {classifications ? (
        <div className="main__answers">
          {classifications?.map((classification, index) => {
            return <Class key={index} classification={classification} />;
          })}
        </div>
      ) : (
        <div className="main__loading">
          <Loop />
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default Main;
