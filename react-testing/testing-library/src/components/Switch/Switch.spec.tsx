import { render, screen } from "@testing-library/react";
import Switch from "./Switch";
import user from "@testing-library/user-event";

describe("Switch", () => {
  test("it renders", () => {
    render(<Switch state="on" />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
  });

  test("all functions are being called", () => {
    const onHandler = jest.fn();
    const offHandler = jest.fn();
    render(<Switch state="on" on={onHandler} off={offHandler} />);
    const btn1 = screen.getByRole("button", { name: "ON" });
    const btn2 = screen.getByRole("button", { name: "OFF" });
    user.click(btn1);
    user.click(btn2);
    expect(onHandler).toHaveBeenCalledTimes(1);
    expect(offHandler).toHaveBeenCalledTimes(1);
  });
});
