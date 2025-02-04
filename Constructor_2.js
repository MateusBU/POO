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
console.log(person1);
console.log(person1.name);
console.log(person1.calcAge());

person1.yearBorn = 1985; //unprotected
console.log(person1.calcAge());

const person2 = new Person("Ana", 1984, "Teacher");
console.log(person2);
console.log(person2.constructor); //function: Person
console.log(person2.constructor.name);

const person3 = new Object();
console.log(person3.constructor); //funcion: object
console.log(person3.constructor.name);

const person4 = new Person();
console.log(person4.constructor); //function: Person
console.log(person4); //function: Person
console.log(person4.__proto__); //arvore de herancao (cadeia de protótipo)

person3.name = "William";
person3.profession = "Driver";
console.log(person3); 

function findType(object){
    if('Object' == object.constructor.name){
        console.log('It a root object');
    }
    else{
        console.log('It a object ' + object.constructor.name);
    }
}
findType(person1);
findType(person2);
findType(person3);