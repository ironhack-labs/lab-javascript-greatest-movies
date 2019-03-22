/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function durationInMinutes(movie) {
  
  var arr1 = movie.duration.split(" ");
  
  if(arr1.length == 2)
  {
    return (parseInt(arr1[0]) * 60 + parseInt(arr1[1])); 
  }
  else
  {
    if(arr1[0].includes("h"))
    {
      return (parseInt(arr1[0]) * 60);
    }
    else
    {
      return parseInt(arr1[0]);
    }
  }
}

function turnHoursToMinutes(arr) {
  
  return arr.map(movie => {

  return Object.assign({}, movie, { duration: durationInMinutes(movie)})
  })
}

// Get the average of all rates with 2 decimals 

function ratesAverage(arr)
{
  return parseFloat((arr.reduce((a, movie) =>{
    if(movie.rate)
    {return a + parseFloat(movie.rate)}
    else {return a + 0}
  },0) / arr.length).toFixed(2))
}


// Get the average of Drama Movies

function dramaMoviesRate(arr)
{
  let dramaMovie = arr.filter(movie => movie.genre.includes('Drama'));
  if (dramaMovie.length === 0) return undefined;
  else return ratesAverage(dramaMovie);
}


// Order by time duration, in growing order

function orderByDuration(arr)
{
  return arr.sort(function(a, b)
  {
    if (a.duration == b.duration)
    {return (a.title).localeCompare(b.title)}
    return a.duration - b.duration;
  })
}


// How many movies did STEVEN SPIELBERG

function howManyMovies(arr)
{
  if(arr.length === 0) return undefined;
  
  let spilbergMovie = arr.filter(movie => movie.director.includes("Steven Spielberg"));

  if(spilbergMovie.length == 0) return "Steven Spielberg directed 0 drama movies!";

  let dramaMovies = arr.filter(movie => movie.genre.includes('Drama') && movie.director.includes("Steven Spielberg"));

  return `Steven Spielberg directed ${dramaMovies.length} drama movies!`;
}

// Order by title and print the first 20 titles

function orderAlphabetically(arr)
{
  return arr.map(movie => movie.title).sort((a, b) => (a).localeCompare(b)).slice(0, 20)
}

// Best yearly rate average

function bestYearAvg(arr)
{
  if (arr.length === 0) return undefined;

  var sorted = arr.sort(function(a, b)
  {
    if (a.rate == b.rate)
    {return (a.year).localeCompare(b.year)}
    return a.rate - b.rate;
  })
  
}
