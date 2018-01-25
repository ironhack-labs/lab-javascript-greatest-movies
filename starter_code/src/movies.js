/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHourToMinutes(array){

  var newMovies = array.map(function(movie){  
      var newArray = movie.duration.split(' ');
      var hours = parseInt(newArray[0]);
      var mins = parseInt(newArray[1]);
      var totalMin = ((hours * 60) + mins);
      movie.duration=totalMin.toString();
      return movie;
  })
  return newMovies
}

// Get the average of all rates with 2 decimals 
function ratesAverage(array){
  var totalReviews = array.reduce(function(acc, elem){
    newRate = parseFloat(elem.rate);
    return acc += newRate;
  },0)
  averageRate=totalReviews/array.length
  var averageRateRound= Math.round(averageRate * 100) / 100;
  return averageRateRound;
}



// Get the average of Drama Movies
function dramaMoviesRate(array){

  var dramaFilter = array.filter(function(movie){
    return movie.genre.indexOf("Drama") > -1; 
  })
    console.log(ratesAverage(dramaFilter))
   return ratesAverage(dramaFilter)
}

// Order by time duration, in growing order
function orderByDuration(array){
    newMovies=turnHourToMinutes(array);
    newMovies.sort(function(a,b){
      return a-b;
    });
    return newMovies;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
  var dramaFilter = array.filter(function(movie){
    return movie.genre.indexOf("Drama") > -1; 
  })
  console.log(dramaFilter);
  var Spielberg = dramaFilter.filter(function(movie){

    return movie.director==='Steven Spielberg';
  })
  return Spielberg;
}
}

// Order by title and print the first 20 titles
function orderAlphabetically(array){
  var newArray=array.sort(function(a,b){
    var nameA = a.title.toUpperCase(); 
    var nameB = b.title.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
  
  var titles=newArray.map(function(movie){
    return movie.title;
  })
  var firstTwenty=[];
  for (var i=0; i<20; i++){
        firstTwenty.push(titles[i]);
      }
  return firstTwenty;
}

// Best yearly rate average
