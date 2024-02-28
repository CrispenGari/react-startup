import { render, screen } from "@testing-library/react";
import List from "./List";

describe("List", () => {
  const languages = ["Java", "TypeScript", "Python", "C++"];
  test("renders correctly", () => {
    render(<List items={languages} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
  test("renders languages", () => {
    render(<List items={languages} />);
    const langs = screen.getAllByRole("listitem");
    expect(langs.length).toEqual(langs.length);
  });
  test("renders hidden Hello button", () => {
    render(<List items={languages} />);
    const btn = screen.queryByRole("button", { name: "Hello" });
    expect(btn).not.toBeInTheDocument();
  });
  test("renders Login button", () => {
    render(<List items={languages} />);
    const btn = screen.getByRole("button", { name: "Login" });
    expect(btn).toBeInTheDocument();
  });
  test("renders Hello button will eventually renders", async () => {
    render(<List items={languages} />);
    const btn = await screen.findByRole(
      "button",
      { name: "Login" },
      { timeout: 1001 }
    );
    expect(btn).toBeInTheDocument();
  });
});
