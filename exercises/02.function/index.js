// 問題1：ログ出力
// 目的：戻り値のない関数の実装方法を学ぶ
// 内容：メッセージを引数として受け取り、コンソールにエラー出力する関数を作成してください。この関数は何も返しません。
export function logError(message) {
  console.error(message);
}

// 問題2：挨拶
// 目的：値を戻す関数の実装方法を学ぶ
// 内容：名前を引数として受け取り、「こんにちは、[名前]さん」形式で挨拶をする関数を作成してください。
export function hello(name) {
  return `こんにちは、${name}さん`;
}

// 問題3：3回実行する関数
// 目的：高階関数の実装方法を学ぶ
// 内容：与えられた関数を3回実装する関数を実装する。
export function applyThreeTimes(fn) {
  fn();
  fn();
  fn();
}
