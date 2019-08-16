/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = array => {
  let sumRates = array.reduce(
    (acc, current) => acc + parseFloat(current.rate),
    0
  );
  return parseFloat((sumRates / array.length).toFixed(2));
};
console.log(ratesAverage(movies));

// Iteration 2: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = array => {
  const onlyDrama = array.filter(element => element.genre.includes("Drama"));
  if (onlyDrama === 0) {
    return 0;
  } else {
    return ratesAverage(dramaMoviesRate);
  }
};

dramaMoviesRate(movies);

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
//const orderByDuration = () => {};

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = array => {
  const spielbergMovs = array.filter(element =>
    element.director.includes("Spielberg")
  );
  if (spielbergMovs === 0) {
    return spielbergMovs.length;
  }
};

// function howManyMovies(arrayMovies) {
//   if (arrayMovies.length > 0) {
//     let arraySpielberg = arrayMovies.filter(
//       movi =>
//         movi.genre.indexOf("Drama") !== -1 &&
//         movi.director == "Steven Spielberg"
//     );
//     return (
//       "Steven Spielberg directed " + arraySpielberg.length + " drama movies!"
//     );
//   }
// }

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
//const orderAlphabetically = () => {};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

//const turnHoursToMinutes = () => {};

// BONUS Iteration: Best yearly rate average - Best yearly rate average
