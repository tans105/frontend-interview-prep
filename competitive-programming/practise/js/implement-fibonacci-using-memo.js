/**
 * Implement fibonacci using memoization
 */

function memoize(fn) {
  const map = {};
  return (...args) => {
    const argsString = JSON.stringify(args);
    if (map[argsString]) {
      console.log('Value Found...')
      return map[argsString];
    } else {
      const value = fn.apply(this, args);
      map[argsString] = value;
      return value
    }
  }
}

function fib(n) {
  // fibonacci
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));

let memoizedFib = memoize(fib);
console.log(memoizedFib(1,2,3));
console.log(memoizedFib(2,3,4));
console.log(memoizedFib(3));
console.log(memoizedFib(4));
console.log(memoizedFib(5));
console.log(memoizedFib(5));