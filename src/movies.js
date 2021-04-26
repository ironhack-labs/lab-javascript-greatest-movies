// Iteration 1: All directors? - Get the array of all directors.

//const getAllDirectors = movies.map((el) => el.director);

const getAllDirectors = (names) => {
  const directores = names.map(function (name) {
    return name.director;
  });
  return directores;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (nombres) => {
  let contador = 0;
  nombres.filter((movie) => {
    if (movie.length <= 0) {
      return 0;
    } else {
      if (
        movie.director.includes("Steven Spielberg") &&
        movie.genre.includes("Drama")
      ) {
        return (contador += 1);
      } else {
        return false;
      }
    }
  });
  return contador;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (rates) => {
  if (!Array.isArray(rates) || rates.length <= 0) {
    return 0;
  }
  const calif = rates.reduce(function (acc, year) {
    if (year.rate) {
      return acc + year.rate;
    } else {
      return acc;
    }
  }, 0);

  return parseFloat((calif / rates.length).toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (dramasMov) => {
  const dramaPelis = dramasMov.filter(function (dramaMov) {
    return dramaMov.genre.includes("Drama");
  });
  return ratesAverage(dramaPelis);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (array) => {
  const newSortArr = [...array];
  newSortArr.sort(function (a, b) {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return newSortArr;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (nombres) => {
  const arrOrdAlp = [...nombres];
  arrOrdAlp.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });

  const titulos = arrOrdAlp.map(function (nombre) {
    return nombre.title;
  });
  if (titulos < 20) {
    return titulos;
  } else {
    return titulos.slice(0, 20);
  }
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (pelis) => {};

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

const bestYearAvg = (mejor) => {
  return "The best year was <YEAR> with an average rate of <RATE>";
};
