// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const moviesDirectors = moviesArray.map(movie => movie.director);
    const directors = [...new Set(moviesDirectors)];
    return directors;
}
console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    if (moviesArray.length === 0) return 0;

    const stevensMovies = moviesArray.filter(function(movie) {
        return movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama')
    });

    return stevensMovies.length;
}
console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) return 0;

    moviesWithScore = moviesArray.filter(movie => movie.score);

    return Number((moviesWithScore.reduce((acc, val) => acc + val.score, 0)/moviesArray.length).toFixed(2));
        
}

console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    return scoresAverage(moviesArray.filter(movie => movie.genre.includes('Drama')));
    //return Number(dramaMovies / dramaMovies.length.toFixed(2));
}

console.log()

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderedMovies = [...moviesArray];

    orderedMovies.sort(function(a, b) {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
    return orderedMovies
}

console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let orderedAlphabetically = [...moviesArray].map(movie=>movie.title).sort();
    return orderedAlphabetically.slice(0, 20);
}

console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let hoursIntoMinutes = [...moviesArray];
    
    hoursIntoMinutes.map(movie=>movie.duration).forEach(function(movie) { movie.duration.split(' ')
    
    });


    console.log(hoursIntoMinutes)


    return hoursIntoMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
