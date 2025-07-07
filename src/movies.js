// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    // Using Set to remove duplicates
    return [...new Set(directors)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const totalScore = moviesArray.reduce((acc, movie) => acc + (movie.score || 0), 0);
    const average = totalScore / moviesArray.length;
    return Number(average.toFixed(2));
}

//should return 0 if an empty array is passed
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;

    const totalScore = moviesArray.reduce((acc, movie) => acc + (movie.score || 0), 0);
    const average = totalScore / moviesArray.length;
    return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies);
}
//should return 0 if there is no Drama movie
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    if (dramaMovies.length === 0) return 0;
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.slice().sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map(movie => movie.title);
    titles.sort();
    return titles.slice(0, 20);
}

// Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        const duration = movie.duration.split(" ");
        const hours = parseInt(duration[0]) * 60;
        const minutes = parseInt(duration[1]) || 0;
        return { ...movie, duration: hours + minutes };
    });
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    if (moviesArray.length === 0) return null;

    const scoresByYear = moviesArray.reduce((acc, movie) => {
        if (!acc[movie.year]) {
            acc[movie.year] = { total: 0, count: 0 };
        }
        acc[movie.year].total += movie.score || 0;
        acc[movie.year].count += 1;
        return acc;
    }, {});

    const bestYear = Object.keys(scoresByYear).reduce((best, year) => {
        const average = scoresByYear[year].total / scoresByYear[year].count;
        if (!best || average > best.average) {
            return { year: year, average: average };
        }
        return best;
    }, null);

    return `The best year was ${bestYear.year} with an average score of ${bestYear.average.toFixed(2)}`;
}
//should return the correct answer to a single element array//
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;

    const scoresByYear = moviesArray.reduce((acc, movie) => {
        if (!acc[movie.year]) {
            acc[movie.year] = { total: 0, count: 0 };
        }
        acc[movie.year].total += movie.score || 0;
        acc[movie.year].count += 1;
        return acc;
    }, {});

    const bestYear = Object.keys(scoresByYear).reduce((best, year) => {
        const average = scoresByYear[year].total / scoresByYear[year].count;
        if (!best || average > best.average) {
            return { year: year, average: average };
        }
        return best;
    }, null);

    return `The best year was ${bestYear.year} with an average score of ${bestYear.average.toFixed(2)}`;
}
// should return the correct answer to a single element array
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;

    const scoresByYear = moviesArray.reduce((acc, movie) => {
        if (!acc[movie.year]) {
            acc[movie.year] = { total: 0, count: 0 };
        }
        acc[movie.year].total += movie.score || 0;
        acc[movie.year].count += 1;
        return acc;
    }, {});

    const bestYear = Object.keys(scoresByYear).reduce((best, year) => {
        const average = scoresByYear[year].total / scoresByYear[year].count;
        if (!best || average > best.average) {
            return { year: year, average: average };
        }
        return best;
    }, null);

    return `The best year was ${bestYear.year} with an average score of ${bestYear.average.toFixed(2)}`;
}
// should return the correct answer to a single element array
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;

    const scoresByYear = moviesArray.reduce((acc, movie) => {
        if (!acc[movie.year]) {
            acc[movie.year] = { total: 0, count: 0 };
        }
        acc[movie.year].total += movie.score || 0;
        acc[movie.year].count += 1;
        return acc;
    }, {});

    const bestYear = Object.keys(scoresByYear).reduce((best, year) => {
        const average = scoresByYear[year].total / scoresByYear[year].count;
        if (!best || average > best.average) {
            return { year: year, average: average };
        }
        return best;
    }, null);

    return `The best year was ${bestYear.year} with an average score of ${bestYear.average.toFixed(2)}`;
}
/*should return the correct answer to a single element array*/



/*should return the correct answer to a multiple elements array*/




/*should return the oldest year when there is a tie*/
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;

    const scoresByYear = moviesArray.reduce((acc, movie) => {
        if (!acc[movie.year]) {
            acc[movie.year] = { total: 0, count: 0 };
        }
        acc[movie.year].total += movie.score || 0;
        acc[movie.year].count += 1;
        return acc;
    }, {});

    const bestYear = Object.keys(scoresByYear).reduce((best, year) => {
        const average = scoresByYear[year].total / scoresByYear[year].count;
        if (!best || average > best.average) {
            return { year: year, average: average };
        }
        return best;
    }, null);

    return `The best year was ${bestYear.year} with an average score of ${bestYear.average.toFixed(2)}`;
}
/*should return the correct answer to a multiple elements array*/
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;

    const scoresByYear = moviesArray.reduce((acc, movie) => {
        if (!acc[movie.year]) {
            acc[movie.year] = { total: 0, count: 0 };
        }
        acc[movie.year].total += movie.score || 0;
        acc[movie.year].count += 1;
        return acc;
    }, {});

    const bestYear = Object.keys(scoresByYear).reduce((best, year) => {
        const average = scoresByYear[year].total / scoresByYear[year].count;
        if (!best || average > best.average) {
            return { year: year, average: average };
        }
        return best;
    }, null);

    return `The best year was ${bestYear.year} with an average score of ${bestYear.average.toFixed(2)}`;
}