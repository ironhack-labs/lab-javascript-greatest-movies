// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (directors) {
    const allDirectors = directors.map(( movie ) => {
        return movie.director
    });
    return allDirectors;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
    let stevenSpielbergMovies = movies.filter(function(movie){
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");  
    });
return stevenSpielbergMovies.length;    
};
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    }
    let total = movies.reduce(function (acc, rating) {
        if (typeof rating.rate === "number") {
        return acc + rating.rate;
        } else {
        return acc + 0;
        }
    }, 0); 
    let avRate = total/movies.length
    return Math.round(avRate * 100) / 100
};
// Iteration 4: Drama movies - Get the average of Drama Movies

//Este probe de varias formas pero no lo pude hacer que funcione de esta u otra manera, me faltan 4 en Jasmine.
function dramaMoviesRate(movies){
    if (movies.length === 0) {
        return 0;   
}
let dramaMovies = movies.filter(function(drama){
    return drama.genre.includes("Dramas");
});
return dramaMovies.length;
};
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//Este lo consegui buscando mucho como realizar sorted copiando antes con slice, porque me frustre bastante, pero alfinal salio!
function orderByYear(movies) {
    let copy = movies.slice()
    let sorted = copy.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return -1; }
        } else {
            return a.year - b.year
        }
    });
    return sorted;
};
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
