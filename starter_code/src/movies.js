/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(movies) {

    let moviesArr = [...movies];

    moviesArr.sort((a, b) => {
        if (a.year === b.year) {
          return a.title.localeCompare(b.title)
        } else { 
          return a.year - b.year}
    });
    
    return moviesArr
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    let moviesArr = [... movies];

   moviesArr = moviesArr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes('Drama'));
    
    return moviesArr.length;
}



// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let moviesArr = [... movies];

    moviesArr.sort((a, b) => a.title.localeCompare(b.title));

    let twentyFirsts = moviesArr.splice(0, 20).map(element => element.title);

    return twentyFirsts;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    let moviesArr = [... movies];

    let filteredMovies = moviesArr.filter(movie => {
        if (movie.length === 0) {
            return 0
        } else {
            return movie.rate;
        }
    })

    let avg = filteredMovies.reduce((acc, mRate) => acc + mRate.rate, 0)/filteredMovies.length;

    return Number (avg.toFixed(2));

    
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let moviesArr = [... movies];

   let dramaRate =  moviesArr.filter(movie => movie.genre.includes('Drama'));
   return movie.rate;
        
            
        
   
   console.log(dramaRate);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
