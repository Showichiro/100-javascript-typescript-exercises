# 関数

## 1.説明
JavaScriptでは、特定のタスクを実行するためのコードブロックを「関数」と呼びます。関数はコードの再利用性を高め、コードの可読性を向上させます。また、関数は引数を受け取り、それらを操作した結果を返すことができます。

関数は以下のように定義します：

```js
function functionName(parameters) {
    // 処理を行うコード
    return result;
}
```

ここで、  `functionName` は関数名、 `parameters` は関数に渡される値（引数）、`result` は関数から返される値です。

## 2.関数の種類
JavaScriptには様々な関数の種類がありますが、主に以下の二つがあります：

### 1.値を返さない関数

これらの関数は通常、副作用（状態の変更など）を引き起こすために使用されます。

```js
// 標準出力にメッセージを出力する関数
function logMessage(message) {
    console.log(message);
}
```

### 2.値を返す関数

これらの関数は計算結果や処理結果を返すために使用されます。

```js
// aとbを加算した結果を返却する関数
function add(a, b) {
    return a + b;
}
```

### 3.高階関数

高階関数とは、他の関数を引数として受け取る関数または、関数を返す関数のことを指します。これにより、より柔軟なコードの構造を作り出すことができます。

```js
// 第一引数の関数を2回実行する関数
function applyTwice(func, value) {
    return func(func(value), value);
}

// 使用例
// 値を2倍にした計算結果を返却する関数
function double(num) {
    return num * 2;
}
// 2回実行する関数に渡すことで (5 * 2) * 2 = 20になる
console.log(applyTwice(double, 5)); // 20
```

### 4. アロー関数

アロー関数は、JavaScriptにおける関数定義の短縮形です。アロー関数は`function`キーワードを使用せずに、よりシンプルに関数を定義することができます。ただし、アロー関数は`this`の取り扱いが通常の関数とは異なります。

アロー関数の基本的な構文は以下の通りです：

```js
const functionName = (parameters) => {
    // 処理を行うコード
    return result;
}
```

簡単な例を見てみましょう。

#### 値を返すアロー関数

aとbを加算した結果を返すアロー関数の例です：

```js
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5
```

#### 値を返さないアロー関数

標準出力にメッセージを出力するアロー関数の例です：

```js
const logMessage = message => {
    console.log(message);
};

logMessage('Hello, Arrow Functions!'); // "Hello, Arrow Functions!"
```

アロー関数は簡潔で読みやすいため、特にコールバック関数を使用する場合によく利用されます。

## 3. 練習問題

関数に関する練習問題は、 `index.js` ファイルをご覧ください。
実装が出来たら以下のコマンドを実行しテストがすべて通ることを確認してください。

```sh
npm test 02.function
```