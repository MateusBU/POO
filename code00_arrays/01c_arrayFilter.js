array = [1, 2, 3, 4, 5, 6, 7, 8, 7, 4];

ruleEven = (item) => item%2 == 0;
console.log("Filter the even numbers: " + array.filter(ruleEven)); //return a array with the even numbers.

rulePrime = (item) =>{
    let ndiv = 0;
    for(let divider = 1; divider <= item; divider++){
        if((item % divider) == 0){
            ndiv++;
        }
    }
    if(ndiv == 2)
        return true;
    return false;
}

console.log("Filter the prime numbers: " + array.filter(rulePrime));