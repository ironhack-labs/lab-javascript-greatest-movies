/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let copyMovies = moviesArray.slice()
  console.log(moviesArray)
  let result = copyMovies.sort(function (a, b) {
    // the way to access a special position inside an object
    if (a.year > b.year) {
      return 1
    } else {
      return -1
    }
  })
  return result
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(moviesArray) {
  let moviesSpielberg = moviesArray.filter(element => element.director === "Steven Spielberg" && element.genre.includes("Drama"))
  //console.log(moviesSpielberg)
  return moviesSpielberg.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let copyMovies2 = moviesArray.slice()
  let moviesAlphabetical = copyMovies2.sort(function (a, b) {
    if (a.title > b.title) {
      console.log(a.title)
      return 1
    } else {
      return -1
    }
  })
  return moviesAlphabetical.map(element => {
    return element.title
  }).slice(0, 20)
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
/* These are the best movies based on their rates, so supposedly all of them have a 
remarkable rate. In this iteration, we want to know the average rate of all of them and 
display it on the console. Create a ratesAverage() function that receives an array as a 
parameter and solves the challenge.
The rate must be returned rounded to 2 decimals!
💡 Maybe you want to "reduce" the data to a single value.*/

/*function ratesAverage(moviesArray) {
  let sumAverage = moviesArray.reduce(function (sum, rateMovie) {
    return sum + rateMovie.rate
  }, 0)
  //console.log(averageRate = (sumAverage / moviesArray.length).toFixed(2))
  console.log(sumAverage)
  return sumAverage
  //return averageRate = (sumAverage / moviesArray.length).toFixed(2)
}*/

function ratesAverage(moviesArray) {
  let mappedArray = moviesArray.map(movie => { return movie.rate })
  console.log(mappedArray)
  let sumAverage = mappedArray.reduce(function (sum, n) {return sum + n}, 0)
  console.log(sumAverage)
  return sumAverage
  //return (sumAverage / moviesArray.length).toFixed(2)
}

/* cheating starts here - option for the rounding thing
function roundTo(n, digits) {
  var negative = false;
  if (digits === undefined) {
      digits = 0;
  }
      if( n < 0) {
      negative = true;
    n = n * -1;
  }
  var multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  n = (Math.round(n) / multiplicator).toFixed(2);
  if( negative ) {    
      n = (n * -1).toFixed(2);
  }
  return n;
}
*/


// Iteration 5: Drama movies - Get the average of Drama Movies
/*Drama is the genre that repeats the most on our array. Apparently, people love drama! 👀
Create a dramaMoviesRate() function that receives an array as a parameter to get the 
average rate of all drama movies! Let's see if it is better than the general average.
Again, rounded to 2 decimals!*/

function dramaMoviesRate(moviesArray) {
  let mappedGenreArray = moviesArray.map(movie => {return movie.genre})
  let mappedDramaArray = mappedGenreArray.map(movie => {return movie.includes("Drama")})
  let mappedArray = mappedDramaArray.map(movie => { return movie.rate })
  console.log(mappedArray)
  let sumAverage = mappedArray.reduce(function (sum, n) {return sum + n}, 0)
  console.log(sumAverage)
  return sumAverage

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average