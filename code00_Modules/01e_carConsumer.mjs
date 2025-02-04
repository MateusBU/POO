import { CarWithPlate } from "./01c_CarrWithPlate.mjs";
import { Rental } from "./01d_CarPassword.mjs";

var rental = new Rental();

rental.addCar(new CarWithPlate("ACF-7F96"));
rental.addCar(new CarWithPlate("POS-7E85"));
rental.checkCar();
console.log();

rental.fillCar(0,30);
rental.checkCar();
console.log();

rental.fillCar(1,30);
rental.fillCar(0,30);
rental.checkCar();