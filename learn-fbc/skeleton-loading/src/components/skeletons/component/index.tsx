import React from "react";
import "./Skeleton.css";
const Skeleton: React.FC<{ type: string }> = ({ type }) => {
  const className: string = `skeleton ${type}`;
  return <div className={className}></div>;
};

export default Skeleton;
