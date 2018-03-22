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
  console.log(movies);
  
  
  

// Get the average of all rates with 2 decimals 

function ratesAverage(moviesArray) {
    var yhtalo = moviesArray.reduce(function(sum, peli){
        return sum + parseInt(peli.rate);
    },0);
    return yhtalo/moviesArray.length;
}
 
 ratesAverage(movies);
// Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {
    var drama = moviesArray.filter(lloron);

    function lloron (e) {
        var k = e.genre;

        for (var i = 0; i < k.length; i++) {
        if (k[i] === "Drama") {
            return true;
        }
    }
    return false;
    }
 
    if (drama.length === 0) {
        return undefined;
    } else {
    return ratesAverage(drama);
}
}
 
 dramaMoviesRate(movies);
 
// Order by time duration, in growing order

function orderByduration (moviesArray){
    durationArray = turnHoursToMinutes(moviesArray);
    durationArray.sort(compareDuration);

    function compareDuration(a,b) {
        if (a.duration === b.duration) {
        if (a.title < b.title) {
            return -1;
        }
    } else if (a.title > b.title) {
        return 1;
    } else {
        return a.duration - b.duration
    }
    }
   
    return durationArray;
}
    
orderByduration(movies);
        
// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
