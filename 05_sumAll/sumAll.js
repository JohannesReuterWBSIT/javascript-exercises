const sumAll = function (sumFrom, sumTo) {
  let sum = 0;
  if (!Number.isInteger(sumFrom) || !Number.isInteger(sumTo)) return "ERROR";
  if (sumFrom < 0 || sumTo < 0) return "ERROR";
  if (sumFrom > sumTo) {
    const temp = sumFrom;
    sumFrom = sumTo;
    sumTo = temp;
  }
  for (let i = sumFrom; i <= sumTo; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
