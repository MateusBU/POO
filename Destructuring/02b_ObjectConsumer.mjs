import {aClass} from "./02a_Object.mjs";

let varClass = new aClass("First Atribute");
let {captureFirstAtribute: anAtribute, otherAtribute} = varClass;

console.log("an Atribute: " + anAtribute);  //it is like the callback
console.log("other Atribute: " + otherAtribute);