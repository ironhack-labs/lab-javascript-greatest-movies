/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(list_movies) {
  if (list_movies.length === 0) return [];
  return list_movies.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    else return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(list_movies) {
  return list_movies.filter(e => {
    return e.director === "Steven Spielberg" && e.genre.includes("Drama");
  }).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(list_movies) {
  return list_movies
    .map(e => {
      return e.title;
    })
    .sort()
    .splice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(list_movies) {
  return list_movies.length === 0
    ? 0
    : parseFloat(
        (
          list_movies
            .map(e => {
              return e.rate || 0;
            })
            .reduce((acc, value) => {
              return acc + value;
            }) / list_movies.length
        ).toFixed(2)
      );
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(list_movies) {
  return ratesAverage(
    list_movies.filter(e => {
      return e.genre.includes("Drama");
    })
  );
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(list_movies) {
  let list_movies_copy = JSON.parse(JSON.stringify(list_movies));

  return list_movies_copy.map(e => {
    e.duration = e.duration.split(" ").reduce((acc, elem) => {
      return (acc += elem.includes("h")
        ? parseInt(elem.replace("h", "")) * 60
        : parseInt(elem.replace("min", "")));
    }, 0);

    return e;
  });
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(list_movies) {

  if (list_movies.length === 0) return null;

  let map_years = new Map();

  list_movies.forEach(e => {
    map_years.has(e.year)
      ? map_years.get(e.year).push(e.rate)
      : map_years.set(e.year, [e.rate]);
  });

  let best_year;
  let best_rate = 0;

  map_years.forEach((value, key) => {
    let size_value = value.length;

    value =
      value.reduce((acc, e) => {
        return (acc += e);
      }) / size_value;

    if (value >= best_rate) {
      best_rate = value;
      best_year = key;
    }
  });

  return `The best year was ${best_year} with an average rate of ${parseFloat(
    best_rate.toFixed(2)
  )}`;
}
