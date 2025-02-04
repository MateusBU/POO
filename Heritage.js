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
person1.sayHello = function(){
    console.log('Hello!!!');
};

person1.sayHello();

const person2 = new Person("Ana", 1984, "Teacher");

Person.prototype.sayHello = function(){ //every object, now, has this function
    console.log('Hello!!!');
};
//as we created a new function to every object, the best way is insert the function inside the class

const person3 = new Person("Tony", 2000, "Director");

person2.sayHello();
person3.sayHello();