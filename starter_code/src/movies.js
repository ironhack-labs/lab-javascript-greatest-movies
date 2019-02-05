/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {

    var totalMinutes, h, hour, min, minute;
    var durationArray = movie.duration.split(" ");

    if (durationArray.length == 1) {

      if (movie.duration.indexOf("m") !== -1) {

        min = movie.duration.replace("min", "")
        minute = parseInt(min)
        totalMinutes = minute;

      } else {

        h = movie.duration.replace("h", "");
        hour = parseInt(h) * 60;
        totalMinutes = hour;
      }

    } else {

      h = durationArray[0].replace("h", "");
      hour = parseInt(h) * 60;
      min = durationArray[1].replace("min", "")
      minute = parseInt(min)

      totalMinutes = hour + minute;
    }

    var obj = {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: totalMinutes,
      genre: movie.genre,
      rate: movie.rate
    }
    return obj
  });
}
turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
function ratesAverage(totalRate) {
  suma = totalRate.reduce(function (accumulator, movie) {
    rates = parseFloat(movie.rate);
    return accumulator += rates;
  }, 0); 
  average = suma / totalRate.length;
  console.log(average);
  
  return average;
}
/*function ratesAverage(rateArray) {
    var rates 
    = parseInt(movie.rate);
    rateArray.rate.reduce(function(acc,0){
      return acc;
    }   
    console.log(rateArray.rate);
    })
  }
  ratesAverage(movies);
  */
  /*function ratesAverage(rates) {
    rateArray = 
    return movies.rate.
  }*/


  // Get the average of Drama Movies


  // Order by time duration, in growing order


  // How many movies did STEVEN SPIELBERG


  // Order by title and print the first 20 titles


  // Best yearly rate average