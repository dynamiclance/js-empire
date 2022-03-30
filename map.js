const fruits = new Map(
    [

        [
            "apples", 500
        ],

        [
            "orange", 400
        ],

        
    ]
    
    )

    fruits.set("vegetable", 600);
    fruits.set("apples", 200)

    // fruits.delete("apples");

    // console.log(fruits)

    // let has = fruits.has("vegetable");
    // console.log(has)

// let text = "";
//  fruits.forEach (function(value, key) {
//     return text += key + '  =  ' + value
// })

// console.log(text)

let text = "";
for (const x of fruits.entries()) {
    text += x;
}

console.log(text)




// console.log(typeof null);
// console.log(typeof NaN);
// console.log(typeof undefined);
// console.log(typeof [1,2,3,4]  )
// console.log(typeof fruits)


const num = [ 1,2, 3,4,5]
console.log(typeof num)
    