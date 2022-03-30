
// callback function


// function takeOrder(customer, callback) {
//     console.log(`Take order for ${customer}`);
//     callback(customer);
// }

// function processOrder(customer, callback) {
//     console.log(`Process order for ${customer}`);

//     setTimeout( () => {
//         console.log(`cook done`);
//         console.log(`serve food for ${customer}`);
//         callback(customer);
//     }, 3000);

// }

// function completedOder(customer) {
//     console.log(`Completed order for ${customer}`)
// }


// takeOrder("sajib khan", (customer) => {
//     processOrder(customer, () => {
//         completedOder(customer)
//     });
// });


// promise Ex: 1 - asynchronous operation handle korar jonno

// const hasMetting = false;


// const metting = new Promise( function(resolve, reject)  {

//     const mettingDetails = {
//         name: "Javascript beginner",
//         time:"10Pm",
//         location: "Zoom"
//     }

//     if(!hasMetting) {
//         resolve(mettingDetails)
//     } else{
//        reject( new Error("Metting has been cancelled") );
//     }
// })

// // const addToCalender = function (mettingDetails) {
// //     return new Promise( function (resolve) {
// //         const calender = `metting has been start at ${mettingDetails.time} by ${mettingDetails.location}`;
// //         resolve(calender);
// //     }) 
// // }


// const addToCalender = function (mettingDetails) {
//     const calender = `metting has been start at ${mettingDetails.time} by ${mettingDetails.location}`;
//     return Promise.resolve(calender);
// }

// metting
//     .then(addToCalender)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     })


//     console.log("hello")

// promise Ex: 2

// const promise1 = Promise.resolve("Promise 1");

// const promise2 = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         resolve("resolve 2");
//     }, 2000)
// })


// Promise.all([promise1,promise2]) 
//     .then((res) => {
//         console.log(res)
//     })

// promise Ex: 3

// const promise1 = new Promise( (resolve) => {
//     setTimeout( () => {
//         resolve("Resove 1");
//     },5000)
// });

// const promise2 = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         resolve("resolve 2");
//     }, 2000)
// })


// Promise.race([promise1,promise2]) 
//     .then((res) => {
//         console.log(res)
//     })

// Async-await 

const hasMetting = false;


const metting = new Promise( function(resolve, reject)  {

    const mettingDetails = {
        name: "Javascript beginner",
        time:"10Pm",
        location: "Zoom"
    }

    if(!hasMetting) {
        resolve(mettingDetails)
    } else{
       reject( new Error("Metting has been cancelled") );
    }
})

const addToCalender = function (mettingDetails) {
    const calender = `metting has been start at ${mettingDetails.time} by ${mettingDetails.location}`;
    return Promise.resolve(calender);
}

// metting
//     .then(addToCalender)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     })

async function myFunc() {
    try{
        const mettingDetail = await  metting;
    const calender = await addToCalender(mettingDetail);

    console.log(calender);
    } catch{
        
    }
}
myFunc()





