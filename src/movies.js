 

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(function(movie){
        return movie.director;
        })
    return directors
}
 
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenSpielbergDramas = moviesArray.filter(function(movie){
        if (movie.genre.includes(`Drama`)) {
            return movie.director === `Steven Spielberg`;
        };
    })
    if (stevenSpielbergDramas.length === 0){
        return 0;
    }
    return stevenSpielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const scoreSum = moviesArray.reduce(function(acc, val){
        if (!val.score){
            val.score = 0;
        }
            return acc + val.score;
    }, 0);
    const averageScore = Number((scoreSum/moviesArray.length).toFixed(2));
    if (moviesArray.length == 0) {
        return 0;
    }
    return averageScore
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function(movie){
        if (movie.genre.includes(`Drama`)){
            return movie
        };
    })
    const dramaMoviesAverage = scoresAverage(dramaMovies);
    return dramaMoviesAverage;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedByYearAndAlpha = moviesArray.splice(0, moviesArray.length).sort(function(a,b){
        if (a.year === b.year){
            if ( a.title < b.title ){
                return -1;
              }
              if ( a.title > b.title ){
                return 1;
              }
              return 0;
            }
         return a.year - b.year
     })
     return sortedByYearAndAlpha
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitles = moviesArray.map(function(movie){
        return movie.title;
     })
     const alphabeticalArr = movieTitles.sort().slice(0,20);
    return alphabeticalArr
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const movieDurations = moviesArray.map(function(movie){
        let hoursStr = movie.duration.indexOf(`h`);
        let minsStr = movie.duration.indexOf(`m`);
        let hours = Number(movie.duration.slice(0,hoursStr));
        let minutes = Number(movie.duration.slice(hoursStr+2, minsStr));
        let minuteDuration = (hours*60)+minutes;
        movie.duration = minuteDuration;
		return movie;
    })
    return movieDurations;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
