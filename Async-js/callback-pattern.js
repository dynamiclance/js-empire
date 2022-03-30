
let payment = false;
let mark = 90;

function enroll(callback) {
    console.log("Course Enrollment in progress... wait for a while!");

    setTimeout(function() {
        if(payment){
            callback();
        } else{
            console.log("Payment wasn't successful");
        }
    }, 2000);
    
}


function progress(callback) {
    console.log("The course is just started...");

    setTimeout(function() {
        if(mark >= 80) {
            callback();
        }else{
            console.log("Your mark wasn't enough to get certificate");
        }
        
    }, 3000);
}


function getCertificate() {
    console.log("Preparing your certificate");

    setTimeout(function() {
        console.log("Congrats you have got the certificate");
    }, 1000);

}


enroll(function(){
    progress(getCertificate);
})