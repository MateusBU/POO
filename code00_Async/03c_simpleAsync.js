const { rejects } = require("node:assert");
const { resolve } = require("node:dns/promises");

async function doSomething(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Request attended"), 2000); //do after 2 secs
    });
    let result = await promise;
    return result;
}
async function main() {
    console.log("INICIAL!!!!");
    console.log(await(doSomething()));
    console.log("FINAL!!!!");
}

main();