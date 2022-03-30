// function isLeapYear(year) {
//     if( ( year % 4 === 0) || (year % 400 === 0) && (year % 100 !== 0) ) {
//         console.log(`${year} is leap year`)
//     } else{
//         console.log(`${year} is not leap year`)
//     }
// }
// isLeapYear(2016)


// counts the numbers of vowel in a sentence

// const vowels = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

// function countVowel(sentence) {
    
//     let count = 0;
//     let letter = Array.from(sentence);
   
//     letter.forEach(function (value) {
//         if(vowels.includes(value)){
//             count++;
//         }
//     })

//     return count;

// }

// let countNum = countVowel("We are die heart fan of Bangladesh cricket team");
// console.log(countNum)


// find the duplicate values of an array


const nums =  [ 10, 2, 4, 5, 10, 2, 5, 4, 11, 34, 55 ];


const duplicate = nums.filter( function (value, index, array) {
    
    return array.indexOf(value) === index;

})


console.log(duplicate);