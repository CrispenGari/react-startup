### Frontend

The frontend is using the following:

1. typescript
2. redux
3. react-icons
4. material-ui
5. apollo

### Setting redux for typescript

Everything remains the same when setting up redux store in react.js except when we want `redux-dev-tools` we have to perform an extra step to set it up because of typescript. You can find explanation [here](https://stackoverflow.com/questions/52800877/error-with-redux-devtools-extension-using-ts-property-redux-devtools-extens/68212175#68212175) if you look for the answer that i posted you will be able to follow up.

### `index.tsx`

```ts
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducers from "./reducers";

import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
```
