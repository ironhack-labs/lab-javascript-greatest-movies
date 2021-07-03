// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllDirectors = (directors) => {
    return directors.map(movie => movie.director)
    }

getAllDirectors(movies);



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = movies.filter((films) => 
films.director === "Steven Spielberg" && films.genre.includes("Drama"));
;
console.log(howManyMovies.length);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function getScoresAverage (score) {

  let total = 0;
  for (let i = 0; i < score.length; i++) {
    total += score[i].score;
  }
  return total / score.length;
}
  
const result = getScoresAverage(movies);
console.log(result.toFixed(2));



// Iteration 4: Drama movies - Get the average of Drama Movies

const filteredMovies = movies.filter((element) => {
  return element.genre.includes("Drama");
});

function DramaMoviesScore (score) {
  let total = 0;
  for (let i = 0; i < score.length; i++) {
    total += score[i].score;
} 
  return total / score.length;
}

const result = DramaMoviesScore(filteredMovies);
console.log(result.toFixed(1));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

[movies.year].sort(function (a, b) {
  return a - b;
});

function dramaMoviesScore () {

console.log(movies);
}

dramaMoviesScore();



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

movies.sort(function  (a, b) {
  if (a.title.toLowerCase() < b.title.toLowerCase()
     ) return -1;
  if (a.title.toLowerCase() > b.title.toLowerCase()
      ) return 1;
  return 0;
});

function orderByYear () {
console.log(movies.slice(0,20));
}

orderByYear();

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
