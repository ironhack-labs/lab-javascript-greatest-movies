/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(films) {
  // crear una copia
  let orderMovies = Array.from(films);

  let order = (film1, film2) =>
    film1.year === film2.year
      ? film1.title.toUpperCase() > film2.title.toUpperCase()
        ? 1
        : film1.title.toUpperCase() < film2.title.toUpperCase()
        ? -1
        : 0
      : film1.year - film2.year;

  return orderMovies.sort(order);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(films) {
  return films.filter(
    film => film.director === "Steven Spielberg" && filmGenre(film, "Drama")
  ).length;
}

function filmGenre(movie, genreToFilter) {
  return (
    movie.genre.filter(filmGenre => filmGenre === genreToFilter).length > 0
  );
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(films) {
  return films
    .map(film => film.title)
    .sort()
    .filter((film, first) => first < 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals;

function ratesAverage(films) {
  let rates =
    films.length === 0
      ? 0
      : parseFloat(
          (
            films
              .filter(film => "rate" in film)
              .reduce((sum, film) => sum + film.rate, 0) / films.length
          ).toFixed(2)
        );

  return rates;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(films) {
  return ratesAverage(films.filter(film => filmGenre(film, "Drama")));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(films) {
  let filmMinute = JSON.parse(JSON.stringify(films));

  filmMinute = filmMinute.map(filmHour => {
    switch (filmHour.duration.length) {
      case 2:
        return {
          duration: filmHour.duration[0] * 60
        };
        break;
      case 5:
        return {
          duration: parseInt(filmHour.duration[0] + filmHour.duration[1])
        };
        break;
      case 7:
        return {
          duration: filmHour.duration[0] * 60 + parseInt(filmHour.duration[3])
        };
        break;
      case 8:
        return {
          duration:
            filmHour.duration[0] * 60 +
            parseInt(filmHour.duration[3] + filmHour.duration[4])
        };
        break;
      default:
        return {
          duration: parseInt(filmHour.duration[0])
        };
        break;
    }
  });

  return filmMinute;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
