//----------------------- PERSON ----------------------//
class Person {
    constructor(name, yearBorn, profession) {
        this.name = name;
        this.yearBorn = yearBorn;
        this.profession = profession;
    };
    sayHello(){
        console.log(`Hello ${this.name} !!!!!!!`);
    };
    calcAge(){
        return new Date().getUTCFullYear() - this.yearBorn;
    };
};
const person1 = new Person("Mateus", 1997, "Engineer");
person1.sayHello();

console.log();
console.log();
//----------------------- STUDENT ----------------------//  Heritage
class Student extends Person{
    constructor(name, yearBorn, enrolment){
        super(name, yearBorn, "Student"); //send to the father-object Person
        this.enrolment = enrolment;
    };
    getEnrolment(){
        return this.enrolment;
    };
    sayHello(){ //polymorphism
        super.sayHello(); //call the function from the father-object
        console.log(`Hello students, I'll be your classmate, my name is ${this.name}`);
    };
}

const student1 = new Student("Marcos", 2010, 852963);
console.log(student1);
student1.sayHello();
console.log(student1.getEnrolment());

console.log();
console.log();
//----------------------- TEACHER ----------------------//  Heritage
class Teacher extends Person{
    constructor(name, yearBorn, school, education){
        super(name, yearBorn, "Teacher"); //send to the father-object Person
        this.school = school;
        this.education = education;
    }
    getSchool(){
        return this.school;
    }
}
const teacher1 = new Teacher("Bruna", 1986, "St. Giles", "Math");
console.log(teacher1);
console.log(teacher1.getSchool());
teacher1.sayHello();
console.log(teacher1.calcAge());


//------------REFERENCE---------------------// it doesn't only copy, but if you change one, it changes the other

const teacher2 = teacher1;  //it points to the same mem address, this is the reason that the changing happens
teacher2.yearBorn = 1980;
console.log(teacher1.yearBorn);
console.log(teacher2.yearBorn);

//----------------------------------------//
const teacher3 = new Teacher("Adriano", 2000, "UCS", "Law");
//delete teacher3.education;

Teacher.prototype.schedule = "Add your sschedule";
