// 問題1:配列の一番最初の要素を取り除いた配列を返却する関数
// 非破壊的メソッドとして実装すること
export const omitFirst = (arr) => {
  const [_, ...rest] = arr;
  return rest;
};

// 問題2:配列の一番最後の要素を取り除いた配列を返却する関数
// 非破壊的メソッドとして実装すること
export const omitLast = (arr) => {
  const [_, ...rest] = [...arr].reverse();
  return rest.reverse();
};

// 問題3: 二つのオブジェクトをマージしたオブジェクトを返却する関数
// 非破壊的メソッドとして実装すること
export const mergeObject = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};
