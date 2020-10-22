// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (moviesList) {
 
    let SpielbergDramaMov = moviesList.filter(movie =>
     movie.genre.includes("Drama") && movie.director == "Steven Spielberg");

    return SpielbergDramaMov.length;                                    
};   

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesList) {
    let rateAverage = moviesList.reduce(acc,value => {
        
        }  
);
    if (dramaMovies == 0){
        return 0;
    };
    
    let total = Math.round((rateAverage /dramaMovies.length)*100)/100;
    return total;

};
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = function (array) {
    const titles = array.map(function (movie) {
        return movie.title;
    });
    const sortedArray = titles.sort().splice(20, array.length);
    return sortedArray;
};
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
//function howManyMovies (moviesList) {
  //  let SpielbergDramaMov = []
  //  moviesList.filter (function (movie) {
  //      SpielbergDramaMov.push(movie.genre.indexOf("Drama"))
  //      SpielbergDramaMov.push(movie.director.indexOf("Steven Spielberg"))
     
  //   });
  //   return SpielbergDramaMov

    // movie.genre.includes("Drama") && movie.director.includes("Steven Spielberg"