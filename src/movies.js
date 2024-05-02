// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    let allDir = [];
    movies.forEach((movie) => {
        if (!allDir.includes(movie.director)) {
            allDir.push(movie.director);
        }
    });
    return allDir;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    if (!movies) return 0;
    let dramaSteven = movies.filter((movie) => {
        return (
            movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
        );
    });
    return dramaSteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (movies.length === 0) return 0;
    let total = movies.reduce((acc, rat) => {
        if (rat.score) {
       return acc + rat.score; 
    } else {
        return acc;
    }
    },0);
    let average = (total / movies.length).toFixed(2);
    return Number(average);
}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    if (movies.length === 0) return 0;
    const dramaFilm = movies.filter((movie) => movie.genre.includes("Drama"));

    return scoresAverage(dramaFilm);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let newArr = movies.map((movie) => movie);

    newArr.sort((movieA, movieB) => {
        if (movieA.year > movieB.year) return movieA.year - movieB.year;
        if (movieA.year < movieB.year) return movieA.year - movieB.year;
        else return movieA.title.localeCompare(movieB.title);
    });
   return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let newArr = movies.map((movie) => movie.title)
        .sort()
        .slice(0, 20);
    return newArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
