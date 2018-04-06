var movies = require("./data.js");
console.log(movies);

/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array){
  var result =  array.map(function(eachMovie){
    var split = eachMovie.duration.split(" ");
    var totalMinutes = 0;

    if (eachMovie.duration.indexOf('h') >=0 && eachMovie.duration.indexOf('min')>=0)
    {
      totalMinutes = parseInt(split[0])* 60 + parseInt(split[1]);
    }
    else if(eachMovie.duration.indexOf('h')>=0)
    {
      totalMinutes = parseInt(eachMovie.duration)*60
    }else 
    {
      totalMinutes = parseInt(eachMovie.duration)
    }
  return {
    title: eachMovie.title,
    year: eachMovie.year,
    director: eachMovie.director,
    duration: totalMinutes,
    genre: eachMovie.genre,
    rate: eachMovie.rate
  }
  })
  return result;
  }
  turnHoursToMinutes(movies);
// Get the average of all rates with 2 decimals 
function ratesAverage(array)
{
  var sumRating = array.reduce(function(a, rating)
  {
    return a + parseFloat(rating.rate);
  }, 0);
  average = sumRating / array.length;
  return average;
}


// Get the average of Drama Movies
function dramaMoviesRate(array){
  var filtered = array.filter(function(elem)
  {
    return elem.genre.includes("Drama");
  })
  var sumAverage = filtered.reduce(function(a, rating)
  {
    return a + Number(rating.rate);
  }, 0);
  if (sumAverage === 0)
  {
    return undefined;
  }
  result = sumAverage / filtered.length;
  return Number(result.toFixed(2));
}

// Order by time duration, in growing order
function orderByDuration(array)
{
  var minutes = turnHoursToMinutes(array);
  var result = minutes.sort(function(a,b) 
  {
    return a.duration - b.duration;
  });
  return result;
}

// Order by time duration, in growing order





// How many movies did STEVEN SPIELBERG
function howManyMovies(array)
{
  if (array.length === 0)
  {
    return undefined;
  }
  var filteredOne = array.filter(function(elem)
  {
    return (elem.genre.includes("Drama"));
  });
  var filteredTwo = filteredOne.filter(function(elem)
  {
    return (elem.director.includes("Steven Spielberg"));
  });
  return "Steven Spielberg directed " + filteredTwo.length + " drama movies!";
}

// Order by title and print the first 20 titles
function orderAlphabetically(array){
  var titleArray = [];
  array.forEach(function(elem)
  {
    titleArray.push(elem.title);
  });
  titleArray.sort();
  if (titleArray.length >= 20)
  {
    titleArray = titleArray.slice(0,20);
  }
  return titleArray;
}

// Best yearly rate average
