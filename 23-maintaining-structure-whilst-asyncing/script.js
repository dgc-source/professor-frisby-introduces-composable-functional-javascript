const fs = require("fs");
const Task = require("data.task");
const futurize = require("futurize").futurize(Task);
const { List } = require(fs.readFile);

const httpGet = (path, params) => Task.of(`${path} result`);

Map({ home: ["/", "/home"], about: ["/about-us"] })
  .traverse(Task.of, routes =>
    List(routes).traverse(Task.of, route => httpGet(route, {}))
  )
  .fork(console.error, console.log);
