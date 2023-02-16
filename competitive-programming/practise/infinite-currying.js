/**
 ** implement add(1)(2)(3)(4) => OUTPUT - 10
 **Company: Cars24, Unacademy
 **/

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    else return a;
  };
}

console.log(add(1)(2)(3)(4)());
