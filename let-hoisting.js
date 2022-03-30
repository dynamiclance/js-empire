
/* Hoisting 

    Var assign kore upore define kore rakhe | create temporary dead zone
    let assign kore but not define | Not create temporary dead zone

*/



var x = 2;
console.log(x);


{
    var x = 22;
}

console.log(x);