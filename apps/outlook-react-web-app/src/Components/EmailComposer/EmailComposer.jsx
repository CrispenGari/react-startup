import { Button } from "@material-ui/core";

import { Alert, AlertTitle } from "@material-ui/lab";
import {
  AttachFile,
  CreateOutlined,
  EmojiEmotions,
  ImageOutlined,
} from "@material-ui/icons";
import React from "react";
import { useStateValue } from "../../StateProvider";
import "./EmailComposer.css";
import { database } from "../../backend/firebase";
import firebase from "firebase";
const EmailComposer = ({ setTarget }) => {
  const [receivers, setReivers] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [body, setBody] = React.useState("");
  const [{ user }] = useStateValue();
  const [modal, setModal] = React.useState(false);

  const sendMail = (e) => {
    e.preventDefault();
    if (receivers && body) {
      const delemeter1 = ",";
      const delimeter2 = ";";
      const _ = String(receivers).replace(";", ",");
      const clis = String(_).split(delemeter1 || delimeter2);
      const clients = [];
      clis.map((cli, i) => clients.push(String(cli).trim()));

      sendEmail(clients, body, subject);
    }
    return;
  };
  // client1, client2, client3, client4;client5

  const sendEmail = (clients, body, subject) => {
    clients.map((client) =>
      database.collection("emails").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        from: user?.email,
        body: body,
        subject: subject,
        client: client,
        from_name: user?.displayName,
        from_avatar: user?.photoURL,
      })
    );
    setBody("");
    setReivers([]);
    setSubject("");
    setModal(!false);
    setTimeout(() => setModal(!true), 5000);
  };
  return (
    <form className="emailcomposer">
      {modal && (
        <Alert severity="success">
          <AlertTitle>Outlook</AlertTitle>
          The email has been sent to{" "}
          {`${String(String(receivers).replace(";", ",")).split(",")}`}!
        </Alert>
      )}

      <div className="emailcomposer__to">
        <div className="emailcomposer__left">
          <Button className="emailcomposer__btnsmall1">To</Button>
        </div>
        <input
          type="text"
          autoFocus
          onChange={(e) => setReivers(e.target.value)}
          value={receivers}
        />
        <div className="emailcomposer__right">
          <Button className="emailcomposer__btnsmall">Cc</Button>
          <Button className="emailcomposer__btnsmall">Bc</Button>
        </div>
      </div>
      <div className="emailcomposer__subject">
        <input
          type="text"
          placeholder="Add a subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="emailcomposer__body">
        <textarea
          value={body}
          cols="30"
          rows="15"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <div className="emailcomposer__buttons">
        <Button className="emailcomposer__btn" type="submit" onClick={sendMail}>
          Send
        </Button>
        <Button className="emailcomposer__btn" onClick={() => setTarget("")}>
          Discard
        </Button>
        <AttachFile className="emailcomposer__icon" />
        <ImageOutlined className="emailcomposer__icon" />
        <EmojiEmotions className="emailcomposer__icon" />
        <CreateOutlined className="emailcomposer__icon" />
      </div>
    </form>
  );
};

export default EmailComposer;
