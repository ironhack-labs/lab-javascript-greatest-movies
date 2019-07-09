/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  let duration = 0;
  let substringMin = "min";
  let substringHour = "h";

  const movies_copy = [...movies];
  const hoursAndMinutes = movies_copy.map(film => {
    const movie = { ...film };
    const hoursAndMinutesLetters = film.duration.split(" "); // [2h, 22min] [3h, 59min]...

    if (hoursAndMinutesLetters.length === 2) {
      duration =
        parseInt(hoursAndMinutesLetters[0]) * 60 +
        parseInt(hoursAndMinutesLetters[1]);
    } else if (
      hoursAndMinutesLetters.length === 1 &&
      hoursAndMinutesLetters[0].includes(substringHour)
    ) {
      duration = parseInt(hoursAndMinutesLetters[0]) * 60;
    } else if (
      hoursAndMinutesLetters.length === 1 &&
      hoursAndMinutesLetters[0].includes(substringMin)
    ) {
      duration = parseInt(hoursAndMinutesLetters[0]);
    }

    movie.duration = duration;
    return movie;
  });
  return hoursAndMinutes;
}

// console.log(turnHoursToMinutes);

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  const rateSum = movies.reduce((acc, film) => {
    return acc + film.rate;
  }, 0.0);

  return parseFloat((rateSum / movies.length).toFixed(2));
}

// console.log(ratesAverage(movies));

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter(film => film.genre.includes("Drama"));

  // console.log(dramaMovies);

  const dramaRateSum = dramaMovies.reduce((acc, dramaFilm) => {
    return acc + dramaFilm.rate;
  }, 0.0);
  if (dramaMovies.length > 0) {
    return parseFloat((dramaRateSum / dramaMovies.length).toFixed(2));
  } else {
    return undefined;
  }
}

// console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  const spielbergDramaMovies = movies.filter(
    film =>
      film.director.includes("Steven Spielberg") && film.genre.includes("Drama")
  );

  if (spielbergDramaMovies.length > 0) {
    return `Steven Spielberg directed ${
      spielbergDramaMovies.length
    } drama movies!`;
  } else if (spielbergDramaMovies.length <= 0) {
    return undefined;
  }
}

// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const displayTitles = movies.map(film => film.title);

  const orderedTitles = displayTitles.sort();

  return orderedTitles.splice(0, 20);
}

// Best yearly rate average

// //const durationInMins =
// durationInInt.charAt(0) * 60 + durationInInt.substr(1, elm.length);
// return durationInMins;
