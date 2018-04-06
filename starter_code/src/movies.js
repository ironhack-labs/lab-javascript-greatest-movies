// var movies = require("./data.js")

var movies = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  }
];

function turnHoursToMinutes(anArray){
  movies.map(function(){
    var hours = movies[0].duration.slice(0,1) * 60;
    console.log(hours);
    return hours;
  });
};

console.log(turnHoursToMinutes(movies);

// var result = movies[0].duration.slice(3,-3) + hours;
//     console.log(result);

/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
