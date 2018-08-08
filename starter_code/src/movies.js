/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function durationToMins(duration) {
  return duration.split(" ").reduce(function (acc, time) {
    if (time.indexOf("h") !== -1) return time.replace("h", "") * 60 + acc;
    return Number(time.replace("min", "")) + acc;
  }, 0);
}

function turnHoursToMinutes(movies) {
  return movies.map(function (movie) {
    movie = Object.assign({}, movie);
    movie.duration = durationToMins(movie.duration);
    return movie;
  });
}

turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
  return (
    movies.reduce(function (acc, movie) {
      return acc + parseFloat(movie.rate);
    }, 0) / movies.length
  );
}

ratesAverage(movies);

// Get the average of Drama Movies

function dramaMoviesRate(movies) {

  var filter = movies.filter(function(item) {
    if (item.genre.includes("Drama")) {
      return item;
    } else {
      filter = undefined;
    }
    return filter;
  });
  
  var dramaSum = filter.reduce(function(a, item) {
    if (item.rate == "") {
      item.rate = 0
    }
    return a + parseFloat(item.rate);
  }, 0);
  if (dramaSum === 0) return undefined;
  return +(Math.round(dramaSum / filter.length + "e+2") + "e-2");
};

dramaMoviesRate(movies);

// Order by time duration, in growing order

function orderByDuration(movies) {
  return movies.sort(function (a, b) {
    if (a.duration === b.duration) return a.title > b.title;
    return a.duration - b.duration;
  });
}

orderByDuration(movies);

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  var stevenMovies = 0;
  if (movies.length == 0) {
    return;
  }
  var count = movies.reduce(function(a, item) {
    if (item.genre.includes("Drama") && item.director.includes("Steven Spielberg")) {
      stevenMovies += 1;
    }
    return stevenMovies;
  },0);

    return "Steven Spielberg directed " + count + " drama movies!";
    
};
console.log("-- directed:\n",howManyMovies(movies));

// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  var newArray = [];
  var sorted = movies.sort(function(a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  sorted.forEach(function(item) {
    newArray.push(item.title)
  });
  console.log(newArray.splice(20));
  
  if (newArray.length <= 20) {
    return newArray;
  }
  if (newArray > 20) {
    return newArray.splice(20);
  }
  
}
console.log("-- alphabetical:\n",orderAlphabetically(movies));

// Best yearly rate average

function bestYearAvg(movies) {
  if (!movies.length) return undefined;
 
  var yearsWithRates = {};
 
  movies.forEach(function (movie) {
    if (Object.keys(yearsWithRates).includes(movie.year)) return yearsWithRates[movie.year].push(parseFloat(movie.rate));
    yearsWithRates[movie.year] = [parseFloat(movie.rate)];
  })
 
  var result = { year: 0, rate: 0 };
 
  Object.keys(yearsWithRates).forEach(function (year) {
    var sum = yearsWithRates[year].reduce(function (acc, rate) {
      return acc + rate / yearsWithRates[year].length;
    }, 0);
 
    if (sum > result.rate) return (result.year = year, result.rate = sum);
  })
 
  return "The best year was " + result.year + " with an average rate of " + result.rate;
 }
 
 bestYearAvg(movies);