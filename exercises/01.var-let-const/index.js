// 以下のコードをリファクタリングしてください。
// 不必要な再代入を避け、適切なスコープを設定し、const と let を正しく使用してください。
var count = 0;
var maxCount = 10;
var message = "";

for (var i = 0; i < maxCount; i++) {
  count = count + 1;
  if (count % 2 === 0) {
    message = "Even";
  } else {
    message = "Odd";
  }
  console.log(message);
}

console.log("Final count: " + count);
