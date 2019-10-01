// Immutable is not working

const { Map, List } = Immutable;

// -----------------------------
// Sum monoid
const Sum = x => ({
  x,
  concat: ({ x: y }) => Sum(x + y),
  inspect: () => `Sum(${x})`
});

Sum.empty = () => Sum(0);
// -----------------------------

const res1 = [Sum(1), Sum(2), Sum(3)].reduce(
  (acc, x) => acc.concat(x),
  Sum.empty()
);

const res2 = Map({ brian: 10, sara: 2 })
  .map(Sum)
  .fold(Sum.empty());

const res3 = List.of(1, 2, 3).foldMap(Sum, Sum.empty());

console.log("result 1: ", res1.inspect());
console.log("result 2: ", res2.inspect());
console.log("result 3: ", res3.inspect());
