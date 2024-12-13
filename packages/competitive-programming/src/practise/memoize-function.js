/**
 * Create a memoize/caching function to cache the result of the function
 * Company - Cars24
 */

// Some function that takes a lot computation
const multiply = (num1, num2) => {
  for (let i = 0; i < 10000000; i++) {
    //console.log
  }
  return num1 * num2;
};

// the new caching function implementation
const memoize = (fn, context) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(...args);
    if (!cache[key]) {
      cache[key] = fn.call(context || this, ...args);
    }

    return cache[key];
  };
};

//test
const cacheMultiply = memoize(multiply);

console.time("First Call");
console.log(cacheMultiply(1000, 10000));
console.timeEnd("First Call");

console.time("Second Call");
console.log(cacheMultiply(1000, 10000));
console.timeEnd("Second Call");
