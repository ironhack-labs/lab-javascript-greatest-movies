/* eslint no-restricted-globals: 'off' */




// Turn duration of the movies from hours to minutes 

function hoursToMinutes(){

let hr = movies.map(duration => movies.duration.substring(0,1));
let min = movies.map(duration => movies.duration.substring(2).replace("min", " "));

return Number(hr) + min;

}

let newDuration = movies.map(hoursToMinutes);
console.log(newDuration);




// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
