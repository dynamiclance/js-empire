
/* 

There has major two different between var and let

    var is function scope
    let is block scope

    var can be redefined with same variable name
    let can't be redefined with same variable name but it can reassign to change the vale

    // const

    const not possible to reassign or redeclare

*/

// if(true) {
//     var x = 10 // possible to access as i said var is function scope
// }
// console.log(x); 

if(true) {
    let x = 10
}
console.log(x); // not possible to access as i said let is block scope