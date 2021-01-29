// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    let directorsOnlyArray = movies.map((eachMovie) => {
        return eachMovie.director;
    })
    return directorsOnlyArray;
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let spielbergMovies = movies.filter((eachMovie) => {
        return eachMovie.genre.includes(`Drama`) && eachMovie.director === `Steven Spielberg`;
    })
    return spielbergMovies.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    let totalRating = movies.reduce((a,b) => {
        return a + (b.rate || 0)
    }, 0);
    if (!movies.length) {
        return 0;
    }
    let avg = totalRating/movies.length
    let twoDecPoints = avg.toFixed(2);
    return Number(twoDecPoints);
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) { 
    let runningDramaRating = 0;
    let totalDramaRating = 0;
    for (i = 0; i < movies.length; i++) {
        if (movies[i].genre.includes('Drama')) {
            runningDramaRating += movies[i].rate;
            totalDramaRating++
        } 
    } 
    if (totalDramaRating) {
        averageDrama = runningDramaRating / totalDramaRating;
        return Number(averageDrama.toFixed(2));
    }
    return 0;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const arr = [];
    let moviesOrderArray = movies.sort((a, b) =>
    a.year > b.year ? 1: b.year > a.year ? -1 : a.title.localeCompare(b.title));
    return moviesOrderArray;
    
}
// function orderByYear(movies) 
//     let moviesOrderArray = movies.sort((a, b) =>
//     a.year > b.year ? 1 : b.year > a.year ? -1 : a.title.localeCompare(b.title)
//     );
// orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
     let moviesAlphabeticalArray = movies.sort((a, b) =>
     a.title.localeCompare(b.title));
     movies.slice(0, 20)
     .map((c) => c.title);
     return moviesAlphabeticalArray;
     return eachMovie.title;
 }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {

}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg() {

}