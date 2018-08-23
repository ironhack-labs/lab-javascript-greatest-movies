/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
  function turnHoursToMinutes (array) {
    var moviesModified = array.map(function(e, i) {
        var split = e.duration.split(" ");
        var timeInMinutes = 0;
        if (split.length === 1) {
          if (split[0].includes("h")){
              timeInMinutes += parseInt(split[0].replace("h", "")) * 60;
            } else if (split[0].includes("min")) {
              timeInMinutes += parseInt(split[0].replace("min", ""))
            }
        } else {
            timeInMinutes += parseInt(split[0].replace("h", "")) * 60;
            timeInMinutes += parseInt(split[1].replace("min", ""));
            timeInMinutes += e.duration[3] = " mins";
        }
        
        return Object.assign({}, e, {duration: timeInMinutes} );
    });
     return moviesModified;
} 

console.log(turnHoursToMinutes(movies));

// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
  var moviesSum = movies.reduce(function(accumulator, moviesArray) {
    return accumulator + moviesArray.rate;
  }, 0);
  return moviesSum.toFixed(2) / movies.length;;
}
ratesAverage(movies);

// Get the average of Drama Movies

// Order by time duration, in growing order
function orderByDuration(movies){
  return turnHoursToMinutes(movies).sort(function(a,b){
      return a.duration-b.duration;
  });
  }

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
  return movies.filter(function(element){
    return (element.director==="Steven Spielberg" && element.genre.indexOf("Drama")!=-1);
  });
};

// Order by title and print the first 20 titles

// Best yearly rate average