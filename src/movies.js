// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {
    let allDirectors = arr.map(function (movie) {
      return movie.director;
    });
    return allDirectors;
  }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

  function howManyMovies(arr) {
    let spielbergDramaMovies = arr.filter(function (movie) {
      return (
        movie.director === "Steven Spielberg" &&
        movie.genre.indexOf("Drama") !== -1
      );
    });
    return spielbergDramaMovies.length;
  }
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
  function ratesAverage(arr) {
    if (arr.length === 0) {
      return 0;
    }
    let averageRate = arr.reduce(function (accumulator, movie) {
      if (!movie.rate) {
        return accumulator;
      }
      return accumulator + movie.rate;
    }, 0);
    return Math.round((averageRate / arr.length) * 100) / 100;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let dramaMovies = arr.filter(function (movie) {
        return movie.genre.indexOf("Drama") !== -1})
    let averageDramaRate = ratesAverage(dramaMovies);
        return averageDramaRate;}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Solution with sort

function orderByYear(arr) {
    let sortedMovies = [...arr].sort(function(movieOne, movieTwo) {
        if (movieOne.year === movieTwo.year) {
            if (movieOne.title < movieTwo.title) {
                return -1;
            }
            else if (movieOne.title > movieTwo.title) {
                return 1;
            }
        }
        return movieOne.year - movieTwo.year;
    });
    return sortedMovies;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  let alphabeticalMovies = arr
    .sort( function(movieOne, movieTwo) {
      if (movieOne.title > movieTwo.title)
        return 1;
      if (movieOne.title < movieTwo.title)
        return -1;
    })
    .map( function(movie) {
      return movie.title
    });
  

  return alphabeticalMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
