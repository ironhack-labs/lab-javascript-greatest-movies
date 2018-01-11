/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 



// function turnHoursToMinutes (array) {
//     var duration
//     minutesArray = '';
//     return minutesArray;
// };



// Get the average of all rates with 2 decimals 

//...Callback function
function ratesTotal (accumulator, currentValue) {
    accumulator = accumulator + currentValue.rate;
    return accumulator;
}

//...Reduce function
var total = movies.reduce(ratesTotal, 0);

console.log(total);




// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
