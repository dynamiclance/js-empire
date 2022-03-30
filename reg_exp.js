
/* 
    A regular expression is a sequence of characters that forms a search pattern.
    Regular expressions can be used to perform all types of text search and text replace operations.


*/


// let text = "I love Me";
// let n = text.search(/me/i);
// console.log(n);


// let text = "I love me, i want to go with me";
// let n = text.replace(/me/g, "you");
// console.log(n);



const pattern = /e/;
let result = pattern.exec(" I love you");
console.log(result)

