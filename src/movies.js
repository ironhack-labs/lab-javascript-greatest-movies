// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    moviesArray.map
    const directors = moviesArray.map(movie => movie.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    const directedBy = dramaMovies.filter(movie => movie.director == 'Steven Spielberg');

    return directedBy.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length == 0) return 0;

    scores = moviesArray.map(movie => movie.score);
    totalScore = 0;

    scores.forEach(score => {
        totalScore += score;
    });

    return Math.round(totalScore / scores.length * 100) / 100;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    if (dramaMovies.length == 0) return 0;
    return scoresAverage(dramaMovies);
}

function orderByYear(moviesArray) {
    const mappedArray = moviesArray.map(movie => ({ movie, year: movie.year }));
    mappedArray.sort((a, b) => a.year - b.year);
    const sortedArray = mappedArray.map(item => item.movie);
    return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const mappedArray = moviesArray.map(movie => (movie.title));

    mappedArray.sort((a, b) => a.year - b.year);

    const slicedArray = mappedArray.slice(0, 20);

    return slicedArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    moviesArray.forEach(movie => {

        duration = movie.duration;
        let hours = duration.substr(0, duration.indexOf("h"));
        let minutes = duration.substr(duration.indexOf("h")+2, duration.indexOf("min")-3);
        movie.duration = Number(hours) * 60 + Number(minutes);
    });

    return moviesArray;

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    
    if (moviesArray.length === 0) return null;

    const years = {};

    moviesArray.forEach(movie => {

        const year = movie.year;
        const score = movie.score;

        if(!years[year]) {
            years[year] = {theSumScore: 0, theCountedMovies: 0}
        }

        years[year].theSumScore += score;
        years[year].theCountedMovies++;

        
    });
    
    let bestYear = 0;
    let bestAverage = 0;
    
    for (year in years) {
        let avg = years[year].theSumScore / years[year].theCountedMovies;

        if(avg > bestAverage) {
            bestYear = year;
            bestAverage = avg;
        }
    }
    
    return `The best year was ${bestYear} with an average score of ${bestAverage}`;
}