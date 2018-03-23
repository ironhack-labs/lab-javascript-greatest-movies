/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArray) {
  
  return moviesArray.map(function (elem) {
    var hours = 0;
    var minutes = 0;
    
    if(typeof(elem.duration) !== 'number'){
      if (elem.duration.indexOf('h') !== -1) {
        hours = parseInt(elem.duration[0], 10) * 60;
      }
      if (elem.duration.indexOf('min') !== -1) {
        minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
      }
      return Object.assign({}, elem, { duration: hours + minutes });
    }
    else{
      return elem;
    }
  });
}
turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  var sumAverages = movies.reduce(function(accum, currentMov){
    return accum + parseFloat(currentMov.rate);
  },0)
    return sumAverages/movies.length
}
// Get the average of Drama Movies
function dramaMoviesRate(movies){
  
    var dramas = movies.filter(function(movie){
      if(movie.genre.indexOf('Drama') !== -1){
        if(movie.rate === ''){
          movie.rate = 4
        }
        return true
      }
    });
    if (dramas.length > 0){
      return parseFloat(ratesAverage(dramas).toFixed(2))
    } else {
      return
    }

} 

// Order by time duration, in growing order
  function orderByDuration(movies){
    var standardized = turnHoursToMinutes(movies)
    console.log(standardized)

    if( standardized.length === 1)
    return movies
    if( standardized.length > 1)
    {
      var sorted = standardized.sort(function(a,b){
        return a.duration - b.duration
      })
      var sortedTitles = sorted.sort(function(x,y){
        if(x.duration - y.duration === 0){
          if(x.title < y.title)
            return -1
          if(x.title > y.title)
            return 1
          return 0
        }else{
          if(x.duration < y.duration)
           return -1
          if(x.duration > y.duration)
            return 1
        }
      })
      return sortedTitles
  }
} 
// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
