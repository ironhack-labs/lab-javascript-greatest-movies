/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
/*const time = movies.map(theFilm => {
  let total=0;
  let horas = (theFilm.duration.split('h')/60);
  let min = (horas%60);
  return{
    total = horas+min;
  }
})
*/


// Get the average of all rates with 2 decimals 
function ratesAverage(totalRate) {
  suma = totalRate.reduce(function (acc, film) {
    rates = parseFloat(film.rate);
    return acc += rates;
  }, 0); 
  average = suma / totalRate.length;
  //console.log(average);

  return average;
}


// Get the average of Drama Movies
function dramaMoviesRate(array){
  var drama = array.filter(function(object){
    return object.genre.includes("Drama");
  })
  if (drama.length ===0){
    return undefined;
  }
  /******FALTA ****/
}

// Order by time duration, in growing order
function orderByDuration (array) { 
  return array.sort(function(a,b){
      if (a.duration === b.duration) {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return -1;
          } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return 1;
          } else {
              return 0;
          }
      } else {
        return a.duration - b.duration;
      }
  })
}

// How many movies did STEVEN SPIELBERG
function howManyMovies (array) {
  if (array.length === 0) {
      return undefined;
  } else {
    var ssMovies = array.filter(function(object){
        return object.director === "Steven Spielberg" && object.genre.includes("Drama") ;
      })
      return "Steven Spielberg directed " + ssMovies.length + " drama movies!";
  }

}

// Order by title and print the first 20 titles
function orderAlphabetically(array){
  /*var arrLength = array.length;
  if (arrLength > 20){
    arrLength = 20;
  }*/
}

// Best yearly rate average
