
// async keyword  will return promise 


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


async function course() {
    try{
        await enroll();
        await progress();
        const message = await getCertificate();

        console.log(message);
    } catch(err){
        console.log(err)
    }
}

course()