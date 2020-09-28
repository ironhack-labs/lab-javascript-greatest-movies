// Iteration 1: All directors? - Get the array of all directors.


function getAllDirectors(movies) { 
    return movies.map(movie => movie.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(list){
    let dramaSpielberg = list.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    return dramaSpielberg.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    }
    const rateAvg = movies.reduce(function (acc, rating) {
        if (rating.rate) {
        return acc + rating.rate;
        } else {
        return acc + 0;
        }
    }, 0)/movies.length; 
    return Math.round(rateAvg * 100) / 100
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    let drama = movies.filter(movie  => movie.genre.includes('Drama'));
    return ratesAverage(drama);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let moviesByYear = movies.slice().sort((a, b) => {
        if (a.year === b.year) {
            if (a.title < b.title) {
                return -1;
            } if (a.title > b.title) {
                return 1;
            }
        } else {
            return a.year - b.year;
        }
    });
    return moviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let onlyTitles = movies.map(titles => titles.title);

    let alphabeticalOrder = onlyTitles.sort((a, b) => {
        if (a < b) return -1;
        if (b < a) return 1;
        if (a === b) return 0;
    });
    return alphabeticalOrder.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
