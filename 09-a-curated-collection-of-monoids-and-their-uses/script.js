// Trouble with code

// Example 1
const Product = x => ({
  x,
  concat: ({ x: y }) => Product(x * y)
});

Product.empty = () => Product(1);

// Example 2

const Any = x => ({
  x,
  concat: ({ x: y }) => Any(x || y)
});

Any.empty = () => Any(false);

// Example 3

const All = x => ({
  x,
  concat: ({ x: y }) => All(x && y)
});

All.empty = () => All(true);

// Example 4

const Max = x => ({
  x,
  concat: ({ x: y }) => Max(x > y ? x : y)
});

Max.empty = () => Max(-Infinity);

const Min = x => ({
  x,
  concat: ({ x: y }) => Min(x < y ? x : y)
});

Min.empty = () => Min(Infinity);

// Example 5

const Right = x => ({
  chain: f => f(x),
  ap: other => other.map(x),
  traverse: (of, f) => f(x).map(Right),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  concat: o => o.fold(_ => Right(x), y => Right(x.concat(y))),
  inspect: () => `Right(${x})`
});

const Left = x => ({
  chain: f => Left(x),
  ap: other => Left(x),
  traverse: (of, f) => of(Left(x)),
  map: f => Left(x),
  fold: (f, g) => f(x),
  concat: o => o.fold(_ => Left(x), y => o),
  inspect: () => `Left(${x})`
});

const fromNullable = x => (x != null ? Right(x) : Left(null));

const tryCatch = f => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};

module.exports = { Right, Left, fromNullable, tryCatch, of: Right };
// Right(Sum(54))
// Left(null)

// Example 6

const First = either => ({
  fold: f => f(either),
  concat: o => (either.isLeft ? o : First(either))
});

First.empty = () => First(Left());

const find = (xs, f) =>
  List(xs)
    .foldMap(x => First(f(x) ? Right(x) : Left()), First.empty())
    .foldM(x => x);

find([3, 4, 5, 6, 7], x => x > 4);
// Right(5)

// Example 7

const Fn = f => ({
  fold: f,
  concat: o => Fn(x => f(x).concat(o.fold(x)))
});

const hasVowels = x => !!x.match(/[aeiou]/gi);
const longWord = x => x.length >= 5;

const both = Fn(
  compose(
    All,
    hasVowels
  )
)
  .concat(
    Fn(
      compose(
        All,
        longword
      )
    )
  )

  [("gyn", "bird", "lilac")].filter(x => both.fold(x).x);
// [lilac]

// example 8
const Pair = (x, y) => ({
  x,
  y,
  concat: ({ x: x1, y: y1 }) => {
    Pair(x.concat(x1)), y.concat(y1);
  }
});
