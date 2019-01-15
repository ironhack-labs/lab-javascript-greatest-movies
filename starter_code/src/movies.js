/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movieList) {
  var mins;
  
  currentMovieList = movieList.map(function(movie) {
    return movie;
  });

  newMovieList = currentMovieList.map(function(movie) {
    var time = [];
    // if(movie.duration.indexOf("h") === 1 ){
    time.push(movie.duration.replace("min","").replace(" ","").split("h"));
    // } else {
    //   time.push(movie.duration.replace("min","").replace(" ",""));
      debugger;
    // }
    mins = Number(time[0][0]) * 60 + Number(time[0][1]); 
    movie.duration = mins;
  return movie;
  }) 
  // console.log(newMovieList);
  return newMovieList;
}

// function turnHoursToMinutes(movies) {
//   return movies.map(function (movie) {
//       var totalMinutes;
//       var hours = 0;
//       var minutes = 0;
//       var durationSplit = movie.duration.split(" ");
//       if (durationSplit.length > 1) {
//           hours = durationSplit[0].split("h")[0];
//           minutes = durationSplit[1].split("min")[0];
//       } else if (durationSplit.length === 1 && durationSplit[0].indexOf("h") > 0) {
//           hours = durationSplit[0].split("h")[0];
//       } else if (durationSplit.length === 1 && durationSplit[0].indexOf("h") < 0) {
//           minutes = durationSplit[0].split("min")[0];
//       }

//       minutes = parseInt(minutes, 10);
//       hours = parseInt(hours, 10);
//       totalMinutes = hours * 60 + minutes;

//       var movieClone = Object.assign({}, movie); // make a clone of the `movie` object
//       movieClone.duration = totalMinutes;

//       return movieClone;
//   });
// }

var newMovies = turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
function ratesAverage(movieList) {
  var rateList = [];
  var totalRate = movieList.map(function(movie){
      rateList.push(Number(movie.rate));
  })
  var addRate = rateList.reduce(function(accum,rates){
    return accum + rates;
  });
  var average = Math.round(addRate / rateList.length * 100) / 100;
  console.log(AllRateAverave); 
  return average;
};

var AllRateAverave = ratesAverage(movies);


// Get the average of Drama Movies

function dramaMoviesRate(movieList) {
  var dramaRateList = [];
  var totalRate = movieList.map(function(movie){
    var genreList = movie.genre.map(function(genre){
      if(genre === "Drama"){
        dramaRateList.push(Number(movie.rate));
      };
    });
  });

  if(dramaRateList.length > 0){
  var addRate = dramaRateList.reduce(function(accum,rates){
    return accum + rates;
  });
    var average = Math.round(addRate / dramaRateList.length * 100) / 100;
    // console.log(average);
    return average;
  } else {
    return undefined;
  }
}

var dramaRateAverave = dramaMoviesRate(movies);
console.log(dramaRateAverave);

// Order by time duration, in growing order





// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
