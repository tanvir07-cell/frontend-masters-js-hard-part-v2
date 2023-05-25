// HOF = HIGHER ORDER FUNCTION
// HOF means a function that takes an instruction function as a argument then it's parent function(which function takes as an argument as a function) is called the higher order function

// This is the imperative way of coding:
// and map() behind the seen this imperative coding:
function HOF(arr, makeSquareofArrayElement) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(makeSquareofArrayElement(arr[i]));
  }
  return output;
}

function makeSquareofArrayElement(num) {
  return num * 2;
}

console.log(HOF([4, 5, 6], makeSquareofArrayElement));

// declarative coding:
console.log([1, 2, 3].map((num) => num * 2));
