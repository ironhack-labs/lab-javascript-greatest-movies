// The `movies` array from the file `src/data.js`.
const movies = require('./data');
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(inputArray) {
  const directors = inputArray.map(eachMovie => eachMovie['director']);
  const filteredDirectors = Array.from(new Set(directors));
  return filteredDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many DRAMA movies did STEVEN SPIELBERG direct?
//expects an array (the movies array)
//returns a number of movies [ directed by Steven Spielberg && genre Drama]
function howManyMovies(inputArray) {
  const directedMovies = inputArray.filter(
    eachMovie => eachMovie['director'] === "Steven Spielberg" && eachMovie['genre'].includes("Drama"));  
  return directedMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// expects array of movies
// returns avg score of all movies
function scoresAverage(inputArray) {
  return arguments[0].length != 0 ? Number((inputArray.reduce((scoreAll,movie) => scoreAll + ( movie.score = movie.score || 0 ), 0)/inputArray.length).toFixed(2)) : 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
// expects: inputArray of Movies
// Returns: avg score (int), to 2 decimals
function dramaMoviesScore(inputArray) {
  return scoresAverage(inputArray.filter(movie => movie['genre'].includes("Drama")));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//expects: movies array
//returns: new sorted array of movies, by year
function orderByYear(inputArray) {
  const orderedMovies = [...inputArray];
  const returnArray = orderedMovies.sort(function (a,b){ 
    if( a.year < b.year){
      return -1;
    }else if( a.year > b.year ){
      return 1;
    }else if ( a.year == b.year) {
      if(a.title > b.title){
        return 1;
      }else if(a.title < b.title ){
        return -1;
      }else{
        return 0;
      }
    }
  });
  return returnArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// recieves: Array of movies
// return: 20 ORDERED movies || ALL Movies if < 20
function orderAlphabetically(inputArray) { 
  const titles = inputArray.map(movie => movie.title);
  const alphabetical = titles.sort();
  ( alphabetical.length > 20 ? alphabetical.splice(20) : alphabetical )
  return alphabetical;
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


// 'Time Stamp Conversion'function
// expects: 'duration' in #h ##m || #h format
// returns: total in minutes, (H * 60) + M
function timeStampConversion(timeStamp){
  return ( (Number(timeStamp.split("h")[0])*60) + Number(timeStamp.split("h")[1].split("m")[0]) );
}

//expects: Array of movies (inc. 'duration')
//returns: Array of movies, duration in minutes
function turnHoursToMinutes(inputArray) {
    // const fixTime = [...inputArray];
    // const fixTime = inputArray.map((movie) => { return movie; });
    const fixTime = JSON.parse(JSON.stringify(inputArray));    
    fixTime.forEach((movie,index) => fixTime[index]['duration'] = timeStampConversion(movie.duration));
  return (fixTime)
} 

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(inputArray) {
  let years = [];
  let scores = [];  
  let scoreMax = [];

  orderByYear(inputArray).forEach((movie) => !years.includes(movie.year) ? years.push(Number(movie.year)) : 0);  

  years.forEach((year) => {
    scores[year] = Number(scoresAverage(inputArray.filter(movie => movie['year'] == year )));
    scoreMax.push(scores[year]);
  });

  let yearIndex = scoreMax.indexOf(Math.max(...scoreMax));
  let maximumScore =  Math.max(...scoreMax);
  if(!scoreMax.indexOf(maximumScore) == scoreMax.lastIndexOf(maximumScore)){
    yearIndex = scoreMax.indexOf(maximumScore);
  }
  // ( scoreMax.indexOf(maximumScore) !== scoreMax.lastIndexOf(maximumScore) ? (yearIndex = scoreMax.indexOf(maximumScore)) : scoreMax)
  return arguments[0].length != 0 ? ("The best year was "+years[yearIndex]+" with an average score of "+maximumScore) : null;
}

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
