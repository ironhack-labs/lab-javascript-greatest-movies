/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
 
const ratesAverage = ar => parseFloat((ar.reduce((a, b) => a + (b.rate === '' ? 0 : parseFloat(b.rate)), 0) / ar.length).toFixed(2));

// Iteration 2: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = ar => {
    const rate = parseFloat(ratesAverage(ar.filter(movie => movie.genre.includes('Drama'))));
    return isNaN(rate) ? 0 : rate; 
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

const orderByDuration = ar => ar.sort((a, b) => a.duration - b.duration === 0 ?
 a.title.localeCompare(b.title) : a.duration - b.duration);

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const howManyMovies = ar => ar.filter(movie => (movie.genre.includes('Drama') && movie.director === 'Steven Spielberg')).length;

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = ar => ar.map(movie => movie.title).sort((a, b) => a.localeCompare(b)).slice(0, 20);  

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = ar => ar.map(movie => {
    let convertedDuration = 0;
    if (movie.duration.includes('h')) {
        convertedDuration += Number(movie.duration.slice(0, movie.duration.indexOf('h'))) * 60;
    }
    if (movie.duration.includes('min')) {
        convertedDuration += Number(movie.duration.slice(movie.duration.indexOf(' ') + 1, movie.duration.indexOf('m')));
    }
    return ({...movie, duration: convertedDuration});       
})

// BONUS Iteration: Best yearly rate average - Best yearly rate average

const bestYearAvg = ar => {
    if (!ar.length) return null;
    const yearsWithRatedMovies = [...new Set(ar.map(movie => movie.year))];
    const averageRatingsPerYear = [];
    yearsWithRatedMovies.forEach(year => averageRatingsPerYear.push({year,rate: ratesAverage(ar.filter(movie => movie.year === year))}));
    const best = averageRatingsPerYear.sort((a, b) => b.rate - a.rate === 0 ? a.year - b.year : b.rate - a.rate)[0];
    return `The best year was ${best.year} with an average rate of ${best.rate}`;
}