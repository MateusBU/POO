 // 01a_funcaoSemParametro
 function functionNoReturn() {
    console.log("Hello!");
}
function functionWithReturn() {
    return "Hello!";
}
let msg= functionNoReturn();
console.log(msg);
msg= functionWithReturn();
console.log(msg);