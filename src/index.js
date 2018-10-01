class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
    this.expression = '' + initialValue + '';
  }

  toString() {
    return this.value;
  }

  add(number) {
    this.expression += '+' + number;
    this.value = eval(this.expression);
    return this;
  }
  
  subtract(number) {
    this.expression += '-' + number;
    this.value = eval(this.expression);
    return this;
  }

  multiply(number) {
    this.expression += '*' + number;
    this.value = eval(this.expression);
    return this;
  }

  devide(number) {
    this.expression += '/' + number;
    this.value = eval(this.expression);
    return this;
  }

  pow(number) {
    const val = this.expression.match(/(\d+)(?=\)*$)/)[0];
    let expr = 'Math.pow(' + val + ',' + number + ')';
    this.expression = this.expression.replace(/(\d+)(?=\)*$)/, expr);
    this.value = eval(this.expression);
    return this;
  }
}

module.exports = SmartCalculator;
