// Getting error unexpected identifier
import Task from "data.task";

const launchMissiles = () =>
  new Task((rej, res) => {
    console.log("launch missiles!");
    res("missile");
  });

const app = launchMissiles().map(x => x + "!");

app
  .map(x => x + "!")
  .fork(e => console.error("err", e), x => console.log("success", x));
