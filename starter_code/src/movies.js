/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {
    return movies.map(function(movie) {
        movie = Object.assign({}, movie);
        var duration = movie.duration.split(' ').reduce(function(acc, time) {
                if (time.indexOf('h') !== -1) {
                    return Number(time.replace('h', '')) * 60 + acc;
                } else {
                    return Number(time.replace('min', '')) + acc;
                }
            }, 0);
        movie.duration = duration;
        return movie;
    });
 }

// Get the average of all rates with 2 decimals 

function ratesAverage(arr) {
    var rates = arr.map(function(movies){
      return movies.rate;
    });
    var numbers = rates.map(function(rate){
      
      return parseFloat(rate);

    });
    var sum = numbers.reduce(function(acc, curr){
      return acc + curr;
    });
    
    return sum / numbers.length;
}


// Get the average of Drama Movies

function dramaMoviesRate(films){
    /*var genre = films.map(function(each){
      if(each.genre.indexOf('Drama') !== -1) {
        var dramaRate = each.rate;
        return ratesAverage(films);
        //return dramaRate;
      }
      else {
        return;
      }
    });*/

    /*var genre = films.reduce(function(acc, each){
        if(each.genre.indexOf('Drama') !== -1) {
          var dramaRate = each.rate;
          return ratesAverage(films);
          //return dramaRate;
        }
        else {
          return;
        }
      });*/

      var genre;
    
      if(films.length !== 1){
        genre = films.reduce(function(acc, each){
          if(each.genre.indexOf('Drama') !== -1) {
            var dramaRate = each.rate;
            return ratesAverage(films);
            //return dramaRate;
          }
          else {
            return;
          }
        });
      }
      else {
        genre = films[0].rate;
      }
    
    return genre;


}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
