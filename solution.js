function majorityElement(array) {
  // Write your code here.
  let counter = 0
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      (array[j] == array[i]) ? counter ++ : counter --
    }
      if (counter > 0) {
        return array[i]
      } else {
        counter = 0
      }
  }
  return -1;
}

// Do not edit the line below.
exports.majorityElement = majorityElement;
