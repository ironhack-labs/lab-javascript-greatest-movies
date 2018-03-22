/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
// "2h 33min" -> 153
// "2h"       -> 120
// "33min"    -> 33

// "2h"
function convertHours (hourString) {
  // ["2", ""]
  var calculateHour = hourString.split("h");
  return calculateHour[0] * 60;
  // "2" * 60
  // 120
}

// "33min"
function convertMinutes (minuteString) {
  // ["33", ""]
  var calculateMinutes = minuteString.split("min");
  return Number(calculateMinutes[0]);
  // 33
}

function convertDuration (duration) {
  var timePieces = duration.split(" ");
  // ["2h", "33min"]
  // ["2h"]
  // ["33min"]

  var minutes =
    timePieces.reduce(function (sum, onePiece) {
      if (onePiece.includes("h")) {
        return sum + convertHours(onePiece);
      }
      return sum + convertMinutes(onePiece);
    }, 0);

  return minutes;
}

function turnHoursToMinutes (movies) {
  var newCentArray =
    movies.map(function (oneMovie) {
      var newMovie = {};
      newMovie.title = oneMovie.title;
      newMovie.year = oneMovie.year;
      newMovie.director = oneMovie.director;
      newMovie.duration = convertDuration(oneMovie.duration);
      newMovie.genre = oneMovie.genre;
      newMovie.rate = oneMovie.rate;

      return newMovie;
    });

  return newCentArray;
}


// Get the average of all rates with 2 decimals

function ratesAverage (x) {
  // var arr = [];
  // for (var i = 0; i<x.length; i++) {
  //   arr.push(x[i].rate);
  // }
  // var sum = 0;
  // var counter =0;
  // for (var i =0; i<arr.length; i++) {
  //   sum += parseFloat(arr[i]);
  //   counter++;
  // }

  var sum = x.reduce(function(accumulator, movie){
    return accumulator + Number(movie.rate)
  },0)

  avg = sum/x.length;

  return avg;
  
  // arr.reduce(function(sum, num){
  //   return ((sum + parseFloat(num))/arr.length);
  // },0);
  
}

// function dramaMoviesRate (x) {
//   var arr = [];
//   for (var i = 0; i<x.length; i++) {
//     if (x[i].genre.includes("Drama")) {
//       arr.push(x[i].rate);
//     } else {
//       continue;
//     }
//   }
//   var sum = 0;
//   var counter =0;
//   for (var i =0; i<arr.length; i++) {
//     sum += parseFloat(arr[i]);
//     counter++;
//   }

//   avg = sum/counter;
//   return avg;
  
//   // arr.reduce(function(sum, num){
//   //   return ((sum + parseFloat(num))/arr.length);
//   // },0);
  
// }



function dramaMoviesRate (y) {
  // var emtarr = [];
  var dra = y.filter(function (one) {
    return one.genre.includes("Drama") && one.rate;
  }); 
  if (isNaN(ratesAverage(dra))) {
    return undefined;
  } else {
    return ratesAverage(dra);
  }
}

function orderByDuration (x) {
  var arr = [];
  for (var i = 0; i<x.length; i++) {
      var min = convertDuration (x[i].duration);
      arr.push(min);
  }
    arr.sort(function(a,b) {
    return a-b;
  })
}



function howManyMovies (x) {
  var spei = x.filter(function(mov) {
    return mov.genre.includes("Drama") && mov.director.includes("Spielberg");
  });
    return "Steven Spielberg directed "+ spei.length + " drama movies!";
}

// Get the average of Drama Movies

function orderAlphabetically (x) {
  var arr = [];
  for (var i = 0; i<20; i++) {
      arr.push(x[i].title);
  }
    arr.sort(function(a,b) {
    return a-b;
  })
  return arr;
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
