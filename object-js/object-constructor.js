
// constructor:  hocce akta kathamo jeida bebohar kore diffrent different person banano jay

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    },
    this.changeName = function (name) {
        return this.lastName = name;
      };

    this.lang = "English"
  }
  
const sk = new Person("Sajib", "Khan", 23);
// const nayeem = new Person("Nayeem", "parvez", 23);

sk.changeName("JOHN");

console.log(sk.fullName());

// console.log(nayeem.lang)
// console.log(sk.lang)
