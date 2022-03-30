
// Server side validation is performed by a web server, after input has been sent to the server.

// Client side validation is performed by a web browser, before input is sent to a web server.


// function validateForm() {
//     const form = document.forms['myForm'];
//     console.dir(form)
//     const value = form["fname"].value;
  
//     if(value === "") {
//         alert("please type something");
//         return false;
//     }

   
// }


function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }