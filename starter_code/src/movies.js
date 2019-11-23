// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(films) {

  // Clone to not mutate the original array
  filmsClone = JSON.parse(JSON.stringify(films));

  // Sort the copied array by year and by title
  filmsClone.sort(function(a, b) {
      // If the year is the same, order by title
      if(typeof a.title !== "undefined" && typeof b.title !== "undefined") {
        if (a.year === b.year && a.title.toUpperCase() > b.title.toUpperCase()) return 1;

        if (a.year === b.year && a.title.toUpperCase() < b.title.toUpperCase()) return -1;
      }
      // Order by year
      return a.year - b.year;
  });

  return filmsClone;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(films) {

  // Filter the array
  var filteredFilms = films.filter(function(film) {
      return (film.director === 'Steven Spielberg' && film.genre.includes('Drama'));
  });

  return filteredFilms.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(films) {

  // Clone to not mutate the original array
  filmsClone = JSON.parse(JSON.stringify(films));

  //Sort the movies by title, take only the title and return the first 20
  return filmsClone.sort(function(a, b) {
      if (a.title.toUpperCase() > b.title.toUpperCase()) return 1;
      return -1;
  }).map(function(film) {
      return film.title;
  }).slice(0, 20);

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function roundTwo(num) {
  return Math.round(num * 100) / 100;
}

function ratesAverage(films) {

  if (films.length < 1) return 0;

  // Clone to not mutate the original array
  filmsClone = JSON.parse(JSON.stringify(films));

  // Sum up all rates
  let totalRating = filmsClone.reduce(function(acc, e, i) {
      return (parseFloat(acc || 0) + parseFloat(e.rate || 0)).toFixed(2);
  }, 0);

  // Return average rating
  return parseFloat((totalRating / filmsClone.length).toFixed(2));

}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(films) {

  // Filter the array
  var dramaFilms = films.filter(function(film) {
      return (film.genre.includes('Drama'));
  });

  // If there is only one drama film
  if (dramaFilms.length === 1) return dramaFilms[0].rate;

  // Calculate average
  return ratesAverage(dramaFilms);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(films) {

  // Clone to not mutate the original array
  filmsClone = JSON.parse(JSON.stringify(films));

  // Map a new array with the duration transformed
  return filmsClone.map(function(e) {
      var minHours = (e.duration.includes('h')) ? e.duration.slice(0, e.duration.indexOf('h')) * 60 : 0;
      var minMinutes = (e.duration.includes('min')) ? e.duration.slice(e.duration.indexOf("min") - 2, e.duration.indexOf("min")) : 0;
      e.duration = parseInt(minHours) + parseInt(minMinutes);
      return e;
  });
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(films) {
  
  if(films.length < 1) return null;

  let ordered = orderByYear(films);
  var year = ordered[0].year;
  var moviesYear = [];
  var bestYear = ordered[0].year;
  var bestAvg = (ordered.length > 1) ? 0 : ordered[0].rate;

  ordered.forEach(function(film) {
 
    if(year !== film.year) {
      var avg = ratesAverage(moviesYear);
      if(avg > bestAvg || (avg == bestAvg && year < bestYear)) {
        bestAvg = avg;
        bestYear = year;
      } 
      // reset
      year = film.year;
      moviesYear = [];
      moviesYear.push(film);
    } else {
      moviesYear.push(film);
    }
  });

  return `The best year was ${bestYear} with an average rate of ${bestAvg}`;
}
