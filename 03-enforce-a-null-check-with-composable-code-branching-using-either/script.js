// Code goes here
const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
});

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
});

const fromNullable = x => (x != null ? Right(x) : Left(null));

const findColor = name =>
  fromNullable({ red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }[name]);

const res = findColor("blue")
  .map(c => c.slice(1))
  .map(c => c.toUpperCase())
  .fold(e => "no color", x => x);

console.log(res);
