// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const occurences = moviesArray.reduce((agg, val) => {
        if (agg.indexOf(val)===-1) {
          agg.push(val.director);
        } 
        return agg;
      }, []);
    //console.log(occurences);
    return occurences;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let searchDirector='Steven Spielberg';
    let searchGenre = 'Drama';
 
    if(!moviesArray.length) return 0;
    const arrDirector = moviesArray.filter((val)=>val.director===searchDirector);
    //console.log(arrDirector);
    const arrGenre = arrDirector.filter((val)=>val.genre.indexOf(searchGenre)>-1);
    //console.log(arrGenre);
    return arrGenre.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(!moviesArray.length) return 0;
    let aux,avg;
    const sum = moviesArray.reduce((previousValue, currentValue) => {
        //console.log(currentValue.score);
        if (!currentValue.score) { aux = 0;}
        else aux=currentValue.score;
        return previousValue + aux;
      }, 0)
      avg=sum/moviesArray.length;
      console.log(avg.toFixed(2));
    return +avg.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(!moviesArray.length) return 0;
    let searchGenre = 'Drama';
    const arrGenre = moviesArray.filter((val)=>val.genre.indexOf(searchGenre)>-1);
    return scoresAverage(arrGenre);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    if(!moviesArray.length) return 0;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    if(!moviesArray.length) return 0;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    if(!moviesArray.length) return 0;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if(!moviesArray.length) return 0;
}
