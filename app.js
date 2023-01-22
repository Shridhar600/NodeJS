const EventEmitter = require("events");

//Listening to the event raised in log.js

const Log = require("./log");
const logger = new Log();

logger.on("messageLogged",(arg) => {
  console.log("message was logged.", arg);
});

logger.log("honey");
