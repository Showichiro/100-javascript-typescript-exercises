// フルーツ配列を操作する関数を実装します。
// 各関数を実装してください。

export let fruits = ["apple", "banana"];

/**
 * 引数にとったフルーツを配列に追加する.
 */
export const addNewFruit = () => {};

/** 指定されたインデックスのフルーツを配列から削除する. */
export const deleteFruit = () => {};

/**
 * 指定されたインデックスのフルーツを配列から取得する.
 * 元のフルーツ配列は変化しない.
 * 存在しないインデックスを指定した場合はnullを返却する.
 */
export const getById = () => {};

/**
 * 第一引数にインデックスを取り、第二引数に指定された値でフルーツを置き換える.
 */
export const editFruit = () => {};

// 以下は編集しない
export const resetFruit = () => {
    fruits = ["apple", "banana"];
};
