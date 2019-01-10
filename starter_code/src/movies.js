/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
// How to change the value of the same key in all objects of an array

function turnHoursToMinutes(movies) {
  var time = movies.map(function(oneMovie) {
    var A = {};
    var hoursIntoMinutes = Number(oneMovie.duration.charAt(0) * 60);
    var minutes = Number(
      oneMovie.duration.charAt(3) + oneMovie.duration.charAt(4)
    );
    console.log(hoursIntoMinutes + minutes);
    return (oneMovie.duration = hoursIntoMinutes + minutes);
  });
  return time;
}

console.log(turnHoursToMinutes(movies));

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  var average = movies.reduce(function(sum, oneMovie) {
    return sum + Number(oneMovie.rate);
  }, 0);
  return Number((average / movies.length).toFixed(2));
}

console.log(ratesAverage(movies));

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  var dramaMovies = movies.filter(function(oneMovie) {
    return oneMovie.genre.indexOf("Drama") > -1;
  });
  if (dramaMovies.length === 0) {
    return undefined;
  }
  return ratesAverage(dramaMovies);
}

console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order
// Will do when Iteration 1 is solved

// Order by date
//Cannot solve the 2 Jasmine errors :
// - Return the new array in growing order
// -If two movies have the same length, order them alphabetically by their title

function orderByDuration(movies) {
  var orderedYears = movies.sort(function(itemA, itemB) {
    if (itemA.year < itemB.year) {
      return -42;
    } else {
      return 89;
    }
  });
  return orderedYears;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  if (movies.length === 0) {
    return undefined;
  }
  var moviesSpielberg = movies.filter(function(oneMovie) {
    return (
      oneMovie.director === "Steven Spielberg" &&
      oneMovie.genre.indexOf("Drama") > -1
    );
  });
  return (
    "Steven Spielberg directed " + moviesSpielberg.length + " drama movies!"
  );
}

// Order by title and print the first 20 titles
//Cannot solve the 2 Jasmine errors :
// - You should order them alphabetically.
// - You should return the top20 after order them alphabetically.

function orderAlphabetically(movies) {
  var orderedRate = movies.sort(function(itemA, itemB) {
    if (itemA.rate < itemB.rate) {
      return -42;
    } else {
      return 89;
    }
  });
  var top20 = orderedRate.slice(0, 20);

  var orderedtop20 = top20.sort(function(itemA, itemB) {
    if (itemA.title > itemB.title) {
      return -42;
    } else {
      return 89;
    }
  });
  var titletop20 = orderedtop20.map(function(oneMovie) {
    return oneMovie.title;
  });

  var orderTitletop20 = titletop20.sort(function(itemA, itemB) {
    if (itemA.title < itemB.title) {
      return -42;
    } else {
      return 89;
    }
  });
  return orderTitletop20;
}

// Best yearly rate average
// To do this week-end :)
