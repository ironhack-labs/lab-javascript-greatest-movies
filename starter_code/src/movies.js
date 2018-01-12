function turnHoursToMinutes(arr) {
  var finalArray = arr.map(function(movie) {
    var newMovie = movie;
    if (movie.duration.length === 1 && movie.duration.includes('min')) {
      newMovie.duration = parseInt(movie.duration.replace('min', '')) * 60;
      return newMovie;
    } else if (movie.duration.length === 1 && movie.duration.includes('h')) {
      newMovie.duration = parseInt(movie.duration.replace('h', ''));
      return newMovie;
    } else {
      newMovie.duration =
        parseInt(movie.duration.split('h')[0]) +
        parseInt(movie.duration.split('h')[1].replace('min', ''));
      return newMovie;
    }
  });
  return finalArray;
}

function ratesAverage(arr) {
  return arr
    .map(function(movie) {
      if (movie.rate === undefined) {
        return 0;
      } else {
        return movie.rate;
      }
    })
    .reduce(function(avg, initial) {
      return avg + movie.rate / arr.length;
    }, 0);
}

function dramaMoviesRate(arr) {
  return arr
    .filter(function(movie) {
      return movie.genre.includes('Drama');
    })
    .map(function(anothermovie) {
      return anothermovie.rate;
    })
    .reduce(function(avg, initial) {
      return avg + initial / arr.length;
    }, 0)
    .toFixed(2);
}

function orderByDuration(arr) {
  return turnHoursToMinutes(arr)
    .map(function(movie) {
      return movie.duration;
    })
    .sort(function(movie1, movie2) {
      return movie1.duration - movie2.duration;
    });
}

function howManyMovies(arr) {
  return arr.map(function(movie) {
    return arr.filter(function(anothermovie) {
      return (
        anothermovie.genre.includes('genre') &&
        anothermovie.genre.includes('Spielberg')
      );
    });
  });
}

function orderAlphabetically(arr) {
  var i = 0;
  return arr.map(function(movie) {
    i++;
    if (i === 20) {
      return;
    } else {
      return arr.title.sort();
    }
  });
}
