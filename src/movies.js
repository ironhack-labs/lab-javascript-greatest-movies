// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((_value, index) => moviesArray[index].director);
    return allDirectors;
}

// Iteration 1.1
function getUniqueDirectors(moviesArray) {
    const allDirectors = getAllDirectors(moviesArray);
    const uniqueDirectors = allDirectors.filter((value, index) => allDirectors.indexOf(value) === index);
    return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const filteredByDirector = moviesArray.filter((_value, index) => moviesArray[index].director === "Steven Spielberg" && moviesArray[index].genre.includes("Drama"))
    return filteredByDirector.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    const averageRating = moviesArray.reduce((agg, currentMovie) => {
        if ("score" in currentMovie === false || currentMovie.score === "") {
            currentMovie.score = 0;
        }
        return agg + currentMovie.score}, 0) / moviesArray.length;
    return Math.round(averageRating * 100) / 100;           
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const filteredByDrama = moviesArray.filter((_value, index) => moviesArray[index].genre.includes("Drama"));
    return scoresAverage(filteredByDrama);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyOfMoviesArray = JSON.parse(JSON.stringify(moviesArray));
    const orderedByYear = copyOfMoviesArray.sort((a,b) => {
        if (a.year !== b.year){
            return a.year - b.year
        };
        return (a.title > b.title) ? 1 : -1})       
    return orderedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copyOfMoviesArray = JSON.parse(JSON.stringify(moviesArray));
    const movieTitles = copyOfMoviesArray.map((_value, index) => moviesArray[index].title).sort();
    return movieTitles.splice(0,20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function transformDuration(str) {
    const arr = str.split(" ");
    return (arr.length === 1) ? 60 * parseInt(arr[0]) : 60 * parseInt(arr[0]) + parseInt(arr[1]);
}

function turnHoursToMinutes(moviesArray) {
    const copyOfMoviesArray = JSON.parse(JSON.stringify(moviesArray));
    const transformedArray = copyOfMoviesArray.map((movie) => {
        movie.duration = transformDuration(movie.duration);
        return movie});
    return transformedArray;
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
/* function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0){
        return null;
    }
    const orderedByYearArray = orderByYear(moviesArray);
    let moviesPerYear = 0;
    let scorePerYear = 0;
    orderedByYearArray.reduce((a,b) => {
        if (a.year === b.year) {
            moviesPerYear += 1;
            scorePerYear += b.score;
        }
    }
} */
