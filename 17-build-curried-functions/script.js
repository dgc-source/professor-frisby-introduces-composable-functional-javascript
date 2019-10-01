const add = x => y => x + 1;
const inc = add(1);
const modulo = dvr => dvd => dvd % dvr;
const replace = regex => repl => str => str.replace(regex, repl);

const isOdd = modulo(2);

const filter = pred => xs => xs.filter(pred);
const map = f => xs => xs.map(f);

const censor = replace(/[aeiou]/gi)("*");

const censorAll = map(censor);

const getAllOdds = filter(isOdd);

console.log("censorAll: ", censorAll(["hello", "world"]));
console.log("getAllOdds: ", getAllOdds([1, 2, 3, 4]));
