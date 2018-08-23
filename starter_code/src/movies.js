/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (time){
    var hours = time.split(" ")[0][0];
    var hMin = hours * 60;
    var minS = time.split(" ")[1];
    var min = parseInt(minS);
    var totalMin = parseInt(hMin) + parseInt(min);
      //console.log(time + " = " + totalMin);
    return totalMin;
  };
  
  var newMovies = movies.map(function(e, i){
    var newDur = turnHoursToMinutes(e.duration);
    //console.log(newDur);
    return Object.assign({}, movies[i], {duration: newDur});
  });

// Get the average of all rates with 2 decimals 
function ratesAverage(arr){
    var sum = arr.reduce(function(acc, e){
      var rate = parseFloat(e.rate);
      return acc + rate;
    },0);
   return sum / arr.length;
  };
  var avgRate = ratesAverage(movies).toFixed(2);
  console.log (avgRate);

// Get the average of Drama Movies
var dramaMovies = movies.filter(function(e){
    return (e.genre.indexOf("Drama") > -1);
  });
  var dramaMoviesRate = ratesAverage(dramaMovies).toFixed(2);
  console.log(dramaMoviesRate);
  

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
