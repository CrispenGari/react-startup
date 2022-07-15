import React from "react";
import "./App.css";
import Card from "./Card";

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
    console.log(this.state);
  };
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

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

        {this.state ? <Card values={this.state} /> : null}
      </div>
    );
  }
}
