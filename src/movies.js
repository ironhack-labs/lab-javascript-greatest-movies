// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
  return arr.map(movie => movie.director);
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function duplicatesRemover(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    return arr.filter(movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg').length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    return Number(arr.filter(movie => movie.rate).reduce((total, movie) => total + movie.rate/arr.length, 0).toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    return ratesAverage(arr.filter(movie => movie.genre.includes('Drama')));
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderTitlesAlphabetically(arr) {
    return arr
    .slice(0, arr.length)
    .sort((a, b) => {
        if (a.title < b.title) {
            return - 1;
        } else if (a.title > b.title) {
            return 1;
        } return 0;
    });
};

function orderByYear(arr) {
    return orderTitlesAlphabetically(arr).sort((a,b) => a.year - b.year);
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    return orderTitlesAlphabetically(arr).slice(0, 20).map(movie => movie.title);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    return arr
        .map(movie => {
          const updatedMovie = {...movie};
            if (movie.duration.includes('h')) {
                updatedMovie.duration = parseInt(movie.duration.slice(0,2)) * 60 + parseInt(movie.duration.slice(3, 5) || 0);
            }   else {
                updatedMovie.duration = Number(movie.duration.slice(0,2));
            }   return updatedMovie;
        });
};
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function orderByYearInverse(arr) {
    return arr.sort((a, b) => b.year - a.year);
};

function bestYearAvg(arr) {
    if (arr.length < 1) { // Esto lo pide que se haga así o estoy "trampeandolo" y realmente no me da null con empty arr por error en mi codigo?
        return null;
    };
    let result = [];
    let newArr = orderByYearInverse(arr);
    let year = newArr[0].year;
    for (year; year >= newArr[newArr.length -1].year; year--) {
        const yearArr = newArr.filter(movie => movie.year === year);
        result.push(
            {
                'year': year,
                'rate': parseFloat(yearArr.reduce((acc, sum) => acc + sum.rate/yearArr.length, 0))
            }
        )};
    let solucion = result.reduce((prev, curr) => (prev.rate > curr.rate) ? prev : curr, 0);
    return `The best year was ${solucion.year} with an average rate of ${solucion.rate}`
};
