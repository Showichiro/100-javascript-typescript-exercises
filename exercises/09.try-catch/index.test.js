import { describe, expect, test } from "vitest";
import { validateUserResult, wrapFn } from ".";

describe("wrapFn", () => {
  test("エラーをThrowしないこと", () => {
    expect(() => wrapFn()).not.toThrowError();
  });
});

describe("validateUserResult", () => {
  test("適切なUserを設定した場合、戻りのオブジェクトの形が正しいこと", () => {
    const user = { name: "John Doe", age: 25 };
    expect(validateUserResult(user)).toEqual({ valid: true });
  });

  test.each([
    {
      age: 0,
      expected: "Invalid age value. Age must be greater than zero.",
    },
    {
      age: -1,
      expected: "Invalid age value. Age must be greater than zero.",
    },
    {
      age: "abc",
      expected: "Invalid data type for age. Age must be a number.",
    },
  ])(
    "age = $age のとき、$expected というメッセージが返却されること",
    ({ age, expected }) => {
      expect(validateUserResult({ name: "John Doe", age })).toEqual({
        valid: false,
        type: "age",
        message: expected,
      });
    },
  );

  test.each([
    {
      name: 1,
      expected: "Invalid data type for name. Name must be a string.",
    },
    {
      name: "",
      expected: "Invalid name value. Name cannot be an empty string.",
    },
  ])(
    "name = $name のとき、$expected というメッセージが返却されること",
    ({ name, expected }) => {
      expect(validateUserResult({ name, age: 10 })).toEqual({
        type: "name",
        valid: false,
        message: expected,
      });
    },
  );
});
