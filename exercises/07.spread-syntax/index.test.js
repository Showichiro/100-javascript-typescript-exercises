import { describe, expect, test } from "vitest";
import { mergeObject, omitFirst, omitLast } from ".";

describe("omitFirst", () => {
  test.each([
    { data: [1, 2, 3], expected: [2, 3] },
    {
      data: ["a", "b", "c"],
      expected: ["b", "c"],
    },
    { data: [], expected: [] },
  ])("最初の要素を取り除いた配列が返却されること", ({ data, expected }) => {
    const save = [...data];
    expect(omitFirst(data)).toEqual(expected);
    expect(data).toEqual(save);
  });
});

describe("omitLast", () => {
  test.each([
    { data: [1, 2, 3], expected: [1, 2] },
    {
      data: ["a", "b", "c"],
      expected: ["a", "b"],
    },
    {
      data: [],
      expected: [],
    },
  ])("最後の要素を取り除いた配列が返却されること", ({ data, expected }) => {
    const save = [...data];
    expect(omitLast(data)).toEqual(expected);
    expect(data).toEqual(save);
  });
});

describe("mergeObject", () => {
  test.each([
    {
      data: [{ a: "1", 2: "b" }, { c: "a" }],
      expected: {
        a: "1",
        2: "b",
        c: "a",
      },
    },
  ])("オブジェクトがマージされること", ({ data, expected }) => {
    const save = [...data];
    expect(mergeObject(data[0], data[1])).toEqual(expected);
    expect(data).toEqual(save);
  });
});
