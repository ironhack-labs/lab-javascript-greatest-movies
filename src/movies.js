// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
// Uses the map method to create a new array called justDirectors that only takes the 'director' property from the original array
    const justDirectors = moviesArray.map (el => el.director);
// _Bonus_: Uses the new method with the spread operator to build a new array based on the justDirectors array that does not contain duplicates
    // const uniqueDirectors = [...new Set(justDirectors)];
    // return uniqueDirectors;
// _Bonus_: (Variant 2) Uses the filter method to build a new array based on the justDirectors array that does not contain duplicates
    const uniqueDirectors = justDirectors.filter(function(item, index) {
    return justDirectors.indexOf(item) === index;
    }); 
    return uniqueDirectors;
}

//console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
// If statement to return 0 if the array is empty
    if (moviesArray.length === 0) {
        return 0;
      }
// Use .filter to find all the movies that are directed by Spielberg and(&&) that include 'Drama' as genre (genre is an array, this is why it requires .includes) and store them in the spielbergDrama variable
    const spielbergDrama = moviesArray.filter (function(movie) {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    });
// Use .length to count the length of the new spielbergDrama array
const spielbergDramaCount = spielbergDrama.length
// Close the function returning the count
return spielbergDramaCount
}

// console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
// If statement to return 0 if the array is empty
    if (moviesArray.length === 0) {
        return 0;
      }
// Use map function to create a new array called zeroScore. The new array checks if the score in the original array is NaN or empty. If it is, it sets it to 0
    const zeroScore = moviesArray.map(function (movie) {
        if (isNaN(movie.score) || movie.score === '') {
            movie.score = 0;
        }
        return movie
    });
// Use the reduce function to calculate the average by summing the movie scores (sets 0 as the initial value) and dividing it by the number of objects in the array zeroScore (because it has the normalized score where NaNs or '' are converted to value 0)
    const average = moviesArray.reduce((total, movie) => total + movie.score, 0) / zeroScore.length ;
// Creates the rounded average by using the parseFloat 
    const roundedAverage = parseFloat(average.toFixed(2))
    return roundedAverage
}

//console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
