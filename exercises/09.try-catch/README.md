# try-catch
JavaScriptの`try-catch`ブロックは、エラーが発生した場合にそのエラーを捕捉して処理を行うための構造です。`try`ブロック内でエラーが発生すると、`catch`ブロックが実行されます。`finally`ブロックは、エラーが発生しても発生しなかった場合でも常に実行されます。

### 1. 説明

`try-catch-finally`は、エラーハンドリングにおいて非常に重要な役割を果たします。`try`ブロック内で可能な限りエラーを引き起こす可能性のあるコードを書き、そのエラーが発生した場合に`catch`ブロックで適切に処理を行います。また、`finally`ブロックは、どんな場合でも実行されるコードを記述するのに適しています。

### 2. 実装例

#### 2.1 基本的な使用方法

```javascript
try {
    // エラーが発生する可能性があるコード
} catch (error) {
    // エラーがキャッチされた場合の処理
    console.error("An error occurred:", error.message);
} finally {
    // 常に実行される処理
    console.log("This will run regardless of whether an error was thrown.");
}
```

#### 2.2 複数のエラーを捕捉

`catch`ブロック内で`instanceof`を利用することで異なるタイプのエラーを処理することも可能です。

```js
try {
    // エラーが発生する可能性があるコード
} catch (error) {
    if (error instanceof ErrorType1) {
        // 特定のエラー型 (error1) を処理
        console.error("A specific error occurred:", error.message);
    } else if (error instanceof ErrorType2) {
        // 他のエラー型 (error2) を処理
        console.error("Another error occurred:", error.message);
    } else {
        // その他のエラーの処理
        console.error("An unexpected error occurred:", error.message);
    }
} finally {
    // 常に実行される処理
}
```

### 3. 練習問題
