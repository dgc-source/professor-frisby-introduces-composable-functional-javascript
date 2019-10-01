// This current module isn't working

const { Map } = require("immutable-ext");

const Sum = x => ({
  x,
  concat: ({ x: y }) => Sum(x + y),
  inspect: () => `Sum(${x})`
});

const All = x => ({
  x,
  concat: ({ x: y }) => All(x && y),
  inspect: () => `All(${x})`
});

const First = x => ({
  x,
  concat: _ => First(x),
  inspect: () => `First(${x})`
});

const acct1 = Map({
  name: First("Nico"),
  isPaid: All(true),
  points: Sum(10),
  friends: ["Franklin"]
});

const acct2 = Map({
  name: First("Nico"),
  isPaid: All(false),
  points: Sum(2),
  friends: ["Gatsby"]
});

const res = acct1.concat(acct2);

// Showing results
console.log("Friend 1: ", res.toJS().friends[0]);
console.log("Friend 2: ", res.toJS().friends[1]);
console.log("isPaid: ", res.toJS().isPaid.x);
console.log("Name: ", res.toJS().name.x);
console.log("Points: ", res.toJS().points.x);
