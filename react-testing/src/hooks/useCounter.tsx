import React from "react";
const useCounter = ({ value = 1 }: { value?: number }) => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + value);
  const decrement = () => setCount(count - value);
  return {
    count,
    increment,
    decrement,
  };
};
export default useCounter;
