// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movies) => movies.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const spielbergMovies = moviesArray.filter(
        (movieElement) => movieElement.director === 'Steven Spielberg'
    );
    if (spielbergMovies.length === 0) {
        return 0;
    }
    const dramaMovies = moviesArray.filter(
        (movieElement) =>
            movieElement.genre.includes('Drama') &&
            movieElement.director === 'Steven Spielberg'
    );
    return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const totalScore = moviesArray.reduce((accumulator, movies) => {
        if (typeof movies.score === 'number') {
            return accumulator + movies.score;
        }
        return accumulator;
        {
        }
    }, 0);
    const averageScore = totalScore / moviesArray.length;
    return Math.round(averageScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movies) =>
        movies.genre.includes('Drama')
    );
    const totalScore = dramaMovies.reduce((sum, movies) => {
        if (typeof movies.score === 'number') {
            return sum + movies.score;
        }
        return sum;
    }, 0);
    const denominator = Math.max(1, dramaMovies.length);
    const averageScore = totalScore / denominator;
    return Math.round(averageScore * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = [...moviesArray];
    const sortedMovies = moviesCopy.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        }
        return a.title.localeCompare(b.title);
    });
    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy = [...moviesArray];
    const sortedMovies = moviesCopy.sort((a, b) =>
        a.title.localeCompare(b.title)
    );
    const first20Movies = sortedMovies.slice(0, 20);
    const titlesArray = first20Movies.map((movies) => movies.title);
    return titlesArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesCopy = [...moviesArray];
    const moviesWithMinutes = moviesCopy.map((movie) => {
        const [hours, minutes] = movie.duration
            .split('h')
            .map((part) => parseInt(part, 10) || 0);
        const durationInMinutes = hours * 60 + minutes;
        return { ...movie, duration: durationInMinutes };
    });
    return moviesWithMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }
    const yearStats = {};
    moviesArray.forEach((movies) => {
        const year = movies.year;
        const score = movies.score;
        if (!yearStats[year]) {
            yearStats[year] = { totalScore: 0, movieCount: 0 };
        }
    });
}
