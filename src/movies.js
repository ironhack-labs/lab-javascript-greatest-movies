// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return [...new Set(moviesArray.map((movie) => movie.director))];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDrama = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return spielbergDrama.length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;

  const initialValue = 0;

  const totalScore = moviesArray.reduce(
    (acc, movie) => (typeof movie.score === "number" ? acc + movie.score : acc),
    initialValue
  );

  const avg = totalScore / moviesArray.length;
  return parseFloat(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramasArray = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  return scoresAverage(dramasArray);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedArray = [...moviesArray];
  return sortedArray.sort(function (movieA, movieB) {
    if (movieA.year === movieB.year)
      return movieA.title.localeCompare(movieB.title);
    else return movieA.year - movieB.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  //I will save the movies sorted alphabetically in a new array:
  const sortedArray = [...moviesArray].sort((movieA, movieB) =>
    movieA.title.localeCompare(movieB.title)
  );
  //we only need the 20 first movies titles:
  return sortedArray.slice(0, 20).map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newArray = moviesArray.map((movie) => ({ ...movie }));
  newArray.forEach((movie) => {
    const duration = movie.duration.split(" ");
    const hours = parseInt(duration[0]) || 0; //converting falsey values to zero!
    const minutes = parseInt(duration[1]) || 0;
    movie.duration = hours * 60 + minutes;
  });
  return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) return null;

  //object to get the average by year with year.totalScore and year.movieCount
  const averageScoresByYear = {};

  moviesArray.forEach((movie) => {
    const { year, score } = movie;
    if(!averageScoresByYear[year]) {
      averageScoresByYear[year] = { totalScore: 0, movieCount: 0};
    }    
    averageScoresByYear[year].totalScore += score;
    averageScoresByYear[year].movieCount++;
  });

  for (const year in averageScoresByYear){
    const { totalScore, movieCount } = averageScoresByYear[year];
    averageScoresByYear[year] = totalScore / movieCount;
  }

  let bestYear;
  let maxAvgScore = -Infinity;
  for (const year in averageScoresByYear){
    if(averageScoresByYear[year] > maxAvgScore) {
      maxAvgScore=averageScoresByYear[year];
      bestYear = year;
    }
  }
  return `The best year was ${bestYear} with an average score of ${maxAvgScore}`
}
