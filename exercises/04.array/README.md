# 配列

## 1.説明
JavaScriptでは、同一の型の複数の値を順序付けて格納するためのデータ構造を「配列」と呼びます。配列は、インデックスを使用して各要素にアクセスできます。インデックスは0から始まります。

## 2.配列の定義

配列は以下のように定義します：

```js
let arrayName = [element1, element2, element3];
```

## 3.配列の操作

配列は組み込みのメソッドがあり、配列に対して操作をしたり、配列の要素を取り出すことができます。

要素の追加: `push()` メソッドを使用して配列の末尾に要素を追加できます。

```js
arrayName.push(newElement); // 新しい要素を末尾に追加
```

要素の削除:  `pop()` メソッドを使用して配列の最後の要素を削除できます。

```js
arrayName.pop(); // 配列の最後の要素を削除
```

配列の長さ:  `length` プロパティを使用して配列の要素数を取得できます。

```js
let arrayLength = arrayName.length; // 配列の長さを取得
```

要素へのアクセス1: `shift()` 、`pop()` を利用することで配列の先頭や末尾の要素を取り出すことができます。

```js
let firstElement = arrayName.shift(); // 最初の要素を取り出す. arrayNameから該当の要素が削除されることに注意。
let lastElement = arrayName.pop(); // 最後の要素を取り出す.arrayNameから該当の要素が削除されることに注意。
```

要素へのアクセス2: インデックスを使用して配列の任意の位置の要素にアクセスできます。

```js
let firstElement = arrayName[0]; // 最初の要素にアクセス
let lastElement = arrayName[arrayName.length - 1]; // 最後の要素にアクセス
```

ただし、インデックスでのアクセスは相対インデックスでのアクセスができません。
例えば、最後の要素を取り出したいときに以下のようにアクセスすることはできません。

```js
arrayName[-1] // undefined
```

`at()` を利用することで相対インデックスでのアクセスが可能になります。

```js
arrayName.at(0) // element1
arrayName.at(-1) // element3
```

配列の反復処理:  

`for` ループや `forEach` メソッドを使用して配列の各要素に対して操作を行うことができます。

```js
for(let i = 0; i < arrayName.length; i++) {
    console.log(arrayName[i]);
}

// for in
for (const i in arrayName) {
  i // ループのたびに文字列の"0", "1", "2"が取れる
  arrayName[i] // ループのたびに各要素が取れる
}

// for of
for (const e of arrayName) {
  e
}

arrayName.forEach(function(element) {
    console.log(element);
});
```
また、値の変換など特定の用途があれば、`map()`などを利用できます。

```js
let array = [1, 2, 3];
let newArray = array.map(x => x * 2);
console.log(newArray); // [2, 4, 6]
```

## 4.破壊的メソッド

配列の持つメソッドには、利用した配列自身を変更する `破壊的メソッド` と自身の内容を変更しない `非破壊的メソッド` があります。
上記の例では、 `push()` 、 `pop()`  、 `shift()` 、 `pop()` は破壊的メソッドであり、`at()`は非破壊的メソッドです。

## 5.練習問題

関数に関する練習問題は、 `index.js` ファイルをご覧ください。
実装が出来たら以下のコマンドを実行しテストがすべて通ることを確認してください。

```sh
npm test 04.array
```