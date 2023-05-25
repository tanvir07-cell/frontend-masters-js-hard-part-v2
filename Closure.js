// lexical scoping: means access outer's scope static variable inside the inner scope

// Closure: which function access the outer's function scope variable inside the inner Function scope(closure means function er maddome outerscope theke lexical scoping er maddome outer scope er variable ke access kora inner function e)

function Outer() {
  let count = 0;
  function inner() {
    // ei inner function lexical scoping er maddome Outer parent scopet theke count er value ti peyeche ei inner function kei Closure bole:
    return ++count;
  }
  return inner;
}

const myFunc = Outer();
console.log(myFunc());
console.log(myFunc());
console.log(myFunc());

const anotherFunc = Outer();
console.log(anotherFunc());
console.log(anotherFunc());
console.log(anotherFunc());
