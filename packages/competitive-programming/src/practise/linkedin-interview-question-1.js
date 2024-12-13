let Foo = function(a) {
  this.a = a;
  this.bar = function() {
    return this.a;
  }
  this.baz = function() {
    return this.a;
  };
};

Foo.prototype = {
  biz: function() {
    return this.a;
  }
};

let f = new Foo(7);
// what will be the output?
console.log(f.bar());
console.log(f.baz());
console.log(f.biz());