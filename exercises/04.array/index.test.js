import { afterEach, describe, expect, test } from "vitest";
import {
  addNewFruit,
  deleteFruit,
  editFruit,
  fruits,
  getById,
  resetFruit,
} from ".";

afterEach(() => {
  resetFruit();
});

describe("addNewFruit", () => {
  test("フルーツ配列に新しいフルーツが追加されること", () => {
    expect(fruits).toEqual(["apple", "banana"]);
    addNewFruit("melon");
    expect(fruits).toEqual(["apple", "banana", "melon"]);
  });
});

describe("deleteFruit", () => {
  test("存在するインデックスを指定した場合、そのフルーツが削除されること", () => {
    expect(fruits).toEqual(["apple", "banana"]);
    deleteFruit(1);
    expect(fruits).toEqual(["apple"]);
  });

  test("存在しないインデックスを指定した場合、配列は変更されないこと", () => {
    expect(fruits).toEqual(["apple", "banana"]);
    deleteFruit(1000);
    expect(fruits).toEqual(["apple", "banana"]);
  });
});

describe("getById", () => {
  test("存在するインデックスを指定した場合、そのフルーツが取得できること", () => {
    expect(fruits).toEqual(["apple", "banana"]);
    const actual = getById(1);
    expect(actual).toEqual("banana");
    expect(fruits).toEqual(["apple", "banana"]);
  });

  test("存在しないインデックスを指定した場合、nullが返却されること", () => {
    expect(fruits).toEqual(["apple", "banana"]);
    const actual = getById(1000);
    expect(actual).toEqual(null);
    expect(fruits).toEqual(["apple", "banana"]);
  });
});

describe("editFruit", () => {
  test("存在するインデックスを指定した場合、そのフルーツが更新できること", () => {
    expect(fruits).toEqual(["apple", "banana"]);
    editFruit(1, "melon");
    expect(fruits).toEqual(["apple", "melon"]);
  });

  test("存在しないインデックスを指定した場合、nullが返却されること", () => {
    expect(fruits).toEqual(["apple", "banana"]);
    editFruit(1000, "melon");
    expect(fruits).toEqual(["apple", "banana"]);
  });
});
