// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (movies) {
  if (!movies) { return []; }
  var hours = 0;
  var minutes = 0;
  var minutesDuration = movies.map(function (movie) {
    if ((movie.duration.indexOf('h')!==-1) && (movie.duration.indexOf('m')!==-1)) {
      time = movie.duration.split(" ");
      hours = parseInt(time[0]);
      minutes = parseInt(time[1]);
    } else if (movie.duration.indexOf('h')!==-1) {
      hours = parseInt(movie.duration);
    } else if (movie.duration.indexOf('m')!==-1) {
      minutes = parseInt(movie.duration);
    }
    return { duration: hours * 60 + minutes };
  });
  return minutesDuration;
}

// Get the average of all rates with 2 decimals 
function ratesAverage (movies) {
  if (!movies) { return 0; }
  var sum = movies.reduce(function (accumulator,currentValue) {
    return accumulator + parseFloat(currentValue.rate);
  },0)
  return Math.round(sum/movies.length*100)/100;
}

// Get the average of Drama Movies
function dramaMoviesRate(movies){
  if (!movies.length) { return ; }
  var dramaMovies = movies.filter(function (movie) {
    return movie.genre.find(function (genre) {
      return genre === 'Drama';
    });
  });
  dramaMovies.map(function (movie) {
    if (movie.rate === '') {
      movie.rate = 0;
    };
    return movie;
  });
  if (!dramaMovies.length) { return ; }
  return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order
function orderByDuration (movies) {
  return movies.sort(function (a,b) {
    if (a.duration === b.duration) {
      if (a.title > b.title) {
        return 1;
      }
    }
    return a.duration - b.duration;
  });
}

// How many movies did STEVEN SPIELBERG
function howManyMovies (movies) {
  if (!movies.length ) { return ; }
  var stevenMovies = movies.filter(function (movie) {
    return movie.director === 'Steven Spielberg';
  });
  var stevenDramaMovies = stevenMovies.filter(function (movie) {
    return movie.genre.find(function (genre) {
      return genre === 'Drama';
    });
  });
  return 'Steven Spielberg directed ' + stevenDramaMovies.length + ' drama movies!';
}

// Order by title and print the first 20 titles
function orderAlphabetically (movies) {
  if (!movies.length) { return []; }
  var titles = movies.map(function (movie) {
    return movie.title;
  });
  titles.sort();
  titles.splice(20);
  return titles;
}

// Best yearly rate average
function bestYearAvg (movies) {
  if (!movies.length) { return ; }
  //Encuentro las peliculas de cada año
  var yearRates = movies.reduce(function (acc,cval) {
    if (!acc[cval.year]) {
      acc[cval.year] = [cval];
    } else {
      acc[cval.year].push(cval);
    }
    return acc;
  },{});
  //Encuentro la película con mayor rating
  var maxRate = 0;
  var maxYear = 0;
  for (var key in yearRates) {
    var avgRate = ratesAverage(yearRates[key]); 
    if (maxRate < avgRate) {
      maxRate = avgRate;
      maxYear = key;
    } else if (maxRate === avgRate) {
      if (maxYear>key) {
        maxYear = key;
      }
    }
  };
  return 'The best year was ' + maxYear + ' with an average rate of ' + maxRate;
}