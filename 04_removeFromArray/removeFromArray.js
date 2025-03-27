const removeFromArray = function (input, args) {
  //removes the elements of args in input array
  let outputArray = input;
  for (let i = 1; i < arguments.length; i++) {
    outputArray = outputArray.filter((element) => element !== arguments[i]);
  }
  return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
