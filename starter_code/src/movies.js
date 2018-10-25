/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (array){
    return array.map(function(movie){
        if (!movie.duration.includes("h")){
            var timeInMinutes = parseInt(movie.duration);
        }

        else if (!movie.duration.includes("min")){
            var timeInMinutes = parseInt(movie.duration) * 60;
        }

        else {
            var hmin = movie.duration.split(" ");
            var timeInMinutes = parseInt(hmin[0])*60 + parseInt(hmin[1]);
        }

        return Object.assign({},movie,{duration: timeInMinutes});

    });
};

// Get the average of all rates with 2 decimals 
function ratesAverage (array){
    return (Math.round((array.reduce(function(accumulator, movie){
      return (accumulator + parseFloat(movie.rate));
  },0)/array.length)*100)/100);
  };
// Get the average of Drama Movies
function dramaMoviesRate(array){
    var dramaMovies = array.filter(function(movie){
      return movie.genre == "Drama";
    });
    if (dramaMovies === ""){
        return undefined;
    };
    return ratesAverage(dramaMovies);
};

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
