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

function ratesAverage (movies) {
  return movies.reduce((acumRate, movie)=>{
    return acumRate + movie.rate;

  }, 0)/movies.length;
}


// Get the average of Drama Movies

// function dramaMoviesRate (movies) {
//   return movies.reduce((acumRate, movie)=>{
//     if ('drama' in movie) {
//       return acumRate + movie.rate;
//     }
//   }, 0)/movies.length;
// }

function dramaMoviesRate (movies) {
    let dramaArray = movies.filter(dramaMovie => dramaMovie.genre.includes('Drama'));
    if (dramaArray.length == 0) {
      return undefined;
    }
    return (Math.round(ratesAverage(dramaArray)*100)/100);
}

// Order by time duration, in growing order

function orderByDuration (movies) {
    movies.sort((a,b)=> a.duration - b.duration);
    // if (a.duration == b.duration) {
    //   movies.sort((a,b)=> a.title - b.title);
    // }
  return movies;
}

// movies.sort((a,b)=> {
//   if a.duration > b.duration 
//   if (a.duration == b.duration) {
//     movies.sort((a,b)=> a.title - b.title);
//   }
// }
//   );

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
