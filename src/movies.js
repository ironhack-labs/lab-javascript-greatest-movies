// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors=moviesArray.map(movie => movie.director);
    return [...new Set(directors)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const movies=moviesArray.filter(movie =>
        movie.director === "Steven Spielberg" &&
        movie.genre.includes("Drama"));
    return movies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let sum=0;
    for(const movie of moviesArray){
        sum+=movie.score;
    }
    const average=sum/moviesArray.length;
    return average.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies=moviesArray.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray]
    .sort((a,b) => {
        if(a.year != b.year) return a.year-b.year;
        return a.title.localeCompare(b.title);
    })
    .slice(0,20)
    .map(movie => movie.title);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return [...moviesArray].sort((a,b) =>{
        return a.title.localeCompare(b.title);
    })
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        let hours=0;
        let minutes=0;

        if(movie.duration.includes("h")){
            hours=parseInt(movie.duration);
        }
        if(movie.duration.includes("min")){
            const parts=movie.duration.split(" ");

            if(parts.length === 2){
                minutes=parseInt(parts[1]);
            }
            else{
                minutes=parseInt(parts[0]);
            }
        }

        return {...movie,duration: hours*60+minutes};
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
