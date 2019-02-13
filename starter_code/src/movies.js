/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arrMovies){
  
  let newArrMovies = arrMovies;
  
  let finalArrMovies = newArrMovies.map(oneMovie => {
    let movie = Object.assign({},oneMovie);
    var hourMinutes = movie.duration.match(/\d+/g).map(Number);
    if(hourMinutes.length>1){
      movie.duration=(hourMinutes[0]*60)+hourMinutes[1];
    }else if(hourMinutes.length==1){
      if(hourMinutes>9){
        movie.duration=hourMinutes[0];
      }else{
        movie.duration=hourMinutes[0]*60;
      }
    }
    return movie;
  });
  return finalArrMovies;
  
}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate... 
