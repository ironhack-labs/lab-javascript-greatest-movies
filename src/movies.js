// Iteration 1: All directors? - Get the array of all directors.~
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const directorsArr = moviesArray.map((name) => name.director)
    return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    const filteredMovies = moviesArray.filter((movie) =>
        movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    return filteredMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }


    let totalScore = moviesArray.reduce((acc, val) => {
        if (!val.score) {
            return acc;
        }
        return acc + val.score;
    }, 0) / moviesArray.length;

    let roundedTotalScore = Number(parseFloat(totalScore).toFixed(2))

    return roundedTotalScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    let countDramaMovies = 0;
    let totalDramaMovie = moviesArray.reduce((acc, val) => {
        if (val.genre.includes('Drama')) {
            countDramaMovies++;
            return acc + val.score;
        } else {
            return acc;
        }
    }, 0) / countDramaMovies;

    if (!totalDramaMovie) {
        return 0;
    }

    let roundedTotalDramaMovie = Number(parseFloat(totalDramaMovie).toFixed(2))
    return roundedTotalDramaMovie;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = moviesArray.sort((a, b) => {
        if (a.year > b.year) return 1; 
        if (a.year < b.year) return -1; 
        if (a.year === b.year) {
            const titleA = a.title.toUpperCase(); 
            const titleB = b.title.toUpperCase(); 
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            } 
            return 0;
        };
    }).map(a => a);
    return newArray;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { 
    const moviesTitle = moviesArray.map(movie => movie.title);    
    const orderedTitles = moviesTitle.sort();    
    const top20Titles = orderedTitles.splice(0, 20);
    return top20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { 

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
