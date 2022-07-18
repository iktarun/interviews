function deepCopy(source, dest) {
  for (let item in source) {
    if (typeof item !== "object") {
      dest[item] = source[item];
    } else {
      dest[item] = {};
      deepCopy(source[item], dest[item]);
    }
  }
}

let obj = {
  name: "Tarun",
  address: {
    city: "Bangalore",
    pinCode: 31232,
  },
};

let dest = {};
deepCopy(obj, dest);
console.log("Result:", dest);
