//const movies = require('./data');

// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const justMovieDirectors = moviesArray.map(function (movie) {
    return movie.director;
  });

  // console.log(justMovieDirectors);
  return justMovieDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// We create a function that looks into an array
// We have to count since the function is asking us to count "how many movies" are in the array
// For that we define an empty variable, that will store the count of movies
// We use the filter method, to loop through the array and we create a function that looks into the movies(objects)
// We create an if statement that returns the values that equal to the director Steven Spielberg
// and we return the movies that equal to Drama. Since these values are inside an array.
// We can retrieve them with the.includes() method

function howManyMovies(array) {
  let stevenDramaMovies = 0;
  array.filter(function (movie) {
    if (movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')) {
      stevenDramaMovies++;
    }
  });
  return stevenDramaMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  // Checks the array length so you can pass the test, in case there are no values in the array
  if (array.length === 0) {
    return 0;
  }
  let totalScore = array.reduce(function (accumulated, currentMovie) {
    // assigns the acummulated and the current Movie object so you can get the total score of all the movies
    if (typeof currentMovie.score != 'number') {
      return accumulated;
      //Conditional statement to skip the scores that are not numbers to pass the test
    } else {
      return accumulated + currentMovie.score;
      //returns the sum of the accumulated scores+ currentMovie.score
    }
  }, 0);
  return Number((totalScore / array.length).toFixed(2));
  //returns the totalScore divided by the array length to get the array length.
  //The to fixed method just reduces the number of decimals by converting it to a string
  //With the Number function we are converting back the string into a number
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  // Gets the count of the drama movies
  let dramaMoviesFilms = 0;
  array.filter(function (currentMovie) {
    if (currentMovie.genre.includes('Drama')) {
      dramaMoviesFilms++;
    }
  }, 0);
  // Gets the scores of the drama movies
  let dramaMoviesScores = array.reduce(function (accumulated, currentMovie) {
    if (currentMovie.genre.includes('Drama')) {
      return accumulated + currentMovie.score;
    } else {
      return accumulated;
    }
  }, 0);
  // Excludes in case there is a zero drama films count
  if (dramaMoviesFilms == 0) {
    return 0;
  }
  return Number((dramaMoviesScores / dramaMoviesFilms).toFixed(2));
  //Returns a number reduced to two decimals
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// Uses the .sort method by year and .slice to copy the existing object
function orderByYear(array) {
  let sortedMoviesByYear = array.slice().sort(function (a, b) {
    // Now the problem is that we need to sort both things at the same time
    //These conditions, the else & if, both check on the properties
    if (a.year === b.year) {
      return a.title < b.title ? -1 : 1;
      // Adapted these from a method I found online https://levelup.gitconnected.com/sort-array-of-objects-by-two-properties-in-javascript-69234fa6f474
      // From my findings the ? mark operator acts as an if statement and it is useful for conditionals when assigning values
      // The question mark operator ? takes three operands: some condition, a value if that condition is true, and a value if that condition is false.
      // When a.title < b.title the value assigned is -1, so in the sort it will be last
      // When a.title>b.title the value assigned is 1, so in the sort  it will be first
    } else {
      return a.year - b.year;
    }
  });
  return sortedMoviesByYear;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  // First the map function iterates every element in the object looking for the title key
  // The function then appends the titles to the movieTitles variable
  let movieTitles = array.map(function (movie) {
    return movie.title;
  });
  // Declares a variable that stores all sorted movie titles
  let sortedMovies = movieTitles.sort();
  let first20Movies = sortedMovies.slice(0, 20);
  // Slices the object just to keep the first 20
  // Does a for loop ot push them into an array
  for (let i = 0; i < sortedMovies.length; i++) {
    //
    first20Movies.push();
  }
  return first20Movies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
