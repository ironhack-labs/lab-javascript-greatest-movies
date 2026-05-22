// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
import movies from './data.js';

window.movies = movies;

function getAllDirectors(movies) {
    let moviesArray = movies.map(movie => movie.director);
    return [... new Set(moviesArray)];
}
window.getAllDirectors = getAllDirectors;
console.log(getAllDirectors(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   return moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}
window.howManyMovies = howManyMovies;
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) return 0;
    let totalScore = moviesArray.reduce((acc, movie) => {
        if(movie.score) {
            return acc + movie.score;
        } else {
            return acc;
        }
    }, 0);
    return Number((totalScore / moviesArray.length).toFixed(2));
}
window.scoresAverage = scoresAverage;
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(movie=>movie.genre.includes('Drama'));
    if(dramaMovies.length === 0) return 0;
    let totalDramaScore = dramaMovies.reduce((acc,movie)=>{
        if(movie.score) {
            return acc +movie.score;
        }else{
            return acc
        }
    },0);
    return Number((totalDramaScore / dramaMovies.length).toFixed(2));
}
window.dramaMoviesScore = dramaMoviesScore;
console.log(dramaMoviesScore(movies));
// It is better 0.01 btw

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortedMovies = [...moviesArray].sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
    return sortedMovies;
}
window.orderByYear = orderByYear;
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let sortedMovies = [...moviesArray].sort((a, b) => a.title.localeCompare(b.title));
    return sortedMovies.slice(0, 20).map(movie => movie.title);
}
window.orderAlphabetically = orderAlphabetically;
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie=>{
        const duration = movie.duration.split(' ').reduce((acc, time) => {
            if (time.includes('h')) {
                return acc + parseInt(time) * 60;
            } else if (time.includes('min')) {
                return acc + parseInt(time);
            } else {
                return acc;
            }
    },0);
    return {...movie, duration};
}); }
window.turnHoursToMinutes = turnHoursToMinutes;
console.log(turnHoursToMinutes(movies))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
    if (movies.length === 0) return null;

    const yearlyData = movies.reduce((acc, movie) => {
        const year = movie.year;

        if (!acc[year]) {
            acc[year] = {
                totalScore: 0,
                count: 0
            };
        }

        acc[year].totalScore += movie.score;
        acc[year].count++;

        return acc;
    }, {});

    let bestYear = null;
    let bestAverage = 0;

    for (const year in yearlyData) {
        const avg =yearlyData[year].totalScore/yearlyData[year].count;

        if (
            avg > bestAverage || (avg === bestAverage && year < bestYear)
        ) {
            bestAverage = avg;
            bestYear = year;
        }
    }

    return `The best year was ${bestYear} with an average score of ${bestAverage}`;
}
window.bestYearAvg = bestYearAvg;
console.log(bestYearAvg(movies));
