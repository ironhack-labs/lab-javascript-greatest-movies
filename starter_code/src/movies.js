/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let newArr = movies.sort((x, y) => {
    if (x.year > y.year) {
      return 1;
    } else if (x.year < y.year) {
      return -1;
    }
  });
  let sortedArr = [...newArr];
  return sortedArr;
}

orderByYear(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  let madeBySpielberg = movies.filter(
    element =>
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
  );
  return madeBySpielberg.length;
}

howManyMovies(movies);

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
/*Create a orderAlphabetically() function, that receives an array and returns an array of 
first 20 titles, alphabetically ordered. Return only the title of each movie, and if the array 
you receive has less than 20 movies, return all of them.*/
function orderAlphabetically(movies) {
  let moviesArr = [...movies];
  let newArr = moviesArr.sort((x, y) => {
    if (x.title > y.title) {
      return 1;
    } else if (x.title < y.title) {
      return -1;
    }
  });
  return newArr
    .map(function(movies) {
      return movies.title;
    })
    .slice(0, 20);
}

orderAlphabetically(movies);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
//Create a ratesAverage() function that receives an array as a parameter and solves the challenge.
//The rate must be returned rounded to 2 decimals!

function ratesAverage(movies) {
  let ratesArray = movies.map(function(movies) {
    return movies.rate;
  });
  let rates =
    ratesArray.reduce(function(sum, value) {
      return sum + value;
    }, 0) / ratesArray.length;
  console.log(rates);
  return Number(rates.toFixed(2));
}
ratesAverage(movies);

// Iteration 5: Drama movies - Get the average of Drama Movies
//Create a dramaMoviesRate() function that receives an array as a
//parameter to get the average rate of all drama movies!
//Again, rounded to 2 decimals!

function dramaMoviesRate(movies) {
  let newArr = [...movies];
  let dramaArray = newArr.filter(element => element.genre.includes("Drama"));
  return ratesAverage(dramaArray);
}

dramaMoviesRate(movies);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
/*Create a turnHoursToMinutes() function that receives an array as parameter,
replaces the duration info of each of the movies for its equivalent in minutes*/
function turnHoursToMinutes(arr){
    
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
