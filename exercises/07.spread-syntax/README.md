# スプレッド構文（Spread Syntax）

## 1. 説明
スプレッド構文（Spread Syntax）は、配列やオブジェクトの展開を可能にする構文です。これにより、配列やオブジェクトの各要素またはプロパティを個別の要素またはプロパティとして扱うことができます。スプレッド構文は、配列の結合やオブジェクトのマージなど、様々な場面で利用されます。

## 2.配列のスプレッド構文

配列のスプレッド構文は、配列の各要素を個別の要素として扱うために使用されます。主に配列の結合やスプリッティングに利用されます。

### 配列の結合
二つの配列を結合する場合、スプレッド構文を使用して簡単に行うことができます。

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]
```

### 配列のスプリッティング

配列の最初の要素を取り出し、それ以外の要素を新しい配列として返す場合にもスプレッド構文を使用できます。

```js
const originalArray = [1, 2, 3, 4, 5];
const [firstElement, ...restOfArray] = originalArray;
console.log(firstElement); // 1
console.log(restOfArray); // [2, 3, 4, 5]
```

## 3.オブジェクトのスプレッド構文

オブジェクトのスプレッド構文は、オブジェクトの各プロパティを個別のプロパティとして扱うために使用されます。主にオブジェクトのマージや拡張に利用されます。

### オブジェクトのマージ

二つのオブジェクトをマージする場合、スプレッド構文を使用して簡単に行うことができます。

```js
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject); // { a: 1, b: 2, c: 3, d: 4 }
```

### オブジェクトの拡張

既存のオブジェクトに新しいプロパティを追加する場合にもスプレッド構文を使用できます。

```js
const originalObject = { a: 1, b: 2 };
const extendedObject = { ...originalObject, c: 3 };
console.log(extendedObject); // { a: 1, b: 2, c: 3 }
```

## 4.練習問題
スプレッド構文に関する練習問題は、`index.js`ファイルをご覧ください。実装が完了したら、以下のコマンドを実行してテストが全て通ることを確認してください。

```sh
npm test 07.spread-syntax
```

