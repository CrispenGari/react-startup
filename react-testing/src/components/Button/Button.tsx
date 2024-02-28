import React from "react";
interface Props {
  title: string;
  color: "primary" | "secondary" | "default";
}
const Button: React.FC<Props> = ({ title, color }) => {
  return <button className={`button ${color}`}>{title}</button>;
};

export default Button;
