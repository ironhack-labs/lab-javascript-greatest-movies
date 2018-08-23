/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (array) {

  array = array.map(function (movie){
       movie.duration = parseInt(movie.duration.substring(0,1))*60;
        return movie;
  })
  var movies = new Array();
  for (mov of array){
    movies.push(mov);
  }
  return movies;
}


// Get the average of all rates with 2 decimals 

function ratesAverage (array){
  total = 0;
  array.map ((obj, i)=>{
    console.log(obj)
    total = total + parseInt(obj.rate)
  })
  return total/array.length;
}

// Get the average of Drama Movies

function dramaMoviesRate (array){
    filtered = array.filter(movie => movie.genre.includes('Drama'))
    if (filtered.length === 0) return;
    rate = ratesAverage(filtered);
    return rate;
}


// Order by time duration, in growing order

function orderByDuration (array) {
  array = array.sort((a,b)=>{
    if(a.duration === b.duration){
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
    }
    return parseInt(a.duration)-parseInt(b.duration)
    })
  return (array);
}


// How many movies did STEVEN SPIELBERG

function howManyMovies (array){
  if (array.length == 0) return;
  filtered = array.filter(movie => movie.genre.includes('Drama'))
  f2 = filtered.filter(movie =>movie.director === "Steven Spielberg") 
  return "Steven Spielberg directed "+f2.length+" drama movies!";
}


// Order by title and print the first 20 titles
function orderAlphabetically(array){
  sorted = array.sort((a,b)=>{
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
  })
  sorted = sorted.slice(0,20);
  sorted = sorted.map(function (elem){return elem.title});
  return sorted;
}

// Best yearly rate average
function bestYearAvg (array){
  if (array.length === 0) return;
  if (array.length===1) return array[0].year;
}