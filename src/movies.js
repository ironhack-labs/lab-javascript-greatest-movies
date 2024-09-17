// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((element) => element.director);
  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const spielbergFilms = moviesArray.filter(
    (film) =>
      film.director === "Steven Spielberg" && film.genre.includes("Drama")
  );
  return spielbergFilms.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

/* My initial interpretation of the "should return average even if one of
the movies does not have score" test was that if a given object does not
contain a score property, or if it does contain a score property but the value
is not a number, then remove that object from the averaging calculation. I thought this
made sense as you would not want to divide by a moviesArray.length number that includes 
such objects. In the process of working this out, I discovered the hasOwnProperty method, 
which is cool. I included the code for the solution to that specific interpretation below. 
I then looked in the movies.spec.js file and found that such objects are in fact to be included 
in the moviesArray.length. 

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const onlyMoviesWithScores = moviesArray.filter(x => x.hasOwnProperty('score') && typeof x.score === 'number');
  const average = Math.round(((onlyMoviesWithScores.reduce((a, b) => a + b.score, 0)) / onlyMoviesWithScores.length) * 100) / 100;
  return average
}
*/

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  for (x of moviesArray) {
    if (!x.hasOwnProperty("score") || typeof x.score !== "number") {
      x.score = 0; //I wanted to find a solution that doesn't mutate moviesArray, but couldn't fine one
    }
  }
  const average =
    Math.round(
      (moviesArray.reduce((a, b) => a + b.score, 0) / moviesArray.length) * 100
    ) / 100;
  return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  const dramas = moviesArray.filter((x) => x.genre.includes("Drama"));
  if (dramas.length === 0) return 0;
  const average =
    Math.round(
      (dramas.reduce((a, b) => a + b.score, 0) / dramas.length) * 100
    ) / 100;
  return average;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArray = moviesArray.filter((x) => x);
  newArray.sort(function (a, b) {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
  });
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map((x) => x.title);
  titles.sort();
  const first20 = titles.slice(0, 20);
  return first20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
