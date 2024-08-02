# 変数宣言

## 1. 説明
JavaScriptにおける変数宣言には主に `const` と `let` を使用します。
再代入を必要としない変数に対しては`const`を使い、再代入を必要とする変数に対しては`let`を利用します。


## 2.悪い例

```js
var x = 10;
var y = 20;
var sum = x + y;
x = 15; // 意図しない再代入
var x = 30; // 重複宣言

if (true) {
    var z = 40; 
}
// ブロックスコープ外でもアクセス可能
console.log(z); // 40（予期しない動作）
```

## 3.改善例


```js
const x = 10;
const y = 20;
const sum = x + y;

let mutableValue = 15;
mutableValue = 30; // 必要な場合のみletを使用

if (true) {
    const z = 40; // ブロックスコープ内に制限
}
console.log(z); // エラー: zは定義されていない
```

### 改善後のコードの利点

- const の使用により、意図しない変数の再代入を防ぐ
- 変数のスコープが明確になり、予期しないバグを減らせる
- コードの意図が明確になり、可読性が向上する

## 4.練習問題

see `index.js`