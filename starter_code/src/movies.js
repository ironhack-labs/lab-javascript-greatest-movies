/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


//makeTimeFromString will return time converted to minutes. It accepts string as an argument.


function makeTimeFromString(str) {

  var hours = 0; //it will be retruned
  var min = 0 // it will be returnd


  /* test reported error. I think some of duration values in original arry of objects were not strings. 
   Because of that I converted function argument to string first*/

  var timeArr = str.toString().split(""); //we have now array from string char. 


  // if array contains letters h and m => string has hours and minutes in any other case pass through else-if else blocks.
  if (timeArr.indexOf("h") !== -1 && timeArr.indexOf("m") !== -1) {
    var time = str.split(" ");
    hours = parseInt(time[0], 10);
    min = parseInt(time[1], 10);
  } else if (timeArr.indexOf("h") !== -1) {
    hours = parseInt(str, 10);
  } else {
    min = parseInt(str, 10);
  }

  return hours * 60 + min; //returns number

}

//this function will use result of makeTimeFromString function

var turnHoursToMinutes = function (arr) {

  var result = [];

  //I used this approach with aim to keep original array unmodified.
  arr.forEach(movie => result.push({
    title: movie.title,
    year: movie.year,
    director: movie.director,
    duration: makeTimeFromString(movie.duration),
    genre: movie.genre,
    rate: movie.rate
  }));

  return result; // this array contains same elements as original array but wiht duration convertied to minutes and type of value is number.
}
console.log(turnHoursToMinutes(movies));


// Get the average of all rates with 2 decimals 


var ratesAverage = function (arr) {

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const result = arr.map(element => Number(element.rate));
  return Number((result.reduce(reducer) / result.length).toFixed(2)); //I used reduce method to find sum of all rates.

}
console.log(ratesAverage(movies));



// Get the average of Drama Movies


var dramaMoviesRate = function (arr) {
  const result = arr.filter(element => element.genre.some(item => item == "Drama")); //some returns true if condition inside it is true.
  if (result.length == 0) {
    return undefined;
  }
  return ratesAverage(result); //I used already defined function to complete this task.
}
console.log(dramaMoviesRate(movies));



// Order by time duration, in growing order

var orderByDuration = function (arr) {

  if (arr.length == 0) {
    return undefined;
  }

  if (arr.length == 1) {
    return arr;
  }

  var moviesWithMinutes = turnHoursToMinutes(arr); // first I need to transfer time to number of minutes. Then I weill be able to manipulate with data.
  //turnHoursToMinutes is defined above.


  /*I got result but in Jasmin I have 2 errors regarding this task.*/

  const sortedArr = moviesWithMinutes.sort((a, b) => {
    if ((a.duration - b.duration) == 0) {
      return a.title.localeCompare(b.title);
    } else {
      return a.duration - b.duration;
    }
  });
  return sortedArr;
}
console.log(orderByDuration(movies));


// How many movies did STEVEN SPIELBERG
var howManyMovies = function (arr) {

  //in the case of empty array we need to retrun undefined.
  if (arr.length == 0) {
    return undefined;
  }
  const spielbergArr = arr.filter(item => item.director == 'Steven Spielberg');

  if (spielbergArr.length == 0) {
    return `Steven Spielberg directed 0 drama movies!`;
  } else {
    const spielbergDrama = spielbergArr.filter(item => item.genre.some(item => item == "Drama")); // I use const as an entry to if else statement below. "some"
    //  method returns true if any of elements contains "Drama" genre
    if (spielbergDrama.length == 0) {
      return `Steven Spielberg directed 0 drama movies!`;
    } else {
      return `Steven Spielberg directed ${spielbergDrama.length} drama movies!`;
    }
  }
}
console.log(howManyMovies(movies));

// Order by title and print the first 20 titles

var orderAlphabetically = function (arr) {

  var twentyTitles = [];
  const sortedArr = arr.sort((a, b) => a.title.localeCompare(b.title));
  var twentyMovies = sortedArr.slice(0, 20); //array of objects.

  twentyMovies.forEach(movie => twentyTitles.push(movie.title)); // we need to return array of strings.

  return twentyTitles;
}
console.log(orderAlphabetically(movies));


//---------------BONUS----------------//
// Best yearly rate average

var bestYearAvg = function (arr) {

  if (arr.length == 0) { //test specification (MovieSpec.js), return undefined if function argument is empty array
    return undefined;
  }

  if (arr.length == 1) {
    return `The best year was ${arr[0].year} with an average rate of ${arr[0].rate}`; //When we have not more than one element in array, we can not compare it 
    //so we return only that one element.
  }

  var result = [];

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const yearRate = arr.map(item => item.year); //it will make array "yearRate" which will contain value of year property from objects in arr. 
  //Duplicate years exist in yearRate array.

  var uniqYears = removeDuplicates(yearRate); //call function removeDuplicate to remove duplicate years form "yearRate" array

  for (var i = 0; i < uniqYears.length; i++) { //this will take every year in consideration
    const moviesPerYear = arr.filter(item => item.year == uniqYears[i]); //put in moviesPerYear every object from original arrray which has year property equal 
    // to proper element form uniqYears
    var averageRate = moviesPerYear.map(movie => Number(movie.rate)); // it will contain only rate of movies for certain year. 
    //  I used Number() to convert string to number


    //I am creating object which will contain 3 properties. I created object to link easier year with averageRate of year. 
    const object = {
      rateAverage: averageRate.reduce(reducer) / averageRate.length,
      year: uniqYears[i],
      movies: moviesPerYear.map(movie => movie.title) // this property is created just for better visualisation of work. 
    }
    result.push(object); // put every object in result array 

  }

  const theBestYear = result.sort((a, b) => b.rateAverage - a.rateAverage); // I will sort the array in the way that first element is the year with best rate


  //if-else statement checks first if to years have the same averageRate. If yes return older one.
  if (theBestYear[0].rateAverage == theBestYear[1].rateAverage) {
    var theBestAvrRateYear = Math.min(parseInt(theBestYear[0].year), parseInt(theBestYear[1].year)); //With min i am searching for older year.
    return `The best year was ${theBestAvrRateYear} with an average rate of ${theBestYear[0].rateAverage}`;
  } else {
    return `The best year was ${theBestYear[0].year} with an average rate of ${theBestYear[0].rateAverage}`;
  }


}

function removeDuplicates(arr) { //I use this function to remove duplicate years in "yearRate" array.
  var unique_array = []
  for (var i = 0; i < arr.length; i++) {
    if (unique_array.indexOf(arr[i]) == -1) {
      unique_array.push(arr[i])
    }
  }
  return unique_array;
}


console.log(bestYearAvg(movies));