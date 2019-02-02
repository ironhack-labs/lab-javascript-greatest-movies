/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr){
  let mov = Object.assign([],arr);
  return mov.map(m => {
    let movie = Object.assign({}, m)


      //console.log( movie.duration.split(" "))
      let listDuration = movie.duration.split(" ")
      if(listDuration.length == 1){
        if(listDuration[0].includes("min")){
          movie.duration  = parseInt(listDuration[0].split("min")[0])
        }else{
          movie.duration = parseInt(listDuration[0].split("h")[0])*60
        }

      } else{
        let toMins = parseInt(listDuration[0].split("h")[0])*60 + parseInt(listDuration[1].split("min")[0])
         movie.duration = toMins;
      }
      return movie
  } )  
}
// Get the average of all rates with 2 decimals 

function ratesAverage(array) {
  var averageRate = array.reduce(function(sum, oneMovie) {
    var totalRate = sum + parseInt(oneMovie.rate);

    return totalRate;
  }, 0);

  var stringResult = (averageRate / array.length).toFixed(2);
  return parseFloat(stringResult);
}

console.log(ratesAverage(movies));


// Get the average of Drama Movies

/* const averageDrama = drama.reduce ((a,b) => (a+b), 0 / oneMovie.length);

console.log (averageDrama)



/*var dramaMovies = dramaMovies.map (function (oneMovie, genre))
{
  if (oneMovie.genre.indexOf("Drama") >= 0) {
    return oneMovie;

var dramaSum = oneMovie.reduce ((a,b) => (a+b), 0 / oneMovie.length)
}; */

  /* var dramaMovies = array.filter(function(oneMovie){
    if (oneMovie.genre.indexOf >= 0){
      return oneMovie.genre.indexOf("Drama") >= 0;
} else {

  return undefined
}
  
    //if (oneMovie.genre.indexOf >= 0)
    //{ return oneMovie.genre}
      
     
  });*/

  // return ratesAverage(dramaMovies);


// Order by time duration, in growing order

function orderByDuration(array) {
  var duration = array.sort(function(film1, film2) {
    if (film1.duration < film2.duration) {
      return -1;
    } else if (film1.duration > film2.duration) {
      return 1;
    } else
      array.sort(function(film1, film2) {
        if (film1.title < film2.title) {
          return -1;
        } else if (film1.title > film2.title) {
          return 1;
        }
    
      });
  });
        return array}

// How many movies did STEVEN SPIELBERG

function howManyMovies(array) {
  var dramaMovies = array.filter(function(oneMovie) {
    if (oneMovie.genre.indexOf("Drama") >= 0) {
      return oneMovie;
    }
  });
  var spielbergMovies = dramaMovies.filter(function(oneMovie) {
    return oneMovie.director === "Steven Spielberg";
  });
  return (
    "Steven Spielberg directed " + spielbergMovies.length + " drama movies!"
  );
}

// Order by title and print the first 20 titles

function dramaMoviesRate(dramas) {
  var dramaMovies = dramas.filter(function(oneMovie) {
    return oneMovie.genre.indexOf("Drama") !== -1;
  });
  if (dramaMovies.length === 0) {
    return undefined;
  }
  var total = dramaMovies.reduce(function(sum, oneDrama) {
    return sum + Number(oneDrama.rate);
  }, 0);
}

// Best yearly rate average
