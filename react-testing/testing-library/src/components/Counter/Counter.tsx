import React from "react";

interface Props {}
const Counter: React.FC<Props> = () => {
  const [count, setCount] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  return (
    <div className="counter">
      <h1>{count}</h1>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(amount)}>Set</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
