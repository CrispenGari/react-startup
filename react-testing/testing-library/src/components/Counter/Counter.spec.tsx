import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const h1 = screen.getByRole("heading", { level: 1 });
    const btn = screen.getByRole("button", { name: "Increment" });
    expect(h1).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  test("initial state is 0", () => {
    render(<Counter />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent("0");
  });
  test("increment button change state t0 1", () => {
    render(<Counter />);
    const h1 = screen.getByRole("heading", { level: 1 });
    const btn = screen.getByRole("button", { name: "Increment" });
    user.click(btn, {});
    expect(h1).toHaveTextContent("1");
  });

  test("renders input correctly and the Set Button", () => {
    render(<Counter />);
    const input = screen.getByRole("textbox");
    const btn = screen.getByRole("button", { name: "Set" });
    expect(input).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  test("changes the count to 10 after the Set button is clicked", () => {
    render(<Counter />);
    const input = screen.getByRole("textbox");
    const btn = screen.getByRole("button", { name: "Set" });
    const h1 = screen.getByRole("heading", { level: 1 });
    user.type(input, "10");
    user.click(btn, {});
    expect(h1).toHaveTextContent("10");
  });
});
