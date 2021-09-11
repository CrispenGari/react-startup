### Local Storage

In this one we are going to learn how to create our custom hook that will be able to store the data in the local storage. Our hook will be called `useLocalStorage()`. This hook will take on the key and value and persists the data in local storage in the browser.

### Motivation

This hook will allow us to store the data in the local storage. Storing data in the local state using `useState()` hook or `useReducer()` has some limitation most of the time, if we refresh the browser we lost the state. This is a little hack hook that we will implement from scratch and will be able to persist key and value pairs of data in the local storage.

### Implementation

Our hook will be found in the `hooks/useLocalStorage` folder.

1. First we need to create a prefix for our storage. **This will help us to identify which key belongs to which application.**.

```ts
const PREFIX_KEY: string = "name_of_app:";
```

2. Note that the hook is similar to other custom hooks we have to create it as a normal react commponent as follows:

```ts
const useLocalStorage = (key: string, initialValue: any) => {
  const prefix: string = PREFIX_KEY + key;

  return [];
};
```

The above hook will take in a key and value, and it need to return the current state and the `setState` handler.

3. We are going to set the local state inside our hook as follows:

```ts
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
```

What is happening is that we are using the `localStorage` javascript API to persist our data in the browser's local storage.

4. We need to persist that data into the local storage for that we are going to use the `useEffect()` hook and return the value and setValue as follows:

```ts
React.useEffect(() => {
  localStorage.setItem(prefix, JSON.stringify(value, null, 2));
}, [prefix, value]);

return [value, setValue];
```

The whole hook will be loking as follows:

```ts
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
```

### How to use the `useLocalStorage()` hook?

The hook works exactly like the `useState` hook the only difference is that we are no longer storing data in state variable but in the browser's local storage.

```tsx
...
 const [user, setUser] = useLocalStorage("user", null);

return (
    <div className="app">
      <div style={{ width: "500px", display: "flex" }}>
        <button
          onClick={() =>
            setUser({
              username: "hello",
              age: 34,
            })
          }
        >
          login
        </button>
        <button onClick={() => setUser(null)}>logout</button>
      </div>
      <h1>Local storage</h1>
      <p>
        user:
        <pre>
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre>
      </p>
    </div>
```

You can find example in the code files

### How to check where the data is being stored in the browser?

1. Inspect the page
2. Go to Application Tab
3. Look for local storage and click that
4. You will find key values pairs of the data that you have stored.
