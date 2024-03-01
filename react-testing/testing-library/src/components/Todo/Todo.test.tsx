import { render, screen, waitFor } from "@testing-library/react";
import Todo from "./Todo";
import { server } from "../../mocks";
import { http, HttpResponse } from "msw";

describe("Todo", () => {
  test("renders correctly", () => {
    render(<Todo />);
    const ul = screen.getByRole("list");
    expect(ul).toBeInTheDocument();
  });
  test("renders a list of todos", async () => {
    render(<Todo />);
    const li = await screen.findAllByRole("listitem");
    expect(li).toHaveLength(3);
  });
  test("renders error", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/todos", (resolver) => {
        return HttpResponse.error();
      }),
    );

    render(<Todo />);
    await waitFor(async () =>
      expect(
        await screen.findByText("Failed to fetch todos."),
      ).toBeInTheDocument(),
    );
  });
});
