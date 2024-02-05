// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    
    // array con todos los directores
    const directores = moviesArray.map(movie => movie.director);

    // Filtrar para obtener directores únicos
    const directorUnico = directores.filter((director, index, self) => {
        return self.indexOf(director) === index;
    });
    return directorUnico;     
}
//console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const SpielbergDrama = moviesArray.filter(movie => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    })
    return SpielbergDrama.length;
}
//console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
     
    const averange = moviesArray.reduce((acc, curr) => {
        return acc + (curr.score ? curr.score : 0)
    }, 0)

    const totalAverage = moviesArray.length > 0 ? parseFloat((averange/moviesArray.length).toFixed(2)) : 0;
    return totalAverage;
}

//console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    // Filtrar películas de drama
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    // Calcular el promedio - películas de drama
    const averageDrama = dramaMovies.reduce((acc, curr) => {
        return acc + (curr.score ? curr.score : 0);
    }, 0);
    
    const totalDrama = dramaMovies.length > 0 ? parseFloat((averageDrama / dramaMovies.length).toFixed(2)) : 0;
    
    return totalDrama;
}

//console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
