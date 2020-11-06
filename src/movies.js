// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (arr) => arr.map(element => element.director)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (arr) => { 
    const spMovies = arr.filter(element => element.director === 'Steven Spielberg' && element.genre.includes('Drama'))
    return spMovies.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// Me queda añadir la condición de que devuelva una media incluso si una película no tiene rate

const ratesAverage = (movies) => {
    const average = movies.reduce(function (acc, rates) {
        return acc + rates.rate;
    }, 0);
    if (movies.length === 0) {
        return 0
    } else {
        return Math.round((average/movies.length)*100)/100
    }
}
  


// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (movies) => {
    const dramaMovies = movies.filter (element => element.genre.includes ('Drama'))
    return dramaMovies.reduce (function (acc, rates) {
        return Math.round((acc + rates.rate)*100)/100;
    }, 0);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movie) => {
    movie.year.sort( function(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        if (a === b) return movie.title.sort ();
    });
    return orderByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average