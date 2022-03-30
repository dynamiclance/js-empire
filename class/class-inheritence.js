

// class inheritance


// class Car {
//     constructor(brand){
//         this.carName = brand;
//     }

//     present() {
//         return "My Car Brand Name is: " +  this.carName;
//     }
// }


// class Model extends Car {
//     constructor(brand, model){
//         super(brand);
//         this.model = model;
//     }

//     show() {
//         return this.present() + " it's model: " + this.model;
//     }
// }


// let myCar = new Model("Audi", "Turbo");

// console.log(myCar.show());


// Getter and Setter Method


class Car {
    constructor(brand) {
      this.carName = brand;
    }
    get cnam() {
      return this.carName;
    }
    // set cnam(x) {
    //   this.carName = x;
    // }
  }
  
  let myCar = new Car("Ford");
  
console.log(myCar.cnam);