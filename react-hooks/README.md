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

### 2. `useEffect()`

The `useEffect` Hook allows us to create local state in the component life cycle. Basic usage

```jsx

```

### 3. `useRef()`

The `useState` Hook allows us to create local state in the component life cycle. Basic usage

```jsx

```

### 4. `useLayout()`

The `useState` Hook allows us to create local state in the component life cycle. Basic usage

```jsx

```

### 5. `useMemo()`

The `useState` Hook allows us to create local state in the component life cycle. Basic usage

```jsx

```

### 6. `useCallback()`

The `useState` Hook allows us to create local state in the component life cycle. Basic usage

```jsx

```

### 7. `useReducer()`

The `useState` Hook allows us to create local state in the component life cycle. Basic usage

```jsx

```
