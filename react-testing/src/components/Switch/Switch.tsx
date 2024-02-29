import React from "react";
interface Props {
  on?: () => void;
  off?: () => void;
  state: "on" | "off";
}
const Switch: React.FC<Props> = ({ on, off, state }) => {
  return (
    <div className="Switch">
      <h1>{state}</h1>
      {on && <button onClick={on}>ON</button>}
      {off && <button onClick={off}>OFF</button>}
    </div>
  );
};

export default Switch;
