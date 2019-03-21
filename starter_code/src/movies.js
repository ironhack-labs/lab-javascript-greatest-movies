/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array){
  var newArray = array.map((movie) => {
    var duration = movie.duration
    var minutes=0, idx

    if (typeof duration === "number") return {duration : duration}

    if (duration.indexOf("h") != -1 && duration.indexOf("m") != -1) {
      idx = duration.indexOf("h");
      minutes = duration[idx - 1] * 60;

      idx = duration.indexOf("m");
      minutes += duration[idx - 2] * 10
      minutes += parseInt(duration[idx - 1])
    }

    if (duration.indexOf("h") != -1){
      idx = duration.indexOf("h");
      minutes = duration[idx - 1] * 60;
    }

    if (duration.indexOf("m") != -1){
      idx = duration.indexOf("m");
      minutes += duration[idx - 2] * 10
      minutes += parseInt(duration[idx - 1])
    }

    return Object.assign({},movie,{duration:minutes})    
  });

  return newArray;
}

// Get the average of all rates with 2 decimals 

function ratesAverage (array){
  var avg =  array.reduce((acum, movie) => {
    return acum + movie.rate
  },0);

  return parseFloat((avg/array.length).toFixed(2));
}

// Get the average of Drama Movies

function dramaMoviesRate (array){

  var dramaMovies = array.filter(movie=>{
    return movie.genre.includes("Drama")
  })

  if (dramaMovies.length===0) return undefined

  return ratesAverage(dramaMovies);

}

// Order by time duration, in growing order

function orderByDuration (array){
  var goodDurationMovies = turnHoursToMinutes(array);
  var output = goodDurationMovies.sort((a, b) => {
    if (a.duration === b.duration) return a.title - b.title
    return a.duration - b.duration
  });
  output = output.map(movie=> {
    return {duration : movie.duration}
  });
  return output
}

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
