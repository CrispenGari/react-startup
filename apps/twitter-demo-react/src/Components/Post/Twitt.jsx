import React from "react";
import "./Twitt.css";
import {
  Favorite,
  FavoriteBorder,
  ShareOutlined,
  Repeat,
  ChatBubbleOutlineRounded,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { auth } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { useState } from "react";
function Twitt({ tweets }) {
  const [{ userinfo, posts }, dispatch] = useStateValue();
  return (
    <div>
      {tweets?.map((tweet) =>
        tweet.isRetweet ? (
          <div className="twitt" key={tweet.id}>
            <small className="twitt__retweet">
              <Repeat className="twitt__retweetSmall" />
              {tweet.retweter} retweeted
            </small>
            <div className="twitt__userTweet">
              <Avatar
                className="twitt__avatar"
                scr="../images/image.png"
                alt={tweet.username}
              />
              <div className="twitt__usernameTwitContent">
                <div className="twitt__timeusername">
                  <h5>Crispen_Gari</h5> <span>@garigari • 10 hr</span>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Delectus recusandae velit vero vitae earum. Cum quas incidunt
                  libero? Ipsa consequuntur deleniti iste nam nostrum eligendi
                  maiores atque assumenda velit quia.
                </p>
              </div>
            </div>
            <div className="twitt__retweetContent">
              <div className="twitt__userContainer">
                <Avatar className="twitt__retweetContentAvatar" />
                <div className="twitt__timeusername">
                  <h5>Crispen_Gari</h5> <span>@garigari • 10 hr</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
                id beatae, unde consectetur incidunt ut eos enim iusto ullam
                nostrum ab sit vero inventore dolorum alias perspiciatis
                dignissimos ex nulla!
              </p>
            </div>
            <div className="twitt__controlls">
              <ChatBubbleOutlineRounded className="twitt__commentIcon" />
              <Repeat className="twitt__repeatIcon" />
              <FavoriteBorder className="twitt__likeIcon" />
              <ShareOutlined className="twitt__shareIcon" />
            </div>
          </div>
        ) : (
          <div className="twitt" key={tweet.id}>
            <div className="twitt__userTweet">
              <Avatar
                className="twitt__avatar"
                src="./images/img.png"
                alt={tweet.username}
              />
              {/* <Avatar alt="Crispen" className="" scr="../../" /> */}
              <div className="twitt__usernameTwitContent">
                <div className="twitt__timeusername">
                  <h5>{tweet.username}</h5>{" "}
                  <span>@ {tweet.retweter} • 10 hr</span>
                </div>
                <p>{tweet?.tweet} </p>
              </div>
            </div>
            <div className="twitt__controlls">
              <div className="twitt__buttons">
                <ChatBubbleOutlineRounded className="twitt__commentIcon" />
                <span>
                  {tweet.comments?.length !== 0 && tweet.comments?.length}
                </span>
              </div>
              <div className="twitt__buttons">
                <Repeat className="twitt__repeatIcon" />
                <span>
                  {tweet.retweets?.length !== 0 && tweet.retweets?.length}
                </span>
              </div>
              <div className="twitt__buttons">
                <FavoriteBorder className="twitt__likeIcon" />

                <span>{tweet.likes !== 0 && tweet.likes}</span>
              </div>
              <div className="twitt__buttons">
                <ShareOutlined className="twitt__shareIcon" />
                <span>
                  {tweet.shares?.length !== 0 && tweet.shares?.length}
                </span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Twitt;
