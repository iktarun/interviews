// The solution could be Proxy the object in here

function typecheck(obj) {}

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
