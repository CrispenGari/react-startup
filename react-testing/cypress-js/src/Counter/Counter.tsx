import React from "react";

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = React.useState(value);
  const [amount, setAmount] = React.useState(0);
  return (
    <div className="counter">
      <h1>{count}</h1>
      <input
        type="text"
        data-cy="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button
        data-cy="increment"
        onClick={() => setCount((state) => state + amount)}
      >
        Increment
      </button>
      <button
        data-cy="decrement"
        onClick={() => setCount((state) => state - amount)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
