/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  var moviesCopy = movies.map(function(n) {
    var h1 = 0;
    var m1 = 0;

    if (typeof n.duration === 'number') {
      m1 = n.duration;
    }

    if (typeof n.duration === 'string') {
      var hour = n.duration.match(/\d(h)/g);
      if (hour != null) {
        h1 = hour[0].replace("h", "");
      }

      var min = n.duration.match(/\d*(min)/g);
      if (min != null) {
        m1 = min[0].replace("min", "");
      }
    }
    var minutes = parseInt(h1) * 60 + parseInt(m1);
    return Object.assign({}, n, { duration: minutes });
  });
  return moviesCopy;
}

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  var averageRates = 0;
  var sumRates = movies.reduce(function(acc, n) {
    var number = parseFloat(n.rate);
    return acc + (isNaN(number) ? 0 : number);
  }, 0);
  averageRates = (sumRates / movies.length).toFixed(2);
  return parseFloat(averageRates);
}
// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  var dramaMovies = movies.filter(function(n) {
    return n.genre.includes("Drama");
  });
  return dramaMovies.length > 0 ? ratesAverage(dramaMovies) : undefined;
}
// Order by time duration, in growing order

function orderByDuration(movies) {
  movies = turnHoursToMinutes(movies)
  var moviesDurationTitleOrdered = movies.sort(function(a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  var moviesDurationOrdered = moviesDurationTitleOrdered.sort(function(a, b) {
    return a.duration - b.duration;
  });
  return moviesDurationOrdered;
}
// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  if (!movies.length) return undefined;
  var string = "";
  var dramaMovies = movies.filter(function(n) {
    return n.genre.includes("Drama");
  });
  var dramaSpilbergMovies = dramaMovies.filter(function(n) {
    return n.director.includes("Steven Spielberg");
  });
  string =
    "Steven Spielberg directed " +
    dramaSpilbergMovies.length +
    " drama movies!";
  return string;
}
// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  var titlesArray = [];
  var moviesTitleOrdered = movies.sort(function(a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  var first20movies = moviesTitleOrdered.splice(0, 20);
  first20movies.forEach(function(element) {
    titlesArray.push(element.title);
  });
  return titlesArray;
}
// Best yearly rate average
function bestYearAvg(movies) {
  if (!movies.length) return undefined;
  var years = [];
  movies.forEach(function(element) {
    years.push(parseInt(element.year));
  });
  var yearsUnique = [];
  years.forEach(function(element) {
    if (!yearsUnique.includes(element)) {
      yearsUnique.push(element);
    }
  });
  var yearsAvg = [];
  yearsUnique.forEach(function(element) {
    var yearMovies = movies.filter(function(n) {
      return n.year.includes(element);
    });
    yearsAvg.push({ year: element, rateAverage: ratesAverage(yearMovies) });
  });
  var ratesOrdered = yearsAvg.sort(function(a, b) {
    return b.rateAverage - a.rateAverage;
  });
  var topAvg = ratesOrdered[0].rateAverage;
  var topRateYears = ratesOrdered.filter(function(n) {
    return n.rateAverage == topAvg;
  });
  topRateYearsOrdered = topRateYears.sort(function(a, b) {
    return a.year - b.year;
  });
  return (
    "The best year was " +
    topRateYearsOrdered[0].year +
    " with an average rate of " +
    topRateYearsOrdered[0].rateAverage
  );
}
