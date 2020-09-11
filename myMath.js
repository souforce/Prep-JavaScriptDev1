function sum(a, b) {
    return a + b;
}

function divide(a, b) {
    if (b == 0) throw Error('You can not divide values by zero');
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function subtraction(a, b) {
    return a - b;
}

module.exports = {
    sum : sum,
    divide : divide,
    multiply : multiply,
    subtraction : subtraction
}