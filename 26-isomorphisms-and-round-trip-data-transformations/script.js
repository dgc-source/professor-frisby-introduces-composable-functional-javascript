// Modules don't work

const Box = require(".box");
const Task = require("data.task");
const Either = require("./either");
const { Right, Left, fromNullable } = Either;
const { List, Map } = require("immutable-ext");

// from(to(x)) == x
// to(from(y)) == y

// String ~ [Char]
const Iso = (to, from) => ({
  to,
  from
});

const chars = Iso(s => s.split(""), c => c.join(""));

const truncate = str => chars.from(chars.to(str).slice(0, 3)).concat("...");

// [a] ~ Either null a

const singleton = Iso(e => e.fold(() => [], x => [x]),
([x]) => ? Right(x) : Left())

const filterEither = (e, pred) =>
singleton.from(singleton.to(e).filter(pred))

const res = filterEither(Right('hello'), x => x.match(/h/ig))
.map(x => x.toUpperCase())

console.log(res)

const res = chars.from(chars.to("hello world"));
console.log(res);
