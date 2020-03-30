/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    //Create new Array and sort it
    let newArray = array.slice().sort(function (a,b) {
        return a.year - b.year || a.title.localeCompare(b.title);
    })
    return newArray;
}

/*const sorted = numbers.sort(function (a, b) {
    return a - b;
*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
    //Filter by Drama and Director
    let number = array.filter(function (movie) {
        return movie.genre.includes("Drama") && movie.director === "Steven Spielberg";
    })
    //Return length
    return number.length;
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    // Order alphabetically
    let ordered = array.slice().sort(function (a,b) {
        return a.title.localeCompare(b.title);
    })
    // Return only title of ordered
    let onlyTitleOrdered = ordered.map(function(movie){
        return movie.title;
    })
    //Return only 20 movies
    return onlyTitleOrdered.slice(0,20);
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    // Check if array empty
    if (array == 0) return 0;
    //Get only movie rates
    let onlyRate = array.map(function(movie){
        return movie.rate || 0;
    })
    //Reduce to one number
    let avgRates = onlyRate.reduce(function(acc, val) {
        return acc + val;
    })/onlyRate.length;
    // Round it
    return Math.round( avgRates * 100 + Number.EPSILON ) / 100;
}


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    // Check if array empty
    if (array == 0) return 0;
    //Filter Dramas
    let dramas = array.filter(function (movie) {
        return movie.genre.includes("Drama")
    })
    //Get only movie rates
    let onlyRate = dramas.map(function(movie){
        return movie.rate || 0;
    })
    //Check again if array is empty
    if (onlyRate == 0) return 0;
    //Reduce to one number
    let avgRates = onlyRate.reduce(function(acc, val) {
        return acc + val;
    })/onlyRate.length;
    // Round it
    return Math.round( avgRates * 100 + Number.EPSILON ) / 100;
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
    
function turnHoursToMinutes(array) {
    //Pick duration to modify
   let splitDuration = JSON.parse(JSON.stringify(array)).map(function(movie){
     //Split with H and check if it is an hour or min
     if (!movie.duration.split('h')[0].includes('min')) {
       // If it is an hour, multiply by 60 and add minutes if needed
     movie.duration =  parseInt(movie.duration.split('h')[0])*60 + parseInt(movie.duration.split('h')[1]) || parseInt(movie.duration.split('h')[0])*60;
     } else {
       // Else just return the minutes
       movie.duration = parseInt(movie.duration.split('h')[0])
     }
     return movie
   })
   return splitDuration;
  }
    


// BONUS Iteration: Best yearly rate average - Best yearly rate average


function bestYearAvg(array) {

}
