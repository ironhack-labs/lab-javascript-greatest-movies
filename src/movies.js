// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(e => e.director)
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    const draMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    const stevenMovies = moviesArray.filter(movie => movie.director ==='Steven Spielberg');
    const stevenDraMovies = draMovies.filter(movie => movie.director ==='Steven Spielberg');    

    return stevenDraMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const total = moviesArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.score;
    }, 0)
    const average = total/moviesArray.length;
    return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const draMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    return scoresAverage(draMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesByYearArray = moviesArray.map((x) => x);
    const alphMoviesByYearArray = moviesByYearArray.sort();
    const alphYearMovies = alphMoviesByYearArray.sort((a, b) => a.year - b.year);
    return alphYearMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    //copio el array de movies a un array con los títulos
   const moviesArray2 = moviesArray.map((x) => x);
   const titlesArray = moviesArray2.map((x) => x.title);
   //Los ordeno por orden alfabético
   const alphOrderedList = titlesArray.sort();
   //Hago que solo se devuelvan 20 elementos
    const top20List = alphOrderedList.slice(0,20);
   return top20List; 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
