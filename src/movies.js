// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie) => movie.director);
        return directors;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    //const drama = moviesArray.filter((movie) => movie.genre.includes('Drama'));
   // const dramaSteven = drama.filter((movie) => movie.director === 'Steven Spielberg');
    //return dramaSteven.length;
    const dramaAndSteven = moviesArray.filter((movie) => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg');

    return dramaAndSteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) {
        return 0;
    }
    else {
        const totalScore = moviesArray.reduce((acc, movie) => {
            if (movie.score !== undefined) {
              acc += movie.score;
            }
            // acc = acc + movie.score;
            return acc;
        }, 0);
        
        const averageScore = Number((totalScore / moviesArray.length).toFixed(2));
        return averageScore;
    }

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'));

    if(dramaMovies.length === 0) {
        return 0;
    }
    else {
        const totalScoreDramaMovies = dramaMovies.reduce((acc, movie) => {
            if (movie.score !== undefined) {
              acc += movie.score;
            }
            // acc = acc + movie.score;
            return acc;
        }, 0);
        
        const averageScore = Number((totalScoreDramaMovies / dramaMovies.length).toFixed(2));
        return averageScore;
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    // const sortedByYearMovies = moviesArray.map((movie) => movie); // to duplicate the array
    const sortedByYearMovies = [...moviesArray]; // to duplicate the array

    sortedByYearMovies.sort((movieA, movieB) => {
        if(movieA.year === movieB.year) {
            return movieA.title.localeCompare(movieB.title);
        }

        return movieA.year - movieB.year
    });
    return sortedByYearMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedAlphabetically = [...moviesArray];

    sortedAlphabetically.sort((movieA, movieB) => {
        return movieA.title.localeCompare(movieB.title);
    })
    
    // Long version:
    // const first20movies = sortedAlphabetically.splice(0, 20);
    // const onlyTitles = first20movies.map((movie) => movie.title);
    // return onlyTitles;

    const first20movies = sortedAlphabetically.splice(0, 20).map((movie) => movie.title);
    return first20movies;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
