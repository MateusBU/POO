class ValidateCPF{
    static SIZE_CPF = 11;
    static vali(size){
        if(size == this.SIZE_CPF){
            return true;
        }
        return false;
    };
};
console.log(ValidateCPF.vali("7418529630".length));
console.log(ValidateCPF.vali("74185296307".length));
console.log(ValidateCPF.SIZE_CPF);