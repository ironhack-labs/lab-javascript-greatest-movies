// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(function (movie) {
        return movie.director
    })
    return directorsArray;
}

// Iteration 2:How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenDrama = moviesArray.filter(function (movie) {
        return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
    });
    return stevenDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const sumOfScores = moviesArray.reduce((sum, movie) => {
        const score = movie.score ? movie.score : 0;
        return sum + score;
    }, 0);
    const averageScore = Math.round((sumOfScores / moviesArray.length) * 100) / 100;
    return averageScore;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => {
        return movie.genre.includes("Drama");
    });
    if (dramaMovies.length === 0) {
        return 0;
    }
    const sumOfScores = dramaMovies.reduce((sum, movie) => {
        const score = movie.score ? movie.score : 0;
        return sum + score;
    }, 0);
    const averageScore = sumOfScores / dramaMovies.length;
    return Math.round(averageScore * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesYears = [...moviesArray];
    moviesYears.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            if (titleA < titleB) {
                return -1;
            } else if (titleA > titleB) {
                return 1;
            } else {
                return 0;
            }
        }
    });
    return moviesYears;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesOrder = [...moviesArray];
    moviesOrder.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) {
            return -1;
        } else if (titleA > titleB) {
            return 1;
        } else {
            return 0;
        }
    });
    const titles = moviesOrder.map(movie => movie.title);
    return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
