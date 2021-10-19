// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  console.log('uno', movies);
  const directors = movies.map(function(movie, index, arry) {
    return movie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if(movies.length === 0){
    return 0;
  } 
  else {
    const spiel = movies.filter(function(movie) {
      if(movie.director == "Steven Spielberg" && movie.genre.includes("Drama")) {
        return movie
      }
    })
    return spiel.length
  }
} 


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(scores) {
  console.log('ITERATION 3 INPUT": ', scores);

  if(scores.length === 0){
    return 0;
  } else {
    const sum = scores.reduce(function (accumulator, currentValue) {
      if(currentValue.score === '' || currentValue.score === null || currentValue.score === undefined) {
        return accumulator;
      } else {
        return accumulator + currentValue.score;
      }
    }, 0);
    
    var average = (sum/scores.length).toFixed(2);
    return parseFloat(average);
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(dramaArr) {
  //console.log('Iteration 4 Input:', dramaArr);

    const dramaMovies = dramaArr.filter(dramaArr=>dramaArr.genre=='Drama');
    console.log(dramaMovies);
    if(dramaMovies.length === 0) {
      return 0;
    } 
    else {var sum = dramaMovies.reduce(function (accumulator, currentValue) {
      if(currentValue.score==='' || currentValue.score === null || currentValue.score === undefined) {
        return accumulator;
      } else {
        return accumulator + currentValue.score;
      }
      }, 0);
  
      var average = (sum/dramaMovies.length).toFixed(2);
      return parseFloat(average);
    }
  }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(yearReleased) {
  console.log('Iteration 5 Input:', yearReleased);
const newArr = [...yearReleased];
const yearsInOrder = newArr.sort(function(a, b){
    if (b.year > a.year) {
      return -1;
    } else if (b.year < a.year) {
      return 1;
    } else if (b.title > a.title) {
      return -1;
    } else {
      return 1;
    }
    })

  return yearsInOrder;
  }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  console.log('Iteration 6 movie titles are: ', movies)
  return movies.map(function (movie) {
  return movie.title;
  
})
.sort()
.slice(0,20);
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
    bestYearAvg,
  };
}
