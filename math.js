
// Generate a random number between 1 - 90
// console.log( Math.floor(Math.random() * 90 ) + 1 );



function getRandom(max,min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let randomNum = getRandom(90,50)
console.log(randomNum)