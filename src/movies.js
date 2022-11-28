// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const arrayEmpty = (arr) => Array.isArray(arr) && arr.length === 0;


const getAllDirectors = (moviesArray) => moviesArray.map((movie) => movie.director);


// Iteration 2: Steven Spielberg. - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (moviesArray) => moviesArray.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (moviesArray) => {
    const average = moviesArray.reduce((acc, movie) => {

        if (movie.score) {
            return acc + movie.score;
        } else {
            return acc;
        }
    }, 0);
    return arrayEmpty(moviesArray) ? 0 : (average / moviesArray.length).toFixed(2) * 1;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// 

// 
function orderByYear(moviesArray) {


    const sortedMovies = [...moviesArray].sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year;
        }
    }

    )
    return sortedMovies;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = moviesArray.sort((a, b) => a.title.localeCompare(b.title));
    const titles = sortedMovies.map((movie) => movie.title);
    //retrun new array with only 20 elements
    return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesWithMinutes = moviesArray.map((movie) => {
        const duration = movie.duration.split(" ");
        let hours = 0;
        let minutes = 0;
        duration.map((time) => {
            if (time.includes("h")) {
                hours = Number(time.replace("h", ""));
            } else if (time.includes("min")) {
                minutes = Number(time.replace("min", ""));
            }
        });
        return {
            ...movie,
            duration: (hours * 60) + minutes,
        };
    });
    return moviesWithMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
