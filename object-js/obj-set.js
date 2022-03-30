
let a = 'e';
let b = "u";

const letters = new Set();

letters.add(a);
letters.add(b);


letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

//console.log(letters);

letters.forEach(function(value) {
    //console.log(value);
})

const value = letters.values();

for(let x of value) {
    //console.log(x);
}

const entries = letters.entries();

for(let x of entries) {
    console.log(x);
}
