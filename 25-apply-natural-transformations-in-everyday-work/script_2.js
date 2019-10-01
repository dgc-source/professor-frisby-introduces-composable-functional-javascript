// Module doesn't work

const { fromNullable } = require("../either");

const first = xs => fromNullabe(x[0]);

const largeNumbers = xs => xs.filter(x => x > 100);

const larger = x => x * 2;

const app = xs => first(largeNumbers(xs).map(larger));

console.log(app[(2, 400, 5, 1000)]);
