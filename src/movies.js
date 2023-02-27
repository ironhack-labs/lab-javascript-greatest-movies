// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorArr = movies.map(function(moviesObj){
        return moviesObj.director;
    });
    return directorArr ;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
       } 
       if (!moviesArray.map(m=>m.director).includes('Steven Spielberg'))
       {
        return 0;
       }
    const dramaMovie = moviesArray.filter(function(moviesArray){
        if ( moviesArray.director === 'Steven Spielberg' && moviesArray.genre.includes('Drama') ) {
            return moviesArray;
    }});

     return dramaMovie.length;
    };

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
        if (moviesArray.length === 0) {
          return 0;
        }
let isScore8 = movies.filter(function(element){
    return element.score === 8 ;
}); 

let total = isScore8.reduce(function(accumulator, element){
    let newAccumulator = accumulator + element.score;
    return newAccumulator;
},0);

let averageScore = total / isScore8.length ;
return Math.round(averageScore * 100) / 100;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
     const dramaMovies = moviesArray.filter(function(element){
        return element.genre.includes('Drama');
    });
  }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
