// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  /*  const directors = moviesArray.map(movie => movie.director);
    return directors; */
   /* const directors = moviesArray.map(function(movie) {
        return movie.director
    })
        */
    return moviesArray.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    // return moviesArray.filter(movie =>  {
    //     if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
    //         return movie
    //     }
    // })

    return moviesArray.filter(movie => (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) ).length
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0; // Handle empty array
  
    const totalScore = moviesArray.reduce((accumulator, movie) => {
      return accumulator + (movie.score || 0); // Handle missing scores
    }, 0);
    
    return parseFloat((totalScore / moviesArray.length).toFixed(2)); // Round to 2 decimals
  }
  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    
    if (dramaMovies.length === 0) return 0; // Handle no drama movies
  
    const totalScore = dramaMovies.reduce((accumulator, movie) => {
      return accumulator + (movie.score || 0);
    }, 0);
    
    return parseFloat((totalScore / dramaMovies.length).toFixed(2)); // Round to 2 decimals
  }
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray].sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title); // Alphabetical order if years are the same
      }
      return a.year - b.year; // Ascending order by year
    });
  }
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map(movie => movie.title);
    return titles.sort().slice(0, 20); // Sort and return first 20 titles
  }
  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
