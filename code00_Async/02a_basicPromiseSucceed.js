// const { console } = require("node:inspector/promises");
// const { setTimeout } = require("node:timers")

const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Sucess!!");
    }, 2000) // after 2 seconds, it responds
});

let ifSucceed = (successMessage) => {
    console.log(`Done!! ${successMessage}`);
}

myFirstPromise.then(ifSucceed);

console.log("End of Program");