/* eslint no-restricted-globals: 'off' */
//Turn duration of the movies from hours to minutes 

// function turnHoursToMinutes(movies) {
//     var newMovies= movies.map(function(film){  
//        var y= film.duration;
//        x=y.split(" ");
//        var h =0;
//        var min =0;
//        if (film.duration.includes("h")) {
//          h = parseInt(x[0].replace("h",""), 10)*60;
//        } 
//        if (film.duration.includes("min")) {
//         min= parseInt(x[1].replace("min",""), 10) ;
//        }
//          film.duration= h+min;
//          return film;
//        });
//         return newMovies;
//  } 

function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function (elem) {
      var hours = 0;
      var minutes = 0;
      if (elem.duration.indexOf('h') !== -1) {
        hours = parseInt(elem.duration[0], 10) * 60;
      }
      if (elem.duration.indexOf('min') !== -1) {
        minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
      }
      return Object.assign({}, elem, { duration: hours + minutes });
    });
  }
  turnHoursToMinutes(movies);
  console.log(movies);

// Get the average of all rates with 2 decimals 
function ratesAverage (movies){
    var rateArray= movies.map(function(film){
    return Number(film.rate); 
    })
    .reduce(function(acc,value){
    return acc+value;
    },0)
    ;
    return Math.round((rateArray/movies.length) * 100) / 100;
}


// Get the average of Drama Movies
function dramaMoviesRate (movies) {
 var dramaMovie = movies.filter(function(film){
    return film.genre.indexOf('Drama') !== -1;
      });
      if (dramaMovie .length<1){
        return undefined;
    }
    return ratesAverage(dramaMovie);
}

  console.log(dramaMoviesRate);

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
