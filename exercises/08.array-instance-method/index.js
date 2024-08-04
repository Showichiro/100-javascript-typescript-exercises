// 問題1: 配列のnullish(null or undefined)な値をフィルタリングする関数
export const nonNull = (array) => {
  return array.filter((v) => v != null);
};

// 問題2: 指定されたキーでグルーピングする関数
// const users = [
//   { id: 1, city: "Tokyo" },
//   { id: 2, city: "Osaka" },
//   { id: 3, city: "Tokyo" },
// ];
// console.log(groupBy(users,"city")); // { Tokyo: [{ id: 1, city: 'Tokyo' }, { id: 3, city: 'Tokyo' }], Osaka: [{ id: 2, city: 'Osaka' }] }
export const groupBy = (array, key) => {
  return array.reduce((current, value) => {
    const v = value[key];
    if (current?.[v]) {
      current?.[v].push(value);
    } else {
      current[v] = [value];
    }
    return current;
  }, {});
};

// 問題3: 配列を指定されたサイズで分割する関数
// console(chunk([1,2,3,4,5], 2)) // [[1, 2], [3, 4], [5]]
export const chunk = (array, size) => {
  return array.reduce((arr, item, idx) => {
    if (idx % size === 0) {
      arr.push([item]);
    } else {
      arr[arr.length - 1].push(item);
    }
    return arr;
  }, []);
};
