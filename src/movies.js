// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   const directors = moviesArray.map((movie) => movie.director);
   const uniqueDirectors = directors.filter((elem, i, arr) => arr.indexOf(elem) ===i);

    return uniqueDirectors;
}
 
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
 return moviesArray.filter((eachMovie) => eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama")).length;
}

 
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length ===0 ) {
        return 0;
    }
else {
    const averageScore =
    moviesArray.reduce((acc, val) => {
        return acc + val.score;},0) / moviesArray.length;
        return Math.round(averageScore*100)/100
}

}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    } else if (
      moviesArray.filter((movie) => movie.genre.includes("Drama")).length === 0
    ) {
      return 0;
    } else {
      let isDrama = moviesArray.filter((movie) => movie.genre.includes("Drama"));
      const avgScore =
        isDrama.reduce((acc, val) => {
          return acc + val.score;
        }, 0) / isDrama.length;
      return avgScore;
    }
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let copyMovies = moviesArray.map((element) => element);
    let mixMovies = copyMovies.sort((a,b) => a.year - b.year)
   
    return mixMovies
    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
    const orderAlphabetically = (moviesArray) => {
    const sortedMovies = [...moviesArray];
    sortedMovies.sort((firstMovie, secondMovie) => {
      return firstMovie.title.localeCompare(secondMovie.title);
    });
    const movieTitles = sortedMovies.map((movie) => movie.title);
    return movieTitles.slice(0, 20);
  }; // I just found the solution 

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(hourString) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
