import EventEmitter from "events";

const myEmmiter = new EventEmitter();

const timeoutListenerFn = (secondsQty) => {
  console.log(`Timeout event in ${secondsQty} seconds!`);
};

myEmmiter.on("timeout", timeoutListenerFn);

myEmmiter.once("singleEvent", () => {
  console.log("Single event occured");
});

setTimeout(() => {
  myEmmiter.emit("timeout", 2);
}, 2000);

setTimeout(() => {
  myEmmiter.emit("timeout", 1);
}, 1000);

// Listener func will be called only onse!
setTimeout(() => myEmmiter.emit("singleEvent"), 500);
setTimeout(() => myEmmiter.emit("singleEvent"), 1500);

// remove listener from the 'timeout' event
setTimeout(() => {
  myEmmiter.off("timeout", timeoutListenerFn);
}, 3000);

setTimeout(() => {
  myEmmiter.emit("timeout", 4);
}, 4000);
