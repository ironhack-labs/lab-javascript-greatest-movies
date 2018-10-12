/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array) {
  var newArray = array.map(function(movie){
    var minutes = 0;
    
    if (movie.duration.length == 2) {
      minutes += (Number((movie.duration[0])))*60;
    }
    else if (movie.duration.length == 5) {
      minutes += Number(movie.duration[0] + movie.duration[1]);
    }
    else {
      minutes += (Number((movie.duration[0])))*60;
      minutes += Number(movie.duration[3] + movie.duration[4]);
      }

    newMovie = {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: minutes,
      genre: movie.genre,
      rate: movie.rate
    };
    return newMovie;
  })
  return newArray;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
  if (array.length == 0) {
    return undefined;
  }
  var ratings = array.map(function(movie) {
    return Number(movie.rate);
  })
  
  var sum = ratings.reduce(function(acc, n) {
    return acc + n;
  }, 0);
  
  return parseFloat((sum/ratings.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(array) {
  dramaMovies = array.filter(function(movie) {
    return movie.genre.includes("Drama");
  })
  return (ratesAverage(dramaMovies));
}

// Order by time duration, in growing order
function orderByDuration(movies) {
  movies.sort(function(a, b) {
    if (a.duration != b.duration) {
      return a.duration - b.duration;
    }
    else {
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
    }
    
  });
  return movies;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  if (movies.length == 0) {
    return undefined;
  }
  dramaMovies = movies.filter(function(movie) {
    return movie.genre.includes("Drama");
  })
  spielbergDramas = dramaMovies.filter(function(drama){
    return drama.director === "Steven Spielberg";
  })
    message = "Steven Spielberg directed " + spielbergDramas.length + " drama movies!";
    return message;
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  var ordered = movies.sort(function(a,b) {
    if (a.title < b.title) return -1;
    else if (a.title > b.title) return 1;
    else return 0;
  })
  ordered = ordered.map(function(movie) {
    return movie.title;
  })
  return ordered.slice(0,20);
}

// Best yearly rate average
function bestYearAvg(movies) {
  if (movies.length == 0) return undefined;

  moviesByYear = {}
  //create object with years as keys
  for (var i = 1900; i < 2019; i++)
    moviesByYear[i] = [];
  //fill object values with arrays of all movies that year 
  for (var i = 0; i < movies.length; i++) {
    yearInt = Number(movies[i].year)
    moviesByYear[yearInt].push(movies[i]);
    //console.log(moviesByYear[yearInt]);
  }
  //turn it into an array?? lol 
  yearlyRatings = []
  for (var i = 1900; i < 2018; i++) {
    if (moviesByYear[i].length != 0) {
      yearlyRatings.push([i, ratesAverage(moviesByYear[i])]);
    }
    
  } 
  console.log(yearlyRatings);

  sortedRatings = yearlyRatings.sort(function(a,b) {
    if (a[1] > b[1]) return -1;
    else if (a[1] < b[1]) return 1;
    else return 0;
  })

  var bestYear = sortedRatings[0][0];
  var bestRating = sortedRatings[0][1];
  return "The best year was " +bestYear+ " with an average rate of " + bestRating;

}