/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function(elem) {
      var hours = 0;
      var minutes = 0;
  
      if (typeof elem.duration !== "number") {
        if (elem.duration.indexOf("h") !== -1) {
          hours = parseInt(elem.duration[0], 10) * 60;
        }
        if (elem.duration.indexOf("min") !== -1) {
          minutes = parseInt(
            elem.duration.substring(
              elem.duration.length - 5,
              elem.duration.length - 3
            ),
            10
          );
        }
        return Object.assign({}, elem, { duration: hours + minutes });
      } else {
        return elem;
      }
    });
  }
  
  turnHoursToMinutes(movies);
  

// Get the average of all rates with 2 decimals 

function ratesAverage(moviesArray) {
    var yhtalo = moviesArray.reduce(function(sum, peli){
        return sum + parseInt(peli.rate);
    },0);
    return yhtalo/moviesArray.length;
}
 
 ratesAverage(movies);
// Get the average of Drama Movies

function dramaMoviesRate(moviesArray){
    var generoBusqueda = moviesArray.filter(function(e){
      return e.genre.indexOf("Drama") != -1
      
    });
    

/*function dramaMoviesRate(moviesArray) {
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
 
 dramaMoviesRate(movies);*/
 
// Order by time duration, in growing order

function orderByDuration(moviesArray) {
    var moviesTransform = turnHoursToMinutes(moviesArray);
    var sorted = moviesTransform.sort(function(a, b) {
      if (a.duration > b.duration) {
        return 1;
      }
      if (a.duration < b.duration) {
        return -1;
      }
    });
    console.log(sorted);
    return sorted;
  }
    orderByDuration(movies);
        
// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
