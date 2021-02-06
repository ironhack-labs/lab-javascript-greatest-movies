//var { movies } = require("./data.js")

console.log("------Iteration 1------");
// Iteration 1: All directors? - Get the array of all directors.

/* We need to get the array of all directors. Since this is a warm up, 
we will give you a hint: you have to map through the array of movies and 
get all the directors into one array as a final result. Go ahead and create 
a function named getAllDirectors() that receives an array of movies as an 
argument and returns a new (mapped array). */

function getAllDirectors(arr) {
  let directors = arr.map(n => n.director);
  let filteredDirectors =  directors.filter((director, i) => directors.indexOf(director) === i);
  return filteredDirectors;
};

console.log("<------Iteration 1 - Bonus------>");
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

console.log("<------Iteration 2------>");
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {     
  if (arr.length === 0) {
    return 0;
  }                   
  let directedBySP = arr.filter(movies => (movies.director === 'Steven Spielberg') 
  && (((movies.genre).indexOf('Drama')) !== -1));
  return directedBySP.length;
};

console.log("<------Iteration 3------>");
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  if (arr.length === 0) {
    return 0;
  };
  const rates = arr.map(obj => {
    if (!isNaN(obj.rate) || (obj.rate) !== undefined || typeof(obj.rate) !== "string") {
      return obj.rate
    }
  });
  const average = ((rates.reduce((a, c) =>  a + c)) / (rates.length));
  const averageWithTwoFloatingPoints = Number(average.toFixed(2));
  return averageWithTwoFloatingPoints;
};

console.log("<------Iteration 4------>");
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
const dramaMovies = arr.filter(obj => (obj.genre).indexOf('Drama') !== -1);
return ratesAverage(dramaMovies);
};

console.log("<------Iteration 5------>");
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const newArr = [...arr];
  const moviesByYear = newArr.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else {
      return -1
    }
  })
  return moviesByYear;
};

console.log("<------Iteration 6------>");

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// Extraire les titles dans un array
// Trier l'array de titre
// .Splice() Method pour couper l'array à 20 max
function orderAlphabetically(arr) {
  let allTitles = arr.map(movie => movie.title)
  let moviesByName = allTitles.sort( (movie1, movie2) => {
      if (movie1 > movie2 )  return 1
      else return -1;
  });
  if ( moviesByName.length > 20 ) {
      return moviesByName.splice(0, 20);
  }
  return moviesByName
};

console.log("<------Iteration 7------>");
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  const modifiedArray = arr.map(movie => {
    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: convertDurationtoMinutes(movie.duration),
      genre: movie.genre,
      rate: movie.rate
    }
  });
  return modifiedArray;
};

function convertDurationtoMinutes(string) {
  let hoursString = '';
  let minutesString = '';
  let indexOfSpace = string.indexOf(' ');
  for (let i = 0; i < string.length; i++) {
    if (string.indexOf('h') === -1) {
      minutesString += string[i];
    } else if (i < indexOfSpace || indexOfSpace === -1) {
      hoursString += string[i];
    } else {
      minutesString += string[i];
    }
  }
  if (hoursString.length === 0) {
    return parseInt(minutesString, 10);
  } if (minutesString.length === 0) {
    return parseInt(hoursString, 10) * 60;
  }
  return  parseInt(hoursString, 10) * 60 + parseInt(minutesString, 10);
};

console.log("<------Iteration 8------>");
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(listOfMovies) {
  if (listOfMovies.length === 0) {
    return null;
  }
  // map over list of movies and return an array with the years only
  const unfilteredYears = listOfMovies.map( n => n.year);
  // delete doubles from the array of years
  const filteredYears = unfilteredYears.filter((n,i) => unfilteredYears.indexOf(n) === i);
  // for each year, create an array that will accept object movies as value
  let arrayOfMoviesPerYear = [];
  for (let i = 0; i < filteredYears.length; i++) {
    arrayOfMoviesPerYear[i] = [];
    for (let k = 0; k < listOfMovies.length; k++) {
      if (listOfMovies[k].year === filteredYears[i]) {
        arrayOfMoviesPerYear[i].push(listOfMovies[k]);
      }
    } 
  };
  // create a best year and a best average variable
  let bestYear ='';
  let bestAverage = 0;
  // iterate over arrayOfMoviesPerYear
  for (let j = 0; j < arrayOfMoviesPerYear.length; j++) {
    // reassign variable best avg and year to var bestYear and best Average
    if (ratesAverage(arrayOfMoviesPerYear[j]) >= bestAverage) {
      bestAverage = ratesAverage(arrayOfMoviesPerYear[j]);
      bestYear = arrayOfMoviesPerYear[j][0].year;
    }
  };
  // return result
  return "The best year was " + bestYear + " with an average rate of " + bestAverage;
};
