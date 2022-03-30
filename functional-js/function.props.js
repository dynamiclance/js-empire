/* 

    JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
    this will never change to orginal value

    Because of this, objects will behave like they are passed by reference:
    If a function changes an object property, it changes the original value.

*/



// function x(a,b) {
//     a = 7;
//     return a * b;
// }

// let m = 5;
// let n = 6;


// console.log(x(m,n))


// console.log(m);


function x(a) {
    
    a.one = 7;

    return a.one * a.four;
}

let m = {
    one : 1,
    four: 4
}


console.log(x(m))


console.log(m);