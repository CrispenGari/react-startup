import React from "react";

interface Props {
  children: React.ReactElement;
  theme?: "dark" | "light";
}
const ThemeProvider: React.FC<Props> = ({ children, theme = "light" }) => {
  return (
    <div
      style={
        theme === "dark"
          ? {
              backgroundColor: "black",
              color: "white",
            }
          : { backgroundColor: "white", color: "black" }
      }
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
