Array.reduce = function (callback, intitalAcc) {
  if (typeof callback !== "function") {
    throw new TypeError("Reducer is not a function, please check!");
  }

  let acc = intitalAcc;

  let arr = this;
  let i = 0;

  if (!intitalAcc) {
    acc = arr[0];
    i = 1;
  }

  for (i; i < arr.length; i++) {
    acc = callback.apply(this, acc, arr[i]);
  }

  return acc;
};

let arr = [1, 2, 3, 4, 5];

function sum(acc, val) {
  return acc + val;
}

console.log("Input Array:", arr);
let res = arr.reduce(sum, 0);
console.log("Resulted Array:", res);
