/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr) {

  return arr.map(function(movie) {

    var auxMovie = Object.assign({}, movie); //we make a copy of original array
    var durationArr = auxMovie.duration.split(" "); //separate the hours of the minutes

    if (durationArr.length === 1) {  // if there are only hours or minutes...
      if (durationArr[0].includes("h")) { // if are hours...
        auxMovie.duration = parseFloat(durationArr[0])* 60;
      } else if (durationArr[0].includes("m")) { //if are minutes...
        auxMovie.duration = parseFloat(durationArr[0]);
      }
    } else { //there are hours and minutes...
      auxMovie.duration = parseFloat(durationArr[0])* 60 + parseFloat(durationArr[1]);
    }
    return auxMovie;
  });
}

// Get the average of all rates with 2 decimals 
function ratesAverage(arr) {

  return arr.reduce(function(acc, movie, index, arr) {
    
    acc += Number.parseFloat(movie.rate);
    if (index === (arr.length -1)) { //in the last iteration we make the average
      acc = Math.round((acc / arr.length) * 100) / 100; // rounding to 2 decimals...
    }
    return acc; 
  }, 0);
}

// Get the average of Drama Movies
function dramaMoviesRate(arr) {

  var moviesDrama = arr.filter(function(movie) { //we get an array only with the movies "Drama" genre
      return movie.genre.includes("Drama");
      });

  if (moviesDrama.length == 0) { //if there is no Drama movie...
    return undefined;
  }

  return moviesDrama.reduce(function(acc, movie, index, arr) {  //return de avg of Drama movies
    
    if (movie.rate) {
      acc += parseFloat(movie.rate);
    }
    if (index === (arr.length - 1)) {
      acc = Math.round((acc / arr.length) * 100) / 100; // rounding to 2 decimals...  
    }
    return acc;
  }, 0);
}

// Order by time duration, in growing order
function orderByDuration(arr) {
  //var auxMovies = turnHoursToMinutes(arr);  (pensé que usaríamos el array movies original, y por eso llamaba a la función para transformar la duracción...)
  var auxMovies = [...arr];  //¿¿qué diferencia tiene esta manera hacer copias de arrays respecto al Object.create?? ¿¿es indiferente su uso?? 

  return auxMovies.sort(function(a, b) {
    if (a.duration === b.duration) {  //if the duration is the same, we will order by title....
      return a.title.localeCompare(b.title);  // ¿¿ por qué no funciona "return a.title - b.title" ??
    } else { //if the duration is not the same...
      return a.duration - b.duration;
    }
  });
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr) {
  
  if (arr.length === 0) { //if arr is empty...undefined
    return undefined;
  }

  var spielbergDramas = arr.filter(function(movie) {  //array only with Spielberg's Drama movies
    return ((movie.director === "Steven Spielberg") && (movie.genre.includes("Drama")));
  });

  if (spielbergDramas.length === 0) {
    return "Steven Spielberg directed 0 drama movies!";
  } else {
    return "Steven Spielberg directed " + spielbergDramas.length + " drama movies!";
  }
}

// Order by title and print the first 20 titles
function orderAlphabetically(arr) {

  var titlesArr = [];
  arr.forEach(function(movie) {
    titlesArr.push(movie.title); //array only with titles
  });
  
  var sortedTitlesArr = titlesArr.sort(); //we order alphabetically the array by titles

  if (sortedTitlesArr.length >= 20) { //if there are more than 19 movies
    return sortedTitlesArr.slice(0, 20);  //return only the first 20
  } else { //if there are less than 20...
    return sortedTitlesArr; 
  }
}

// Best yearly rate average
function bestYearAvg(arr) {

  //***********auxiliars functions********** */
  function getRatesByYears(array) {  //function to get an array grouped by years
   
    return array.reduce(function(acc, movie) {
      var found = acc.find(function(element) {            //we look for if the year is already in the acc-array
        return element.year === movie.year;               //if don't find it, return undefined
      });
      
      if(!found) { //if there is not yet that year in the array acc...
        found = {year: movie.year, rates: []};  //we create the object
        acc.push(found);                        //and push in acc array
      }

      if (movie.rate !="") {
        found.rates.push(movie.rate);  //push the rate of the movie in array "found.rates" 
      }
      return acc;
    }, []);
  }

  function getAvgRates(array) { //function to get the avg of the array of rates
    
    return array.reduce(function(acc, current, index, arr) {
      acc += current
      if (index === (arr.length - 1)) {
        acc /= arr.length;
      }
      return acc;
    }, 0); 
  }

  function getBestYear(array) { //function to get the year with greatest avg
    
    var bestYear = array.sort(function(a, b) {return a.year.localeCompare(b.year)})[0]; // we sort the array by year (so we will get the oldest)
    
    for (var i = 1, l = array.length; i < l; i++) {  
      if (array[i].avgRates > bestYear.avgRates) {
        bestYear = array[i];
      }
    }
    return bestYear;
  }
/******************************************************* */
  //starts the program.......
  if (arr.length === 0) { //if array is empty...undefined
    return undefined;
  }

  var ratesByYears = getRatesByYears(arr); //call to the function

  for (var i = 0, l = ratesByYears.length; i < l; i++) { //in this for we incorporate a new attribute in the objects: avgRates
    ratesByYears[i].avgRates = getAvgRates(ratesByYears[i].rates); //call to the function
  };

  var bestYear = getBestYear(ratesByYears); //call to the function

  return "The best year was " + bestYear.year + " with an average rate of " + bestYear.avgRates;
}
