// The solution could be Proxy the object in here

function typecheck(obj) {
  obj = new Proxy(obj, {
    get(obj, phrase) {
      // intercept reading a property from dictionary
      if (phrase in obj) {
        // if we have it in the dictionary
        console.log("Proxy", phrase.split("_"));
        return obj[phrase]; // return the translation
      } else {
        // otherwise, return the non-translated phrase
        return phrase;
      }
    },
  });
  return obj;
}

let obj = {
  name_string: "Ranga Komarthi",
  price_float: 12.0,
  age_number: 20,
  am_boolean: true,
  units_int: 20,
};

/* name_string = true -> throw Error
modifiedObject.name_string -> throw error */
let obj1 = {
  name_string: true,
  price_float: 12,
  age_number: "20",
  am_boolean: true,
  units_int: 20,
};

const modifiedObject = typecheck(object);
modifiedObject.name_string;

/* modifiedObject.name_string = "Ranga Komarthi" */

//Q. Create a function which will return the object based on the key vand its type
