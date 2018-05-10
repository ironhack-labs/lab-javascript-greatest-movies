// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (moviesArray){
  if (!moviesArray) return;

  return moviesArray.map(function(movie){
    var newMovie = Object.assign({}, movie);
    var movieDuration = newMovie.duration.split(" ");
    
    if (movieDuration.length === 2) {
      movieDuration[0] =  Number(movieDuration[0].replace("h", "")) * 60;
      movieDuration[1] = Number(movieDuration[1].replace("min", ""));
    }
    else{
      if (movieDuration[0].indexOf("h") === -1) {
        movieDuration[0] = Number(movieDuration[0].replace("min", ""));
      }
      else{
        movieDuration[0] = Number(movieDuration[0].replace("h", "")) * 60;
      }
    }    

    newMovie.duration = movieDuration.reduce(function(acc, duration){
      return acc + duration;
    }, 0);

    return newMovie;
  })
}
  
  
// Get the average of all rates with 2 decimals 
function ratesAverage(moviesArray) {
  if (!moviesArray) return;

  return moviesArray.reduce(function(acc, movie, index, moviesArray){
    if (index === moviesArray.length - 1) {
      return Number(((Number(acc) + Number(movie.rate)) / moviesArray.length).toFixed(2));
    } else {
      return Number((Number(acc) + Number(movie.rate)).toFixed(2));
    }
  }, 0);
}
  
// Get the average of Drama Movies
function dramaMoviesRate(moviesArray) {
  if (!moviesArray) return;

  if (moviesArray.filter(function(movie){ return movie.genre.indexOf("Drama") !== -1; }).length === 0)
    return;

  return moviesArray
    .filter(function(movie){
      return movie.genre.indexOf("Drama")!==-1;
    })
    .reduce(function(acc, movie, index, moviesArray){
      if (index === moviesArray.length - 1) {
        return Number(((Number(acc) + Number(movie.rate)) / moviesArray.length).toFixed(2));
      } else {
        return Number((Number(acc) + Number(movie.rate)).toFixed(2));
      }
    }, 0);
}

// Order by time duration, in growing order
function orderByDuration(moviesArray){
  if (!moviesArray) return;

  return moviesArray.sort(function(moviePrev, movieNext){
      if (moviePrev.duration === movieNext.duration){
        if (moviePrev.title > movieNext.title) return 1;
        else if (moviePrev.title < movieNext.title) return -1;
        else return 0;
      } else {
        return moviePrev.duration - movieNext.duration;
      }
  });
}


// How many movies did STEVEN SPIELBERG
function howManyMovies(moviesArray) {
  if (!moviesArray) return;
  if (moviesArray.length === 0) return;

  return ("Steven Spielberg directed " + moviesArray.filter(function(movie){
    return movie.genre.indexOf("Drama") !== -1 && movie.director === "Steven Spielberg";
  }).length + " drama movies!");
}

// Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  if(!moviesArray) return;  

  return moviesArray
    .map(function(movie){ 
      return movie.title; 
    })
    .sort(function(titlePrev, titleNext){
      if (titlePrev > titleNext) return 1;
      else if (titlePrev < titleNext) return -1;
      else return 0;
    })
    .slice(0,20);
}

// Best yearly rate average
function bestYearAvg(moviesArray) {
  if (!moviesArray) return;
  if (moviesArray.length === 0) return;

  // Order the movies by year
  var sortedMovies = moviesArray.sort(function(moviePrev, movieNext){
    return moviePrev.year - movieNext.year;
  });
    
  // Create an array with objects with this structure { year: num, rates: [] } with no repeated years
  var yearAverages = [];
  sortedMovies.forEach(function(movie){    
    // If there isn't an entrie with the same year add one
    if (yearAverages.filter(function(entrie) { return entrie.year === movie.year; }).length === 0) {
      yearAverages.push({year : movie.year, rates : [] }); 
    }
  });

  // For each year I add the rates to the rates array
  yearAverages.forEach(function(entrie){
    sortedMovies.forEach(function(movie){
      if (entrie.year === movie.year) {
        entrie.rates.push(Number(movie.rate));
      }
    })
  });

  // Calculate the average rate for each year
  yearAverages.forEach(function(entrie){
    entrie["avgRate"] = averageNumbers(entrie.rates);
  });

  // Get the entire with the best average rate
  var bestYear = yearAverages.reduce(function(acc,entrie){
    return acc.avgRate < entrie.avgRate ? entrie : acc;
  }, {avgRate : 0});

  return 'The best year was ' + bestYear.year + ' with an average rate of ' + Number(bestYear.avgRate).toString();
}

function averageNumbers(numberArray) {
  var sum = numberArray.reduce(function(acc, num){ return acc + num; },0);
  return numberArray.length > 0 ? (sum / numberArray.length).toFixed(2) : undefined;
}