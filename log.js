const EventEmitter = require("events");

class Logger extends EventEmitter { /// wrapping in a class which also has all the base properties of EventEmitter class hence instead of emitter obj we will use this keyword.
  log(name) {
    console.log(`Module passed by ${name}.`);
    //Raise an event.
    this.emit("MessageLogged");
  }
}

module.exports = Logger;
