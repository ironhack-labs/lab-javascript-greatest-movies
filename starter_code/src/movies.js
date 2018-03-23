
  
/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
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

// Get the average of all rates with 2 decimals 

var goodRate = [];
var totalRate = 0;
function rateNumber (movies) {
    for (var i = 0; i < movies.length; i++) {
        goodRate.push(parseFloat(movies[i].rate));
    }
    for (var j = 0; j < goodRate.length; j++) {
        totalRate += goodRate[j];
    }
    return ((totalRate / goodRate.length).toFixed(2));
};

// Get the average of Drama Movies
var goodDrama = [];
var totalDrama = 0;
function dramaMoviesRate (movies) {
    for (var i = 0; i < movies.length; i++) {
        for (var j = 0; j < movies[i].genre.length; j++) {
            if (movies[i].genre[j] === "Drama") {
                goodDrama.push(parseFloat(movies[i].rate));
            }     
        } 
    }  
    for (var k = 0; k < goodDrama.length; k++) {
            totalDrama += goodDrama[k];
    } 
    console.log("gd" + goodDrama)
    console.log("td" + totalDrama)
    return ((totalDrama / goodDrama.length).toFixed(2));
};
    


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
