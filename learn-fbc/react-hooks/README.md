### React Hooks

### 1. `useState()`

The `useState` Hook allows us to create local state in the component life cycle. This allows us to create variables in a functional react component. The `useState` hook takes something called an initial state. In our counter example the initial state is `0`. Basic usage

```jsx
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((previousState) => previousState + 1);
  };
  return (
    <div className="app">
      <h1>{counter}</h1>
      <button onClick={increment}>Counter</button>
    </div>
  );
}

export default App;
```

> If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render [React Docs](https://reactjs.org/docs/hooks-reference.html#usestate)

```js
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```

### 2. `useEffect()`

The `useEffect` runs a piece of code when the component mounted or renders as well as when any of it's dependency changes in an array. Example:

```jsx
import { useEffect } from "react";
function App() {
  useEffect(() => console.log("Component renders"), []);
  return <div className="app"></div>;
}
export default App;
```

- The use effect will run the function `console.log()` when the components renders for the first time.
- If the useEffect is depending on the change of a certain variable, we have to pass that variable to the array dependency denoted by `[]`, for example:

```jsx
import { useState, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((previousState) => previousState + 1);
  };

  useEffect(() => {
    if (counter % 5 === 0) {
      console.log("Component renders");
    }
  }, [counter]);
  return (
    <div className="app">
      <h1>{counter}</h1>
      <button onClick={increment}>Counter</button>
    </div>
  );
export default App;
```

The code within the useEffect hook is depending on `counter` if counter is divisible by 5 we want to fire the function. Once we used counter inside the useEffect hook then, counter should be passed as our dependent variable in an array that's why we passed `[counter]` in the dependency array. **Note that we can have more than 1 dependency variable**.

**Cleaning up an effect**.

> Often, effects create resources that need to be cleaned up before the component leaves the screen, such as a subscription or timer ID. To do this, the function passed to useEffect may return a clean-up function. [React Docs](https://reactjs.org/docs/hooks-reference.html#useeffect)

A good example of this is when you create timing effect e.g. timeIntervals and timeOuts. Let's have a look on an example where we used a clean up function:

```jsx
import { useState, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="app">
      <h1>{counter}</h1>
    </div>
  );
}
export default App;
```

This piece of code:

```js
return () => {
  clearInterval(intervalId);
};
```

is called a cleanup function which `cleans` the effect after it renders. **I know this is a good explanation but if you read the docs you will understand better. _I just know how to use cleanups and when to use them i don't have a good explanation on these_**

### 3. `useRef()`

> useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. [React Docs](https://reactjs.org/docs/hooks-reference.html#useref)

**The way i understood `useRef()` hook is this way "It is like you are using vanila javascript selectors on html elements using these methods `document.getElementById()`, `document.querySelector()` e.t.c to reference the html element."**. This is the basic usage of the `useRef` hook creating an input that show and hide password characters when the button is clicked.

```jsx
import { useRef } from "react";
function App() {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.setAttribute(
      "type",
      inputRef.current.getAttribute("type") === "text" ? "password" : "text"
    );
  };
  return (
    <div className="app">
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>hide</button>
    </div>
  );
}
export default App;
```

### 4. `useLayout()`

> The signature is identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.

**Prefer the standard useEffect when possible to avoid blocking visual updates.** The basic usage.

```jsx
useEffect(() => {
  console.log(document.getElementById("input").getClientRects());
}, []);

useLayoutEffect(() => {
  console.log(document.getElementById("input").getClientRects());
}, []);
```

Just like useEffect these they do the same thing. **Always use `useEffect()` unless you have to you can use the `useLayoutEffect()`.** They both take dependencies array.

### 5. `useMemo()`

Pass a “create” function and an array of dependencies. `useMemo` will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

**There are two problems that useMemo seeks to address:**

1. referential equality
2. computationally expensive operations

Basic usage.

```jsx
const List = React.useMemo(
  () =>
    listOfItems.map((item) => ({
      ...item,
      itemProp1: expensiveFunction(props.first),
      itemProp2: anotherPriceyFunction(props.second),
    })),
  [listOfItems]
);
```

### 6. `useCallback()`

Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).

- [Ref](https://dmitripavlutin.com/dont-overuse-react-usecallback/)

### 7. `useReducer()`

An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.) This is the basic usage of the `useReducerHook()`

```jsx
import { useReducer } from "react";

const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case "increment":
      return { count: state.count + value };
    case "decrement":
      return { count: state.count - value };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({
      type: "increment",
      value: 5,
    });
  };

  const decrement = () => {
    dispatch({
      type: "decrement",
      value: 3,
    });
  };
  return (
    <div className="app">
      <h1>{state.count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
export default App;
```

### 8. `useContext()`

Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest `<MyContext.Provider>` above the calling component in the tree.

Basic usage.

```jsx
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

**Ref**:

- [React Docs](https://reactjs.org/docs/hooks-reference.html)
