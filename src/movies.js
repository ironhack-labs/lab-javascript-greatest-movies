// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    const uniqueDirectors = [...new Set(directors)];
    return uniqueDirectors;
} 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (!moviesArray || moviesArray.length === 0) return 0;

    const spielbergDramaMovies = moviesArray.filter(movie => 
        movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );

    return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray || moviesArray.length === 0) return 0;

    const totalScore = moviesArray.reduce((acc, movie) => {
        return acc + (movie.score || 0); // Handle cases where score might be undefined
    }, 0);

    const averageScore = totalScore / moviesArray.length;
    return Math.round(averageScore * 100) / 100; // Round to 2 decimals

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (!moviesArray || moviesArray.length === 0) return 0;

    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

    if (dramaMovies.length === 0) return 0;

    const totalDramaScore = dramaMovies.reduce((acc, movie) => {
        return acc + (movie.score || 0); // Handle cases where score might be undefined
    }, 0);

    const averageDramaScore = totalDramaScore / dramaMovies.length;
    return Math.round(averageDramaScore * 100) / 100; // Round to 2 decimals
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    if (!moviesArray || moviesArray.length === 0) return [];

    const sortedMovies = [...moviesArray].sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title); // If years are the same, sort by title
        }
        return a.year - b.year; // Sort by year
    });

    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    if (!moviesArray || moviesArray.length=== 0) return[];
    const sortedTitles = moviesArray
        .map(movie => movie.title)
        .sort((a, b) => a.localeCompare(b)); // Sort titles alphabetically
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    if (!moviesArray || moviesArray.length === 0) return [];

    return moviesArray.map(movie => {
        const durationParts = movie.duration.split(' ');
        let totalMinutes = 0;

        durationParts.forEach(part => {
            if (part.includes('h')) {
                totalMinutes += parseInt(part) * 60; // Convert hours to minutes
            } else if (part.includes('min')) {
                totalMinutes += parseInt(part); // Add minutes directly
            }
        });

        return { ...movie, duration: totalMinutes }; // Return a new object with updated duration
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray || moviesArray.length === 0) return null;

    const yearScores = {};

    moviesArray.forEach(movie => {
        if (movie.year in yearScores) {
            yearScores[movie.year].push(movie.score || 0);
        } else {
            yearScores[movie.year] = [movie.score || 0];
        }
    });

    let bestYear = null;
    let bestAvgScore = 0;

    for (const year in yearScores) {
        const scores = yearScores[year];
        const avgScore = scores.reduce((acc, score) => acc + score, 0) / scores.length;

        if (avgScore > bestAvgScore || (avgScore === bestAvgScore && (bestYear === null || year < bestYear))) {
            bestAvgScore = avgScore;
            bestYear = year;
        }
    }

    return `The best year was ${bestYear} with an average score of ${Math.round(bestAvgScore * 100) / 100}`;
}
