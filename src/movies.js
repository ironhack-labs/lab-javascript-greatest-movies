// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map(( obj ) => {
        let director = obj['director'];
        return director;
    });
    return newArray;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let resultado = []
    if(moviesArray.length == 0){
        return 0
    }else if(moviesArray.length > 0){
        resultado = moviesArray.filter(obj => ( obj.director == 'Steven Spielberg' && obj.genre.indexOf('Drama') > -1));
        return resultado.length;
    }else {
        return 0
    }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let resultado = [];
    if(moviesArray.length == 0){
        return 0;
    } else {
        resultado = moviesArray.filter(obj => (obj.score))
        let suma = resultado.map(obj => parseFloat(obj.score)).reduce(( ac, va ) => ac + va);
        let avg = (suma/moviesArray.length).toFixed(2);
        return parseFloat(avg);
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let resultado = [];
    resultado = moviesArray.filter( obj => obj.genre == 'Drama')
    if(resultado.length > 0 ){
        let suma = resultado.map(obj => parseFloat(obj.score)).reduce((ac, va) => ac + va);
        let avg = (suma/resultado.length)
        return parseFloat(avg.toFixed(2));
    }else{
        return 0;
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
