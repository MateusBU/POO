export class aClass{
    #_anAtribute;   //ass it private, I must not have contact with this atribute
    otherAtribute = "atribute two";
    constructor(value){
        this.#_anAtribute = value;
    }
    captureFirstAtribute(){
        return this.#_anAtribute;
    }
}