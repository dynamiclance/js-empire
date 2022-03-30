// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruits2 = fruits.sort();  // Sort Method sorts array Alphabetically

// console.log(fruits2)

// const points = [40, 100, 1, 5, 25, 10];
// points.sort( function(a,b) {
//     return b-a
// })

const points = [40, 100, 1, 5, 25, 10];
const max = points.sort( function(a,b) {
    return b-a
})[0]

console.log(max)





// console.log(points)
// console.log("Highest value: " + points[0])
// console.log("lowest value: " + points[points.length-1])

// const points = [40, 100, 1, 5, 25, 10];
// points.sort( function(a,b) {
//     return 0.5 - Math.random()
// })

// console.log(points)


// points.sort(function(a, b){return 0.5 - Math.random()});

// console.log(points);



// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];


//   const carsCom = cars.sort( function(a,b) {
//       return a.year - b.year
//   })

//   console.log(carsCom)

