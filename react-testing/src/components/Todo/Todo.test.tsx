import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo", () => {
  test("renders correctly", () => {
    render(<Todo />);

    const ul = screen.getByRole("list");
    expect(ul).toBeInTheDocument();
  });
});
