const movies = require("./data.js");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const testArr = [
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
]

function getAllDirectors(array) {
  let allDirectors = array.map((e) => e.director);
  console.log("All directors: ", allDirectors);
  return allDirectors;
}

function uniqueDirectors(array) {
  let uniqueArray = array.filter((element, index) => array.indexOf(element) === index);
  console.log("Uniquearray and length: ", uniqueArray, uniqueArray.length);
  return uniqueArray;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  let spielbergMovies = array.filter((e)=> e.director === "Steven Spielberg" && e.genre.includes("Drama"));
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
    if (array.length === 0) {
      return 0;
    }
    let sumOfRatings = array.reduce((acc, curr) => {
      if (curr.score) {
        return acc + curr.score;
      } else {
        return acc;
      }
    }, 0);
    let averageRating = sumOfRatings / array.length;
    return Math.round(averageRating *100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  let dramaMovies = getDramaMovies(array);
  let averageDramaMovies = scoresAverage(dramaMovies);
  console.log("Avg drama movies: ", averageDramaMovies);
  return averageDramaMovies;

}

function getDramaMovies(array) {
  let dramaMovies = array.filter((e) => e.genre.includes("Drama"));
  console.log("Drama movies: ", dramaMovies);
  return dramaMovies;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  if (array.length === 0) {
    return null;
  }
  let orderedByYear = array.sort((a, b) => {
    if ((a.year - b.year) === 0) {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      } 
    } else {
      return a.year - b.year;
    }
  });
  return orderedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let titles = array.map((e) => e.title);
  let sortedTitles = titles.sort();
  let firstTwentySorted = sortedTitles.slice(0, 20);
  return firstTwentySorted;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  if (array.length === 0) {
    return null;
  }
  let converted = array.map((e) => {
    let changedMovie = JSON.parse(JSON.stringify(e));
    changedMovie.duration = getDuration(changedMovie.duration);
    return changedMovie;
  });
  return converted;
}

function getDuration(string) {
  let minutesString;
  let hoursString;
  if (string.length === 0) {
    return null;
  }
  if (string.indexOf("h") === -1) {
    hoursString = "0";
  } else {
    hoursString = string.slice(0, string.indexOf("h"));
  }
  if (string.indexOf("min") === -1) {
    minutesString = "0";
  } else {
    minutesString = string.slice(string.indexOf(" ") + 1, string.indexOf("min"));
  }
  let hours = Number(hoursString);
  let minutes = Number(minutesString);
  let duration = hours*60 + minutes;
  return duration;
}

// console.log(turnHoursToMinutes(movies));

// const movieTry = [{ duration: '0h 31min' }];
// const movieTry2 = [{ duration: '5h 41min' }]
// const movieTry3 = [{ duration: '2h' }];

// console.log(`
  
//     ${typeof turnHoursToMinutes(movies)[0].duration} \n
//     ${turnHoursToMinutes(movieTry)[0].duration} \n
//     ${turnHoursToMinutes(movieTry2)[0].duration} \n
//     ${turnHoursToMinutes(movieTry3)[0].duration} \n
// `);

// ${turnHoursToMinutes(movies) instanceof Array}\n
 

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(array) {
  if (array.length === 0) {
    return null;
  }
  let bestAverage = 0;
  let message = "";
  let scoresInEachYear = getScoresInEachYear(array);
  let avgInEachYear = getAverageInEachYear(scoresInEachYear);
  console.log(avgInEachYear);
  for (let key in avgInEachYear) {
    if (avgInEachYear[key] > bestAverage) {
      bestAverage = avgInEachYear[key];
    
    message = `The best year was ${key} with an average score of ${bestAverage}`;
    }
  }
  console.log(message)
  return message;
}

function getScoresInEachYear(array) {
  let scoresInEachYear = {};
  array.forEach((e)=>{
    if (!scoresInEachYear[`${e.year}`]) {
      scoresInEachYear[`${e.year}`] = [e.score];
    } else {
      scoresInEachYear[`${e.year}`].push(e.score);
    }
  });
  console.log("Object: ", scoresInEachYear);
  return scoresInEachYear;
}

function getAverageInEachYear(scoresInEachYear) {
  let avgInEachYear = {};
  let sumOfScores;
  let average;
  for (let key in scoresInEachYear) {
    sumOfScores = scoresInEachYear[key].reduce((acc, curr)=> acc + curr);
    average = sumOfScores / scoresInEachYear[key].length;
    avgInEachYear[`${key}`] = average;
  }
  console.log("AvgObject: ", avgInEachYear);
  return avgInEachYear;
}

bestYearAvg(movies);

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
