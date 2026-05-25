// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return directors.filter((director, index) => directors.indexOf(director) === index);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(
        movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;

    const total = moviesArray.reduce((acc, movie) => {
        return acc + (movie.score || 0);
    }, 0);

    return Math.round((total / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray].sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        }
        return a.title.localeCompare(b.title);
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return [...moviesArray]
        .sort((a, b) => a.title.localeCompare(b.title))
        .slice(0, 20)
        .map(movie => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        const duration = movie.duration;
        let minutes = 0;

        const hoursMatch = duration.match(/(\d+)h/);
        const minutesMatch = duration.match(/(\d+)min/);

        if (hoursMatch) minutes += parseInt(hoursMatch[1]) * 60;
        if (minutesMatch) minutes += parseInt(minutesMatch[1]);

        return { ...movie, duration: minutes };
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;

    const yearGroups = {};

    moviesArray.forEach(movie => {
        if (!yearGroups[movie.year]) {
            yearGroups[movie.year] = [];
        }
        yearGroups[movie.year].push(movie.score);
    });

    let bestYear = null;
    let bestAvg = 0;

    for (const year in yearGroups) {
        const scores = yearGroups[year];
        const avg = scores.reduce((acc, score) => acc + score, 0) / scores.length;
        const rounded = Math.round(avg * 100) / 100;

        if (rounded > bestAvg || (rounded === bestAvg && Number(year) < Number(bestYear))) {
            bestAvg = rounded;
            bestYear = year;
        }
    }

    return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}