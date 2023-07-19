### Error Boundary React

In this one we are going to learn how we can handle errors on the client using the `ErrorBoundary` Component. First let's create an `ErrorBoundary` component and add the following code in it:

```ts
import React from "react";

interface PropsType {
  children: React.ReactNode;
  fallback: any;
}
interface StateType {
  hasError: boolean;
}
export class ErrorBoundary extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }
  componentDidCatch = (error: Error, errorInfo: React.ErrorInfo): void => {
    console.log(error, errorInfo);
  };

  render() {
    const {
      state: { hasError },
      props: { children, fallback },
    } = this;
    return hasError ? fallback : children;
  }
}
```

Then we need to wrap the component that that we want to use the `ErrorBoundary` with this component. In our case it's good to wrap the app itself as follows:

```tsx
// index.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ErrorBoundary } from "./components/ErrorBoundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h1>Hello there was an error that occured!!</h1>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
reportWebVitals();
```

Now if we add the following code in our `App.tsx` we can be able to handle all errors from the clients that occured within the children components of the `ErrorBound` component itself.

```ts
import React, { Suspense } from "react";
interface Props {}
const App: React.FC<Props> = ({}) => {
  const data: any = undefined;
  console.log(data.id);
  return <h1>Hello</h1>;
};

export default App;
```

### Refs

1. [react.dev](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
