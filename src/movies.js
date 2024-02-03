// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    
    // Hacemos un array de los directores
    const directorsArr = moviesArray.map(movie => movie.director);

    // Ordenar alfabéticamente
    // const directorsOrderedArr = directorsArr.sort()

    // Eliminar duplicados
    const uniqueDirectorsArr = directorsArr.filter((director, index, self) => {
        return self.indexOf(director) === index;
    });

    return directorsArr

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaSpielberg = moviesArray.filter(movie => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama') 
    })

    // console.log(dramaSpielberg)
    return dramaSpielberg.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    // Calculamos el average, empieza en 0 y vemos si tiene score, si no tiene suma 0
    const averageValue = moviesArray.reduce((acc, curr) => {
        return acc + (curr.score ? curr.score : 0)
    }, 0)

    // Podríamos alcular el número total de películas que tienen puntuación
    // const moviesWithScoreCount = moviesArray.reduce((acc, curr) => {
    //     return acc + (curr.score ? 1 : 0);
    // }, 0);

    const totalAverageValue = moviesArray.length > 0 ? parseFloat((averageValue/moviesArray.length).toFixed(2)) : 0;
    return totalAverageValue;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

