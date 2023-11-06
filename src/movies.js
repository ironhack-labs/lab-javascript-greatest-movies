// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = [];
    for(let i in moviesArray){
        directors[i] = moviesArray[i].director;
    }
    //removing duplicates
    const unifiedDirectors = directors.filter((item, 
        index) => directors.indexOf(item) === index); 
    return unifiedDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramaMovies = moviesArray.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.toString().includes("Drama"));
    return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length == 0)
        return 0;
    
    const sum = moviesArray.reduce((accum, currValue) => {
        if(typeof currValue.score === "number"){
            return accum + currValue.score;
        }
        return accum;
      }, 0);

    let avg = (sum / moviesArray.length);
    avg = parseFloat(avg.toFixed(2));

    return avg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => movie.genre.toString().includes("Drama"));
    if(dramaMovies.length == 0)
        return 0;
    
    const sum = dramaMovies.reduce((accum, currValue) => {
        if(typeof currValue.score === "number"){
            return accum + currValue.score;
        }
        return accum;
      }, 0);

    let avg = (sum / dramaMovies.length);
    avg = parseFloat(avg.toFixed(2));

    return avg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.slice().sort((a, b) => {
        if (a === b) return 0;
        return a.year > b.year ? 1 : -1;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitles = moviesArray.map((movie) => movie.title);
    const orderedTitles = movieTitles.slice().sort((a, b) => {
        if (a === b) return 0;
        return a > b ? 1 : -1;
    });
    
    if(orderedTitles.length <= 20){
        return orderedTitles;
    }

    const topTwenty = [];
    for (let i = 0 ; i < 20 ; i++){
        topTwenty[i] = orderedTitles[i];
    }
    return topTwenty;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
