// class is the syntactical sugar and it's work same as the function() we create in the classes.js file:

class CreateUser {
  // constructor behaves both function and object:
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //   prototype property er moddeh ei incrementAge() ti duke jabe:
  incrementAge() {
    this.age++;
    return this.age;
  }
}

const user1 = new CreateUser("Tanvir Rifat", 22);

// get the incrementAge() function with __proto__;
console.log(user1.incrementAge());
