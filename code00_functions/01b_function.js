function pote(base, expoent= 2) {
    let resultado= 1;
    for(let cont= 0; cont < expoent; cont++) {
        resultado*=base;
    }
    return resultado;
}
console.log(pote());
console.log(pote(4));
console.log(pote(2,6));
console.log(pote(2,6,18));