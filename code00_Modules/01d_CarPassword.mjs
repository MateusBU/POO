
export class Rental{
    #_cars;
    constructor(){
        this.#_cars=[];
    }
    addCar(aCar){
        this.#_cars.push(aCar);
        console.log(this.#_cars.length);
    }
    checkCar(){
        this.#_cars.forEach(
            (car) => console.log(`Car plate (${car.plate}; tank: ${car.tank})`))
    }

    fillCar(index, quantity){
        if((index >= 0) && (index < this.#_cars.length)){
            this.#_cars[index].tank = quantity;
        }
    }
}