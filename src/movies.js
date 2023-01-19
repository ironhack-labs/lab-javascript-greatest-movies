// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie) => movie.director);
    return directors;
    };

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDrama =  moviesArray.filter((movie) => movie.genre.includes("Drama") && movie.director === "Steven Spielberg");
    return spielbergDrama.length;
};


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;
    const summedScores = moviesArray.reduce((acc, val) => {
        if (!val.score) return acc + 0;
        return acc + val.score;
    }, 0);
    const averageScore = summedScores / moviesArray.length;
    return Number(averageScore.toFixed(2)); 
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (!moviesArray.length) return 0
    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"));
    if (!dramaMovies.length) return 0
    const dramaScore = dramaMovies.reduce((acc, val) => {return acc + val.score}, 0);
    const averageDramaScores = dramaScore / dramaMovies.length
    return Number(averageDramaScores.toFixed(2));
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesToSort = moviesArray.map((movie) => movie);
    //const moviestoSort = [...moviesArray]
    // creates a shallow copy of the array
    const moviesSorted = moviesToSort.sort((a, b) => {
        if (a.year < b.year) return -1;
        else if (a.year > b.year) return 1;
        if (a.title < b.title) return -1;
        else if (a.title > b.title) return 1;
    });
    return moviesSorted;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
