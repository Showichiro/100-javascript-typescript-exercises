# クロージャ

## 1.説明
クロージャは、関数とその関数が作成された環境の組み合わせです。クロージャを用いることにより、関数が定義されたスコープ外からでも、その関数内へのアクセスを保持することができます。これにより、データのカプセル化やプライベートメンバの模倣が可能になります。

## 2.実装例

内部にカウント変数を持ち、「実行するたびにカウントアップする関数」を返却する関数を定義します。

```js
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

JavaScriptの関数はクロージャとなり、内部に持つ変数が失われないため、 `createCounter()` を実行した後も`count`を参照することができます。

また、関数を生成する関数もまた引数を取ることができるので以下のような関数を実装することができます。

```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5); // 5を加算する関数を返す
const add10 = makeAdder(10); // 10を加算する関数を返す

console.log(add5(2)); // 7 = 5 + 2
console.log(add10(2)); // 12 = 10 + 2
```

## 3.練習問題

関数に関する練習問題は、 `index.js` ファイルをご覧ください。
実装が出来たら以下のコマンドを実行しテストがすべて通ることを確認してください。

```sh
npm test 05.closures
```