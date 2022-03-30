
/* 
    A closures is a function with remembered values that means akta function ke jokon tar nijer duniar baire theke orthat 
    parent scope theke kicu access korete hoy tokon take close kore nijer kace niye aste hoy 

*/

// Example 1

// function bankAccount(initialValue) {
//     let balance = initialValue;
//     return function () {
//         return balance;
//     }
// }

// const sum = bankAccount(10000);
// console.dir(sum);

// Example 2


var a;

function async() {
    a = 20; 
    var myFunc = () => {
        console.log(a);  // a = 30 || closures just variable ar reference ke daron kore pora vaiable ke na
    }

    setTimeout(myFunc, 3000);

    // console.dir(a)
}

async();

a = 30;


