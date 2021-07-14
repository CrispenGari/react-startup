### React State management.

In this README we are going to create a global state manager using react context.

### Starter.

We are going to use the theme example taken from [this](https://www.pluralsight.com/guides/using-react's-context-api-with-typescript) blog post and then expand it more.

- Create a folder called `state.`
- Create a file `index.tsx` and add the following code.

```ts
import { createContext, useContext } from "react";
export enum Theme {
  Dark = "Dark",
  Light = "Light",
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (Theme: Theme) => void;
};

const initialState: ThemeContextType = {
  theme: Theme.Dark,
  setTheme: (theme: Theme): void => {},
};
export const ThemeContext = createContext<ThemeContextType>(initialState);
export const useTheme = () => useContext(ThemeContext);
```

- Now in the `App.tsx` we are going to create a simple app that will toggle the theme.

```jsx
import React, { useState } from "react";
import { Theme, ThemeContext } from "./state";
import "./App.css";
function App() {
  const [theme, setTheme] = useState(Theme.Dark);
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <div className={theme === Theme.Dark ? "app-dark" : "app-light"}>
        <h1>Theme:{theme}</h1>
        <button
          onClick={() => {
            if (theme === Theme.Dark) {
              setTheme(Theme.Light);
            } else {
              setTheme(Theme.Dark);
            }
          }}
        >
          CHANGE THEME
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
```

- The `App.css`

```css
.app-dark {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: black;
  color: white;
}
.app-light {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  color: black;
  background-color: white;
}
```

### A shopping state management.

In this section is based on [this](https://dev.to/elisealcala/react-context-with-usereducer-and-typescript-4obm) blog post.

1. Context.tsx

```jsx
import React, { createContext, useReducer, Dispatch } from "react";
import {
  productReducer,
  shoppingCartReducer,
  ProductActions,
  ShoppingCartActions,
} from "./reducers";

type ProductType = {
  id: number;
  name: string;
  price: number;
};

type InitialStateType = {
  products: ProductType[];
  shoppingCart: number;
};

const initialState = {
  products: [],
  shoppingCart: 0,
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ProductActions | ShoppingCartActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { products, shoppingCart }: InitialStateType,
  action: ProductActions | ShoppingCartActions
) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

```

2. reducers.ts

```jsx
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Create = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
  Add = "ADD_PRODUCT",
}

// Product

type ProductType = {
  id: number;
  name: string;
  price: number;
};

type ProductPayload = {
  [Types.Create]: {
    id: number;
    name: string;
    price: number;
  };
  [Types.Delete]: {
    id: number;
  };
};

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (
  state: ProductType[],
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    case Types.Delete:
      return [...state.filter((product) => product.id !== action.payload.id)];
    default:
      return state;
  }
};

// ShoppingCart

type ShoppingCartPayload = {
  [Types.Add]: undefined;
};

export type ShoppingCartActions =
  ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>];

export const shoppingCartReducer = (
  state: number,
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Add:
      return state + 1;
    default:
      return state;
  }
};

```

3. Products.tsx

```jsx
import React, { useContext } from "react";
import { AppContext } from "./context";
import { Types } from "./reducers";

const Products = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: Types.Add,
          });
        }}
      >
        click
      </button>
      {state.shoppingCart}
    </div>
  );
};

export default Products;
```

4. App.tsx

```jsx
import { AppProvider } from "./context";
import Products from "./Products";

const App = () => (
  <AppProvider>
    <Products />
  </AppProvider>
);

export default App;
```
