// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const directors = movies.map((movie) => movie.director);
  return [...new Set(directors)];
}
const directorsU = getAllDirectors(movies);
console.log(directorsU);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies, director, genre) {
  return movies.filter(movie => movie.director === director && movie.genre === genre);
}
const spielbergDrama = howManyMovies(movies, "Steven Spielberg", "Drama");
console.log(spielbergDrama);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
    const puntuacionTotal = movies.reduce((acc, movie) => acc + movie.score, 0);
    const puntuacionMedia = puntuacionTotal / movies.length;
    return puntuacionMedia.toFixed(2); //dos décimas
}
const puntuacionMedia = scoresAverage(movies);
console.log(puntuacionMedia);


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
    
    const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
    const totalDrama = dramaMovies.reduce((acc, movie) => acc + movie.score, 0);
    const mediaDrama = totalDrama / dramaMovies.length;
    return mediaDrama.toFixed(2);
}
const mediaDrama = dramaMoviesScore(movies);
console.log(mediaDrama);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

    const moviesCopy = [...movies]; //crea una copia de la matriz par no modificarla

    moviesCopy.sort((a, b) => {
        if (a.year !== b.year){
            return a.year - b.year;
        }
        return a.title.localeCompare(b.title);
    });

    return moviesCopy;
}

console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(movies) {

    const moviesCopy = [...movies];
    const titles = moviesCopy.map(movie => movie.title);
    titles.sort((a,b) => a.localeCompare(b));
    return titles.slice(0, 20);
}
console.log(orderAlphabetically(movies));






// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
