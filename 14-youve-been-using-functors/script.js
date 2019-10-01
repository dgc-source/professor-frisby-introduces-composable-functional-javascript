// Module aren't working

const Box = require("./box");
const Task = require("data.task");
const Either = require("./either");
const { Right, Left, FromNullable } = Either;
const { List, Map } = require("immutable-ext");

// fx.map(f).map(g) == fx.map(x => g(f(x)));
// fx.map(id) == id(fx)

const id = x => x;

const res1 = List.of("crayons").map(id);
const res2 = id(List.of("crayons"));

console.log(res1, res2);
