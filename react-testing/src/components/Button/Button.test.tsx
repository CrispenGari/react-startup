import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("Testing Default", () => {
    render(<Button color="default" title="Default" />);
    const element = screen.getByText(/default/i, { trim: true });
    expect(element).toContainElement(element);
  });
  describe("None Default", () => {
    test("Testing Primary", () => {
      render(<Button color="primary" title="Primary" />);
      const element = screen.getByText("Primary", { trim: true });
      expect(element).toContainElement(element);
    });
    test("Testing Secondary", () => {
      render(<Button color="secondary" title="Secondary" />);
      const element = screen.getByText("Secondary", { trim: true });
      expect(element).toContainElement(element);
    });
  });
});
