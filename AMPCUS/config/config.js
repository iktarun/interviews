// Route config hash map table, will return the stop details in O(1)

const routeConfigDictionary = {
  1: {
    baseName: "H.S.R. Layout",
    distanceFromOrigin: 0,
  },
  2: {
    baseName: "Madiwala",
    distanceFromOrigin: 5,
  },
  3: {
    baseName: "Forum",
    distanceFromOrigin: 11,
  },
  4: {
    baseName: "Shanthinagara",
    distanceFromOrigin: 15,
  },
  5: {
    baseName: "Richmond Circle",
    distanceFromOrigin: 18,
  },
  6: {
    baseName: "Chancery Pavillion",
    distanceFromOrigin: 23,
  },
  7: {
    baseName: "Bowring Institute",
    distanceFromOrigin: 25,
  },
  8: {
    baseName: "Bangalore Club",
    distanceFromOrigin: 27,
  },
  9: {
    baseName: "Indian Express",
    distanceFromOrigin: 29,
  },
  10: {
    baseName: "Vasantanagara",
    distanceFromOrigin: 30,
  },
  11: {
    baseName: "RM Guttahalli",
    distanceFromOrigin: 33,
  },
  12: {
    baseName: "Mekhri Circle",
    distanceFromOrigin: 35,
  },
  13: {
    baseName: "Hebbala",
    distanceFromOrigin: 37,
  },
  14: {
    baseName: "Hebbala",
    distanceFromOrigin: 62,
  },
};

// The Object.freeze() method freezes an object
Object.freeze(routeConfigDictionary);

/* we will store the list of the plans we had in the system, currently there are three. It might changed the rate in future, 
  * this confirg will deail with the future increase or decrease rates
  1. < 3
  2. > 3 and < 20
  3. > 20
  */

let pricingPlan = {
  plan1: {
    rate: 3,
    rangeFrom: 0,
    rangeTo: 3,
  },
  plan2: {
    rate: 2,
    rangeFrom: 3,
    rangeTo: 20,
  },
  plan3: {
    rate: 1,
    rangeFrom: 20,
    rangeTo: Number.MAX_SAFE_INTEGER,
  },
};

// The Object.freeze() method freezes an object
Object.freeze(pricingPlan);

const errorsConfig = {
  routeMissing: "Route is missing in the database, please calculate manually",
  wrongPath:
    "Wrong stop source destination, please try to switch source with the destination stop",
  inputType: "Wrong input type, please pass numeric value",
};

Object.freeze(errorsConfig);

module.exports = {
  routeConfigDictionary,
  pricingPlan,
  errorsConfig,
};
