import { afterEach, describe, expect, test, vi } from "vitest";
import { applyThreeTimes, hello, logError } from ".";

afterEach(() => {
  vi.clearAllMocks();
});

describe("logError", () => {
  const mock = vi.spyOn(console, "error");
  test("コンソールにエラー出力されること", () => {
    logError("abc");
    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith("abc");
  });
});

describe("hello", () => {
  test("挨拶文が返却されること", () => {
    const actual = hello("John Doe");
    expect(actual).toEqual("こんにちは、John Doeさん");
  });
});

describe("applyThreeTimes", () => {
  const func = vi.fn();
  test("カウンターが3回実行されること", () => {
    applyThreeTimes(func);
    expect(func).toBeCalledTimes(3);
  });
});
