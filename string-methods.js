// NOTE: There are 3 methods for extracting a part of a string | 1. slice() 2. substring() 3. substr()
// NOTE : Strings are immutable: Strings cannot be changed, only replaced.
// NOTE: JavaScript counts positions from zero.
// NOTE: Undefined value + datatype 2tay
// NOTE: split() method always return an array


// 1. SLICE() METHOD EXAMPLE 

// let str = "Apple, Banana, Kiwi";
// let part = str.slice(7, 13);

// console.log(part)


// let str = "Apple, Rose, umbrella";
// let part = str.slice(-15, -10);

// console.log(part);

// 2. substring() method example 

/*  

    substring() is similar to slice().
    The difference is that substring() cannot accept negative indexes. 
    If you omit the second parameter, substring() will slice out the rest of the string.

*/ 


// let str2 = "Apple, Rose, umbrella";
// let part2 = str2.substring(7);

// console.log(part2);

// 3. substr() method example 

/*

    substr() is similar to slice().
    The difference is that the second parameter specifies the length of the extracted part.
    If you omit the second parameter, substr() will slice out the rest of the string.

*/


// REPLACE STRING CONTENT METHOD USING replace() method

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");

// console.log(newText);



// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" | ", text2);
// console.log(text3)

// let text = "HELLO WORLD";
// let char = text.charAt(5); //using for index position

// console.log(char);


// SPLIT()

let text = "Sajib Khan akta bokachoda";
console.log(text.split(""));