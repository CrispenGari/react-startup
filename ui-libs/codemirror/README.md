### Code Mirror

In this repository we are going to have a loop at the ui library for React called `CodeMirror`. We are going to create a basic component for rendering code on the dom. First we need to install this library by running the following command:

```shell
yarn add codemirror @codemirror/view @uiw/react-codemirror

#  you can install other packages differently for example
yarn add @codemirror/lang-javascript
```

### Usage

```ts
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const App: React.FC = () => {
  const [code, setCode] = React.useState("");
  console.log(code);
  return (
    <CodeMirror
      editable={true}
      value={code}
      height="200px"
      extensions={[javascript({ jsx: true })]}
      onChange={(e) => setCode(e)}
    />
  );
};

export default App;
```

You can read more about it in the docs.

### Refs.

1. [react-codemirror](https://uiwjs.github.io/react-codemirror/)
