// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// const movies = require("./data");
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(function(movie){
        return movie.director;
    })
    return directors;
}

function getAllDirectorsUnique(moviesArray){
    return getAllDirectors(moviesArray)
        .filter(function(director, i, moviesArray){
            return moviesArray.indexOf(director) === i;
        })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenMoviesCount = 0;
    let stevenMovies = moviesArray.filter(function(movie){
        if(movie.director == "Steven Spielberg" && movie.genre.includes("Drama")){
            stevenMoviesCount += 1;
        };
    });
    return stevenMoviesCount;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0 ) return 0;
    else {
        let avgScore = moviesArray.map(obj => {
            if (typeof obj.score === "undefined") {
                return { score: ''}
            }; 
            return obj 
        })
        .reduce(function(acc, val){
            // console.log(acc, val.score);
            return acc + val.score;
        },0);
        return Math.round((avgScore/moviesArray.length) * 100)/100;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function(movie){
        return movie.genre.includes("Drama");
    })

    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray
        .slice()
        .sort(function(a, b){
            return a.year - b.year || a.title.localeCompare(b.title)
        })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray //instead of creating a new variable, cause sort will mutate the array
        .map(function(movie){
            return movie.title
        })
        .sort()
        .slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function(movie){
        let minutes = 0;
        let hoursInMinutes = 0;

        if (movie.duration.includes('m')){
            minutes = Number(movie.duration.slice(movie.duration.indexOf(' ') + 1, movie.duration.indexOf('m')))
            
        }
        if ( movie.duration.includes("h") ){
            hoursInMinutes = Number(movie.duration.slice(0, movie.duration.indexOf('h'))) * 60;
        }
        return { ...movie, duration: minutes + hoursInMinutes }
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    // After lab
    if(moviesArray.length === 0) return null

    const years = [...new Set(moviesArray.map(function(movie) {
        return movie.year;
    }))]
    const scoresByYear = [];

    years.forEach(function(year){
        scoresByYear.push({year, score: scoresAverage(moviesArray.filter(function(movie) {
            return movie.year === year;
        }))})
    })

    const scoresByYearSorted = scoresByYear.sort(function(a, b){
        return b.score - a.score || a.year - b.year
    })

    const best = scoresByYearSorted[0];

    return `The best year was ${best.year} with an average score of ${best.score}`
}
