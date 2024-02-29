import { render, screen } from "../test-utils";

describe("ThemeProvider", () => {
  test("renders text correctly", () => {
    render(<h1>Hello Dark</h1>);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveStyle({ color: "black;" });
  });
});
