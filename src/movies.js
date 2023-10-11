// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// {
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9.3
//   },

function getAllDirectors(moviesArray) {
  let copiedMoviesArr = JSON.parse(JSON.stringify(movies));
  const newArr = copiedMoviesArr.map((elements) => elements.director);
  const withoutDuplicates = [...new Set(newArr)];
  return withoutDuplicates;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

let counter = 0;
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else if (moviesArray.director != "Steven Spielberg") {
    return 0;
  } else if ((moviesArray.director === "Steven Spielberg") === 2) {
    return 2;
  } else if (moviesArray.genre === "drama") {
    counter++;
  }
  return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const allScoresArr = movies.forEach((targetingScores) =>{
        return allScoresArr;
    })
    let result = movies.reduce((acc, curr) => {allScoresArr.curr / allScoresArr.length
    return Math.round( result * 100) / 100
})
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // => sort, create a new array let newArr = [] to copy the original one so the sorting
  // doesnt affect the original array
  // shallow copy is ok
  // let copy = [];
  // copy.sort
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  // => sort
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // => need a deep copy!!
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
