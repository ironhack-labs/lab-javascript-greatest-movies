// Tomasz Walasek
// November 2019

/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
// Create a function orderByYear() that receives an array as parameter and returns a sorted array.
// If two movies have the same year, order them in alphabetical order by their title!
// Make sure not to mutate the original array 

//orderByYear(movies).forEach (elem => console.log(elem.year + " " + elem.title));

function orderByYear(array) {
  let myArray = JSON.parse(JSON.stringify(array));
  return myArray.sort(function(a,b) {
    // Check the order of year
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    // Years are equal. Check oder of title
    if (a.title > b.title) return 1;    
    if (a.title < b.title) return -1;
    return 0;    
  });
} 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
// Create a howManyMovies() function that receives an array as a parameter and filter the array 
// so we can have only the drama movies where Steven Spielberg is the director.

//console.log("Found " + howManyMovies(movies) + " Steven Spielberg");

function howManyMovies(array) {
  return array.reduce(function(prevVal, elem) {
    if (elem.director === "Steven Spielberg" && elem.genre.indexOf("Drama") >= 0) return prevVal + 1;
    return prevVal;
  }, 0);
} 

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
// Create an orderAlphabetically() function, that receives an array and returns an array 
// of first 20 titles, alphabetically ordered. Return only the title of each movie, 
// and if the array you receive has less than 20 movies, return all of them.

//console.log(orderAlphabetically(movies));

function orderAlphabetically(array) {
  // step1: create an array of strings (title of each movie)
  // step2: order them alphabetically
  // step3: return the first 20 movies (max)

  let myArray = array.map(function(elem) {
    return elem.title}); 
  myArray.sort();
  return myArray.filter(function(elem, index) {
    return index < 20;
  });
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
// In this iteration, we want to know the average rate of all movies and display it on the console. 
// Create a ratesAverage() function that receives an array as a parameter and solves the challenge.
// The rate must be returned rounded to 2 decimals!

//console.log("The average rate of all movies is: " + ratesAverage(movies));

function ratesAverage(array) {
  let ratesSum = array.reduce(function(prevVal, elem) {
    if (typeof(elem.rate) === "undefined") return prevVal;
    return prevVal + elem.rate;
  }, 0);
  if (array.length > 0) 
    return Math.round(100*(ratesSum / array.length)) / 100;
    //alternatively: return Number((ratesSum / array.length).toFixed(2));
  return 0;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
// Create a dramaMoviesRate() function that receives an array as a parameter 
// to get the average rate of all drama movies. Let's see if it is better than the general average.
// Again, rounded to 2 decimals!

//console.log("The average rate of drama movies is: " + dramaMoviesRate(movies));

function dramaMoviesRate(array) {
  let ratesSum = array.reduce(function(prevVal, elem) {
    if (typeof(elem.rate) === "undefined" || elem.genre.indexOf("Drama") < 0) return prevVal;
    return prevVal + elem.rate;
  }, 0);
  let count = array.reduce(function(prevVal, elem) {
    if (typeof(elem.rate) === "undefined" || elem.genre.indexOf("Drama") < 0) return prevVal;
    return prevVal + 1;
  }, 0);
  if (count > 0) 
    return Math.round(100*(ratesSum / count)) / 100;
    //alternatively: return Number((ratesSum / count).toFixed(2));
  return 0;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
// Create a turnHoursToMinutes() function that receives an array as parameter 
// and replaces the duration info of each of the movies for its equivalent in minutes.
// Keep in mind, you have to return a new array with all the info about movies, 
// meaning, you shouldn't modify the original array

//turnHoursToMinutes(movies).forEach (elem => console.log(elem.title + " " + elem.duration + " minutes"));

function turnHoursToMinutes(array) {
  let myArray = JSON.parse(JSON.stringify(array));
  myArray.forEach(function(elem) {
    elem.duration = minutes(elem.duration);
  });
  return myArray; 
}

function minutes(str) {
  let h = "0", m = "0";
  if (str.indexOf("h") >= 0) h = str.substring(0, str.indexOf("h"));
  if (str.indexOf("m") >= 0) m = str.substring(str.indexOf("h") + 1, str.indexOf("m"));
  return 60 * Number(h) + Number(m);
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
// Find which year have the best average rate for the movies that were released on that year! 
// Create bestYearAvg() function that receives an array of movies and gives us an answer which 
// year was the best year for cinema and what was its average rate.

console.log(bestYearAvg(movies));

function bestYearAvg(array) {

  if (typeof array === "undefined" || !Array.isArray(array) || array.length === 0) return null;
  if (array.length === 1) 
    return `The best year was ${array[0].year} with an average rate of ${array[0].rate}`;

  // step1: create an array of unique numbers (years)
  let years = array.map(function(elem) {
    return elem.year}); 
  let uniqueYears = years.filter(function (value, index, array) {
    firstOccurence = array.indexOf(value);
    return index === firstOccurence;
  });

  // step2: create an array of (year, rateAvg) pairs for those years
  let yearAverage = uniqueYears.map(function(elem) {
    return {year:elem, avgRate:yearRate(array, elem)};
  });

  //step3: sort in place
  yearAverage.sort(function(a,b){
    //descending by rate
    if (Number(a.avgRate) < Number(b.avgRate)) return 1;
    if (Number(a.avgRate) > Number(b.avgRate)) return -1;
    //ascending by year
    if (Number(a.year) > Number(b.year)) return 1;
    if (Number(a.year) < Number(b.year)) return -1;
    return 0;    
  });  

  //yearAverage.forEach(el => console.log(el.year + " " + el.avgRate));
  
  // step4: return the (year, rateAvg) pair with the largest rateAvg
  return `The best year was ${yearAverage[0].year} with an average rate of ${yearAverage[0].avgRate}`;
}

// Calculate rate average for a given year
function yearRate(array, year) {
  let ratesSum = array.reduce(function(prevVal, elem) {
    if (elem.year === year) {
      if (typeof(elem.rate) === "undefined") return prevVal;
      return prevVal + elem.rate;
    }
    return prevVal;
  }, 0);
  let count = array.reduce(function(prevVal, elem) {
    if (elem.year === year) {
      if (typeof(elem.rate) === "undefined") return prevVal;
      return prevVal + 1;
    }
    return prevVal;
  }, 0);
  if (count > 0) 
    //return Math.round(100*(ratesSum / count)) / 100;
    return Number((ratesSum / count).toFixed(2));
  return 0;
}
