// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?




function howManyMovies(moviesArray) {

    return moviesArray.filter(movie => movie.genre.includes('Drama') && movie.director === 'Steven Sipelberg').length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) { return 0; }
    const totalScores = moviesArray.reduce((sum, movie) => {
        if (movie.score) {
            return sum + movie.score;
        } else { return sum }
    }, 0);
    const averageScore = totalScores / moviesArray.length;
    return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const onlyDrama = moviesArray.filter(movie => movie.genre.includes('Drama'));
    if (onlyDrama.length === 0) {
        return 0;
    }
    const totalScore = onlyDrama.reduce((sum, movie) => sum + movie.score, 0);
    const avScore = totalScore / onlyDrama.length;
    return parseFloat(avScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newMovies = [...moviesArray];
    newMovies.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    })
    return newMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphaMovies = [...moviesArray];
    alphaMovies.sort((a, b) => a.title.localeCompare(b.title));
    const alpaTitles = alphaMovies.map(movie => movie.title);
    return alpaTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const onlyMin = moviesArray.map(movie => {
        const duration = movie.duration;
        let totalMin = 0;
        if (duration.includes('h') && duration.includes('min')) {
            const [hours, minutes] = duration.split('h');
            totalMin = parseInt(hours) * 60 + parseInt(minutes);


        } else if (duration.includes('h')) {
            totalMin = parseInt(duration) * 60;
        } else if (duration.includes('min')) {
            totalMin = parseInt(duration);
        }
        return {
            ...movie,
            duration: totalMin
        }
    })
    return onlyMin;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    if (moviesArray.length === 0) {
        return null;
    }

    const yearScores = {};

    moviesArray.forEach(movie => {
        const year = movie.year;
        const score = movie.score;

        if (!yearScores.year) {
            yearScores.year = [];
        }

        yearScores.year.push(score);
    });

    let bestYear = '';
    let bestAverageScore = -Infinity;

    for (const year in yearScores) {
        const scores = yearScores[year];
        const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;

        if (averageScore > bestAverageScore || (averageScore === bestAverageScore && year < bestYear)) {
            bestYear = year;
            bestAverageScore = averageScore;
        }
    }

    return `The best year was ${bestYear} with an average score of ${bestAverageScore.toFixed(2)}`;


}
