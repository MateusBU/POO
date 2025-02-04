let a = [1,2,3];
a.forEach(function(item,index){ //callback as a parameter
    console.log(`${item} na posição ${index}`);
});

let b = [3, 1, 2];
b.sort(function(x,y){
    if (x<y) return -1;
    if (x>y) return 1;
    return 0;
});

console.log(b);