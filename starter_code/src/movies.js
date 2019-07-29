/* eslint no-restricted-globals: 'off' */


// Iteration 1: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = movies => {
  total = movies.reduce((sum, movie) => sum += movie.rate, 0);
  return total / movies.length;
}

// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies => {
    let dramas = movies.filter(movie => movie.genre.includes('Drama'));
    return (dramas.length > 0) ? parseFloat(ratesAverage(dramas).toFixed(2)) : 0;
};


// We need to sort the movies in ascending order by their duration. This should be easy using one of the methods we've just learned.
// Create a function orderByDuration() that receives an array as parameter and returns a sorted array.
// If two movies have the same duration, order them in alphabetical order by their title!

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByDuration = movies => {
    let arr = [];
    movies.forEach(movie => {
        // console.log(movie.duration);
        let hrsInMinutes = (movie.duration.slice(0, 1) * 60);
        let minutes = parseInt(movie.duration.slice(3, 5));
        // console.log(`minutes: ${hrsInMinutes + minutes}`)
        movie.duration = hrsInMinutes + minutes;
        arr.push(movie);
    })
    arr.sort((a, b) => a - b);

    return arr;
};
// console.log(orderByDuration(movies));


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = movies => {
  const spielbergMovies = movies.filter( movie => (movie.director.includes('Steven Spielberg')) && (movie.genre.includes('Drama')) );
  return (spielbergMovies.length > 0) ? spielbergMovies.length : 0;
};


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = movies => {};


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies => {};


// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = movies => {};
