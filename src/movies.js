// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
    const directors = movies.map(movies => movies.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const spielbergDramas = movies.filter(function(movie) {
        return movie.director.includes("Steven Spielberg") && movie.genre.includes("Drama");
       });
    return spielbergDramas.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) return 0;
    const rates = movies.map(movie => movie.rate);
    const reducedRate = rates.reduce((accumulator, currentValue) => accumulator + currentValue);
    const averageRate = reducedRate / rates.length;
    return +averageRate.toFixed(2);
  }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    if (movies.length === 0) return 0;
    const dramaMovies = movies.filter(function(movie) {
        return movie.genre.includes("Drama");
    });
    if (dramaMovies.length === 0) return 0;
    const dramaRates = dramaMovies.map(movie => movie.rate);
    const reducedDrama = dramaRates.reduce((accumulator, currentValue) => accumulator + currentValue);
    const averageDrama = reducedDrama / dramaRates.length;
    return +averageDrama.toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    sortedYears = [...movies].sort((a, b) => (a.year - b.year));
    sortedTitles = [...movies].sort(function(a, b) {
        if (a.title > b.title) {
            return -1;
        }
        if (b.title < a.title) {
            return 1;
        }
        return 0;
    });
    return sortedYears;
}

/* I could figure out how to use these two variables together. My thought process was to use conditionals to isolate movies with the same year, but ran into issues placing the if statements. */

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    alphabeticalMovies = [...movies].sort(function(a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    const top20Movies = alphabeticalMovies.slice(0, 20);
    const top20Titles = top20Movies.map(movie => movie.title);
    return(top20Titles);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
