import {area, circumference as circ} from "./01a_definition_ES6.mjs";
console.log(`Area of a 4 radius circle: ${area(4)}`);
console.log(`Circumference of a 4 radius circle: ${circ(4)}`);

import * as circle from  "./01a_definition_ES6.mjs";
console.log(`Area of a 4 radius circle: ${circle.area(4)}`);