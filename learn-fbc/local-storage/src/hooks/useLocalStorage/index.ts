import React from "react";

const PREFIX_KEY: string = "user:";
const useLocalStorage = (key: string, initialValue: any) => {
  const prefix: string = PREFIX_KEY + key;
  const [value, setValue] = React.useState(() => {
    // try to get if we have the value already stored in the key
    const jsonValue = localStorage.getItem(prefix);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });
  React.useEffect(() => {
    localStorage.setItem(prefix, JSON.stringify(value, null, 2));
  }, [prefix, value]);

  return [value, setValue];
};

export default useLocalStorage;
