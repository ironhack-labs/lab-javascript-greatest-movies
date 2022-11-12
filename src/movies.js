// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = moviesArray =>moviesArray.map((movie) => movie.director);

//Iteration 1.1: no duplicates.
const getUniqueDirectors = moviesArray => moviesArray.map((movie) => movie.director).filter(
    (director, index) => allDirectors.indexOf(director) !== index)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  //we need this for my solution because I did't make two steps for calculation. 
  //in fact the array methods can treat empty arrays without problem
  //but we can not divide a number by zeo, that's why we should do the empty array check. 
  if (moviesArray.length === 0) return 0;
  return parseFloat((moviesArray
         .filter((movie) => movie.score)
         .reduce((cumul, movie) => (cumul += +movie.score), 0)
         /moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let newArray = moviesArray.filter((movie) => movie.genre.includes("Drama"));
  if (newArray.length === 0) return 0;
  return scoresAverage(newArray);
}

/* function dramaMoviesScore(moviesArray) {
  const dramaArray = moviesArray.filter(movie => movie.genre.includes("Drama"))
  if(dramaArray.length ===0) return 0
  return dramaArray.reduce((cumul, movie) => cumul += +movie.score, 0)/dramaArray.length
} */

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // make a copy before sort()
  const workArray = [].concat(moviesArray);
  return workArray.sort((a,b)=> {
    if(a.year === b.year) return a.title.localeCompare(b.title) 
    return a.year - b.year})
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  //make a copy before sort()
  const workArray = moviesArray.map((movie) => movie.title);
  workArray.sort();
  if (workArray.length > 20) return workArray.splice(0, 20);
  return workArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    let hoursAndMinutes = 0;
    // shawlow copy of an object
    let newMovie = Object.assign({}, movie);

if (!newMovie.duration.includes("min")) {
      hoursAndMinutes = newMovie.duration.match(/\d+/)[0];
      newMovie.duration = hoursAndMinutes[0] * 60;
    } else {
      hoursAndMinutes = newMovie.duration
        .split(" ")
        .map((member) => member.match(/\d+/)[0]);
      newMovie.duration = hoursAndMinutes[0] * 60 + +hoursAndMinutes[1];
    }
    return newMovie;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  const yearAverageObj = arrangeMoviesByYear(moviesArray);
  let bestYear = { year: 2022, score: 0 };
  //get score averages
  Object.keys(yearAverageObj).map((key) => {
    yearAverageObj[key] = scoresAverage(yearAverageObj[key]);
    if (
      yearAverageObj[key] > bestYear.score ||
      (yearAverageObj[key] == bestYear.score && key < bestYear.year)
    ) {
      bestYear.year = key;
      bestYear.score = yearAverageObj[key];
    }
  });

  return `The best year was ${bestYear.year} with an average score of ${bestYear.score}`;
}

function arrangeMoviesByYear(moviesArray) {
  const moviesByYearObj = {};
  const years = [...new Set(moviesArray.map((movie) => movie.year))];
  for (i in years) {
    moviesByYearObj[years[i]] = [];
  }
  moviesArray.map((movie) => moviesByYearObj[movie.year].push(movie));
  return moviesByYearObj;
}
