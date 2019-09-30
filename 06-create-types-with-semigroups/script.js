const Sum = x => ({
  x,
  concat: ({ x: y }) => Sum(x + y),
  inspect: () => `Sum(${x})`,
  toString: () => `Sum(${x})`
});

//const res = Sum(1).concat(Sum(2))

const All = x => ({
  x,
  concat: ({ x: y }) => All(x && y),
  inspect: () => `All(${x})`,
  toString: () => `All(${x})`
});

//const res = All(false).concat(All(true))

const First = x => ({
  x,
  concat: _ => First(x),
  inspect: () => `First(${x})`,
  toString: () => `First(${x})`
});

const res = First("blah")
  .concat(First("ice cream"))
  .concat(First("meta programming"));
console.log(res);
