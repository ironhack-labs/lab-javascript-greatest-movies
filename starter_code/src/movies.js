/* eslint no-restricted-globals: 'off' */

// import object from data.js
//const movies = require('./data.js');

// Turn duration of the movies from hours to minutes 
// Create a turnHoursToMinutes method that receive an array as parameter, replace the duration info of each of the movies for it equivalent in minutes. 
// You must return a new array with all the info about the movie, not modify the original array!
function turnHoursToMinutes (array) {
  return array.map(element => {
    let hours = 0;
    let minutes = 0;
    const movieDuration = element.duration.match(/(\d+)/g)
    const hasHours = element.duration.indexOf('h') !== -1
    const hasMinutes = element.duration.indexOf('min') !== -1
    if (hasHours) {
      hours = Number(movieDuration[0])
    }
    if (hasHours && hasMinutes) {
      minutes = Number(movieDuration[1])
    } 
    if (!hasHours && hasMinutes) {
      minutes = Number(movieDuration[0])
    } 
    const durationInMinutes = hours * 60 + minutes;
    return {
      title: element.title,
      year: element.year,
      director: element.director,
      duration: durationInMinutes,
      genre: element.genre,
      rate: element.rate,
    }
  })
}

// Get the average of all rates with 2 decimals 
// Create a ratesAverage method that receive an array as a parameter and solve the challenge. The rate must be returned rounded to 2 decimals!
// Maybe you want to "reduce" the data to a single value
function ratesAverage(array) {
  const sum = array.reduce((acc, value) => value.rate !== '' ? acc + parseFloat(value.rate) : acc,0);
  return parseFloat((sum / array.length).toFixed(2));;
}

// Get the average of Drama Movies
// Create a dramaMoviesRate that receive an array as a parameter to get the average rate of all drama movies! Let's see if it is better than the general average.
// Again, rounded to 2 decimals!
function dramaMoviesRate(array) {
  const dramaMovie = array.filter(element => element.genre.includes('Drama'));
  return dramaMovie.length > 0 ? ratesAverage(dramaMovie) : undefined;
}

// Order by time duration, in growing order
// We need to sort the movies in ascending order by their duration. This should be easy using one of the methods we just learn. Create a method orderByDuration that receives an array as parameter and return the sorted array.
// If two movies have the same duration, order them in alphabeticall order by their title!
function orderByDuration(array) {
  const arrayCopy = JSON.parse(JSON.stringify(array));
  return arrayCopy.sort((a, b) => {
    if (a.duration === b.duration) return a.title.localeCompare(b.title);
    if (a.duration > b.duration) return 1;
    if (a.duration < b.duration) return -1;
  });
}

// How many movies did STEVEN SPIELBERG
// Go ahead and create a howManyMovies method that receives an array as a parameter and filter the array so we can have only the drama movies where Steven Spielberg is the director.
function howManyMovies(array) {
  if (array.length === 0) return undefined;
  const bySpielberg = array.filter(element => element.director.includes('Steven Spielberg') && element.genre.includes('Drama'));
  return `Steven Spielberg directed ${bySpielberg.length} drama movies!`;
}

// Order by title and print the first 20 titles
// Another famous way to order the movies is to sort them alphabetically using the title key. But in this case we only need to print the title of the first 20. Easy Peasy for an expert like you 😉
// Create a orderAlphabetically method, that receive an array and return an array of first 20 titles, alphabetically ordered. Return only the title of each movie, and if the array you receive have less than 20 movies, return all of them order
function orderAlphabetically(array) {
  const arrayCopy = JSON.parse(JSON.stringify(array));
  arrayCopy.sort((a, b) => a.title.localeCompare(b.title))
  const moviesTitle = arrayCopy.map(element => element.title)
  const first20 = [];
  for (let i = 0; i < 20; i++) first20.push(moviesTitle[i]);
  return moviesTitle.length < 20 ? moviesTitle : first20;
}

// Best yearly rate average
// Let's complicated a bit this thing. We always listen to classic movies, but we want to know, which year has the best average rate, so we can declare officially the BEST YEAR FOR CINEMA!
// Go ahead and find which year have the best average rate for the movies that were released on that year!
function bestYearAvg(array) {
  if (array.length === 0) return undefined;
  const moviesYears = [];
    array.forEach(element => {
      const year = Number(element.year)
      const rate = parseFloat(element.rate)
      const findYear = moviesYears.find(obj => obj.year === year)
    if (findYear === undefined) {
      moviesYears.push({year, rate});
    } else {
      findYear.rate += rate
      findYear.rate /= 2
      }
  });
  moviesYears.sort((a, b) => {
    if (a.rate === b.rate) return a.year - b.year;
    if (a.rate < b.rate) return 1;
    if (a.rate > b.rate) return -1;
  })
  return `The best year was ${moviesYears[0].year} with an average rate of ${moviesYears[0].rate}`;
}