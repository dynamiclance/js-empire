// try {
//     aslert("Welcome guest!");
//   }
//   catch(err) {
//    console.log( err.name);
//   }



let x = 12;

try {
  if(x == "") throw "empty";
  if(isNaN(x)) throw "not a number";
  x = Number(x);
  if(x < 5) throw "too low";
  if(x > 10) throw {
    message: "too high",
    name: "High err"
  };
}
catch(err) {
   console.log(err);
}

finally{
  console.log("No error occur")
}