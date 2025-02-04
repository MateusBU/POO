array = [1, 2, 3, 4, 5, 6, 7, 8, 7, 4];

let result = array.reduce(
    (acc, val) => acc += (val%2 == 0) ? val:0, 
    0 //value of the acc in the first call of this array
)
console.log("The sum of the even numbers: " + result);