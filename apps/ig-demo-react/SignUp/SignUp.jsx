import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Input, Button, Typography } from "@material-ui/core";

import styles from "./SignUp.module.css";
function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function SignUp({ auth }) {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [username, setUsename] = useState("");
  const [openLogIn, setOpenLogIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error_msg, setErrorMsg] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
        if (authUser.displayName) {
          // dont update the username
        } else {
          // update the username
          return authUser.updateProfile({ displayName: username });
        }
      } else {
        // log out the user
        setUser(null);
      }
    });
    return () => {
      // cleanup action
      unsubscribe();
    };
  }, [user, username]);
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      /*.then((authUser) => {
        authUser.user.updateProfile({
          displayName: username,
        });
      })*/
      .catch((err) => {
        setErrorMsg(err.message);
      });
      setOpen(!true);
  };
const logIn = (e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(e=>{
        setErrorMsg(e.message)
    })

    setOpenLogIn(!true);
}
  return (
    <div>
      {user ? (
        <button type="button" onClick={() => auth.signOut()}>
          Logout
        </button>
      ) : (
        <div>
          <button type="button" onClick={() => setOpenLogIn(true)}>
            Login
          </button>
          <button type="button" onClick={() => setOpen(true)}>
            Sign Up
          </button>
        </div>
      )}

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <center>
            <Typography>Instagram</Typography>
            <form className={styles.sign_up_form} noValidate autoComplete="off">
              <Input
                className={styles.sign_up_input}
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsename(e.target.value)}
              />
              <Input
                className={styles.sign_up_input}
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                className={styles.sign_up_input}
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className={styles.error_message}>{error_msg}</p>
              <button
                type="submit"
                onClick={signUp}
                className={styles.sign_up_btn}
              >
                Sign Up
              </button>
            </form>
          </center>
        </div>
      </Modal>
      {/* --------------------------------- */}
      <Modal
        open={openLogIn}
        onClose={() => setOpenLogIn(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <center>
            <Typography>Instagram</Typography>
            <form className={styles.sign_up_form} noValidate autoComplete="off">
              <Input
                className={styles.sign_up_input}
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                className={styles.sign_up_input}
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className={styles.error_message}>{error_msg}</p>
              <button
                type="submit"
                onClick={logIn}
                className={styles.sign_up_btn}
              >
                LogIn
              </button>
            </form>
          </center>
        </div>
      </Modal>
    </div>
  );
}

export default SignUp;
