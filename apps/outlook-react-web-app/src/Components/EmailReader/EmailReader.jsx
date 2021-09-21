import React from "react";
import "./EmailReader.css";
import { EmailComposer, MailReader } from "../../Components";
const EmailReader = ({ target, setTarget, email }) => {
  return (
    <div className="emailreader">
      {target === "new" ? (
        <EmailComposer setTarget={setTarget} />
      ) : target === "read" ? (
        <MailReader email={email} />
      ) : (
        <div className="emailreader__main">
          <img
            src="https://outlook-1.cdn.office.net/owamail/20200921004.05/resources/images/noSelection-1b17e1809c7b60db3b9242e8a0ef469b.svg"
            alt=""
          />
          <h5>Select an email to read</h5>
          <small>Nothing is selected</small>
        </div>
      )}
    </div>
  );
};

export default EmailReader;
