/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (array) {
  var newArray = [];

  array.forEach (function (oneMovie) {

    var durationArray = oneMovie.duration.split (' ');
   
     // var min = parseInt (durationArray[1], 10);
      
      if (durationArray.length === 1 && durationArray[0].includes("min")) {
       var hr = 0;
       var min = parseInt (durationArray[0], 10);
      }
      else {
        var min = parseInt (durationArray[1], 10);
        var hr = parseInt (durationArray[0], 10);
      }

      if (isNaN (min)) {
         var min = 0;
      };
    
     
    var duration = hr*60 + min;

    newArray.push ({
      title : oneMovie.title,
      year : oneMovie.year,
      director : oneMovie.director,
      duration : duration,
      genre : oneMovie.genre,
      rate : oneMovie.rate,
    });
   

  });

  return newArray;
};

// Get the average of all rates with 2 decimals 

function ratesAverage (array) {

  var totalRates = array.reduce (function (sum, oneFilm) {
    
    return sum + Number(oneFilm.rate);
  }, 0);

  return Number( (totalRates / array.length).toFixed(2));
};

ratesAverage (movies);

// Get the average of Drama Movies

function dramaMoviesRate(array) {
  var filtered = array.filter( function (oneMovie) {
      return oneMovie.genre.includes('Drama');
  });

  if (filtered.length ===0) {

    return undefined;
  }
  else {
  return ratesAverage(filtered);
  }
};

// Order by time duration, in growing order WORK IN PROGRESS

function orderByDuration (array) {
    
  var ordered = array.sort( function (oneDurationA, oneDurationB) {
      if (oneDurationA.duration < oneDurationB.duration) {
          return -1;
      }
      else if (oneDurationA.duration > oneDurationB.duration) {
          return 1;
      }

      else {
        return 0;
          }


  });
  console.log(ordered);
  if (ordered === 0) {

  };
  return ordered;
}

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
