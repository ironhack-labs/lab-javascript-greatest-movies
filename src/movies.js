/* eslint no-restricted-globals: 'off' */
"use strict";

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
  let newFilmsArray = JSON.parse(JSON.stringify(films));

  newFilmsArray.forEach(
    film => (film.duration = transformtToMinutes(film.duration))
  );

  return newFilmsArray;
}

function transformtToMinutes(stringTime) {
  let minutes = 0;
  let newTime = stringTime.split(" ");

  for (let i = 0; i < newTime.length; i++) {
    newTime[i].indexOf("h") >= 0
      ? (minutes +=
          parseInt(newTime[i].substring(0, newTime[i].indexOf("h"))) * 60)
      : (minutes += parseInt(newTime[i].substring(0, newTime[i].indexOf("m"))));
  }

  return minutes;
}

// BONUS Iteration: Best yearly rate average

function bestYearAvg(films) {
  if (films.length === 0) return null;
  let orderYear = setYear(
    films.sort((film1, film2) => film1.year - film2.year)
  ).sort((film1, film2) => film2.rate - film1.rate);

  return `The best year was ${orderYear[0].year} with an average rate of ${orderYear[0].rate}`;
}

function setYear(arrayYear) {
  let setYearArray = [];
  let lastYear = 0;
  let addRates = 0;
  let counterRates = 0;

  for (let i = 0; i < arrayYear.length; i++) {
    if (arrayYear[i] != lastYear) {
      addRates = arrayYear
        .filter(film => film.year === arrayYear[i].year)
        .reduce((acc, film) => acc + film.rate, 0);
      counterRates = arrayYear.filter(film => film.year === arrayYear[i].year)
        .length;

      setYearArray.push({
        year: arrayYear[i].year,
        rate: addRates / counterRates
      });
      lastYear = arrayYear[i];
    }
  }
  return setYearArray;
}
