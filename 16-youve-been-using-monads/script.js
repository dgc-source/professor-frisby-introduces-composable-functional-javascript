const Box = require("./box");

// Box, Either, Task, List

// F.of, chain (flatMap, bind, >>=)

// httpGet('/user')
// .chain(user=>
//   httpGEt(`/comments/${user.id}`))
//   .chain(comments =>
//     updateDOM(user, comments)))) //Task(Task(Task(DOM)))

const join = m => m.chain(x => x);

// const m = Box(Box(Box(3)));
// const res1 = join(m.map(join));
// const res2 = join(join(m));

const m = Box("wonder");
const res1 = join(Box.of(m));
const res2 = join(m.map(Box.of));

// const m = Box(Box(join(Box.of(m) == join(m.map(Box.of)))));

console.log(res1, res2);
