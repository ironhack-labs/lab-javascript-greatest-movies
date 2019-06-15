function countPositivesSumNegatives(input) {
  let newArray = [];
  let positives = [];
  let negatives = [];
  for (let i = 0; i < input.length; i++) {
    if (i <= 0) {
      negatives.push(i);
    } else if (i > 0) {
      positives.push(i);
    }
  }
  positives.reduce(function(a, b) {
    return a + b;
  });
  negatives.reduce(function(a, b) {
    return a + b;
  });
  newArray.push(positives);
  newArray.push(negatives);
  return newArray;
}
