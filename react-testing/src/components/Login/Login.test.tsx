import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login", () => {
  test("renders", () => {
    render(<Login />);
    // getByTestId
    const btn = screen.getByTestId(/login button/i);
    expect(btn).toBeInTheDocument();
  });
});
