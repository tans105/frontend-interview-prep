/*
Create a polyfill function for array.filter
 */

Array.prototype.myFilter = function (cb) {
  const arr = this;
  const temp = [];

  arr.forEach(item => {
    if (cb(item)) {
      temp.push(item);
    }
  });

  return temp;
}

const arr = [1, 2, 3, 4, 5];
console.log(arr.myFilter((el) => el > 2));
