// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const getAllDirectors = movies.map(object => object.director);
    return getAllDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = movies.filter(object => object.director === 'Steven Spielberg' && (object.genre.includes("Drama")));
   
    return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const totalPts = movies.reduce(function(sum, review) {return sum + review.score}, 0);

    const avgRating = totalPts / movies.length

    //const result = avgRating.toFixed(2); -can't figure out why this won't work? was fine in codePen
    
    return avgRating // return result
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const allDramas = movies.filter(object => object.genre.includes("Drama"));
   
const dramaPts = allDramas.reduce(function(sum, review) {return sum + review.score}, 0);

const avgRating = dramaPts / movies.length

// const result = avgRating.toFixed(2); -- again, not sure why this didn't work

return avgRating // return result

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    function compare( a, b ) {
        if ( a.movie.year < b.movie.year ){
          return -1;
        }
        if ( a.movie.year > b.movie.year ){
          return 1;
        }
        return 0;
      }
      
      const sortedMovies = movies.sort( compare );

      return sortedMovies
    


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
