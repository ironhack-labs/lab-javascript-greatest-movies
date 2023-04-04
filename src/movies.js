// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies){
const newArray = movies.map(directorsNames => directorsNames.director)
return newArray
}
let dList = getAllDirectors(movies)
console.log(dList)



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const filteredMovies = movies.filter(movie => 
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
    return filteredMovies.length;
  }
 


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray){
  //1.Creating a new array with movie scores
moviesArray = movies.map(movie => movie.score) 
console.log(moviesArray);
    if (moviesArray.length === 0) {
    return 0;
    }
  //2.Make the sum of all movies scores
  const sumMovies = moviesArray.reduce((accumulator, movie) => {return accumulator + movie.score}, 0)
   if (typeof moviesArray.score !== 'number') {
    return accumulator;
    }
  return accumulator + movie.score;
}
 //3.To get the average score: divide all movies scores by the total array length 
 console.log(sumMovies/moviesArray.length) //Why isn't the code working?! 



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
//1. Create a new array for Drama movies only
const dramaMoviesList = movies.filter(movie => movie.genre.includes('Drama'))
//2.Mapping dramaMovieList array to extract the drama scores of each movie to another array "dramaScores"
const dramaScores = dramaMoviesList.map(movie => movie.score || " " || 0);
//3. Using reduce to sum the scores from the previous array
const dramaticSum = dramaScores.reduce((acc, score) => acc + score, 0);
//3.1 Dividing dramaticSum by the length of the dramaScores array to calculate the average score
const avg = dramaticSum/ dramaScores.length;
//4.Returning the result rounded to 2 decimal places as a number using the Number() function and the toFixed() method
return Number(avg.toFixed(2));
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  //1. Creating a new array using spread operator
  const sortedMovies = [...movies];
  //2. Utilising .Sort Method
  sortedMovies.sort((a, b) => {
    if(a.year === b.year){
      return a.title.localeCompare(b.title);  // If two movies have the same year, order them alphabetically by their title
    }else{
      return a.year - b.year;                 // Otherwise, order them by their year in ascending order
    };
  });
return sortedMovies;
}

const sortedMovies = orderByYear(movies);
console.log(sortedMovies);


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}