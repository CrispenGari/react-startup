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
