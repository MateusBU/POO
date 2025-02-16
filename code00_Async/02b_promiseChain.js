const { error } = require("node:console");
const { console } = require("node:inspector/promises");
const { errorMonitor } = require("node:stream");

const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Request attended!!");
    }, 2000) // after 2 seconds, it responds
});

promise
    .then(
        result =>{ console.log(result); return "value";})
    .then(
        result => console.log(result))
    .catch(
        error => console.log(error));

console.log("End of Program")

//await bloqueia e faz o resto apenas quando o que eu quero está concluido