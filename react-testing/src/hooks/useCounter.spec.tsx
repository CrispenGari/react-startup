import { renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter", () => {
  test("the initial value of count to be 0", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
});
