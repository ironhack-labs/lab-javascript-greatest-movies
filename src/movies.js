// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = [];
  moviesArray.filter((ele) => {
    //_Bonus_:  if (directors.findIndex(ele.director)===-1) directors.push(ele.director);
    directors.push(ele.director);
  });
  return directors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let temp = [];
  moviesArray.filter(ele => {
    ele.director === "Steven Spielberg" && ele.genre.includes('Drama') ? temp.push(ele) : null;
  })
  return temp.length; 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0; 
  let points = moviesArray.reduce((acc, cur) => {
    return cur.score ? acc + cur.score : acc; 
  }, 0);
  return +(points / moviesArray.length).toFixed(2);
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) return 0;
  let dramaNum = 0;
  dramaNum = moviesArray.filter((ele) =>
    ele.genre.includes("Drama") ? dramaNum++ : null
  );
  let points = moviesArray.reduce((acc, cur) => {
    return cur.score && cur.genre.includes("Drama") ? acc + cur.score : acc;
  }, 0);
  return +(points / dramaNum.length).toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
