import { LinearProgress } from "@material-ui/core";

import {
  CameraAltOutlined,
  NoteAddOutlined,
  VideocamOutlined,
  Create,
} from "@material-ui/icons";
import React from "react";

import { storage } from "../../backend/firebase";
import axios from "../../axios/axios";
import "./Poster.css";
const Poster = ({ user }) => {
  const [openCaption, setOpenCaption] = React.useState(false);
  const [file, setFile] = React.useState(null);
  const [caption, setCaption] = React.useState("");
  const [progress, setProgress] = React.useState(0);
  const posting_url = "/v1/posts/post";
  const handleOpen = () => {
    setOpenCaption(true);
  };

  const fileExtension = (file_path) => {
    const file_segments = String(file_path).split(".");
    return file_segments[file_segments.length - 1];
  };
  const handlePost = (e) => {
    e.preventDefault();
    if (file) {
      //check for file extensions
      if (
        fileExtension(file.name) === "jpg" ||
        fileExtension(file.name) === "gif" ||
        fileExtension(file.name) === "bmp" ||
        fileExtension(file.name) === "jpeg"
      ) {
        // post as an image
        const uploadTask = storage.ref(`images/${file.name}`).put(file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
          },
          (error) => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(file.name)
              .getDownloadURL()
              .then((url) => {
                console.log(caption, url);
                const poster = async () => {
                  await axios.post(posting_url, {
                    timestamp: "not time stamp for now",
                    caption: caption,
                    imgurl: url,
                    username: user?.displayName ? user.displayName : user.email,
                    userAvatar: user?.photoURL,
                    userEmail: user?.email,
                    docUrl: null,
                    vidUrl: null,
                    comments: [],
                  });
                };

                poster();
              });
          }
        );
        setProgress(0);
        setFile(null);
        setCaption("");
        setOpenCaption(false);
      } else if (
        fileExtension(file.name) === "mp4" ||
        fileExtension(file.name) === "flv" ||
        fileExtension(file.name) === "webm" ||
        fileExtension(file.name) === "mov" ||
        fileExtension(file.name) === "ogg" ||
        fileExtension(file.name) === "wmv" ||
        fileExtension(file.name) === "oga"
      ) {
        // post as an video

        const uploadTask = storage.ref(`videos/${file.name}`).put(file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
          },
          (error) => {
            console.log(error);
          },
          () => {
            storage
              .ref("videos")
              .child(file.name)
              .getDownloadURL()
              .then((url) => {
                const poster = async () => {
                  await axios.post(posting_url, {
                    timestamp: "not time stamp for now",
                    caption: caption,
                    imgurl: null,
                    username: user?.displayName ? user.displayName : user.email,
                    userAvatar: user?.photoURL,
                    userEmail: user?.email,
                    docUrl: null,
                    vidUrl: url,
                    comments: [],
                  });
                };

                poster();
              });
          }
        );
        setProgress(0);
        setFile(null);
        setCaption("");
        setOpenCaption(false);
      } else if (
        fileExtension(file.name) === "txt" ||
        fileExtension(file.name) === "pdf" ||
        fileExtension(file.name) === "docx" ||
        fileExtension(file.name) === "csv"
      ) {
        // post as an  docc
        const uploadTask = storage.ref(`documents/${file.name}`).put(file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
          },
          (error) => {
            console.log(error);
          },
          () => {
            storage
              .ref("documents")
              .child(file.name)
              .getDownloadURL()
              .then((url) => {
                const poster = async () => {
                  await axios.post(posting_url, {
                    timestamp: "not time stamp for now",
                    caption: caption,
                    imgurl: null,
                    username: user?.displayName ? user.displayName : user.email,
                    userAvatar: user?.photoURL,
                    userEmail: user?.email,
                    docUrl: url,
                    vidUrl: null,
                    comments: [],
                  });
                };

                poster();
              });
          }
        );
        setProgress(0);
        setFile(null);
        setCaption("");
        setOpenCaption(false);
      } else {
        // post as an caption
        const poster = async () => {
          await axios.post(posting_url, {
            timestamp: "not time stamp for now",
            caption: caption,
            imgurl: null,
            username: user?.displayName ? user.displayName : user.email,
            userAvatar: user?.photoURL,
            userEmail: user?.email,
            docUrl: null,
            vidUrl: null,
            comments: [],
          });
        };

        poster();
        setProgress(0);
        setFile(null);
        setCaption("");
        setOpenCaption(false);
      }
    }
    setProgress(0);
    setFile(null);
    setCaption("");
    setOpenCaption(false);
  };

  return (
    <form className="poster">
      <LinearProgress variant="determinate" value={progress} />
      <div className="poster__top">
        <div className="poster__topLeft" onClick={handleOpen}>
          {openCaption ? (
            <input
              placeholder="Write an article..."
              className="poster__input"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          ) : (
            <React.Fragment>
              <Create /> <h4>Start a post</h4>
            </React.Fragment>
          )}
        </div>
        <div className="poster__topRight">
          <div className="poster__topRightButton" title="Image">
            <input
              className="poster__inputFile"
              type="file"
              id="image"
              accept="image/*"
              multiple={false}
              onChange={(e) => {
                setFile(null);
                setFile(e.target.files[0]);
              }}
            />
            <label htmlFor="image">
              <CameraAltOutlined />
            </label>
          </div>
          <div className="poster__topRightButton" title="Video">
            <input
              className="poster__inputFile"
              type="file"
              id="video"
              accept="video/*"
              multiple={false}
              onChange={(e) => {
                setFile(null);
                setFile(e.target.files[0]);
              }}
            />
            <label htmlFor="video">
              <VideocamOutlined />
            </label>
          </div>
          <div className="poster__topRightButton" title="Documment">
            <input
              className="poster__inputFile"
              type="file"
              id="document"
              accept=".pdf, .txt, .docx, .csv"
              multiple={false}
              onChange={(e) => {
                setFile(null);
                setFile(e.target.files[0]);
              }}
            />
            <label htmlFor="document">
              <NoteAddOutlined />
            </label>
          </div>
        </div>
      </div>
      <div className="poster__bottom">
        <p>
          <span>Write aticle</span> on LinkedIn
        </p>
      </div>
      <button type="submit" onClick={handlePost} style={{ display: "none" }} />
    </form>
  );
};

export default Poster;
