/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function minutesTotal (timeString) {
  
  var totalMin = 0; 
  var limiteInferior =0;

  if (typeof(timeString) != "number") {
    if (timeString.indexOf('h') != -1){
       totalMin = parseInt(60*timeString.substring(0,timeString.indexOf('h')));
       limiteInferior=timeString.indexOf('h')+2;
    }
    
    if (timeString.indexOf('m') != -1){
       totalMin += parseInt(timeString.substring((limiteInferior),timeString.indexOf('m')));
    }
    return totalMin;
  }
  else
    {return timeString;
  }
  
}

function turnHoursToMinutes(moviesArray){
  
  return movies.map(function(movie) {
    return Object.assign({},movie,{duration: minutesTotal(movie.duration)});
  
  }); 
}


//var copyMovie = turnHoursToMinutes(movies);
//console.log("La copia: ", copyMovie);


// Get the average of all rates with 2 decimals 

function ratesAverage(moviesArray) {
  
  var rateSum = moviesArray.reduce(function(accumulator, movie){
  
                if (movie.rate.length > 0){
                  return accumulator + parseFloat(movie.rate);
                }
                else {return accumulator;}
      
                }, 0);      
  
  return parseFloat((rateSum/moviesArray.length).toFixed(2));

}

 //console.log(ratesAverage(movies));
  
// Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {
  var filterArray = moviesArray.filter(function(movie){
                    return movie.genre.indexOf("Drama") != -1});

                      if (filterArray.length > 0){
                        return ratesAverage(filterArray);
                      }
}

// console.log(dramaMoviesRate(movies));

function orderByDuration(moviesArray) {
  var orderArray = moviesArray.sort(function(a,b){
                    return movie.genre.indexOf("Drama") != -1});

}

// Order by time duration, in growing order

function orderByDuration(moviesArray) {
  var orderArray = moviesArray.sort(function(a,b){
                    return (a.duration - b.duration);
                  })
  return  orderArray;
}

// console.log(orderByDuration(moviesArray));

// How many movies did STEVEN SPIELBERG

function howManyMovies(moviesArray,SearchDirector) {
  if (moviesArray != "undefined"){
    var dramaMovies = moviesArray.filter(function(movie){
                    return movie.genre.indexOf("Drama") != -1});
    var directorMoviesArray = dramaMovies.filter(function(movie){
                          return movie.director == "Steven Spielberg";
                          })
                          console.log(directorMoviesArray);
    if (directorMoviesArray.length >= 0){
      return "Steven Spielberg directed " + directorMoviesArray.length + " drama movies!";
    }
  }
}
console.log(howManyMovies(movies));

// Order by title and print the first 20 titles


// Best yearly rate average
