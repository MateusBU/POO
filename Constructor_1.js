function Person(){
    this.name = "Mateus";
    this.yearBorn = 1995;
    this.profession = "Student";
    this.calcAge = function(){
        return new Date().getUTCFullYear() - this.yearBorn;
    };
};

const person1 = new Person();
console.log(person1);
console.log(person1.name);
console.log(person1.calcAge());

person1.yearBorn = 1997; //unprotected
console.log(person1.calcAge());
console.log(Object.getPrototypeOf(person1));