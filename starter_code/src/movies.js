/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arrayOfMovies) { // create function to order, receiving the unordered array as an argument
    const copyOfArray = [...arrayOfMovies]; // declare a variable to store the copy of the original array
    copyOfArray.sort(function(a, b) { // used .sort method to order the array by year, taking in a function with 1-2, 2-3, 3-4
        if (a.year - b.year == 0) { // if year is the same (==0) sort by name
            if (a.title < b.title) { // when the title of A starts with an earlier letter 
                return -1;
            }
            if (a.title < b.title) {
                return 1;
            }
            else {
                return 0;
            }
        }
        return a.year - b.year; // returns 0, 1, or -1, which determines the order in the new array
    })
    return copyOfArray; // returns the newly-created array
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arrayOfMovies) {
    const filteredArrayofMovies = arrayOfMovies.filter(movie => {
        let movieCategory = movie.genre.includes('Drama');
         if(movie.director === "Steven Spielberg" && movieCategory) {
             return movie;
         }
     });
     return filteredArrayofMovies.length;
 };

// // howManyMovies(movies);

// // Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (arrayOfMovies) => {
    const movieTitles = [];
    const alphabeticallyOrderedArray = arrayOfMovies.sort(function (a, b) {
        if (a.title[0] > b.title[0]) {
            return -1;
        }
        if (a.title[0] < b.title[0]) {
            return 1;
        }
        if (a.title[0] === b.title[0]) {
            return 0;
        }
    })
    return alphabeticallyOrderedArray;
}; // couldn't figure out how to return the array element (title) and only 20;

// // Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arrayOfMovies) {
    arrayOfMovies.rate.reduce((acc, val) => {
        return acc + val / arrayOfMovies.length
      }, 0)
}; // still getting erros but I believe this should work

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
