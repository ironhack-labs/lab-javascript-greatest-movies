/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

/* function turnHoursintoMinutes (movieArray) {
    var newMovieArray = movieArray.map(function(elem) {
      var hours=0,minutes=0
      //console.log(elem);
      if (elem.duration.indexOf("h")>=0) hours=Number(elem.duration.split(" ")[0].replace("h",""));
      if (elem.duration.indexOf("min")>=0)  minutes=Number(elem.duration.split(" ")[1].replace("min",""));
      elem.duration=hours*60+minutes;
    return elem;
  })

}
console.log(turnHoursintoMinutes(movies)); */


// Get the average of all rates with 2 decimals 

function ratesAverage(movieArray) {
  return Math.round(movieArray.reduce(function(sum,elem){
    return sum+Number(elem.rate);
  },0)/movieArray.length*100)/100;
}

console.log(ratesAverage(movies));

// Get the average of Drama Movies

function dramaMoviesRate (movieArray) {
  var dramaMovies=movies.filter(function(elem){
    //if (elem.genre.indexOf("Drama")>=0) console.log(elem.genre);
    return elem.genre.indexOf("Drama")>=0;
  });
  console.log(dramaMovies);
  return ratesAverage(dramaMovies);
}

dramaMoviesRate(movies);


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
