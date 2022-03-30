"use strict"; // used to avoid unexpected mistake,

 //var x = 13;

// Parent scope 

function y() {
    // Child Scope 
    var x = 3
    console.log(`come from y(): ${x}`)

    function z() {
        console.log(x)
    }
    z();
}

y();

// not possible to access variable from function