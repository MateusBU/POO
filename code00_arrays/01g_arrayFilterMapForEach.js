array = [1, 2, 3, 4, 5, 6, 7, 8, 7, 4];

numberDivider = (item) => {
    let ndiv = 0;
    for(let divider = 1; divider <= item; divider++){
        if((item % divider) == 0){
            ndiv++;
        }
    }
    return ndiv;
}

array
    .filter((num) => numberDivider(num)==2) //filter and create a new array only with prime number
    .map((item) => {return {x: item, even: (item%2)==0}}) //create a new array of obj to know if the number is even or odd
    .forEach((obj) => console.log(obj.x + " is even? " + obj.even)) //for each element, it writes if the number is even