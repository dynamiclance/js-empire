
// class is not a object, it's a Js template

/* 

    The constructor method is a special method:

    It has to have the exact name "constructor"
    It is executed automatically when a new object is created
    It is used to initialize object properties


    Note: If you do not define a constructor method, JavaScript will add an empty constructor metho

*/

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    play(status){
        console.log(`${this.name}  can playing  ${status}`);
    }

}


const person1 = new Person("Sajib ", 23)
const person2 = new Person("epu ", 21)


// console.log(person2.name)
person2.play("bad")



