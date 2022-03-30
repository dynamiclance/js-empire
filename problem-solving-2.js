
// PB : 1 | How many time sk word used in below sentence and which position first sk found ???


// let sentence = "I am sk, i live in kapasia-gazipur, my dream is to be a software engineer, sk is so caring about his work and learning new things";

// const matches = sentence.match(/sks/gi);
// const count = matches ? matches.length : 0;

// console.log(count);


// let position = sentence.search(/sk/i);
// position = position >= 0 ? position : "not found";

// console.log(position);

// PB : 2 | 
// input: linearSearch (["a","b", "c", "d"], "c")
// output: 2 or "not found"
// complete the linearSearch() function

// function linearSearch(arr, value) {

//     const length = arr.length;

//     for(let i = 0; i < length; i++) {
//         if(arr[i] === value){
//             return i;
//         }
//     }
//     return "not found";

// }

// console.log(linearSearch(["a","b", "f", "d"], "c"));


 // Pb 3: Find the longest string from an array and index  number of that string


//  function longestString(names) {
//      let longestWord = "";

//      for(name of names){
//         if(name.length > longestWord.length){
//             longestWord = name;
//         }
//      }

//      return [longestWord.length, names.indexOf(longestWord)];
//  }

// console.log(longestString([ "Sajib khan", "Bibi Jahan Epu", "John Alex"]));


 // Pb 4: 1 theke 100 ar modde 3,5 dara vibajjo and 3 & 5 dara vibajjo sonkka golo ber korara akta function banan

//  function fizzBuzz(num) {
//      for(let i = 0; i <= num; i++) {
//          if(i % 15 === 0){
//              console.log(`${i} is fizzbuzz`);
//          }else if(i % 3 == 0){
//             console.log(`${i} is fizz`);
//          }else if(i % 5 == 0){
//             console.log(`${i} is Buzz`);
//          }
//          else{
//              console.log(i);
//          }
//      }
//  }

//  fizzBuzz(100);

// pb: 5 || Find the falsy value from an array 


// const arr = [
//     undefined,
//     "Sajib Khan",
//     null,
//     "Sk",
//     NaN,
//     "",
//     "Epu",
//     0,
//     false,
//     true

// ];

// complex way

// const truthy = arr.filter(function (el) {
//     if(el){
//         return true;
//     }else{
//         return false;
//     }
// })


// easy way
// const truthy = arr.filter(Boolean)

// console.log(truthy);

// pb: 6 || Find the falsy value from an Object 


const obj = {
    a : undefined,
    b: "sk",
    c: null,
    d: "Khan",
    e: NaN,
    f: false,
    g: "",
    h: 0,
    i: "nayeem"

}


const truthyObject = function (obj) {
    for(let i in obj){
        if(!obj[i]) {
            delete obj[i]; 
        }
    }

    return obj;
}

console.log(truthyObject(obj));

