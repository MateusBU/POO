array = [1, 2, 3, 4, 5, 6, 7, 8, 7, 4];

array.forEach(
    (num) => console.log(
        num + " -> " + ((num % 2) == 0 ? "even" : "odd")
    )
)
console.log();

numberDivider = (item) => {
    let ndiv = 0;
    for(let divider = 1; divider <= item; divider++){
        if((item % divider) == 0){
            ndiv++;
        }
    }
    return ndiv;
}
console.log();

array.forEach(
    (num) => console.log(
        `${num} -> nDividers from 1 until ${num} = ${numberDivider(num)}`)
)