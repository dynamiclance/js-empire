
// const el = document.querySelectorAll("p.intro");
// console.log(el[0])

const form = document.forms['frm1'];
console.log(form)

let text = "";

for(let i =0; i<form.length;i++) {
    text = text + form.elements[i].value + "<br>";
}

document.getElementById("demo").innerHTML = text;