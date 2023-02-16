obj1 = { a: 10 };
const obj2 = obj1;
obj2.a = 20;
console.log(obj1);
console.log(obj2);
let obj1;

// output ReferenceError: Cannot access 'obj1' before initialization
