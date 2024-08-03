// 以下のクロージャを利用した関数の機能追加を行ってください.
// 1. createCounterの引数を追加し、カウンターの初期値を設定できるようにする(任意のパラメータとする).
// 2. increment関数に引数を追加し、カウントアップする値を引数からとるようにする
// 3. decrement関数を追加し、カウントダウンできるようにする
// 4. reset関数を追加し、カウントを初期値に戻せるようにする.初期値は1.の改修の通り引数の値とする.
// 5. value関数を追加し、現在のカウントを参照できるようにする.
// 6. increment/decrement/reset/valueを持つオブジェクトをcreateCounterの戻り値にする.
export const createCounter = (initialValue = 1) => {
    let count = initialValue;

    const increment = (value = 1) => {
        count += value;
        return count;
    };

    const decrement = (value = 1) => {
        count -= value;
        return count;
    };

    const value = () => {
        return count;
    };

    const reset = () => {
        count = initialValue;
    };

    return { increment, decrement, value, reset };
};
