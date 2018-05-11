// Turn duration of the movies from hours to minutes 
function parseDurationToMins(duration) {
    return duration.split(' ')
      .reduce(function(acc, time) {
        if (time.indexOf('h') !== -1) {
          return Number(time.replace('h', '')) * 60 + acc;
        } else {
          return Number(time.replace('min', '')) + acc;
        }
      }, 0);
  }
  
  function turnHoursToMinutes(movies) {
    return movies.map(function(movie) {
          movie = Object.assign({}, movie);
          movie.duration = parseDurationToMins(movie.duration);
          return movie;
      });
  }
  turnHoursToMinutes(movies);
  
  // Get the average of all rates with 2 decimals 
  function ratesAverage(movies){
    var ratesSum = movies.reduce(function(acc, movie){
      return acc + parseFloat(movie.rate);
    }, 0);
      return ratesSum / movies.length.toFixed(2);
  };
  ratesAverage(movies);

    // Get the average of Drama Movies
    function dramaMoviesRate(movies){
      var filteredDrama = movies.filter(function(movie){
        return movie.genre.indexOf("Drama") !== -1;
      });
      var average = filteredDrama.reduce(function (acc, points) {
        return acc + Number(points.rate);
      }, 0);
      if (average === 0){
        return undefined;
      }
      return Number((average / filteredDrama.length).toFixed(2));
    }
    dramaMoviesRate(movies);
 
  
//Order by duration
    function orderByDuration(movies) {
    return movies.sort(function(movieA, movieB) {
        if (movieA.duration > movieB.duration) {
            return 1;
        } else if (movieA.duration < movieB.duration) {
            return -1;
        } else {
   return movieA.title.localeCompare(movieB.title);
        }
    });
  }
  orderByDuration(movies);

  // How many movies did STEVEN SPIELBERG

  function howManyMovies(array) {
    if (array.length === 0) {
      return undefined;
    }
    var stevenDramaFilms = array.filter(function(films) {
      return films.director === "Steven Spielberg" && films.genre.indexOf("Drama") !== -1;
    });
    return (
      "Steven Spielberg directed " + stevenDramaFilms.length + " drama movies!"
    );
  }
  console.log(howManyMovies(movies));
  
  // Order by title and print the first 20 titles
  function orderAlphabetically(movies){
    var arrayTitle = [];
    movies.forEach(function(element) {
      arrayTitle.push(element.title);
    });
    arrayTitle.sort();
    if (arrayTitle.length >= 20) {
      arrayTitle = arrayTitle.slice(0, 20);
    }
    return arrayTitle;
  }
  
  
  // Best yearly rate average*/
  
