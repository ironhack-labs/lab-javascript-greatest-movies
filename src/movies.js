const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  let directorsArray = movies.map(function(movie){
    return movie.director;
  });
  return directorsArray;
}
directorsArray = getAllDirectors(movies);
// console.log(directorsArray.length)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

let cleanedDirectorsArray = [];
for (let i = 0; i < directorsArray.length; i++) {
  if (cleanedDirectorsArray.indexOf(directorsArray[i]) === -1)
    cleanedDirectorsArray.push(directorsArray[i]);
}
// console.log(cleanedDirectorsArray.length)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let dramasBySpielberg = movies.filter(function (movie) {
      return (movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') > -1);
  });
  return dramasBySpielberg.length;
}
// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0; // In case there are no movies
  const sumOfRatings = movies.reduce(function (acc, movie) {
    return acc + (movie.score || 0); // Doesn't sum up if there's no rating
  }, 0);
  return parseFloat((sumOfRatings / movies.length).toFixed(2));
}
// console.log(scoresAverage(movies));
/* Message to TAs: this passes the test but just because the test EXPECTS wrong averages
(the code is still dividing by the original movies.length regardless of the existence of all scores) */

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(function (movie) {
    if (movie.genre.indexOf('Drama') > -1)
      return movie;
  });
  //console.log(dramaMovies.length)
  return scoresAverage(dramaMovies);
}
//console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  // Makes a copy so that original array won't be changed
  let moviesClone = JSON.parse(JSON.stringify(movies));
  
  // Sort movies by year
  let sortedMovies = moviesClone.sort(function (a, b) {
    return a.year - b.year;
  });
  
  // If year is the same, sort array by title
  sortedMovies = sortedMovies.sort(function(a, b) {
    if (a.year === b.year)
      return a.title.localeCompare(b.title);
  });
  
  return sortedMovies;
}
// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  // Makes a copy so that original array won't be changed
  let moviesClone = JSON.parse(JSON.stringify(movies));
  // Sort movies alphabetically
  let sortedMovies = moviesClone.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });

  // Creates a new array with titles only
  let onlyNames = sortedMovies.map(function (movie) {
    return movie.title;
  });
  
  // Returns only the 20 first titles
  return onlyNames.splice(0,20);
} 
// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  // Makes a copy so that original array won't be changed
 let moviesClone = JSON.parse(JSON.stringify(movies));
 let hours, minutes;
 
 moviesClone.forEach(function(movie) {
   /* Gets the first character of the duration (for instance 
   a string with value '2') and parses it to an integer */
   hours = parseInt(movie.duration.slice(0,1));
   
   /* Some movies have exactly 2h duration so they don't have
   anything on the position 3 of the string. In that case,
   minutes should receive the value 0.
   
   If any other case, the string '22' will become the number 22
   for instance, and if the minutes are less than 10 (for 
   example: '2h 3m'), the string will get '3m' but after parsing 
   to integer, the value will be 3 */
   minutes = parseInt(movie.duration.slice(3,5)) || 0;
   movie.duration = hours*60 + minutes;
 });
 return moviesClone;
}
// console.log (turnHoursToMinutes(movies))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(movies) {
  if (movies.length === 0) return null; // In case there are no movies

  // Makes a copy so that original array won't be changed
  let moviesClone = JSON.parse(JSON.stringify(movies));
  
  // Creates a new array with only year and score attributes
  // of each movie
  let yearsAndScoresArray = moviesClone.map(function (movie) {
    return {
      year: movie.year,
      score: movie.score
    };
  });
  
  // Creates a new array with unique years
  let uniqueYearsArray = [];
  for (let i = 0; i < yearsAndScoresArray.length; i++) {
    if (uniqueYearsArray.indexOf(yearsAndScoresArray[i].year) === -1)
      uniqueYearsArray.push(yearsAndScoresArray[i].year);
  }
    
  /* Creates a new array containing just the sum of scores of every year (stored on the same index 
  as that of the year)  
  Also creates yet another array, containing the amount of entries (movies) of that specific year
  (also on the same index as that of the year) */
  let uniqueYearsArrayWithRatings = [];
  let entries = [];
  for (let i = 0; i < uniqueYearsArray.length; i++) {
    for (let j = 0; j < yearsAndScoresArray.length; j++) {
      if (yearsAndScoresArray[j].year === uniqueYearsArray[i]) {
        uniqueYearsArrayWithRatings[i] = (uniqueYearsArrayWithRatings[i] || 0) + yearsAndScoresArray[j].score;
        entries[i] = (entries[i] || 0) + 1;
      }
    }
  }
  
  //console.log ('uniqueYearsArray:')
  //console.log(uniqueYearsArray)
  //console.log ('uniqueYearsArrayWithRatings:')
  //console.log(uniqueYearsArrayWithRatings)
  //console.log ('counter:')
  //console.log(counter)
  
  // Creates the final array, with each element representing one year and its score average
  let finalArray = [];
  for (let i = 0; i < uniqueYearsArray.length; i++) {
    finalArray[i] = {
      year: uniqueYearsArray[i],
      avg: parseFloat((uniqueYearsArrayWithRatings[i]/entries[i]).toFixed(2))
    };
  }
  // console.log(finalArray);
 
  // Checks which year has the best average. In case of a tie, the winner is the oldest year
  let bestYear = {year : 0, avg : 0};
  for (let i = 0; i < finalArray.length; i++) {
      if (finalArray[i].avg >= bestYear.avg) {
        bestYear.avg = finalArray[i].avg
        if (bestYear.year === 0 || finalArray[i].year < bestYear.year)
            bestYear.year = finalArray[i].year
      }
  }
  return (`The best year was ${bestYear.year} with an average score of ${bestYear.avg}`);
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