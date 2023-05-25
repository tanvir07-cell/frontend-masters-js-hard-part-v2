// Link of all these problems: http://csbin.io/callbacks

function addTwo(num) {
  return num + 2;
}

// console.log(addTwo(2));

function addS(word) {
  return word + "s";
}
// console.log(addS("Tanvir"));

function map(arr, callback) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(callback(arr[i]));
  }
  return output;
}
const multiplyBy2 = (num) => num * 2;
// console.log(map([1, 2, 3], multiplyBy2));

let alphabate = "";
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
  console.log(alphabate);
}

const addStr = (char) => (alphabate += char);
// forEach(["a", "b", "c"], addStr);

function mapWith(arr, callback) {
  let output = [];
  arr.forEach((a) => {
    output.push(callback(a));
  });
  console.log(output);
}

// mapWith([10, 20, 30], (num) => num * 2);

function reduce(nums, add, initialValue) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += add(nums[i], initialValue);
  }
  return sum;
}
// console.log(
//   "The sum is : ",
//   reduce([1, 2, 3, 4, 5], (a, b) => a + b, 0)
// );

function intersection(arrays) {
  return arrays.reduce((acc, cur) => {
    return acc.filter((el) => cur.includes(el));
  });
}

console.log(
  intersection([
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20],
  ])
);
