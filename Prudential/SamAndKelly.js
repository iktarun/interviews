/*
 * Complete the 'minNum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER samDaily
 *  2. INTEGER kellyDaily
 *  3. INTEGER difference
/**
 * Can Kelly solve enough code challenges to catch up with Sam?
Sam and Kelly are programming buddies. Kelly resolves to practice more as Sam is ahead initially. They each solve a number of problems daily. Find the minimum number of days for Kelly to have solved more problems than Sam. If Kelly cannot surpass return -1.
 *  */

function minNum(samDaily, kellyDaily, difference) {
  // Write your code here
  if (kellyDaily <= samDaily) {
    return -1;
  }

  var d = 0;
  var samCount = difference;
  var kellyCount = 0;
  while (kellyCount <= samCount) {
    d += 1;
    samCount += samDaily;
    kellyCount += kellyDaily;
  }

  return d;
}
