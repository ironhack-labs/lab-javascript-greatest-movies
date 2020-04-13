/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayMovies) {
  let copiaMovies = Array.from(arrayMovies);

  function ordenar(a, b) {
    if (a.year === b.year) {
      if (a.title.toUpperCase() > b.title.toUpperCase()) {
        return 1;
      } else if (a.title.toUpperCase() < b.title.toUpperCase()) {
        return -1;
      } else {
        return 0;
      }
    } else {
      return a.year - b.year;
    }
  }

  return copiaMovies.sort(ordenar);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arrayMovies) {
  function steven(arr) {
    return arr.director === "Steven Spielberg" && arr.genre.includes("Drama");
  }

  let stevenResult = Array.from(arrayMovies);

  return stevenResult.filter(steven).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayMovies) {
  //array.from para crear una array nueva
  let alphabetically = Array.from(arrayMovies);

  //ordenar alfabeticamente la nueva array
  function order(a, b) {
    if (a.title.toUpperCase() > b.title.toUpperCase()) {
      return 1;
    } else if (a.title.toUpperCase() < b.title.toUpperCase()) {
      return -1;
    } else {
      return 0;
    }
  }

  //usar splice para cortar las 20 primeras
  alphabetically.sort(order);

  arrayTitles = [];

  alphabetically.forEach((element) => {
    arrayTitles.push(element.title);
  });

  if (arrayTitles.length < 20) {
    return arrayTitles;
  } else {
    return arrayTitles.splice(0, 20);
  }
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arrayMovies) {
  let arraySum = Array.from(arrayMovies);

  function sumMovies(acc, elem) {
    if (elem.rate === undefined) {
      return acc;
    } else {
      return acc + elem.rate;
    }
  }

  let sumaFinal = parseFloat(
    (arraySum.reduce(sumMovies, 0) / arraySum.length).toFixed(2)
  );

  if (arraySum.length === 0) {
    return 0;
  } else {
    return sumaFinal;
  }
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arrayMovies) {
  let arrayDrama = Array.from(arrayMovies);

  function drama(elem) {
    return elem.genre.includes("Drama");
  }

  const newDrama = arrayDrama.filter(drama);

  return ratesAverage(newDrama);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

//Hacer una copia total de la función para que no de errores Jasmine:
//let newArray = JSON.parse(JSON.stringify(movies));

function turnHoursToMinutes(arrayMovies) {
  let newArray = JSON.parse(JSON.stringify(arrayMovies));

  newArray.map((element) => {
    element.duration = element.duration.split(" ");

    let horas = 0;
    let minutos = 0;

    if (element.duration[0] && element.duration[1]) {
      horas = parseFloat(element.duration[0]);
      minutos = parseFloat(element.duration[1]);
    } else if (element.duration[0] && element.duration[0].includes("h")) {
      horas = parseFloat(element.duration[0]);
    } else if (element.duration[0] && element.duration[0].includes("min")) {
      minutos = parseFloat(element.duration[0]);
    }

    element.duration = horas * 60 + minutos;
  });

  return newArray;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(arrayMovies) {
  if (!arrayMovies.length) {
    return null;
  }

  let newArray = JSON.parse(JSON.stringify(arrayMovies));
  let arrayYears = [];

  //crear un array con objetos que tienen el año. También los rates de las películas de ese año (todavía vacío)
  newArray.forEach((element) => {
    if (arrayYears.indexOf(element.year) < 0) {
      arrayYears.push({ year: element.year, arrayRates: [] });
    }
  });

  //añadir al objeto del año que le toca los rates de las películas de ese año
  arrayYears.forEach((object) => {
    newArray.forEach((movie) => {
      if (movie.year === object.year) {
        object.arrayRates.push(movie.rate);
      }
    });
  });

  //función para calcular la media de la puntuación de la peli
  function averageResult(array) {
    return array.reduce((acc, elem) => acc + elem) / array.length;
  }

  arrayYears.forEach((element) => {
    element.arrayRates = averageResult(element.arrayRates);
  });

  //ordenar los objetos por la media más alta con sort()

  arrayYears.sort((a, b) => {
    if (b.arrayRates === a.arrayRates) {
      return a.year - b.year;
    }
    return b.arrayRates - a.arrayRates;
  });

  //return arrayYears;
  return `The best year was ${arrayYears[0].year} with an average rate of ${arrayYears[0].arrayRates}`;
}
