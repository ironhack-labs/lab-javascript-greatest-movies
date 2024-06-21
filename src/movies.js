// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    let uniqueDirets = [];
    movies.map((movie) => {
        if (!uniqueDirets.includes(movies.director)) {
            uniqueDirets.push(movie.director);
        }
    })
return uniqueDirets;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    if (!movies.length) return 0;

    let stevenDrama = movies.filter((movie) => {
        return (
            movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    });

    let dramaMovies = stevenDrama.length;
    alert(dramaMovies);
    return dramaMovies;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) { 
if (!movies.length) return 0;
let score = movies.reduce((accumulator, currentValue) => {
 if (currentValue.score)   {
    return accumulator + currentValue.score;
 } else {

 }

}, 0); 
let scoresAverageNotFixed = score / movies.length;
let scoresAverageFixed = (score / movies.length).toFixed(2);
let scoresAverageWithNumber = Number(scoresAverageFixed);

return scoresAverageWithNumber;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    if (!movies.length) return 0;
    let dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));
    
    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let movieInnerCopy =movies.map((movie) => movie)

     movieInnerCopy.sort((movieA, movieB) => {
    if (movieA.year > movieB.year){
        return movieA.year - movieB.year;
    } else if (movieA.year < movieB.year) {
        return movieA.year - movieB.year;
    } else return movieA.title.localeCompare(movieB.title);
     });
     return movieInnerCopy;

    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let alphabetic = movies.map((movie) => movie.title).sort().slice(0, 20);
    return alphabetic;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
