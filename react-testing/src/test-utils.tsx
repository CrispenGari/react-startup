import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import ThemeProvider from "./ThemeProvider/ThemeProvider";

const AllTheProviders = ({ children }: { children: React.ReactElement }) => {
  return <ThemeProvider theme="dark">{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
