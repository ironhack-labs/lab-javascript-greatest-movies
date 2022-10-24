// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map(movie => movie.director);
    return [...new Set(newArray)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let counter = moviesArray.filter(function(movie) {
        return movie.director === 'Steven Spielberg' &&
        movie.genre.includes('Drama');
    })
    return counter.length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(!moviesArray[0]){
        return 0
    }
    const avg = moviesArray
    .filter(score => typeof score.score === 'number')
    .reduce((sum, currentValue) => sum + currentValue.score,0) / moviesArray.length;
    return Number(avg.toFixed(2));
}
    
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let avgDrama =[];
    moviesArray.map(function(movie) {
        if(movie.genre.includes('Drama')) {
            avgDrama.push(movie);
        };
    })
    
    return scoresAverage(avgDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortByYear = [...moviesArray];

    sortByYear.sort(function (movie1, movie2) {
        if(movie1.year === movie2.year) {

            if(movie1.title < movie2.title) {
                return -1;
            } else if (movie1.title > movie2.title) {
                return 1;
            }
            return 0;
        }
        return movie1.year - movie2.year;
    })
    return sortByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let sortByTitle = [...moviesArray];
    sortByTitle.sort((movie1, movie2) => movie1.title.localeCompare(movie2.title))

    let titles = sortByTitle.map((movie) => movie.title);
    return titles.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}
    
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
