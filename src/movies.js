
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const rawList = moviesArray.map((movie) => movie.director);
    const cleanList = rawList.filter((director, index) => rawList.indexOf(director) === index);
    return cleanList;
  }

// Iteration 2: Steven Spielberg. The best? - How man   y drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray != ""){
        const stevenMovies = moviesArray.filter((movie) => movie.director === 'Steven Spielberg');
        const stevenDramaMovies = stevenMovies.filter((drama) => drama.genre.includes("Drama"));
        return stevenDramaMovies.length;
    } else {
        return 0;
    }
}    

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray != ""){
        const totalScore = moviesArray.reduce((acc, score) => acc + score.score, 0); 
        const totalAvg = totalScore / moviesArray.length;
        return Math.round(totalAvg * 1e2) / 1e2;    
    } else {
        return 0;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((drama) => drama.genre.includes('Drama'));
    if(dramaMovies == ""){
        return 0;
    }
    const totalScore = dramaMovies.reduce((acc, score) => acc + score.score, 0); 
    const totalAvg = totalScore / dramaMovies.length;
    return Math.round(totalAvg * 1e2) / 1e2;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray){
    const moviesCopy = [...moviesArray];
    const sortedByYear = moviesCopy.sort((a,b) => a.year - b.year || a.title.localeCompare(b.title));
    return sortedByYear;
}

//I've used https://www.benmvp.com/blog/quick-way-sort-javascript-array-multiple-fields/ to know how to compare two conditions(the strings).

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy = [...moviesArray];
    const sortedByTittle = moviesCopy.sort((a,b) => a.title.localeCompare(b.title));
    const titleOnlyArray = sortedByTittle.map(({title}) => title)
    const first20Titles = titleOnlyArray.slice(0,20);
    return first20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
