// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    return moviesArray.map (movies => movies.director); 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    return moviesArray.filter(movies => movies.director === "Steven Spielberg" && movies.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;

    const totalScore = moviesArray.reduce((sum, movie) => {
        return sum + (movie.score || 0); 
    }, 0);

    const averageScore = totalScore / moviesArray.length;
    
    return Number(averageScore.toFixed(2)); 
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));


    const totalScore = dramaMovies.reduce((sum, movie) => {
        return sum + (movie.score || 0); 
    }, 0);

    const averageScore = totalScore / dramaMovies.length;
    if (dramaMovies.length === 0) return 0; 

    return Number(averageScore.toFixed(2)); 
    
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
    .map(movie => movie.title)
    .slice(0, 20); 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        const duration = movie.duration;
        let totalMinutes = 0;

        const hoursMatch = duration.match(/(\d+)h/);
        const minutesMatch = duration.match(/(\d+)min/);

        if (hoursMatch) totalMinutes += parseInt(hoursMatch[1]) * 60; 
        if (minutesMatch) totalMinutes += parseInt(minutesMatch[1]);  

        return { ...movie, duration: totalMinutes };
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {
    if (!moviesArray.length === 0); return null;

}
