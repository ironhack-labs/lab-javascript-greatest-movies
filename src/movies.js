// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
return moviesArray.map (movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {return moviesArray.filter(movie => 
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ).length;}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
// Handle the case where the array is empty
if (moviesArray.length === 0) return 0;
  
// Use reduce to sum all the scores, handling cases where some movies might not have a score
const totalScore = moviesArray.reduce((sum, movie) => {
  return sum + (movie.score || 0); // Add score if it exists, otherwise add 0
}, 0);

// Calculate average and round to 2 decimal places
const averageScore = totalScore / moviesArray.length;
return Number(averageScore.toFixed(2)); // Round and return as a number

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    // Filter the array to only include movies where 'Drama' is one of the genres
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

  // If there are no drama movies, return 0
  if (dramaMovies.length === 0) return 0;

  // Use reduce to calculate the total score of all drama movies
  const totalScore = dramaMovies.reduce((sum, movie) => {
    return sum + (movie.score || 0); // Add score if it exists, otherwise add 0
  }, 0);

  // Calculate the average score
  const averageScore = totalScore / dramaMovies.length;

  // Round to 2 decimal places and return as a number
  return Number(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // Create a copy of the original array to avoid mutating it
  const newArr = moviesArray.slice(); // Using slice to clone the array

  // Sort the array by year, then by title
  return newArr.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  // Create a copy of the original array to avoid mutating it
  const newArr = moviesArray.slice(); // Using slice to clone the array

  // Sort alphabetically by title and then map to get titles
  const sortedTitles = newArr.sort((a, b) => a.title.localeCompare(b.title)).map(movie => movie.title);
  
  // Return only the first 20 titles
  return sortedTitles.slice(0, 20);}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
