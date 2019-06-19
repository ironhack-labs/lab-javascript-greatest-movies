/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arrayOfMovies){
  let newArray = arrayOfMovies.map((eachMovie)=>{
     let newMovieObject = {...eachMovie};
  let stringOfTime = newMovieObject.duration;
  if(stringOfTime.includes('h') && stringOfTime.includes('min')){
  let arrayWithHoursAndMinutesSeparately = stringOfTime.split('h');
  let numberOfHours = parseInt(arrayWithHoursAndMinutesSeparately[0]);
  let numberOfMinutes = parseInt(arrayWithHoursAndMinutesSeparately[1]);
  newMovieObject.duration = numberOfHours*60 + numberOfMinutes;
  } else if (stringOfTime.includes('h')){
  let arrayWithHoursAndMinutesSeparately = stringOfTime.split('h');
  let numberOfHours = parseInt(arrayWithHoursAndMinutesSeparately[0]);
  newMovieObject.duration = numberOfHours*60
  } else {
    newMovieObject.duration = parseInt(stringOfTime);
  }
  return newMovieObject
  })
  return newArray;
}

turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
function ratesAverage (arrayOfMovies){
  let sum = arrayOfMovies.reduce((accumulator, currentMovie)=>{ 
    return accumulator + Number(currentMovie.rate);
  },0)
  return Number((sum/arrayOfMovies.length).toFixed(2));
  }
  
  ratesAverage(movies);

// Get the average of Drama Movies
function dramaMoviesRate (arrayOfMovies) {
  let arrayOfDramaMovies = arrayOfMovies.filter((eachMovie)=>{
    return eachMovie.genre.includes('Drama')
  })

  if (arrayOfDramaMovies.length === 0) {
    return undefined
    }
  return ratesAverage(arrayOfDramaMovies);
}

dramaMoviesRate (movies)


// Order by time duration, in growing order

function orderByDuration(newConvertedArray) {
  newConvertedArray.sort(function(a, b){
 if(a.duration < b.duration){
   return -1
 } else if (b.duration < a.duration){
   return 1
 } else {
    if (a.title < b.title){
    return -1
    } else {
    return 1
    }
  }
  })

  return newConvertedArray}


orderByDuration(convertMovieTimesToMinutes(movies))


// How many movies did STEVEN SPIELBERG
function howManyMovies (moviesArray) {
  if (moviesArray.length ===0){
      return undefined;
    } 
  else {
    let newArrayofSpielbergMovies = moviesArray.filter((eachMovie) => {
    return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')})
    return `Steven Spielberg directed ${newArrayofSpielbergMovies.length} drama movies!`};
}

//howManyMovies(movies)


// Order by title and print the first 20 titles

function orderAlphabetically (moviesArray) {
  let arrayOfMoviesSortedByTitle = moviesArray.sort((a, b) => a.title.localeCompare(b.title));
  
  //return arrayOfMoviesSortedByTitle.slice(0,20);
  
  let arrayWithOnlyTitles = arrayOfMoviesSortedByTitle.map((eachMovieObject)=>{
    return eachMovieObject.title;
    })
    
  return arrayWithOnlyTitles.slice(0,20);

};

// Best yearly rate average
