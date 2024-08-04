# クラス

## 1.説明
JavaScriptでは、オブジェクト指向プログラミング(OOP)の一環としてクラスを導入しています。クラスは、同じプロパティ（属性）とメソッドを持つオブジェクトの設計図とも言えます。クラスを使用することで、コードの再利用性と保守性を高めることができます。

## 2.クラスの定義

クラスはclassキーワードを使って定義します。クラス名は大文字で始めると良いでしょう。

```js
class ClassName {
    constructor() {
        // コンストラクタ: クラスの新しいインスタンスを作成する際に一度だけ呼び出されます。
    }

    methodName() {
        // メソッド: クラスのインスタンスが持つ関数
    }
}
```

## 3.コンストラクタ

コンストラクタはクラスのインスタンスが作成される際に自動的に呼び出される特殊なメソッドです。このメソッド内で、クラスのインスタンスに必要なプロパティを初期化します。

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

## 4.メソッド

クラスの中で定義された関数をメソッドと呼びます。メソッドは、クラスのインスタンスが持つ関数として機能し、インスタンスの状態を操作することができます。

```js
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}
```

## 5.クラスのインスタンス化

クラスから新しいオブジェクト（インスタンス）を作成するには、`new`キーワードを使用します。

```js
let person = new Person('John Doe', 30);
console.log(person.name); // John Doe
console.log(person.age); // 30
```

## 6.継承

クラスは他のクラスから継承することができます。これにより、共通の振る舞いを定義した基底クラスから派生クラスを作成し、再利用性を高めることができます。

```js
class Animal {
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}

let dog = new Dog();
dog.speak(); // dog barks.
```