// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    return movies.map(movie => {return movie.director;});
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const spielbergDramaMovies = movies.filter(movie => {return (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));});
    return spielbergDramaMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) return 0;
    const rateSum = movies.reduce((sum, movie) => {
        return sum + (movie.rate ? movie.rate : 0);
    }, 0);
    return Number((rateSum / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
    return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const yearOrder = movies.slice();
    return yearOrder.sort((a,b) => {
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const alphaOrder = movies.slice().sort((a,b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
    });
    const titles = [];
    for (i = 0; i < movies.length && i < 20; i++) {
        titles.push(alphaOrder[i].title);
    }
    return titles;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
