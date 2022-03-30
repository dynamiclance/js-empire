/*
    You can use the following node properties to navigate between nodes with JavaScript:

    parentNode
    childNodes[nodenumber]
    firstChild
    lastChild
    nextSibling
    previousSibling

*/


const p = document.getElementsByTagName("p").innerHTML = "Hello world";
const p1 = document.querySelector("p").nodeType;
const p2 = document.querySelector("p").childNodes[0].nodeValue;

console.log(p);
console.log(p1);
console.log(p2);