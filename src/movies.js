// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
const arrayOfDirectors = movies.map(movie => movie.director);
return arrayOfDirectors;
   
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
const SpielbergDramaMovies = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama") ); 
return SpielbergDramaMovies.length;

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {

    const moviesWithScores = movies.filter(movie => typeof movie.score === "number");

    if (moviesWithScores.length === 0) {
        return 0;
         }
    const sum = moviesWithScores.reduce((total, movie) => total + movie.score, 0);
    const average = sum / moviesWithScores.length;
  
    return parseFloat(average.toFixed(2));
  }



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
 const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
 const dramaMoviesWithScores = dramaMovies.filter(movie => typeof movie.score === "number");
 if (dramaMoviesWithScores.length === 0){
    return 0;
 }
 const sum = dramaMoviesWithScores.reduce((total,movie)=> total + movie.score, 0);
 const average = sum / dramaMoviesWithScores.length;
return parseFloat(average.toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const newMoviesArray = Array.from(movies);
    const sortedNewMoviesArray = newMoviesArray.sort((movie1, movie2) => {
        if (movie1.year === movie2.year) {
            return movie1.title.localeCompare(movie2.title);
          }
        else {
            return movie1.year - movie2.year;} });

    return sortedNewMoviesArray;
        }
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const newMoviesArray = Array.from(movies);
    const alphabeticallySortedMovies = newMoviesArray.sort((movie1, movie2) => {
      return movie1.title.localeCompare(movie2.title);
    });
  
    const first20Movies = [];
    for (let i = 0; i < 20 && i < alphabeticallySortedMovies.length; i++) {
      first20Movies.push(alphabeticallySortedMovies[i].title);
    }
  
    return first20Movies;
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
