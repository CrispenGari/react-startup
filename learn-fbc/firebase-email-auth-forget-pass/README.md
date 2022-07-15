### Firebase Email Auth + Forget Password.

We are going to create a simple authentication app that:

- create users with email and password
- allow restore of email and password
- login with email and password
- store the users in the database with their userId.

This application is a very basic application.

### Create firebase instance in the firebase folder.

### `firebase/index.ts`

```ts
import firebase from "firebase";
const firebaseConfig = {
 ....
};
const app =
  firebase.apps.length > 0
    ? firebase.app()
    : firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { auth, db, timestamp };
```

### Register.tsx

- Registering the user + creating users table

```jsx
import React, { useState } from "react";
import { auth, db, timestamp } from "../firebase";
const CreateAccount: React.FC<any> = ({ setCard }) => {
  const [email, setEmail] = useState < string > "";
  const [error, setError] = useState < string > "";
  const [password, setPassword] = useState("");
  const register = (e: any) => {
    e.preventDefault();
    if (!email && !password) {
      return setError("Email and password required");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        db.collection("users").doc(authUser.user?.uid).set({
          email: authUser.user?.email,
          accountCreationDate: timestamp,
        });
        setEmail("");
        setPassword("");
      })
      .catch((error) => setError(error.message));
  };
  return (
    <form onSubmit={register}>
      <h1>Create an Account</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <p className="error">{error}</p>
      <button type="submit">Create Account</button>
      <button onClick={() => setCard("login")}>Login</button>
    </form>
  );
};

export default CreateAccount;
```

### Login.tsx

- Login to the app

```jsx
import { useState } from "react";
import { auth } from "../firebase";

const Login: React.FC<any> = ({ setCard }) => {
  const [email, setEmail] = useState < string > "";
  const [error, setError] = useState < string > "";
  const [password, setPassword] = useState("");

  const login = (e: any) => {
    e.preventDefault();
    if (!email && !password) {
      return setError("Email and password required");
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setError("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => setError(error.message));
  };
  return (
    <form onSubmit={login}>
      <h1>Login</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <p className="error">{error}</p>
      <button type="submit">Login</button>
      <button onClick={() => setCard("register")}>Register</button>
      <p className="forgot__pass" onClick={() => setCard("reset")}>
        Forgot password?
      </p>
    </form>
  );
};

export default Login;
```

### Reset.tsx

- This is where the user provides their email for password reset.

```jsx
import { useState } from "react";
import { auth } from "../firebase";

const Reset: React.FC<any> = ({ setCard }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState < string > "";
  const reset = (e: any) => {
    e.preventDefault();
    if (!email) {
      return setError("Email and password required");
    }
    auth
      .sendPasswordResetEmail(email)
      .then(() => setError("Check your email to reset the password."))
      .catch((error) => setError(error.message));
  };
  return (
    <form onSubmit={reset}>
      <h1>Reset Password</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
      />
      <p className="error">{error}</p>
      <button type="submit">Reset</button>
      <button onClick={() => setCard("login")}>Back to Login</button>
    </form>
  );
};
export default Reset;
```

### App.tsx

- Where we change cards based on conditions

```jsx
import React, { useEffect, useState } from "react";

import "./App.css";
import firebase from "firebase";
import { auth, db } from "./firebase";
import Login from "./components/Login";
import CreateAccount from "./components/Register";
import Reset from "./components/Reset";
const App: React.FC = () => {
  const [card, setCard] = useState("login");
  const [user, setUser] = useState < any > null;

  const [dbUser, setDbUser] = useState < any > null;

  useEffect(() => {
    db.collection("users")
      .doc(user?.uid)
      .get()
      .then((doc) => setDbUser(doc.data()));
  }, [user]);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="app">
      {user ? (
        <div className="app__main">
          <pre>{JSON.stringify(dbUser, null, 2)}</pre>
          <button
            onClick={() => {
              auth.signOut();
              setCard("login");
            }}
          >
            Logout
          </button>
        </div>
      ) : card === "login" ? (
        <Login setCard={setCard} />
      ) : card === "register" ? (
        <CreateAccount setCard={setCard} />
      ) : (
        <Reset setCard={setCard} />
      )}
    </div>
  );
};

export default App;
```

### App.css

- global styles

```css
.app {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  display: grid;
  place-items: center;
  background-color: #fafafa;
}
form,
.app__main {
  width: 100%;
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px lightgray;
  max-width: 500px;
  margin: 10px auto;
}

form input {
  padding: 5px 10px;
  border: none;
  outline: none;
  background-color: #f5f5f5;
  border-radius: 5px;
  width: 90%;
  margin: 10px auto;
  font-size: 18px;
}
form h1 {
  text-align: center;
  border-bottom: 1px solid lightblue;
  padding: 10px;
  text-transform: uppercase;
  width: 100%;
  font-weight: 500;
  font-size: 1rem;
  user-select: none;
}

.error {
  color: red;
  font-size: 0.8rem;
  text-align: center;
  padding: 5px;
}

button {
  padding: 10px;
  cursor: pointer;
  outline: none;
  width: 80%;
  margin: 10px auto;
  border-radius: 5px;
  border: none;
  background-color: black;
  color: white;
}
button:hover {
  background-image: linear-gradient(to right, black, white);
}

.forgot__pass {
  color: blue;
  font-size: 0.9rem;
  width: 100%;
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
  user-select: none;
}
```
