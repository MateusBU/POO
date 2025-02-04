import {Car} from "./01a_car.mjs"

export class CarWithPlate extends Car{
    #_plate  //private, it can change outside
    constructor(valuePlate){
        super(55);
        this.#_plate = valuePlate;
    }
    get plate(){
        return this.#_plate;
    }
}