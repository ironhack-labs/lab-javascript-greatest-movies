/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(firstArray) {
  copiedArray = [...firstArray];

  let orderedByYearArray = copiedArray.sort((a, b) => a.year - b.year);

  return orderedByYearArray;

  // FALTA ORDENAR ALFABETICAMENTE EN CASO DE COINCIDIR
}

orderByYear(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(yourArrayHere) {
  const stevenSpielbergDramas = yourArrayHere.filter(
    elm => elm.director == "Steven Spielberg" && elm.genre.includes("Drama")
  );

  return stevenSpielbergDramas.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(someArray) {
  let titlesArray = [...someArray.map(elm => elm.title)].sort();

  if (titlesArray.length > 20) {
    titlesArray = titlesArray.slice(0, 20);
  }

  return titlesArray;
}

orderAlphabetically(movies);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  const allRatesArray = arr.map(elm => elm.rate || 0);
  let allRatesAverage;

  const allRatesSum = allRatesArray.reduce((acc, elm) => acc + elm, 0);

  if (arr.length != 0) {
    allRatesAverage = Math.round((allRatesSum / arr.length) * 100) / 100;
  } else {
    allRatesAverage = 0;
  }

  return allRatesAverage;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(yourArray) {
  const dramaArray = yourArray.filter(elm => elm.genre.includes("Drama"));
  let averageRateNum;

  if (dramaArray.length != 0) {
    const ratesArray = dramaArray.map(elm => elm.rate);

    const ratesSum = ratesArray.reduce((acc, elm) => acc + elm, 0);

    const averageRate = ratesSum / ratesArray.length;

    averageRateNum = Math.floor(averageRate * 100) / 100;
  } else {
    averageRateNum = 0;
  }

  return averageRateNum;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arrayHere) {
  let modifiedDuration = [...arrayHere];

  const durationHoursArray = arrayHere.map(elm => {
    let hours = parseInt(elm.duration.substr(0, elm.duration.indexOf("h")));
    let minutes = parseInt(
      elm.duration.substr(elm.duration.indexOf(" "), elm.duration.length - 5)
    );

    let totalMinutes = hours * 60 + minutes;

    return totalMinutes;
  });

  for (let i = 0; i < modifiedDuration.length; i++) {
    modifiedDuration[i].duration = durationHoursArray[i];
  }

  console.log(modifiedDuration);
  return modifiedDuration;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
