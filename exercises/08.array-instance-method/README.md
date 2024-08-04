# 配列のインスタンスメソッド

## 1. 説明

配列のインスタンスメソッドは、配列に対して直接操作を行うための便利な機能を提供します。これらは、配列の各要素に対して特定の処理を行い、新しい配列を生成したり、配列の要素を繰り返し処理したり、条件に基づいて要素をフィルタリングしたり、配列のデータを集約（reduce）したりするために使用されます。

### map

`map`メソッドは、配列の各要素に対して関数を適用し、その結果からなる新しい配列を生成します。元の配列は変更されません。

#### 使用例

```javascript
const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16]
```

### reduce

`reduce`メソッドは、配列の要素を一つの値に縮約（reduce）します。累積者と現在の値に対して関数を適用し、その結果から新しい配列を返します。

#### 使用例

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 10
```

### filter

`filter`メソッドは、テスト関数を適用し、テスト関数を満たす要素のみを含む新しい配列を返します。元の配列は変更されません。

#### 使用例

```javascript
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

### some

`some`メソッドは、配列の少なくとも1つの要素がテスト関数を満たす場合に`true`を返します。すべての要素がテスト関数を満たさない場合は`false`を返します。

#### 使用例

```javascript
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber); // true
```

### find

`find`メソッドは、配列の中からテスト関数を満たす最初の要素を返します。満たす要素がない場合は`undefined`を返します。

#### 使用例

```javascript
const numbers = [1, 2, 3, 4, 5];
const foundEvenNumber = numbers.find(num => num % 2 === 0);
console.log(foundEvenNumber); // 2
```

### findLast

`findLast`メソッドは、配列の中からテスト関数を満たす最後の要素を返します。満たす要素がない場合は`undefined`を返します。

#### 使用例

```javascript
const numbers = [1, 2, 3, 4, 5];
const foundLastEvenNumber = numbers.findLast(num => num % 2 === 0);
console.log(foundLastEvenNumber); // 4
```

## 2.練習問題

配列のインスタンスメソッドに関する練習問題は、`index.js`ファイルをご覧ください。実装が完了したら、以下のコマンドを実行してテストが全て通ることを確認してください。

```sh
npm test 08.array-instance-method
```

