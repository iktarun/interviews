function sortArr(arr) {
  let leftPtr = 0;
  let rightPtr = 0;
  let n = arr.length;
  let outputArr = [];

  // Check the middle point where postitive and negative no is dividning into 2 halves
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      leftPtr = i - 1;
      rightPtr = i;
      break;
    }
  }

  //   if(i === n-1 || (leftPtr === 0 && rightPtr === 0)){
  //     for(let i= 0; i< n;i++){
  //         outputArr.push(arr);
  //     }
  //   }

  while (leftPtr >= 0 && rightPtr < n) {
    let leftArrSqr = arr[leftPtr] * arr[leftPtr];
    let rightArrSqr = arr[rightPtr] * arr[rightPtr];
    if (leftArrSqr < rightArrSqr) {
      outputArr.push(leftArrSqr);
      leftPtr--;
    } else {
      outputArr.push(rightArrSqr);
      rightPtr++;
    }
  }

  //if left Arr does not react to 0 index
  while (leftPtr >= 0) {
    let leftArrSqr = arr[leftPtr] * arr[leftPtr];
    outputArr.push(leftArrSqr);
    leftPtr--;
  }

  //if right Arr does not react to 0 index
  while (rightPtr < n) {
    let rightArrSqr = arr[rightPtr] * arr[rightPtr];
    outputArr.push(rightArrSqr);
    rightPtr--;
  }

  return outputArr;
}

const arr = [-6, -3, -1, 2, 4, 5];
const res = sortArr(arr);
console.log("resulted array:", res);

// function arrSumZero(arr) {
//   let n = arr.length;
//   let map = new Map();
//   let currSum = 0;
//   let res = false;
//   for (let i = 0; i < n; i++) {
//     currSum += arr[i];
//     if (!map.has(currSum) && currSum !== 0) {
//       map.set(currSum, true);
//     } else {
//       res = true;
//       break;
//     }
//   }
//   return res;
// }

// let res = arrSumZero([1, 2, -3]);
// console.log("Arr Sum res:", res);
