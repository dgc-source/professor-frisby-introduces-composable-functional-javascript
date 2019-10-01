const Box = x => ({
  chain: f => f(x),
  ap: other => other.map(x),
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
});

const add = x => y => x + y;

const liftA2 = (f, fx, fy) => fx.map(f).ap(fy);

const liftA3 = (f, fx, fy, fz) =>
  fx
    .map(f)
    .ap(fy)
    .ap(fz);

const res1 = Box(add)
  .ap(Box(2))
  .ap(Box(4));

const res2 = liftA2(add, Box(2), Box(4));

console.log("result 1: ", res1.inspect());
console.log("result 2: ", res2.inspect());
