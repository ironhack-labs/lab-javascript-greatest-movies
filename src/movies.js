// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = [];
    for (let i = 0; i < moviesArray.length; i++) {
      directors.push(moviesArray[i].director);
    }
    return directors;
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergDramas = moviesArray.filter(function(movie) {
      return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    });
    return spielbergDramas.length;
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray)  {
    if (moviesArray.length === 0) {
      return 0;
    }
    let totalScore = moviesArray.reduce(function(acc, movie) {
      if (movie.hasOwnProperty("score") && typeof movie.score === "number") {
        return acc + movie.score;
      } else {
        return acc;
      }
    }, 0);
  
    let averageScore = totalScore / moviesArray.length;
  
    return Math.round(averageScore * 100) / 100;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(function(movie) {
      return movie.genre.includes("Drama");
    });
  
    if (dramaMovies.length === 0) {
      return 0;
    }
  
    let totalScore = dramaMovies.reduce(function(sum, movie) {
      if (movie.hasOwnProperty("score") && typeof movie.score === "number") {
        return sum + movie.score;
      } else {
        return 0;
      }
    }, 0);
  
    let averageScore = totalScore / dramaMovies.length;
  
    let roundedAverageScore = Math.round(averageScore * 100) / 100;
  
    return roundedAverageScore;
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesCopy = moviesArray.slice();
  
    moviesCopy.sort(function(a, b) {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      } else {
        return a.year - b.year;
      }
    });
  
    return moviesCopy;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let titlesArray = moviesArray.map(function(movie) {
      return movie.title;
    });
  
    titlesArray.sort();
  
    if (titlesArray.length < 20) {
      return titlesArray;
    }
    return titlesArray.slice(0, 20);
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
