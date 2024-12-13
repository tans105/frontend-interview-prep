/**
 * Create a compose function
 * const evaluate = compose(addFive, subtractTwo, multiplyFour)
 * console.log(evaluate(5) => Output => 23
 */

function addFive(value) {
  return value + 5;
}

function subtractTwo(value) {
  return value - 2;
}

function multiplyFour(value) {
  return value * 4;
}

function compose(...functions) {
  return function (initVal) {
    let result = initVal;
    functions.forEach((func) => {
      result = func(result);
    });

    return result;
  };
}

const evaluate = compose(addFive, subtractTwo, multiplyFour);
console.log(evaluate(5)); // 23

