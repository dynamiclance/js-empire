
// In JS all function are object method | for normal function object is window


const person = {
    fullName: function(city, job) {
      return this.firstName + " " + this.lastName + city + " " + job;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
  console.log(person.fullName.call(person2, "Dhaka", "Student"));