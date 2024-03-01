import { renderHook } from "@testing-library/react";
import useCounter from "./useCounter";
import { act } from "react-dom/test-utils";

describe("useCounter", () => {
  test("the initial value of count to be 1", () => {
    const { result } = renderHook(useCounter, { initialProps: {} });
    expect(result.current.count).toBe(1);
  });

  test("set the initial count to 10", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { value: 10 },
    });
    expect(result.current.count).toBe(10);
  });

  test("should increment the count", () => {
    const { result } = renderHook(useCounter, { initialProps: {} });
    act(() => result.current.increment());
    expect(result.current.count).toBe(2);
  });

  test("should decrement the count", () => {
    const { result } = renderHook(useCounter, { initialProps: {} });
    act(() => result.current.decrement());
    expect(result.current.count).toBe(0);
  });
});
