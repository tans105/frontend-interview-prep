console.log(x);
getName();
// console.log(y);

function getName() {
  console.log("Hello World");
}

var x = 10;
// const y = 10;

/**
 * The output of the above snippet would be
 * || undefind
 * || Hello World
 *
 * That is because variable 'x' & 'getName' gets allocated memory in the global execution context.
 * Since we are calling x which is not yet assigned value. It is giving undefined.
 *
 * If we add line => 10, it would throw a reference error. That's because let and const gets stored in the temporal dead zone
 *
 */
