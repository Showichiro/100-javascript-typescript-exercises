# オブジェクト

## 1. 説明
JavaScriptでは、データとその操作に関連するプロパティとメソッドを一つにまとめたものを「オブジェクト」と呼びます。オブジェクトは、データの構造化と操作を容易にするために使用されます。

## 2. オブジェクトの定義
オブジェクトは以下のように定義します：

```js
let objectName = { 
    property1: value1,
    property2: value2,
    method1: function() { 
    // メソッドの処理 
    }, 
    method2: function() { 
    // メソッドの処理 
    } 
};
```

ここで、`objectName`はオブジェクトの名前、`property1`, `property2`はオブジェクトのプロパティ、`value1`, `value2`はそれぞれのプロパティの値、`method1`, `method2`はオブジェクトのメソッドです。

## 3. プロパティとメソッド
### 3.1 プロパティ
オブジェクトのプロパティは、そのオブジェクトに関連する情報を保持するためのものです。プロパティはキーと値のペアで表現されます。

```js
let person = { name: "John", age: 30 }; 
console.log(person.name); // "John"
```

### 3.2 メソッド
オブジェクトのメソッドは、そのオブジェクトに関連する操作を定義するための関数です。メソッドはオブジェクトのプロパティとして定義されます。

```js
let person = { 
    name: "John",
    greet: function() { 
        console.log("Hello, my name is " + this.name); 
    } 
};

person.greet(); // "Hello, my name is John"
```
