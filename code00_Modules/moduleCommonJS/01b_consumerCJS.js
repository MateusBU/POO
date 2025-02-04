const circle = require('./01a_definitionCJS.js');
console.log(`Area of a 4 radius circle: ${circle.area(4)}`);
console.log(`Circumference of a 4 radius circle: ${circle.circumference(4)}`);

// ----------OR---------- //
const {area} = require('./01a_definitionCJS.js');
console.log(`Area of a 4 radius circle: ${area(4)}`);
