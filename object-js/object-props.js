

// const person = {
//     name : "sajib",
//     age: 23,
//     job : "student"
// };

// // Accessing JS object properties in different ways

// const a = "age";

// // console.log(person.age);
// // console.log(person["age"]);
// // console.log(person[x]);

// delete(person[a]);

// for(let x in person) {
//     console.log(person[x]);
// }

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ],
  };


  for( let x in myObj.cars) {
    console.log(myObj.cars[x].name);

    for(let y in myObj.cars[x].models) {
      console.log( myObj.cars[x].models[y])
    }

  }