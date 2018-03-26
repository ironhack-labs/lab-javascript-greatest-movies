/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 




// Get the average of all rates with 2 decimals 


function ratesAverage (array) {


var rateSum = array.reduce(function (accumulator, item) {

      return accumulator + item.rate;
}, 0);

return rateSum / array.length;


};



function dramaMoviesRate (array) {

var genre = array.filter(function (movie) {
    return movie.genre.find(function (genre) {   
            return genre === 'Drama';
           });
              });
                var avg = ratesAverage(genre);
                avg = Math.floor(avg * 100) /100
                return Number(avg.toFixed(2));
                };



    
// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
