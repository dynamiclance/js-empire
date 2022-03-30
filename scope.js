

/* 
    var is both Global and function scope
    let is block scope

*/


myFunction();

// code here can use carName

console.log(carName)

function myFunction() {
  carName = "Volvo";
}

console.log(carName)