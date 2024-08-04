// 問題1:ペットショップクラスの作成
// `constructor` メソッドを使用して、ペットショップの初期状態を設定します。
// `addPet`メソッドを実装して、新しいペットを登録します。登録されたペットはオブジェクトとして保存し、ペットの種類(type)、名前(name)、年齢(age)を管理します。
// `removePet`メソッドを実装して、登録されているペットを削除します。ペットの名前を引数に取り、該当するペットを削除します
// TODO:
export class PetShop {
  constructor(pets) {
    this.pets = pets ?? {};
  }

  addPet(pet) {
    this.pets[pet.name] = pet;
  }

  removePet(name) {
    const removed = {};
    for (const n in this.pets) {
      if (n !== name) {
        removed[n] = this.pets[n];
      }
    }
    this.pets = removed;
  }
}
