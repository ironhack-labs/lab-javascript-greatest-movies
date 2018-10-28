/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function hoursToMinutes(movieObject){
    let durationArray = movieObject.duration.split(' ')
    let hours = durationArray[0][0]
    let howManyDigitsMinutes = durationArray[1].length - 3
    let minutes = durationArray[1].substr(0, howManyDigitsMinutes)
    let totalDuration = Number(hours) * 60 + Number(minutes)
    let newMovie = movieObject;
  
    newMovie.duration = totalDuration.toString();
    return newMovie;
  };
  
  function turnHoursToMinutes(movieArray){
    return movieArray.map(hoursToMinutes);
  }
  
  turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 

const averageMovieRating = movies.filter((mov)=>{
    if(mov.rate > 0){
      return true
    }
  }).reduce((total, mov)=>{
    return total + parseInt(mov.rate)
  },0)/movies.length 
  
  console.log(averageMovieRating);

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
