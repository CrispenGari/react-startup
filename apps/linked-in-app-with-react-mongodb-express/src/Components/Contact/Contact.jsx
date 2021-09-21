import { Avatar } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";

import "./Contact.css";
const Contact = ({ src, title, name }) => {
  return (
    <div className="contact">
      <Avatar src={src} alt={name} className="contact__Avatar" />
      <div className="contact__info">
        <h3>{name}</h3>
        <small>{title}</small>
      </div>
      <div className="contact__button">
        <Add />
        Follow
      </div>
    </div>
  );
};

export default Contact;
