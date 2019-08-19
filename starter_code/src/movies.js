/* eslint no-restricted-globals: 'off' */

const roundNumber = (number, digits) => Math.round(number * 10 ** digits) / 10 ** digits;

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

let ratesAverage = (films) => {
  let rates = 0;
  for (let film of films) {
    if (film.rate) {
      rates += parseFloat(film.rate);
    }
  }
  return roundNumber(rates / films.length, 2);
}

// Iteration 2: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = (films) => {
  let emptyRates = films

    .filter(function (rates) {
      return parseFloat(rates.rate) !== NaN
    })

    .filter(function (drama) {
      return drama.genre.includes("Drama");

    });

  if (!emptyRates.length)
    return emptyRates = 0;
  else {
    return ratesAverage(emptyRates);
  }
};


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

let orderByDuration = (films) => {
  let filmsDuration = films
    .sort(function (a, b) {
      if (a.title < b.title) return -1;
      else if (a.title > b.title) return 1;
      else 0;
    }).sort(function (a, b) {
      if (a.duration < b.duration) return -1;
      else if (a.duration > b.duration) return 1;
      else return 0;
    })
  return filmsDuration;
};


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

let howManyMovies = (films) => {
  let dramaAndStevenFilms = films


    .filter(function (drama) {
      return drama.genre.includes("Drama");

    })
    .filter(function (steven) {
      return steven.director.includes("Steven")
    })

  if (!dramaAndStevenFilms.length)
    return dramaAndStevenFilms = 0;
  else {
    return dramaAndStevenFilms.length;
  }
};

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
let orderAlphabetically = (films) => {
  let filterAlph = films.sort(function (a, b) {
      if (a.title < b.title) return -1;
      else if (a.title > b.title) return 1;
      else return 0;
    }).map(onlyTitle => onlyTitle.title)
    .slice(0, 20);
  return filterAlph;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

//Exercise works on repl but not with Jasime

let turnHoursToMinutes = films => {
  let hoursToMins = films.map(function (movies) {
    let moviesWithMins = [];
    movies.duration = (parseInt(movies.duration.charAt(0)) * 60) + parseInt(movies.duration.slice(3, movies.duration.indexOf("m")));
    moviesWithMins.push(movies);
    return moviesWithMins;
  });
  return hoursToMins;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
