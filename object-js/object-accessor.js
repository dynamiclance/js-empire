
// Getter | Get Keyword
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "",
//     get lang(){
//         return this.language;
//     },

//     get fullName() {
//         return this.firstName + " " + this.lastName;
//     }
//   };

//   console.log(person.fullName);



// Setter | Set Keyword

  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
  };


  person.language = "bn";


  console.log(person.language)