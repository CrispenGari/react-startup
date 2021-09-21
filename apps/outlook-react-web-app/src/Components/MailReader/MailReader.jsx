import {
  InfoOutlined,
  MoreHorizOutlined,
  UndoOutlined,
  ArrowForward,
} from "@material-ui/icons";
import React from "react";

import { Avatar, Button } from "@material-ui/core";
import "./MailReader.css";
const MailReader = ({ email }) => {
  return (
    <div className="mailreader">
      <div className="mailreader__header">
        <h2>{email?.subject}</h2>
      </div>
      <div className="mailreader__messages">
        <div className="mailreader__messages--top">
          <InfoOutlined />
          <small>This is from the trusted sender</small>
        </div>

        <div className="mailreader__mailinfo">
          <Avatar
            className="mailreader__avatar"
            src={email?.from_avatar}
            title={email?.from}
            alt={email?.from_name}
          />
          <div className="mailreader__center">
            <h3>{email?.from}</h3>
            <small>{new Date(email?.timestamp).toDateString()}</small>
            <small>To you</small>
          </div>
          <div className="mailreader__right">
            <UndoOutlined />
            <UndoOutlined />
            <ArrowForward />
            <MoreHorizOutlined />
          </div>
        </div>
        <div className="mailreader__body">{email?.body}</div>
        <div className="mailreader__bottons">
          <Button className="mailreader__btn">Reply</Button>
          <Button className="mailreader__btn">Forward</Button>
        </div>
      </div>
    </div>
  );
};

export default MailReader;
