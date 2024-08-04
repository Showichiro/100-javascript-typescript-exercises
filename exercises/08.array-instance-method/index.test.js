import { describe, expect, test } from "vitest";
import { chunk, groupBy, nonNull } from ".";

describe("nonNull", () => {
  test("nullishな値がフィルタリングされること", () => {
    expect(nonNull([1, 2, 3, 4, null, undefined])).toEqual([1, 2, 3, 4]);
  });

  test("nullishな値がフィルタリングされること", () => {
    expect(nonNull(["a", null, "b", undefined])).toEqual(["a", "b"]);
  });
});

describe("groupBy", () => {
  test("指定したキーでグルーピングされること", () => {
    const users = [
      { name: "Taro", age: 10 },
      { name: "Jiro", age: 15 },
      {
        name: "Saburo",
        age: 15,
      },
    ];

    expect(groupBy(users, "age")).toEqual({
      10: [{ name: "Taro", age: 10 }],
      15: [
        { name: "Jiro", age: 15 },
        {
          name: "Saburo",
          age: 15,
        },
      ],
    });
  });
  test("指定したキーでグルーピングされること", () => {
    const users = [
      { id: 1, city: "Tokyo" },
      { id: 2, city: "Osaka" },
      { id: 3, city: "Tokyo" },
    ];

    expect(groupBy(users, "city")).toEqual({
      Tokyo: [
        { id: 1, city: "Tokyo" },
        { id: 3, city: "Tokyo" },
      ],
      Osaka: [{ id: 2, city: "Osaka" }],
    });
  });
});

describe("chunk", () => {
  test("指定したサイズで配列が分割されること", () => {
    const array = [1, 2, 3, 4, 5];
    const size = 2;

    expect(chunk(array, size)).toEqual([[1, 2], [3, 4], [5]]);
  });
  test("指定したサイズで配列が分割されること", () => {
    const array = ["a", "b", "c", "d", "e"];
    const size = 3;

    expect(chunk(array, size)).toEqual([
      ["a", "b", "c"],
      ["d", "e"],
    ]);
  });
});
