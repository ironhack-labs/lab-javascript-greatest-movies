/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    return array.slice(0).sort( (a, b) => {
        if (a.year === b.year) return  a.title > b.title;
        return a.year > b.year
    } );
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
    if (!array.length) return 0;

    return array.filter( a => {

        if (typeof a.genre !== 'array' || typeof a.director !== 'string') return false;

        return  a.genre.contains('drama') && a.director === 'Steven Spielberg';
    }).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    return array.map(a => a.title).sort( (a,b) => a > b ).slice(0,20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {

    return array.reduce( (last, a) => last + a.rate, 0 ) / array.length;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    return array.filter( a => a.genre.indexOf('drama') !== -1 ).reduce( (last, a) => last + a.rate, 0 ) / array.length
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
    return array.map( element => {
       const arrayMin = element.duration.split(" ");
       const hours = arrayMin[0].match(/\d+/g)[0];
       let min = 0;
       if (arrayMin.length === 2) {
           min = arrayMin[1].match(/\d+/g)[0]
       }
       element.duration = (hours * 60) + min;
       return element;
    });
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average
