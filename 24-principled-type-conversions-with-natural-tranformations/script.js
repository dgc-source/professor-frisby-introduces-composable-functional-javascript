// modules don't work

const Either = require("../either");
const { Right, Left, fromNullable } = Either;
const Box = require("../box");
const Task = require("data.task");

nt(x).map(f) == nt(x.map(f));

const boxToEither = b => b.fold(Right);

const res1 = first([1, 2, 3]).map(x => x + 1);
const res2 = first([1, 2, 3]).map(x => x + 1);
console.log(res1, res2);

const eitherToTask = e => e.fold(Task.rejected, Task.of);

// eitherToTask(Left('errrrrr'))
// .fork(e => console.error('err', e)),
//       r => console.log('res', r)
