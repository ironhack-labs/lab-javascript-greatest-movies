/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(movies) {
  let newDuration='';
  // let dataToReturn = movies.map((movie)=>{
  return movies.map((movie)=>{
    newDuration = movie.duration.split(" ");

    if (newDuration.length == 2) {
      newDuration = parseInt(newDuration[0])*60 + parseInt(newDuration[1])
    }

    else if (newDuration[0].includes("h")) {
      newDuration = parseInt(newDuration[0])*60
    }

    else {newDuration = parseInt(newDuration[0])
    }
    return {
      ...movie, duration: newDuration}
    
  })
  // return dataToReturn;
}



// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
