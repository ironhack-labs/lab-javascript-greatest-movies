/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
  let sumOfRating = arr.reduce((sum, curr) => {
    let ratingAsFloat = parseFloat(curr.rate);
    return sum += ratingAsFloat;
  }, 0)

  let averageRating = sumOfRating/arr.length;
  let avgRounded = parseFloat(averageRating.toFixed(2));

  return avgRounded;
}

// iteration 1: fancy function
function ratesAverageFancy(arr) {
  return parseFloat((arr.reduce((sum, curr) => sum += parseFloat(curr.rate), 0)/arr.length).toFixed(2));;
}

 
// Iteration 2: Drama movies - Get the average of Drama Movies


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
