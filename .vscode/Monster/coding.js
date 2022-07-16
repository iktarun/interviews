const arr1 = [1, 2, 3, 2, 3, 1, 2, 5];

/*
1. Set
2. Hash O(n), Time: O(n)
3. Space: O(1), Time: nlogn 
*/

let hash = {};
for (let i = 0; i < arr1.length; i++) {
  hash[arr1[i]] = arr1[i];
}

console.log(Object.values(hash));

//String reverse

//  Some program output like IIFE, closuers
