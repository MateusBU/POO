let Fullname = ['Mateus', 'Brune', 'Urtassum'];
var [firstName, MiddleName, lastName] = Fullname;

console.log("First name: " + firstName);
console.log("Middle name: " + MiddleName);
console.log("Last name: " + lastName);
console.log();

var [firstName, ...rest] = Fullname; //the first was consumed, then the rest goes to the variable 'rest'
console.log("First name: " + firstName);
console.log("Rest of the name: \" " + rest.toString().replace(',', ' ') + '"');
console.log();

var [firstName, ,lastName] = Fullname; //ignore the second
console.log("First name: " + firstName);
console.log("Last name: " + lastName);