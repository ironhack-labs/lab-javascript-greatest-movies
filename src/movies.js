// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return Array.from(moviesArray.map((movie) => movie.director));
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const filterArray = moviesArray.filter(
        (movie) =>
            movie.director === "Steven Spielberg" &&
            movie.genre.includes("Drama")
    );
    return Array.from(new Set(filterArray)).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;

    const validScores = moviesArray
        .filter(movie =>
            typeof movie.score === 'number')
        .map(movie => movie.score)

    if (!validScores.length) return 0;

    const result = validScores.reduce(
        (acc, score) => acc + score, 0)
        / moviesArray.length;

    return Number(result.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const allDrama = moviesArray
        .filter(movie =>
            movie.genre.includes('Drama'))
        .map(movie => movie.score)

    if (!allDrama.length) return 0;

    const average = allDrama.reduce(
        (acc, score) => acc + score, 0)
        / allDrama.length;

    return parseFloat(average.toFixed(2))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyMoviesArraySorted = [ ...moviesArray ].sort((a, b) => {
        return (a.year !== b.year)
            ? a.year - b.year
            : a.title.localeCompare(b.title);
    });

    return copyMoviesArraySorted
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copyMoviesArraySorted = [ ...moviesArray ].sort((a, b) => {
        return a.title.localeCompare(b.title);
    });

    return copyMoviesArraySorted
        .filter((movie) => typeof movie.title)
        .map((movie) => movie.title)
        .splice(0, 20)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const copyMoviesArray = [ ...moviesArray ].map((movie) => {
        const durationSplit = movie.duration.split("h ");

        let totalMinutes = parseInt(durationSplit[ 0 ]) * 60;

        if (durationSplit[ 1 ]) {
            totalMinutes += parseInt(durationSplit[ 1 ].replace("min", ""));
        }
        return {
            ...movie,
            duration: totalMinutes
        };
    });

    return copyMoviesArray;
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) return null;

    const yearlyAverages = moviesArray.reduce((acc, movie) => {
        if (!acc[movie.year]) {
            acc[movie.year] = {
                totalScore: movie.score,
                count: 1
            };
        } else {
            acc[movie.year].totalScore += movie.score;
            acc[movie.year].count++;
        }
        return acc;
    }, {});

    let bestYear = null;
    let bestAverage = 0;

    for ( let year in yearlyAverages){
        const average = 
        yearlyAverages[year].totalScore / yearlyAverages[year].count;

        if (average > bestAverage){
            bestAverage = average;
            bestYear = year;
        }
    }

    return `The best year was ${bestYear} with an average score of ${bestAverage}`
}
