// // explicitly amra jeivabe function theke object create kori with Object.create() diye:

// function userCreator(name, score) {
//   const newUser = Object.create(userFunctionStore);
//   newUser.name = name;
//   newUser.score = score;
//   return newUser;
// }
// const userFunctionStore = {
//   // always parent function ti (increment()) ti normal function e likhte hobe and tar child function(add1()) arrow or normal function e likha jabe:
//   increment: function () {
//     console.log(this);
//     function add1() {
//       console.log(this);
//       this.score++;
//     }
//     // ei add1.cal(this) er maddome amora increment er this kei niyechi function add1()er moddeh jodi amra emon nah kortam tahole add1() ei normal function er this ti global ke refere korto:
//     add1.call(this);

//     return this.score;
//   },

//   login: function () {
//     console.log("Logged in");
//   },
// };
// const user1 = userCreator("Will", 3);
// const user2 = userCreator("Tim", 5);
// console.log(user1.increment());

// implicit vabe jeivabe new() diye object create hoy:
function CreateUser(name, age) {
  this.name = name;
  this.age = age;
}

// we set the prototype property of this CreateUser function and that's why any object creates from CreateUser has linked with this prototype object via __proto__
CreateUser.prototype.increment = function () {
  this.age++;
  return this.age;
};

const user1 = new CreateUser("Tanvir", 22);

// user1.__proto__ has this increment() method:
console.log(user1.increment());
