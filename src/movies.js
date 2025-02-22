// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = [];
    moviesArray.forEach((movie) => {
        if (!directors.includes(movie.director)) {
            directors.push(movie.director);
        }
    });
    return directors;
}
console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenDramaMovies = moviesArray.filter((movie) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    });
    return stevenDramaMovies.length;
}
console.log("Steven Drama movies: " + howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    const scoreAvg = moviesArray.reduce((acc, movie) => {
        if (movie.score) {
            return acc + movie.score;
        } else {
            return acc;
        }
    }, 0);
    return parseFloat((scoreAvg / moviesArray.length).toFixed(2));
}
console.log("Average score: " + scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => {
        return movie.genre.includes("Drama");
    });

    const dramaScoreAvg = dramaMovies.reduce((acc, movie) => {
        if (movie.score) {
            return acc + movie.score;
        } else {
            return acc;
        }
    }, 0);

    if (dramaMovies.length === 0) {
        return 0;
    } else {
        return parseFloat((dramaScoreAvg / dramaMovies.length).toFixed(2));
    }
}
console.log("Average drama score: " + dramaMoviesScore(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesOrderedYear = [...moviesArray].sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year;
        }
    });
    return moviesOrderedYear;
}
console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const moviesOrderedTitle = [...moviesArray].sort((a, b) => {
        return a.title.localeCompare(b.title);
    });

    const moviesShortlist = moviesOrderedTitle.slice(0, 20)
    return moviesShortlist.map((movie) => movie.title);

}
console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesDuration = moviesArray.map((movie) => {
        const movieDuration = movie.duration.split(" ");
        let totalMinutes = 0;
        movieDuration.forEach((duration) => {
            if (duration.includes("h")) {
                totalMinutes += parseInt(duration) * 60;
            } else {
                totalMinutes += parseInt(duration);
            }
        });
        return { ...movie, duration: totalMinutes };
    });
    return moviesDuration;
}
console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0)
        return null;

    const yearScore = moviesArray.reduce((add, movie) => {
        if (!add[movie.year]) {
            add[movie.year] = { totalScore: 0, count: 0 }
        }
        add[movie.year].totalScore += movie.score
        add[movie.year].count++
        return add
    }, {});

    let bestYear = 0;
    let bestScore = 0;
    for (year in yearScore) {
        const avg = yearScore[year].totalScore / yearScore[year].count
        if (avg > bestScore) {
            bestScore = avg
            bestYear = year
        }
    }
    return `The best year was ${bestYear} with an average score of ${bestScore}`

}
console.log(bestYearAvg(movies))

