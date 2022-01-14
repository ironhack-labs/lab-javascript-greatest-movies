//let fs = require("fs");
const movies = require("./data");
//let Data = fs.readFileSync("./data.js", "utf-8");

console.log(howManyMovies())

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {
  let Directors = []
  movies.forEach(element => {
    Directors.push(element.Directors)
  });
  return Directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies() {
  let counter = 0;
  movies.forEach(element => {
    if (element.director == 'Steven Spielberg')
    {
      counter++;
    }
  });
  return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {
  let Average = 0;
  movies.forEach(element => {
      Average += element.scoresAverage;
  });
  return (Average / movies.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {
  let Average = 0;
  let Counter = 0;
  movies.forEach(element => {
      if (element.genre.find("Drama"))
      {
        Average += element.score;
        Counter++;
      }
  });
  return Average/Counter;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
  return movies.sort((a) => a.score);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  return movies.sort((a) => a.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {
  const newArray = movies.map(function (movie) {
    return movie.duration * 60;  
  }
  )
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {


}



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
