
// Explicit function biding

const person1 = {

    fullName: function () {
        return this.fName + " " + this.lName;
    }
}

const person2 = {

    fName: "Sajib",
    lName: "Khan",
}

console.log(person1.fullName.call(person2))

