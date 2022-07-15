import { Component } from "react";

interface Props {
  values: {
    username?: string;
    password?: string;
    email?: string;
  };
}
interface State {
  message?: string;
}
export class Card extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.state);
  }

  componentDidUpdate() {
    console.log("component updated");
  }
  componentWillUnmount() {
    console.log("Component will Unmount");
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
