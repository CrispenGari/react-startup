### CBC - Class Based Components

In this repository we are going to learn how to create class based components in react.js.

### Getting started

This application was created using the following command:

```shell
yarn create react-app app --template typescript
```

> We are using `yarn` as our package manager and `typescript` as a programming language.

### A Class Based Component

In the following code cell we are going to create a class based component called app. A class based component may look as follows:

```tsx
import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render(): React.ReactNode {
    return <h1>Hello CBC</h1>;
  }
}
```

Note that `props` in the constructor are the props that the component receive, we will look at that later on.

### Managing state

Unlike in `FBC` where we manage states using `React-Hooks` in `CBC` we have our own way of managing state. Let's modify our component to have a form and collect the data from the user.

```tsx
import React from "react";
import "./App.css";

interface Props {}
interface State {
  username?: string;
  email?: string;
  password?: string;
}
export default class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    };
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  render(): React.ReactNode {
    const { username, password, email } = this.state;
    return (
      <div className="app">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={username}
            onChange={this.onChange}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={this.onChange}
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            value={password}
            onChange={this.onChange}
          />
          <button type="submit">register</button>
        </form>
      </div>
    );
  }
}
```

We are defining the `State` type of this component to:

```tsx
interface State {
  username?: string;
  email?: string;
  password?: string;
}
```

We are setting fields to be optional because to get rid of the typescript error because the user can omit the password. So in the `onChange` function we are going to set the state based on the fields name as follows:

```tsx
onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  this.setState((state) => ({
    ...state,
    [name]: value,
  }));
};
```

We are setting the state `key` as the attribute name of the input field as they lined up, our username input has a name `username` and in the state it is called, `username`.

You can change the `render` to look more clean as follows:

```tsx
render(): React.ReactNode {
    const {
      state: { username, password, email },
      onChange,
      onSubmit,
    } = this;
    return (
      <div className="app">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={username}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            value={password}
            onChange={onChange}
          />
          <button type="submit">register</button>
        </form>
      </div>
    );
}
```

### Styling `CBC`

To style a class based component is very easy all you have to do is import a `css` file at the top and create html elements with classes so that you can select them in the `css` file. So at the top we need to import a `css` file, for example in our `App` component.

```tsx
import React from "react";
import "./App.css"; // <------- Here
```

### Passing Props to Components

Let's create another class component called `Card`. This component will display the user data from a form.

```tsx
// Card.tsx

import { Component } from "react";

interface Props {
  values: {
    username?: string;
    password?: string;
    email?: string;
  };
}
interface State {}
export class Card extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      props: {
        values: { username, password, email },
      },
    } = this;
    return (
      <div
        className="card"
        style={{
          width: 100,
        }}
      >
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span>username</span> <span>{username}</span>
        </p>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span>email</span> <span>{email}</span>
        </p>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span>password</span> <span>{password}</span>
        </p>
      </div>
    );
  }
}

export default Card;
```

Then in the `App.tsx` we can pass down the props as follows:

```tsx
{
  this.state ? <Card values={this.state} /> : null;
}
```

### Component Life Cycle Methods

Every React component has it's own life cycle on it's own. A life cycle of a component defined the methods that are invoked on the component existence in the DOM. A react component goes through 4 stages in it's life cycle

1. Initialization
2. Mounting
3. Updating
4. Unmounting

### Initialization

This is teh stage where developer defines state and props:

```tsx
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
```

### Component Mounting

We have two life cycle methods, which are:

1. componentWillMount()
2. componentDidMount()

```tsx
  componentDidMount() {
    console.log(this.state);
  }
```

### Updating

These life cycle methods runs when the component data changes, let's say when the props changes from the parent component. Then this lifecycle method will be invoked.

```tsx
 componentDidUpdate() {
    console.log("component updated");
  }
```

### Un Mounting

This life cycle methods run when the component is being unmounted.

```tsx
 componentWillUnMount() {
    console.log("component will mount");
  }

```

> There are a lot of lifecycle methods that we can use. I just showed the basic and most commonly used ones.
