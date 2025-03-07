// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map((movie) => movie.director);
  return directors;
}
console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  let spielbergDramaMovies = moviesArray.filter(
    (potato) =>
      potato.director === "Steven Spielberg" && potato.genre.includes("Drama")
  );
  return spielbergDramaMovies.length;
}
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  let total = moviesArray.reduce((sum, movie) => sum + (movie.score || 0), 0);
  //console.log(total);
  let average = total / moviesArray.length;
  //console.log(average);
  return Number(average.toFixed(2));
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMoviesOnly = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  //console.log(dramaMoviesOnly);
  if (!dramaMoviesOnly.length) {
    return 0;
  }
  if (dramaMoviesOnly.length === 1) {
    return dramaMoviesOnly[0].score;
  }

  let totalDramaScore = dramaMoviesOnly.reduce(
    (sum, movie) => sum + (movie.score || 0),
    0
  );
  //console.log(totalDramaScore);

  let average = totalDramaScore / dramaMoviesOnly.length;
  return Number(average.toFixed(2));
}
console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = moviesArray.slice();

    newArray.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
    return (newArray);
}
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = moviesArray.slice();

    newArray.sort((a, b) => a.title.localeCompare(b.title));
    let titles = newArray.map((movie) => movie.title);
    let top20 = titles.slice(0, 20);

    return (top20);
}
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newArray = 

    return ();

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
