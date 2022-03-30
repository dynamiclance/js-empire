/* 
    A Promise is a JavaScript object that links producing code and consuming code

    A JavaScript Promise object can be:

    - Pending
    - Fulfilled
    - Rejected

    The Promise object supports two properties: 
    - state
    - result.

    Note: You must use a Promise method to handle promises.

*/

// let payment = false;

// console.log("Task 1");

// const promises = new Promise(function(resolve, reject){
    
//     setTimeout(function() {
//         if(payment){
//             resolve("task2");
//         } else {
//             reject("Failed");
//         }
//     },2000);
        
        
// })

// promises
//         .then(function(value){
//             console.log(value);
//         })
//         .catch(function(err) {
//             console.log(err);
//         })


// console.log("Task 3");



// Convert same callback function example to promise 


let payment = true;
let mark = 90;


function enroll() {
    console.log("Please complete payment to get access on course");

    const promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            if(payment){
                resolve();
            }else{
                reject("Sorry! Payment wasn't complete");
            }
        }, 2000);
    })

    return promise;
}



function progress() {
    console.log("The course is just started...");

    const promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            if(mark >= 80){
                resolve();
            }else{
                reject("Your mark wasn't enough to get certificate");
            }
        }, 2000);
    })

    return promise;
}


function getCertificate() {
    console.log("Preparing your certificate");

    const promise = new Promise(function(resolve) {
       setTimeout(function() {
            resolve("congrats! You have got the certificate");
       },1000)
    })

    return promise;

   
}


enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value) {
        console.log(value);
    })
    .catch(function(err) {
        console.log(err);
    })
