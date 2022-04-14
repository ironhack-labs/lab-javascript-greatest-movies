[FTLIS042022] matildeCosta


// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);
const movies = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

/* We need to get the array of all directors. 
Since this is a warm up, we will give you a hint: you have to map through the array of movies and get all the directors into one array as a final result. 
Go ahead and create a function named getAllDirectors() 
that receives an array of movies as an argument and returns a new (mapped array). */

function getAllDirectors(array) {
  const directors = array.map((element) => element.director);
  return directors;
}

/* Bonus - Iteration 1.1: Clean the array of directors
It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. 
How could you "clean" a bit this array and make it unified (meaning, without duplicates)? */

const directors = getAllDirectors(movies);
let unifiedDirectors = directors.filter(
  (element, index) => directors.indexOf(element) === index
);

//console.log(unifiedDirectors);
/* getAllDirectors(movies).filter(element) => const soloProjects = 
let wordsArray= [];
  array.forEach (function (element, index){
    if (!wordsArray.includes(element)) {
      wordsArray.push(element);
    }
  })
  return wordsArray;
}
console.log() 
 wordsArray.forEach (function (element){
    if (!wordsArray.includes(element)) {
      wordsArray.push(element);
    }
    return wordsArray;
  }) */

/* It seems some of the directors had directed multiple movies so they will pop up multiple times in the 
array of directors. How could you "clean" a bit this array and make it unified (meaning, without duplicates)?
 Don't prioritize the bonus part now, you can come back to it when you are done with the mandatory iterations. 😉 */

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
/* Go ahead and create a howManyMovies() function that receives an array as a parameter and filter 👀 
the array so we can have only the drama movies where Steven Spielberg is the director. */

function howManyMovies(array) {
  const directorMovies = array.filter(
    (element) => element.director === 'Steven Spielberg'
  );
  const dramaMovies = directorMovies.filter((element) =>
    element.genre.includes('Drama')
  );

  return dramaMovies.length;
}

//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
/* These are the best movies based on their scores, so supposedly all of them have a remarkable score. 
In this iteration, we want to know the average score of all of them and display it on the console. 
Create a scoresAverage() function that receives an array as a parameter and solves the challenge.

The score must be returned rounded to 2 decimals!

💡 Maybe you want to "reduce" the data to a single value. 😉 */

function scoresAverage(array) {
  //const rating = array.map((element) => element.score );
  if (array.length === 0) {
    return 0;
  }
  const sum = array.reduce(function (accumulator, value) {
    let condition;
    if (value.score) {
      condition = value.score;
    } else {
      condition = 0;
    }
    return accumulator + condition;
  }, 0);
  const avgCalc = sum / array.length;
  const avg = Number(avgCalc.toFixed(2));

  return avg;
}
//console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
/* Drama is the genre that repeats the most on our array. Apparently, people love drama! 👀

Create a dramaMoviesScore() function that receives an array as a parameter to get the average score of all drama movies! 
Let's see if it is better than the general average.

Again, rounded to 2 decimals! */

function dramaMoviesScore(array) {
  const dramaMovies = array.filter((element) =>
    element.genre.includes('Drama')
  );
  const result = scoresAverage(dramaMovies);
  return result;
}

//console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
/* We need to sort the movies in ascending order by their release year. This should be easy using one of the methods we have just learned. 😉 
Create a function orderByYear() that receives an array as parameter and returns a new sorted array. 
If two movies have the same year, order them in alphabetical order by their title! ✔️

💡 Make sure not to mutate the original array 😉*/

function orderByYear(array) {
  const sortingByYear = [...array].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });

  return sortingByYear;
}

//console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
/* Another popular way to order the movies is to sort them alphabetically using the title key. 
However, in this case, we only need to print the title of the first 20. Easy peasy for an expert like you. 😉

Create a orderAlphabetically() function, that receives an array and returns an array of first 20 titles, alphabetically ordered. 
Return only the title of each movie, and if the array you receive has less than 20 movies, return all of them. */

function orderAlphabetically(array) {
  const title = array.map((element) => element.title);
  const titles = title.sort((a, b) => a.localeCompare(b));
  if (titles.length < 20) {
    return titles.slice(0, 20);
  } else if (titles.length > 20) {
    return titles.slice(0, 20);
  }
}

//console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
/* We get the info from the IMDB web page, but the duration info was saved in a format that difficult us a lot to compare movies.

Finding the longest movie is almost impossible using that format, so let's change it!

Create a turnHoursToMinutes() function that receives an array as parameter, and with some magic implemented by you - 
replaces the duration info of each of the movies for its equivalent in minutes. For example: */

function turnHoursToMinutes(array) {
  const duration = array.map((element) => element.duration);
  //return duration;
  //const durationHours= duration.forEach((element) => element.replace(/h/, ''))
  /*   let durationNumbers = duration.forEach((element) => 
  {if (element.includes("numbers")) {
    durationNumbers.push()
  }
}
    ) */
  /* const sum = duration.reduce(function (accumulator, value) {
    return accumulator + value;
  }, 0);
  return sum */
  //return durationHours
}
//console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
/* We always hear so much about classic movies, but we want to know which year has the best average score, 
so we can declare the BEST YEAR FOR CINEMA officially!

Go ahead and find which year have the best average score for the movies that were released on that year! 
Create bestYearAvg() function that receives an array of movies and gives us an answer which year was the best year 
for cinema 
and what was its average score. The bestYearAvg() should return a string with the following structure:

The best year was <YEAR> with an average score of <RATE> */

function bestYearAvg(array) {
  if (array.length === 0) {
    return null;
  }
  const sortedScores = array.sort((a, b) => a.score - b.score);
  const bestYears = sortedScores.sort((a, b) => {
    if (array.year === b.year) {
      return a.score > b.score;
    }
  })
  const bestYear= bestYears.slice(0, 1);
  if (array.year === bestYear.year) {
    return array.score.reduce((acc,element){})
  };

  return bestYear;
}

console.log(bestYearAvg(movies));

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
    bestYearAvg
  };
}

