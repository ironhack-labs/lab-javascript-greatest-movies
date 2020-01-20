/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    let moviesByYear = [...movies];

    return moviesByYear.sort((a, b) => {
        if(a.year !== b.year){
         return  a.year - b.year;
        } else {
            let compare = a.title.localeCompare(b.title);
            if (compare = -1){
                return a.year - b.year;
            } {
                return b.year - a.year;
            }
        } 
    }); 
    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies){
    return movies.filter(movie => movie.director.includes("Steven Spielberg") && movie.genre.includes("Drama")).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let alphabetic = [...movies].sort((a, b) => a.title - b.title).map(title => title.title).sort();
    return alphabetic.splice(0,20)
    
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    if (movie.length === 0) {
        return 0;
    } 
   let rate = movies.reduce((acumulator, value) => acumulator + value.rate, 0);
   let moviesLength = movies.length;
   let rateAverage = rate/moviesLength;
   return +(rateAverage.toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
