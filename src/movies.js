const smallArray = [
  {
    title: 'Paths of Glory',
    year: 1957,
    director: 'Stanley Kubrick',
    duration: '1h 28min',
    genre: ['Drama', 'War'],
    score: 8.4
  },
  {
    title: 'Django Unchained',
    year: 2012,
    director: 'Quentin Tarantino',
    duration: '2h 45min',
    genre: ['Drama', 'Western'],
    score: 8.4
  }
];

const moviesArr = require("./data");
let array = JSON.parse(JSON.stringify(smallArray));

// Iteration 1: All directors? - Get the array of all 
// directors.
// _Bonus_: It seems some of the directors had directed 
// multiple movies so they will pop up multiple times 
// in the array of directors.
// How could you "clean" a bit this array and make it 
// unified (without duplicates)?
//----------------------------------------------------

function getAllDirectors(array) {  
  const directorsMap = array.map((obj) => {
    return obj.director; 
  });
  return directorsMap;
}

console.log("Iteration 1: ");
console.log(getAllDirectors(array), '\n');


// Bonus - Iteration 1.1: Clean the array of directors: 
//----------------------------------------------------

// ***************************************************
//
// ????? not yet done.
//
// ***************************************************


// Iteration 2: Steven Spielberg. The best? - 
//How many drama movies did STEVEN SPIELBERG direct?
//----------------------------------------------------

function howManyMovies(array) {
  const dramaSpielberg = array.filter((obj) => {
    return obj.director === "Steven Spielberg" && obj.genre.includes('Drama');
  });
  return dramaSpielberg.length;
}

console.log("Iteration 2:");
console.log(howManyMovies(moviesArr), '\n');


// Iteration 3: All scores average - Get the average 
// of all scores with 2 decimals
//----------------------------------------------------

// ***************************************************
//
// i struggle to understand where is the issue with 
// this one it looks like i've the good answer. 
// the following test keeps on failing : ===>
// "should return average even if one of the movies 
// does not have score"
//
// ***************************************************

function scoresAverage(array) {
  // if no array's given we end the function & return 0.
  if (array.length === 0) {
    return 0;
  }
  // give an empty array to fill in with each scores.
  let anArray = [];
  // calculate array's sum of scores.
  const sumScore = array.reduce((sumOf, obj) => {
    if (typeof obj.score === 'undefined') {        
        sumOf += 0;
    } else if (typeof obj.score !== 'undefined') {
        // use "anArray" as a reference for the 
        // good length in cas of missing score "array".
        anArray.push(obj.score);
        sumOf += obj.score;   
    }
    return sumOf;
  }, 0);
  // calculate Array's average of score rounded 2 
  return Number((sumScore/anArray.length).toFixed(2));
}

console.log("Iteration 3:");
console.log(scoresAverage(array), '\n');

// Iteration 4: Drama movies - Get the average of 
// Drama Movies
//----------------------------------------------------

function dramaMoviesScore(array) {
  const filteredArray = array.filter((obj) => {
    return obj.genre.includes('Drama');
  });
  // use of the Iteration 3 function "scroresAverage".
  return scoresAverage(filteredArray);
}
  
console.log("Iteration 4:");
console.log(dramaMoviesScore(array), '\n');

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//----------------------------------------------------

// ***************************************************
//
// i struggle to understand should return "the element 
// in a single element array".
// and the next one also, it seems i'm good.
//
// ***************************************************

function orderByYear(array) {
  // with JSON working on deep copy of array.
  const toOrderArr = JSON.parse(JSON.stringify(array)).sort((a,b) => {
    if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    } else {
      return (a.year - b.year);
    }  
  });
  return toOrderArr;
} 

console.log("Iteration 5:");
console.log(orderByYear(array), '\n');

// Iteration 6: Alphabetic Order - Order by title and 
// print the first 20 titles
//----------------------------------------------------

// ***************************************************
//
// ***************************************************

function orderAlphabetically(array) {
  // working on a deep copy of array.
  const deepCopy = JSON.parse(JSON.stringify(array));
  // mapping data by title as asked in tests.
  const deepArr = deepCopy.map((obj) => {
    return obj.title;
  })
  // ordering "deepArr" array as final result to return.
  const orderedArr = deepArr.sort();
  // keeping the top 20 after ordering alphabetically. 
  return orderedArr.slice(0, 20);
}

console.log("Iteration 6:");
console.log(orderAlphabetically(array), '\n');

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  // working on a deep copy of array.
  const deepCopy = JSON.parse(JSON.stringify(array));
  const timeFormat = deepCopy.map((obj) => {
    if (obj.duration.includes('min')) {
      myVar = obj.duration.split(" ");
      hours = Number(myVar[0].replace('h',''));
      minutes = Number(myVar[1].replace('min', ''));
      timeConversion = (hours*60) + minutes;
    } else {
      myVar = obj.duration.split(" ");
      hours = Number(myVar[0].replace('h',''));
      timeConversion = (hours*60);
    }
    // making changes into data base for new duration format.
    obj.duration = timeConversion;
  });
  // returning new array modified.
  return deepCopy;
}

console.log("Iteration 7:");
console.log(turnHoursToMinutes(array), '\n');

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(array) {
  const bestYear = orderByYear(array);
  // console.log(bestYear);
  return console.log("The best year was ", "<YEAR>", " with an average score of ", "<RATE>");
}

console.log("Iteration 8:");
console.log(bestYearAvg(array), '\n');




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
