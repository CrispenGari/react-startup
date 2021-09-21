import React from "react";
import { EmailsHeader, Email } from "../../Components";
import "./Emails.css";

import { database } from "../../backend/firebase";
const Emails = ({ setTarget, setEmail }) => {
  const [emails, setEmails] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = database
      .collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setEmails(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
    return () => unsubscribe();
  }, []);

  return (
    <div className="emails">
      <EmailsHeader />
      <div className="emails__container">
        {emails.map((email) => (
          <div
            key={email.id}
            onClick={() => {
              setTarget("read");
              database
                .collection("emails")
                .doc(email.id)
                .onSnapshot((snapshot) => {
                  setEmail(snapshot.data());
                });
            }}
          >
            <Email email={email} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Emails;
