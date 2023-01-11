/**
 * implement calc.add(10).multiply(5).subtract(30).add(10)
 * Company - Cars24
 */

class Operation {
  constructor() {
    this.value = 0;
  }

  add(value) {
    this.value += value;
    return this;
  }

  multiply(value) {
    this.value *= value;
    return this;
  }

  subtract(value) {
    this.value -= value;
    return this;
  }

  divide(value) {
    this.value /= value;
    return this;
  }
}

const calc = new Operation();
console.log(calc.add(10).multiply(5).subtract(30).add(10).subtract(30).value);
