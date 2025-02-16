import {aClass} from "../Destructuring/02a_Object.mjs"

let anObjectOfClass = new aClass("value");

let json = JSON.stringify(anObjectOfClass);
console.log(json);