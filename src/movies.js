// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(director) {
    const directors = director.map(arr => arr.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const steven = movies.filter(elm => elm.director === 'Steven Spielberg' && elm.genre.includes('Drama'));
    return steven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(ranking) {
    if (ranking.length === 0) {
        return 0;
    }
    const scoreTotal = ranking.reduce((acc, elm) => acc + elm.score, 0);
    return Number(parseFloat(scoreTotal/ranking.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(dramaRanking) {
    const filterDrama = dramaRanking.filter(arr => arr.genre.includes('Drama'));
    if (filterDrama.length === 0) {
        return 0;
    }
    const scoreDrama = filterDrama.reduce((acc, elm) => acc + elm.score, 0);
    return Number(parseFloat(scoreDrama/filterDrama.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(yearMovie) {
    const movieYears = JSON.parse(JSON.stringify(yearMovie));
    const titleMovieYears = movieYears.sort((a, b) => a.year - b.year);
    return titleMovieYears.sort((a, b) => a.title - b.title);

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(titles) {
    const totalTitles = titles.map(arr => arr.title);
    const movieTitles = totalTitles.sort();
    return movieTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(times) {
    const movieDuration = times.map(arr => arr.duration);
    return movieDuration;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(bestYear) {
    const better = bestYear.map(arr => arr.year);
    if (bestYear.length === 0) {
        return null;
    }
    return better;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        howManyMovies,
        scoresAverage,
        dramaMoviesScore,
        orderByYear,
        orderAlphabetically,
        turnHoursToMinutes,
        bestYearAvg,
    };
}
