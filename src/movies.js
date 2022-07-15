// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movie => movie.director);
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const movies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    return movies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let l = moviesArray.length;
    if(!l) {
        return 0;
    }
    
    return Math.round(moviesArray.reduce(function (acc, curr) {
        if (curr.score) {
            return acc + curr.score;
        }
        else {
            return acc;
        }
    }, 0) / l * 100) / 100;

    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    //filter for drama movies
    dramas = moviesArray.filter(movie => movie.genre.includes('Drama'));
    //reuse the previous function
    return scoresAverage(dramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const sortedArray = [...moviesArray].sort(function (a,b) {
        if(a.year === b.year){
            if (a.title < b.title) {
                return -1;
            }
            else {
                return 1;
            }
        }
        return a.year - b.year;
    });
    return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    //retrieve only the titles and sort them
    const alphArr = moviesArray.map(movie => movie.title).sort();
    //keep first 20, discard the rest
    return alphArr.splice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
