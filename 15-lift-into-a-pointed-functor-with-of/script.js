// modules aren't workikng

const Box = require("../box");
const Either = require("../either");
const Task = require("data.task");

Task.of("hello"); // Task('hello')
Either.of("hello"); // Right('hello')
Box.of(100); // Box(100)

Either.of("hello").map(x => x + "!");
