import { afterEach, describe, expect, test } from "vitest";
import { PetShop } from ".";

describe("PetShop", () => {
  let petShop;

  afterEach(() => {
    petShop = null;
  });

  describe("addPet", () => {
    test("ペットを追加できること", () => {
      petShop = new PetShop();
      expect(petShop.pets).toEqual({});
      petShop.addPet({ name: "Tom", type: "cat", age: 1 });
      expect(petShop.pets).toEqual({
        Tom: { name: "Tom", type: "cat", age: 1 },
      });
    });
  });

  describe("removePet", () => {
    test("ペットを削除できること", () => {
      petShop = new PetShop({
        Tom: { name: "Tom", type: "cat", age: 1 },
        Jerry: { name: "Jerry", type: "mouse", age: 1 },
      });
      expect(petShop.pets).toEqual({
        Tom: { name: "Tom", type: "cat", age: 1 },
        Jerry: { name: "Jerry", type: "mouse", age: 1 },
      });
      petShop.removePet("Tom");
      expect(petShop.pets).toEqual({
        Jerry: { name: "Jerry", type: "mouse", age: 1 },
      });
    });
  });
});
