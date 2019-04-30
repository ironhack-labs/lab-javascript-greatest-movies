/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  const newArr = movies.map(movie => {
    duration = movie.duration;
    //console.log(duration);
    
    if (duration.length > 5) {
      let hours = parseInt(duration.substring(0, 1));
      let minutes = parseInt(duration.substring(3, 5));
      let durationInMinutes = hours * 60 + minutes;
      return { ...movie, duration: durationInMinutes };
    } else if (duration.length > 3) {
      let minutes = parseInt(duration.substring(0, 2));
      let durationInMinutes = minutes;
      movie.duration = durationInMinutes;
      return { ...movie, duration: durationInMinutes };
    } else if (duration.length < 3) {
      console.log(duration);
      let hours = parseInt(duration.substring(0, 1));
      let durationInMinutes = hours * 60;
      movie.duration = durationInMinutes;
      return { ...movie, duration: durationInMinutes };
    } else if(duration.length === 0){
      return { ...movie, duration: 0 };
    }
  });
  return newArr;
}

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  let newMovies = movies.reduce((a, b) => 
    {
    if(typeof a.rate  === "string"){
      a.rate = 0
    }
    return {rate: parseInt(a.rate) + parseInt(b.rate)}
  });
  let average = newMovies.rate / movies.length;
  return parseFloat(average.toFixed(2));
}

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(word => word.genre.indexOf(`Drama`) >= 0);
  //console.log(dramaMovies);
  if (dramaMovies.length <= 0) {
    return undefined;
  }
  return ratesAverage(dramaMovies);
}

      
// Order by time duration, in growing order

function orderByDuration(movies) {
  const durationArr = []
  const moviesInMinutes = turnHoursToMinutes(movies)
  const moviesInMinutes2 = moviesInMinutes.filter(movie => movie !== undefined)
  moviesInMinutes2.forEach(element => {
    durationArr.push(element.duration)
  });
  //console.log(durationArr)
   let sorted = moviesInMinutes2.sort(function(a, b){
    return  a.duration - b.duration;
  });

  return sorted

}






// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
  let dramaMovies = movies.filter(word => word.genre.indexOf(`Drama`) >= 0);
  let stevenMovies = dramaMovies.filter(word => word.director === "Steven Spielberg")
  if(movies.length === 0){
    return undefined;
  }
  else if(stevenMovies.length === 0){
    return `Steven Spielberg directed 0 drama movies!`
  }
  return `Steven Spielberg directed ${stevenMovies.length} drama movies!`
  //return 
}


// Order by title and print the first 20 titles
function orderAlphabetically(movies){
  let movieTitles = [];
  if(movies.length < 20){
    for(i=0; i<movies.length; i++){
      movieTitles.push(movies[i].title) 
    }
  }
  else{
    for(i=0; i<20; i++){
      movieTitles.push(movies[i].title) 
    }
  }
  let sortedTitles = movieTitles.sort()
  return sortedTitles
}


// Best yearly rate average
function bestYearAvg(movies){
  
}


