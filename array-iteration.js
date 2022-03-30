
//1 forEach Method

// const num = [12,34,54,21,56];

// function myFunction(value,index,array){
//     console.log(value);
//     console.log(index)
//     console.log(array)
//     console.log("----------")

// }


// num.forEach(myFunction)

//2 MAP METHOD 
// const num = [12,34,54,21,56];

// function myFunction(value){
//     return value * 2;

// }


// const newNum = num.map(myFunction)
// console.log(newNum)

// console.log(num)


//3 FILTER METHOD

// const num = [12,34,54,21,56];

// function myFunction(value,index,array){
//     return value > 30

// }


// const newNum = num.filter(myFunction)
// console.log(newNum)
// console.log(num)

//4 REDUCE METHOD

// const num = [2,4,6,8,10];

// function myFunction(total,value,index,array){

//     return total + (value * value)

// }


// const newNum = num.reduce(myFunction, 10)
// console.log(newNum)
// console.log(num)


//5 EVERY METHOD

// const num = [2,4,6,8,10];

// function myFunction(value,index,array){
//    return value>1
// }


// const newNum = num.every(myFunction,10)
// console.log(newNum)

//6 indexOf Method

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.lastIndexOf("Apple") + 1;


// console.log(position)

// FIND METHOD - Find method return the value of the first array element that passes a test function.
// findIndex Method return the value of the index position

const num = [2,4,6,8,10];

function myFunction(value,index,array){
   return value>5
}


const newNum = num.findIndex(myFunction)
console.log(newNum)




// const num = [12,34,54,21,56];

// function myFunction(value,index,array){
//     console.log(value);
//     console.log(index)
//     console.log(array)
//     console.log("----------")

// }

// num.forEach(myFunction);






