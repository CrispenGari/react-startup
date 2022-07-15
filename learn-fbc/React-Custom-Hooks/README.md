# Custom Hooks REACT.JS

This is a walk through on how to create our custom hooks in react.js.

<div align="center">
<img alt="logo" src="https://miro.medium.com/max/3158/1*htAZPYyhEjkTJ1pmag13IQ.png"/>
</div>

## Introduction

- Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
- Building your own Hooks lets you extract component logic into reusable functions.
- In this one we will learn to create some custom hooks based on:
  - fetching data from an api
  - fetching input from a form

### File Structures

- In this one we will have two folders which are:
  - `hooks` - this folder will contain our hooks
  - `axios` - contain axios instance for for fetching data from [Json PLaceholder](https://jsonplaceholder.typicode.com/) api.

### Logic

- Like other hooks they start with the word `use` for example `useEffect()`, `useRef`, `useState`, `useCallBack` etc.
- Which means our custom hooks will start with the `use` word and will be stored in the `**hooks**` folder.
- On this one we are not going to display anything on the webpage, all the output will be displayed on the `console`.

## Example 1:

Suppose we are fetching data from an api using axios let's go ahead and implement the instance in the `axios` folder

#### `axios/index.js`

```
import axios from 'axios'

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/todos"
})

export default instance
```

> We are just creating an axios instance for fetching all the todos when it is called. Now let's go and fetch these todos in the App.js file and we also want to fetch a single `todo` based on the id passed by the user. We normally do it as follows:

#### `App.js`

```
import { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios";
const App = () => {
  // -------------------------------
  const [id, setId] = useState("");
  const [todos, setTodos] = useState([]);
  const fetData = async () => {
    const { data } = await axios.get(id ? `${id}` : "");
    setTodos(data);
  };
  const fetchTodo = (e) => {
    e.preventDefault();
    fetData();
  };
  useEffect(() => {
    fetData();
  }, []);
 // -------------------------------
  console.log(todos);
  return (
    <form className="app" onSubmit={fetchTodo}>
      <input
        type="text"
        placeholder="search todo by id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button type="submit">Fetch</button>
    </form>
  );
};
export default App;
```

#### What is happening in the App.js ?

- We are fetching todos when the component loads
- We are fetching a specific todo again when the the id is specified and when the button `Fetch` is clicked.
- We are displaying todo(s) in the console.
- but if you look from the region that is between `//----------` this code is just populating our component why dont we just create a function that just do that.
- This is where custom hooks will come into play
- We are going to create a custom hook called `useJsonData()` inside the `hooks` folder.
- we are going to move all the code between the region `//----------`

#### `hooks/useJsonData.jsx`

```
import { useState, useEffect } from "react";
import axios from "../axios";

const useJsonData = (id) => {
  const [todos, setTodos] = useState([]);
  const fetData = async () => {
    const { data } = await axios.get(id ? `${id}` : "");
    setTodos(data);
  };

  useEffect(() => {
    fetData();
  }, []);

  return {
    todos,
    fetData,
  };
};

export default useJsonData;

```

- In this file we are just making the logic of fetching data from an api from our local axios as before.
- This is just a regular JavaScript function that is returning a function called `fetData()` and the list of `todos` which are two things required in the `App.js` component
- Now if we go to the `App.js` file the code will look as follows.

#### `App.js`

```
import { useJsonData } from "./hooks";
import { useState } from "react";

const App = () => {
  const [id, setId] = useState("");
  const { todos, fetData } = useJsonData(id);
  const fetchTodo = (e) => {
    e.preventDefault();
    fetData();
  };
  console.log(todos);
  return (
    <form className="app" onSubmit={fetchTodo}>
      <input
        type="text"
        placeholder="search todo by id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button type="submit">Fetch</button>
    </form>
  );
};
export default App;

```

- As usual we have the state of getting the `id` from the input
- Now we have imported `useJsonData` from `hooks/index.js` file
- I created the `hooks/index.js` file for me to export all the custom hooks that I'm going to create so that when they are imported they will be imported once.

#### `hooks/index.js`

```
...
export { default as useJsonData } from "./useJsonData";
...
```

- `useJsonData()` hook accepts an id which helps us to get a specific `todo`
- `useJsonData()` is returning `todos` which will be displayed in the console, also it is returning a function
- the `fetData()` function is required in the `App.js` so that when the button `Fetch` is clicked then it will run that function.

## Example 2:

Let's say now we want to create a custom hook for fetching user input.

### useInput() hook

- suppose we have a form that fetches user data which is:
  - username
  - surname
- when the button submit is clicked we want to display the username and surname on the console.
- In a regular component `App.js` we normally do it as follows:

#### `App.js`

```
import { useState } from "react";
const App = () => {
  const [username, setUserName] = useState("");
  const [surname, setSurname] = useState("");
  const sendUserData = (e) => {
    e.preventDefault();
    console.log({
      username,
      surname,
    });
  };
  return (
    <form className="app" onSubmit={sendUserData}>
      <p>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </p>
      <p>
        <button type="submit">submit</button>
      </p>
    </form>
  );
};
export default App;

```

- We can create our custom hook `useInput()` this hook will dynamically get the `username`, `surname` as well as clearing the input fields when the submit button is clicked.

#### `hooks/useInput.jsx`

- `useInput()` hook must have initialValue that will be passed into it
- we have a local state `const [value, setValue] = useState(initialValue);`
  - the reason i used `[value, setValue]` is because the input of the form has a property `value` which we will bind in the `App.js`

```
import { useState } from "react";
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const reset = () => {
    setValue(initialValue);
  };
  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  return [value, bind, reset];
};

export default useInput;
```

> Now our `index.js` in the `hooks` folder will look as follows

#### `hooks/index.js`

```
export { default as useJsonData } from "./useJsonData";
export { default as useInput } from "./useInput";
```

#### Usage of the `useInput()` hook in the `App.js` file

```
import { useInput, useJsonData } from "./hooks";

const App = () => {
  const [username, bindUsername, resetUsername] = useInput("");
  const [surname, bindSurname, resetSurname] = useInput("");

  const sendUserData = (e) => {
    e.preventDefault();
    console.log({ username, surname });
    resetUsername();
    resetSurname();
  };
  return (
    <form className="app" onSubmit={sendUserData}>
      <p>
        <input type="text" placeholder="username" {...bindUsername} />
      </p>
      <p>
        <input type="text" placeholder="surname" {...bindSurname} />
      </p>
      <p>
        <button type="submit">submit</button>
      </p>
    </form>
  );
};
export default App;
```

- Remember our `useInput()` hook has the ability of:
  - returning `[value, bind, reset];`
  - bind will bind the form input using the spread operator `{...bindSurname}`
- When the submit button is clicked then the form will reset
- `const [username, bindUsername, resetUsername] = useInput("")`; means:
  _ we are taking the username
  _ binding the username `value` and `onChange` we also need the `reset` handler from our custom hook.
  > Array Distructuring of `[username, bindUsername, resetUsername]` must correspond to `[value, bind, reset]`

That's all...

### Where to find the Json Dummy Data?

- [Json PLaceholder](https://jsonplaceholder.typicode.com/)

### Credits

- [React Docs](https://reactjs.org/docs/hooks-custom.html)
