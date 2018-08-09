/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  var array2 = array.slice();
  return array2.map(function(item) {
    var movieDuration = item.duration.split(" ");
    var hours = movieDuration[0].match(/\d+/)[0];
    var minutes = movieDuration[1].match(/\d+/)[0];
    var durationInMinutes = parseInt(hours) * 60 + parseInt(minutes);
    console.log(Object.assign({}, item, { duration: durationInMinutes }));
    return Object.assign({}, item, { duration: durationInMinutes });

    // console.log(durationInMinutes);
    //return newArray;
  });
}
// Get the average of all rates with 2 decimals
function ratesAverage(array) {
  var sum = 0;
  var avg = array.reduce(function(accumulator, current) {
    sum += parseFloat(current.rate);
  }, 0);
  console.log(sum / array.length);
  return sum / array.length;
}
// Get the average of Drama Movies
function dramaMoviesRate(array) {
  var sum = 0;
  var i = 0;
  var n = 0;
  var avg = array.reduce(function(accumulator, current){
    if(current.genre.includes('Drama')) {
      if(current.hasOwnProperty('rate')) {
        sum += parseFloat(current.rate);
        i += 1;
      }
    } 
  }, 0);
  n = sum / i;
  console.log(n);
  if(n > 0) {
    n = parseFloat(n.toFixed(2));
    return n;
  } else {
    return undefined;
  }
}
// Order by time duration, in growing order
function orderByDuration(array) {
  return array.sort(compare);
}
function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const durationA = a.duration.toUpperCase();
  const durationB = b.duration.toUpperCase();
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();

  let comparison = 0;
  if (durationA > durationB) {
    comparison = 1;
  } else if (durationA < durationB) {
    comparison = -1;
  } else if (durationA == durationB) {
    if(titleA > titleB) {
      comparison = 1;
    } else if(titleA < titleB) {
      comparison = -1;
    }
  }
  return comparison;
}
orderByDuration(movies);
// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
  var numberOfMovies = 0;
  var spielbergFilms = array.filter(function(item){
    if(item.director == 'Steven Spielberg' && item.genre.includes('Drama')) {
      numberOfMovies += 1;
    }
  });
  if(numberOfMovies > 0) {
    return 'Steven Spielberg directed ' + numberOfMovies + ' drama movies!';
  } else {
    return undefined;
  }
  
}
howManyMovies(movies);
// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  var moviesCopy = movies.map(function(movie) {
      movie.rate = parseFloat(movie.rate);
      return movie;
  });

  moviesCopy.sort(function(a, b) {
      return b.rate - a.rate;
  });

  var firstTwentyMovies = moviesCopy.slice(0, 20);
  console.log(firstTwentyMovies);

  var onlyTitles = firstTwentyMovies.map(function(element) {
      return element.title;
  });
  return onlyTitles.sort();
}

// // Best yearly rate average
