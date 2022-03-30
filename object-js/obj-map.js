/*

Object              vs	          Map


Not directly iterable	    |    Directly iterable
Do not have a size property |	 Have a size property
Keys must be Strings        |    Keys can be any datatype
Keys are not well ordered	|    Keys are ordered by insertion
Have default keys	        |    Do not have default keys

*/


// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
  


// fruits.forEach (function(value, key) {
//   console.log(`values is ${value} and key is ${key}`);
// })

// for (const x of fruits.entries()) {
//     console.log( x);
//   }

const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

console.log(apples)

// Add the Objects to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

console.log(fruits)