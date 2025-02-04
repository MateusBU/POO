class Person {
    constructor(name, yearBorn, profession) {
        this.name = name;
        this.yearBorn = yearBorn;
        this.profession = profession;
        this.calcAge = function () {
            return new Date().getUTCFullYear() - this.yearBorn;
        };
    }
};

const person1 = new Person("Mateus", 1997, "Engineer");
const person2 = new Person("Ana", 1984, "Teacher");

console.log(Object.getPrototypeOf(person1)); //get which object person1 is

const person3 = Object.create(person1); //create a new object similar to person1
console.log(person3);
