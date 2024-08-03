import { beforeEach, describe, expect, test } from "vitest";
import { createCounter } from ".";

describe("createCounter", () => {
  describe("各種関数のテスト", () => {
    let counter;
    beforeEach(() => {
      counter = createCounter(1);
    });
    test("counterが object であること", () => {
      expect(counter).toBeDefined();
      expect(counter).toBeInstanceOf(Object);
    });

    test("counter.increment が関数であること", () => {
      expect(counter.increment).toBeDefined();
      expect(counter.increment).toBeInstanceOf(Function);
    });

    test("counter.decrement が関数であること", () => {
      expect(counter.decrement).toBeDefined();
      expect(counter.decrement).toBeInstanceOf(Function);
    });

    test("counter.reset が関数であること", () => {
      expect(counter.decrement).toBeDefined();
      expect(counter.decrement).toBeInstanceOf(Function);
    });

    test("counter.value が関数であること", () => {
      expect(counter.value).toBeDefined();
      expect(counter.value).toBeInstanceOf(Function);
    });
  });

  describe("初期値", () => {
    let counter;
    test("初期値を渡さない場合、初期値に1が設定されること", () => {
      counter = createCounter();
      expect(counter.value()).toEqual(1);
    });

    test("初期値を渡す場合、渡した値が初期値に設定されること", () => {
      counter = createCounter(3);
      expect(counter.value()).toEqual(3);
    });
  });

  describe("value", () => {
    let counter;
    beforeEach(() => {
      counter = createCounter(1);
    });
    test("現在の値を取得できること", () => {
      expect(counter.value()).toEqual(1);
    });
  });

  describe("increment", () => {
    let counter;
    beforeEach(() => {
      counter = createCounter(1);
    });

    test("カウントが増えること", () => {
      expect(counter.value()).toEqual(1);
      counter.increment();
      expect(counter.value()).toEqual(2);
    });

    test("値を指定したとき指定した分だけカウントが増えること", () => {
      expect(counter.value()).toEqual(1);
      counter.increment(3);
      expect(counter.value()).toEqual(4);
    });
  });

  describe("decrement", () => {
    let counter;
    beforeEach(() => {
      counter = createCounter(10);
    });

    test("カウントが減ること", () => {
      expect(counter.value()).toEqual(10);
      counter.decrement();
      expect(counter.value()).toEqual(9);
    });

    test("値を指定したとき指定した分だけカウントが減ること", () => {
      expect(counter.value()).toEqual(10);
      counter.decrement(3);
      expect(counter.value()).toEqual(7);
    });
  });

  describe("reset", () => {
    let counter;
    beforeEach(() => {
      counter = createCounter(10);
    });

    test("カウントが初期値に戻ること", () => {
      expect(counter.value()).toEqual(10);
      counter.decrement();
      counter.increment();
      counter.decrement();
      counter.decrement();
      counter.decrement();
      counter.reset();
      expect(counter.value()).toEqual(10);
    });
  });
});
