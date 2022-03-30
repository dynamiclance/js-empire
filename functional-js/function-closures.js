
// Nested Function | Nested functions have access to the scope "above" them.
// A closure is a function having access to the parent scope, even after the parent function has closed.


 function temporary() {
    let counter = 0;

    return function() {
       return counter += 1;
    };
}

const add = temporary();

function myFunction() {
    document.getElementById("demo").innerHTML = add();
}

 