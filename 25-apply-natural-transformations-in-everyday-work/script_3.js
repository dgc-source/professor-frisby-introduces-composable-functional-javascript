// Modules don't work. Video crashes at 3:33

const { Right, Left } = require("../either");
const Box = require("../box");
const Task = require("data.task");

const fake = id => ({ id: id, name: "user1", best_friend_id: id + 1 });

const Db = {
  find: id =>
    new Task((rej, res) => res(id > 2 ? Right(fake(id)) : Left("not found")))
};

const eitherToTask = e => e.fold(Task.rejected, Task.of);

Db.find(3) // Task(Right(user))
  .chain(eitherToTask)
  .chain(either => either.map(user => Db.find(user.best_friend_id)));
