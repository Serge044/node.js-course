const fs = require("fs");
const dns = require("dns");

function info(text) {
  console.log(text, "Time: ", performance.now().toFixed(2));
}

info("program start");

// Timeouts
setTimeout(() => {
  info("Timeout 1");
}, 0);
setTimeout(() => {
  process.nextTick(() => info("Next tick 2"));
  info("Timeout 2");
}, 700);

// Intervals
let intervalCount = 0;
const intervalId = setInterval(() => {
  info(`Interval ${(intervalCount += 1)}`);
  if (intervalCount === 3) {
    clearInterval(intervalId);
  }
}, 1000);

// Close events
fs.writeFile("./test.txt", "Hello NodeJS", () => info("File was written"));

// Promises
Promise.resolve().then(() => info("Promise 1"));

// Next tick
process.nextTick(() => info("Next tick 1"));

// SetImmediate (Check)
setImmediate(() => {
  info("Immediate 1");
});

// Input / Outpur events
dns.lookup("google.com", (err, address, family) => {
  console.log(info("DNS 1 google "), address);
  Promise.resolve().then(() => info("Promise 2"));
  process.nextTick(() => info("Next tick 3"));
});

info("program end");
