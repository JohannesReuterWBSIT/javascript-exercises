const repeatString = function (input, repeatFor) {
  let fullstring = "";
  if (repeatFor < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < repeatFor; i++) {
      fullstring += input;
    }
    return fullstring;
  }
};

// Do not edit below this line
module.exports = repeatString;
