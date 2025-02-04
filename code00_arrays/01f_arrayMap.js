array = [1, 2, 3, 4, 5, 6, 7, 8, 7, 4];

//transform date to another, create a new array
let newArray = array.map( (item) => item*2)
console.log(newArray);

newArray = array.map( (item) => {return {x: item, y: 2*item}})
console.log(newArray);