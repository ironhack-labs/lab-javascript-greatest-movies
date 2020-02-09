/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
// Create a function `orderByYear()` that receives an array as parameter and returns a _new sorted array_.
// If two movies have the same year, order them in alphabetical order by their title! :heavy_check_mark:

function orderByYear(moviesArray) {
  let copyMoviesArray = moviesArray.slice(); //necessary to copy an array
  let result = copyMoviesArray.sort(function(a, b) {
    if (a.year > b.year) {
      return 1;
    } else {
      return -1;
    }
  });
  return result;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
/*One of the most famous directors in cinema is **[Steven
    
    Spielberg](https://en.wikipedia.org/wiki/Steven_Spielberg)**, and 
    he has some really awesome drama movies that are on our list, but we want to 
    know how many of them are there.
Go ahead and create a `howManyMovies()` function that receives an array as a param
eter and `filter` :eyes: the array so we can have only the **drama** movies where
 **Steven Spielberg** is the director.
*/

function howManyMovies(moviesArray) {
  let spielbergMovies = moviesArray.filter(
    element =>
      element.director === 'Steven Spielberg' && element.genre.includes('Drama')
  );
  return spielbergMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
// to sort them alphabetically using the `title` key.
/*However, in this case, we only need to print the title of the first 20.

Create a `orderAlphabetically()` function, that receives an array and 
returns an array of first 20 titles, alphabetically ordered. Return only the title of each 
movie, and if the array you receive has less than 20 movies, return all of them */

function orderAlphabetically(moviesArray) {
  let copyMoviesArray2 = moviesArray.slice(); //necessary to copy an array

  let newAlphabeticallyOrder = copyMoviesArray2.sort(function(a, b) {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  });

  return newAlphabeticallyOrder
    .map(function(movies) {
      return movies.title;
    })
    .slice(0, 20);
}

// console.log / orderAlphabetically(movies) listet die ersten 20 Filme, alphabetisch sortiert.

// orderAlphabetically(movies) to see it in the console.log

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
// These are the best movies based on their rates, so supposedly all of
// them have a remarkable rate. In this iteration, we want to know the average rate of
// all of them and display it on the console. Create a `ratesAverage()` function that
// receives an array as a parameter and solves the challenge.
// The rate must be returned rounded to 2 decimals!

//alle movies zu rate mappen

function getAverage(moviesArray) {
  let onlyRates = moviesArray.map(function(movie) {
    return movie.rate;
  });
  console.log(onlyRates);

  //Average values of the rates with reduce
  let newArray = onlyRates;
  average =
    newArray.reduce(function(sum, value) {
      return sum + value;
    }, 0) / newArray.length;
  console.log(average);

  return Math.round(average);
}

/* 
var array = [129, 139, 155, 176],
  average =
    array.reduce(function(sum, value) {
      return sum + value;
    }, 0) / array.length;

console.log(average);
*/
// function ratesAverage (moviesArray) {
//         return moviesArray.rate.rate((a,b) => (a+b))/moviesArray.rate.length;
//     }

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
