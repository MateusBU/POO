const { rejects } = require("node:assert");
const { resolve } = require("node:dns/promises");

async function doSomething(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Request attended"), 2000); //do after 2 secs
    });
    let result = await promise;
    return result;
}

console.log("INICIAL!!!!");
doSomething().then((msg) => console.log(msg));
console.log("FINAL!!!!");