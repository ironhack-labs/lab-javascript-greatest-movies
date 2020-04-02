/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(newArr) {
  let array2 = [...newArr];
  let orderByYear = array2.sort(function(objA, objB) {
    if (objA.year < objB.year) {
      return -1;
    }
    if (objA.year > objB.year) {
      return 1;
    }
    if (objA.year === objB.year) {
      if (objA.title < objB.title) {
        return -1;
      }
      if (objA.title > objB.title) {
        return 1;
      }
      if (objA.title === objB.title) {
        return 0;
      }
    }
  });
  return orderByYear;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

/*Go ahead and create a howManyMovies() function that receives an array as a parameter and filter 👀 
the array so we can have only the drama movies where Steven Spielberg is the director.
*/

function howManyMovies(array) {
  /* if (num=0){

    };
    return num
    */
  if (array.length === 0) {
    return 0;
  }
  const newArray = array.filter(function(obj, i, originalArr) {
    if (obj.director === "Steven Spielberg" && obj.genre.includes("Drama")) {
      return true;
    }
  });

  return newArray.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(newArray) {
  let array3 = [...newArray];
  let order = array3
    .sort(function(objA, objB) {
      if (objA.title < objB.title) {
        return -1;
      }
      if (objA.title > objB.title) {
        return 1;
      }
      if (objA.title === objB.title) {
        return 0;
      }
    })
    .map(function(movie, index, originalArr) {
      return movie.title;
    });
  if (order.length > 20) {
    return order.slice(0, 20);
  }
  return order;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(newArr) {
  let array4 = [...newArr];
  const rates = array4
    .map(function(rateObj, i) {
      if (rateObj.rate >= 8 && rateObj.rate <= 8.9) return rateObj.rate;
    })
    .reduce(function(acc, rateObj, i, originalArr) {
      let updatedAcc = acc + rateObj.rate;

      return updatedAcc;
    }, 0);
  let average = updatedAcc / array4.length;
  let averageRounded = average.toFixed(2);

  return rates;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(newArray) {
  const newFilterArray = newArray
    .filter(function(obj, i, originalArr) {
      if (newArray === obj.genre.includes("Drama")) {
        return true;
      }
      return newFilterArray;
    })
    .map(function(movie, index, originalArr) {
      return movie.rate;
    })
    .reduce(function(acc, moviej, i, originalArr) {
      let updatedAcc = acc + movie.rate;

      return updatedAcc;
    }, 0);
  let average = updatedAcc / newFilterArray.length;
  let averageRounded = average.toFixed(2);

  return newFilterArray;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
