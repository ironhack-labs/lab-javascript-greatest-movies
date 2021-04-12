function getAllDirectors(movies) {
    return movies.map(movie => movie.director);
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(movies) {
//     return movies.map(movie => movie.director).filter((movie, i) => movies.map(movie => movie.director).indexOf(movie) === i);
// }
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    return movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) return 0;
    return Math.round(movies.map(movie => movie.rate).filter(rate => rate != null).reduce((sum, rate) => sum + rate) / movies.length * 100) / 100;
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
    if (dramaMovies.length === 0) return 0;
    return ratesAverage(dramaMovies);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    return [...movies].sort(
        (a, b) => {
            if (a.year > b.year) return 1;
            if (a.year < b.year) return -1;
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
        }
    );
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    return movies.map(movie => movie.title).sort().slice(0,20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    return movies.map(movie => {
        let duration;
        if (!movie.duration.includes('min')) {
            duration = +movie.duration[0] * 60;
        } else if (!movie.duration.includes('h')) {
            if (movie.duration.length === 4) {
                duration = +movie.duration[0];
            } else if (movie.duration.length === 5) {
                duration = +movie.duration[0] * 10 + +movie.duration[1];
            }
        } else if (movie.duration.length === 7) {
            duration = +movie.duration[0] * 60 + +movie.duration[3];
        } else if (movie.duration.length === 8) {
            duration = +movie.duration[0] * 60 + +movie.duration[3] * 10 + +movie.duration[4];
        }
        return {
            ...movie,
            "duration": duration,
        }
    });
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
    if (movies.length === 0) return null;
    let years = movies.map(movie => movie.year).filter((movie, i) => movies.map(movie => movie.year).indexOf(movie) === i).sort();
    let bestYear = 0;
    let bestAvg = 0;
    for (let year of years) {
        let yearMovies = movies.filter(movie => movie.year === year);
        let avg = ratesAverage(yearMovies);
        if (avg > bestAvg) {
            bestYear = year;
            bestAvg = avg;
        }
    }
    return `The best year was ${bestYear} with an average rate of ${bestAvg}`;
}