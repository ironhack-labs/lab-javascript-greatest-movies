/* eslint no-restricted-globals: 'off' */
//

/**
 * Transforms a duration string of the format 'xxh xxmin' to a number of minutes
 * @param durationStr
 * @return {number}
 */
function transformDurationStrToDurationNumber(durationStr){

  var reMinute = /(\d\d|\d)+min/;
  var minuteMatch = reMinute.exec(durationStr);
  var minutes =  Number((minuteMatch) ? minuteMatch[1] : 0);

  var reHour = /(\d\d|\d)+h/;
  var hourMatch = reHour.exec(durationStr);
  var hours = Number((hourMatch) ? hourMatch[1] : 0);

  return hours * 60 + minutes
}


/**
 * Turn duration of the movies from hours to minutes
 * @param movies: array of movies
 * @return: new list of movies with the duration in minutes
 */
function turnHoursToMinutes(movies){
  return movies.map(movie => {
    var newMovie = Object.assign({}, movie);
    newMovie["duration"] = transformDurationStrToDurationNumber(newMovie["duration"]);
    return newMovie
  })
}
movies = turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals

/**
 * receive an array as a parameter and  average rate of all of them and display it on the console
 * @param movies
 */
function ratesAverage(movies){

  if((movies.length < 1 || movies == undefined)){
    return undefined;
  }
  return(
    Number(
        (
        movies.map(movie => {return Number(movie.rate);}).reduce((x ,y) => {return x + y;}, 0) / movies.length
      ).toFixed(2))
  );
}
console.log('Average rate for all movies : ', ratesAverage(movies));

// Get the average of Drama Movies
function dramaMoviesRate(movies){

  return ratesAverage(
    movies.filter( movie => {
      return movie.genre.indexOf('Drama') > -1
    })
  )
}
console.log("Average rate for Drama movies : ", dramaMoviesRate(movies));


// Order by time duration, in growing order
function orderByDuration(movies){
  if(movies.length === 1){
    return movies;
  }

  return movies.
        sort((x, y) => {
          if(x.duration !== y.duration){
            return x.duration - y.duration;
          }
          else {
            return (x.title < y.title) ? -1 : 1;
          }

        })
}
console.log(orderByDuration(movies));

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
  if((movies.length < 1 || movies == undefined)){
    return undefined;
  }

  var nbMovies = movies.
      filter(movie=>{
       return ((movie.director === "Steven Spielberg") && (movie.genre.indexOf('Drama') > -1));
    }).
      reduce((currentSum, movie) => {return currentSum + 1}, 0);

  return "Steven Spielberg directed "+Number(nbMovies)+" drama movies!"
}
console.log(howManyMovies(movies));


// Order by title and print the first 20 titles
function orderAlphabetically(movies){

  var numberMoviesToReturn = Math.min(20, movies.length);

  return movies.
    sort((x, y)=>{return (x.title < y.title) ? -1 : 1}).
    map(movie => {return movie.title}).
    slice(0, numberMoviesToReturn);

}
console.log("Ordered movies by title : ", orderAlphabetically(movies));

// Best yearly rate average
function bestYearAvg(movies){
  if((movies.length < 1 || movies == undefined)){
    return undefined;
  }

  // object containing years as keys and arrays of movies as values
  var moviesPerYear = {};
  movies.forEach(
    movie =>{
      if(movie.year in moviesPerYear){
        moviesPerYear[movie.year].push(movie);
      }
      else{
        moviesPerYear[movie.year] = [movie];
      }
    }
  );

  // calculate average rate per year
  var ratesPerYear = []
  Object.keys(moviesPerYear).forEach((year)=>{
    ratesPerYear.push({
      "year": year,
      "avgRate": ratesAverage(moviesPerYear[year])
    });
  });

  // find best year of cinema
  var bestYear = 0;
  var bestRate = 0;
  ratesPerYear.forEach(element => {

    if(bestRate < element.avgRate){
      bestRate = element.avgRate;
      bestYear = element.year
    }

  });

  return 'The best year was '+bestYear+' with an average rate of '+bestRate;
}
console.log(bestYearAvg(movies));