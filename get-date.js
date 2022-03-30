const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let cMonth = months[d.getMonth()];
let today = d.getDay();
console.log(cMonth);
console.log(today)

