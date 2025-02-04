var a= []
a[0] =Math.random()
console.log(a.length)
for(let val in a){
    console.log(" --> "+val)
}
console.log();
console.log(" -=-=-=-=-");

a.push(Math.random()) //add at last position on my array
console.log(a.length)

for(let val in a){
    console.log(" --> "+val)
}

console.log();
console.log(" -=-=-=-=-")
a[9] =Math.random()
console.log(a.length)
for(let val in a){
    console.log(" --> "+val)
}

console.log();
console.log(" -=-=-=-=-")
for(let i=0; i<a.length; i++){
    console.log(" -->"+i+": "+a[i]);
}