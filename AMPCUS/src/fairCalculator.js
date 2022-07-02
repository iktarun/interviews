const readline = require("readline-sync");

const {
  routeConfigDictionary,
  pricingPlan,
  errorsConfig,
} = require("../config/config");

function calculateFair(source, destination) {
  try {
    let sourceConfig = routeConfigDictionary[source];
    let destinationConfig = routeConfigDictionary[destination];

    // Bases cases
    // Case1: If Route is missing in the database
    if (!sourceConfig || !destinationConfig) {
      throw new Error(errorsConfig.routeMissing);
    }
    // Case2: If Route is missing in the database
    if (source === destination) {
      return 0;
    }
    // case3: if source is a future stop and destination is past stop
    if (destination < source) {
      throw new Error(errorsConfig.wrongPath);
    }

    let totalDistance =
      destinationConfig.distanceFromOrigin - sourceConfig.distanceFromOrigin;
    let totalFair = 0;
    let distanceCovered = 0;

    while (true) {
      if (distanceCovered < pricingPlan.plan1.rangeTo) {
        totalFair += pricingPlan.plan1.rate;
        distanceCovered += pricingPlan.plan1.rate;
      } else if (
        distanceCovered >= pricingPlan.plan1.rangeTo &&
        distanceCovered < pricingPlan.plan2.rangeTo
      ) {
        let distance = totalDistance - distanceCovered;
        if (totalDistance > pricingPlan.plan2.rangeTo) {
          distance = pricingPlan.plan2.rangeTo - distanceCovered;
        }

        totalFair += distance * 2;
        distanceCovered += distance;
      } else {
        let distance = totalDistance - distanceCovered;
        totalFair += distance * pricingPlan.plan3.rate;
        distanceCovered += distance;
      }

      if (distanceCovered >= totalDistance) {
        break;
      }
    }
    return totalFair;
  } catch (err) {
    throw err;
  }
}

/**
 *  Main Utility program
 */

function getFair() {
  try {
    let source = -1;
    let destination = -1;
    source = Number(readline.question("Please Enter source: "));
    destination = Number(readline.question("Please Enter destination: "));
    if (
      typeof source !== "number" ||
      source === "NaN" ||
      typeof destination !== "number" ||
      destination === "Nan"
    ) {
      throw new Error(errorsConfig.inputType);
    }
    let totalFair = calculateFair(source, destination);
    return totalFair;
  } catch (err) {
    console.log("ERROR:", err.message);
  }
}

const totalFair = getFair();
console.log("Total Fair is:", totalFair);

// For export purpose to the use of outerworld
module.exports = {
  getFair,
};
