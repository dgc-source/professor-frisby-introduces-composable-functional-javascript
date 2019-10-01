// Definition for Either(Right and Left)
// -------------------------------------
const Right = x => ({
  chain: f => f(x),
  ap: other => other.map(x),
  traverse: (of, f) => f(x).map(Right),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
});

const Left = x => ({
  chain: f => Left(x),
  ap: other => Left(x),
  traverse: (of, f) => of(Left(x)),
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
});

const fromNullable = x => (x !== null ? Right(x) : Left(null));

const tryCatch = f => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};

const Either = {
  of: Right,
  tryCatch,
  fromNullable
};
// -------------------------------------

// Lesson code
const liftA2 = (f, fx, fy) => fx.map(f).ap(fy);

const $ = selector => Either.of({ selector, height: 10 });

const getScreenSize = screen => head => foot =>
  screen - (head.height + foot.height);

const res = liftA2(getScreenSize(800), $("header"), $("footer"));

console.log(res.inspect());
