// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(function (film) {
        return film.director;
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(function(film){
        return (film.director === "Steven Spielberg" && film.genre.includes("Drama"));
    }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const avg = moviesArray.reduce(function (acc, movie, i ,curr){
        if(!movie.rate){
            movie.rate = 0;
        }
if(i === curr.length-1){
    acc += movie.rate;
    return acc/curr.length;
}
return acc + movie.rate;
    }, 0);
    return parseFloat(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const drama= moviesArray.filter(function(movie){
        return movie.genre.includes("Drama");
    });
    return scoresAverage(drama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.map(function(movie){
        return movie;
    })
    .sort(function(a,b){
        if(a.year === b.year){
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const tt = moviesArray.map(function(movie){
        return movie.title;
    });
    tt.sort(function(a,b){
        return a.localeCompare(b);
    });
    const first20 = tt.splice(0,20);
    return first20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
