// The Difference Between call() and apply()


// The call() method takes arguments separately.

// The apply() method takes arguments as an array.


const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));


  // How to find a max value from an arr without loop

  const arr = [2, 5, 66];
  console.log(Math.max.apply(Math, arr));

 