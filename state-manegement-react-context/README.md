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

### A simple `user` and `counter` app.

All the code can be found in the files

### Docs and Refs

- [this blog post](https://dev.to/elisealcala/react-context-with-usereducer-and-typescript-4obm)
