// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = array => array.map(elm => elm.director);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const spielbergDramas= movies.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes("Drama"));
    return spielbergDramas.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    } else {
        const totalRates = movies.reduce((acc, elm) => acc + elm.rate, 0) / movies.length;
        return ((Math.round(totalRates * 100)) / 100); 
    }
}
    
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const drama = movies.filter(elm => elm.genre.includes("Drama"));

    if (drama.length > 0) {
        return ratesAverage(drama);
    } else {
        return 0;
    }
}
  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const years = movies.map(elm => elm.years);
    const yearsCopy = [...years];

    yearsCopy.sort((a, b) => a - b);
    
    return yearsCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const titleAlph = movies.map(elm => elm.title);
    titleAlph.sort();
    return titleAlph.slice(0, 20);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
