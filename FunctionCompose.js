// function compose means hocceh onekgula function ekti function e jabe and ekti function er output arekti function e jabe jotokkhon obdi amar final output nah paoaa jay:

const multiplyBy2 = (x) => x * 2;
const square = (x) => x * x;

const functionCompose = (arrOfFunc, reducerFunc, acc) => {
  for (let i = 0; i < arrOfFunc.length; i++) {
    acc = reducerFunc(arrOfFunc[i], acc);
  }
  return acc;
};

const reducerFunc = (fn, input) => fn(input);
console.log(functionCompose([multiplyBy2, square], reducerFunc, 2));
