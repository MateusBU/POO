function decision(question,doOK, doCancel) {
    if(question=="OK") doOK()
    else doCancel();
}
let functOK = function showOk() { console.log( "You agreed."); }
let functCancel =function showCancel() { console.log( "You canceled the execution."); }
decision("OK",functOK,functCancel);
decision("Cancel",functOK,functCancel);
console.log("\n\n");

//CLOSURE
function sumValues(x) {
    console.log(x);
    return function(y) {
        console.log(y); 
        return x + y;
    };
}
var soma5 = sumValues(5);
console.log(soma5(2));
console.log("\n\n");

 // 04a_arrow
 var sum = () =>console.log("função sem parametros")
 sum();
 sum(1);
 sum = _ => console.log("using underscore");
 sum();
 sum = (x,y) => x + y; //like a MACRO, doe not require the word return, if we do not use {} like below
 console.log(sum(1,2));
 sum = (x,y) =>{return x + y};
 console.log(sum(3,4));
 console.log("\n\n");

// return the biggest number
sum = (x,y) =>x>y?x:y;
console.log(sum(5,6));
sum = (x,y) =>{
    if(x>y)
        return x;
    else
        return y;
}
console.log(sum(7,8));