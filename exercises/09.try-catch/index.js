// 問題1: エラーを投げる処理にtry/catch句を設定し、エラーを握りつぶす。
export const wrapFn = () => {
  try {
    throwError();
  } catch (e) {}
};

const throwError = () => {
  throw new Error();
};

// 問題2: try-catchによってバリデーション関数をハンドリングし、結果をreturnする関数を実装する.
// エラーがある場合は以下のオブジェクトを返却する(type,messageはエラーに応じて設定する).
// { valid: false, type: "name", message: "Invalid data type for age. Age must be a number." }
// エラーがない場合は以下のオブジェクトを返却する.
// { valid: true }
export const validateUserResult = (user) => {
  try {
    validateUser(user);
    return { valid: true };
  } catch (e) {
    if (e instanceof AgeError) {
      return { valid: false, type: "age", message: e.message };
    }
    if (e instanceof NameError) {
      return { valid: false, type: "name", message: e.message };
    }
  }
};

class AgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "AgeError";
  }
}

class NameError extends Error {
  constructor(message) {
    super(message);
    this.name = "NameError";
  }
}

const validateUser = (user) => {
  if (typeof user.age !== "number") {
    throw new AgeError("Invalid data type for age. Age must be a number.");
  }
  if (user.age <= 0) {
    throw new AgeError("Invalid age value. Age must be greater than zero.");
  }
  if (typeof user.name !== "string") {
    throw new NameError("Invalid data type for name. Name must be a string.");
  }
  if (user.name.length === 0) {
    throw new NameError("Invalid name value. Name cannot be an empty string.");
  }
};
