// Iteration 1: All directors? - Get the array of all directors.

// function getAllDirectors(arr) {

function getAllDirectors(arr) {
  let newArr = arr.map((movie) => movie.director);
  return newArr;
}
// // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = function(array) {
  let nbOfMovies = array.filter(function (movie) {
  return (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
  );
});
    return nbOfMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// OPTION 1: Why is this not working?
// function sumRates(arr) {
//   let sum = arr.reduce(function (accumulator, movie) {
//     if (movie.rate) {
//       return accumulator + currentMovie.rate;
//     }
//     else return accumulator;
//   }, 0);
// };

// function nbRates(arr) {
//   let count = arr.reduce(function (accumulator, movie) {
//     if (movie.rate) {
//       return accumulator++;
//     }
//     else return accumulator;
//   }, 0);
// };

// const ratesAverage = (array) => {
//   if (array.length > 0) {
//     let averageOfRates = 0;
//     let numberOfRates = nbRates(array);
//     let sumOfRates = sumRates(array);
//     averageOfRates = sumOfRates / numberOfRates;
//     return Math.round(averageOfRates * 100) / 100;
//   } else return 0;
// };

// OPTION 2
const sumRates = function (array) {
  let sumOfRates = 0;
  sumOfRates = array.reduce((accumulator, movie) => {
    if (movie.rate) {
      sumOfRates = accumulator + movie.rate;
    } else sumOfRates = accumulator;
    return sumOfRates;
  }, 0);
  return sumOfRates;
};


const nbRates = function (array) {
  let numberOfRates = 0;
  numberOfRates = array.reduce((accumulator, movie) => {
    if (movie.rate) {
      numberOfRates++;
    } else numberOfRates = accumulator;
    return numberOfRates;
  }, 0);
  return numberOfRates;
};

const ratesAverage = (array) => {
  if (array.length > 0) {
    let averageOfRates = 0;
    let numberOfRates = nbRates(array);
    let sumOfRates = sumRates(array);
    averageOfRates = sumOfRates / numberOfRates;
    return Math.round(averageOfRates * 100) / 100;
  } else return 0;
};

// Ajouter une condition dans le reduce pour avoir les films qui ont des notes.

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesArray = (array) => {
  let dramaMovies = [];
  dramaMovies = array.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  return dramaMovies;
};

const dramaMoviesRate = (array) => {
  let dramaMovies = [];
  dramaMovies = dramaMoviesArray(array);
  return ratesAverage(dramaMovies);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// OPTION 1: Why is this not working?
// const orderByYear = (array) => {
//   let orderYear = [];
//   orderYear = array.sort((a, b) => {
//     if (a.year !== b.year) {
//       return a.year - b.year;
//     } else return a.title.localCompare(b.title);
//   });
//   return orderYear;
// };

// OPTION 2
function orderByYear(arr){
  let copy=JSON.parse(JSON.stringify(arr));
  copy = copy.sort((a,b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else return a.title.localCompare(b.title);
  });
  return copy;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  let copy=JSON.parse(JSON.stringify(arr));
  copy = copy.sort((a,b)  => {
    return a.title.localCompare(b.title);
  });
  return copy;
};

const print20Alphabetically = (arr) => {
  for (let i = 0; i < 20; i++) {
    console.log(orderAlphabetically(arr)[i].title.toString());
  }
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
