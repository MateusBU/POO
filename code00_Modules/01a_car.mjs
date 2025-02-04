export class Car{
    #_tank
    #_capacityTank
    constructor(value_capacityTank){
        this.#_tank = 0;
        this.#_capacityTank = value_capacityTank;
    }
    get tank(){
        return this.#_tank;
    }
    get capacityTank(){
        return this.#_capacityTank;
    }
    set tank(qtd){
        if(qtd >= 0){
            if((qtd + this.#_tank) > this.#_capacityTank){
                this.#_tank = this.#_capacityTank;
            }
            else{
                this.#_tank += qtd;
            }
        }
    }
}