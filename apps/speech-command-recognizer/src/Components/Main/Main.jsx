import React, { useState } from "react";
import "./Main.css";
import { Alert, AlertTitle } from "@material-ui/lab";
import timeGreeting from "time-greeting";
import { Form } from "../../Components";
const Main = () => {
  const [alert, setAlert] = useState(true);
  const currentdate = new Date();
  const date_time = `${currentdate.getFullYear()}-${currentdate.getMonth()}-${currentdate.getDay()} ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
  setTimeout(() => {
    setAlert(false);
  }, 10000);

  return (
    <div className="main">
      {alert && (
        <Alert severity="success" className="main__alert">
          <AlertTitle>Welcome</AlertTitle>
          {timeGreeting(date_time)} — <strong>Crispen Gari</strong>
        </Alert>
      )}
      <Form />
    </div>
  );
};

export default Main;
