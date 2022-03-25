//const movies = require("./data");

//const movies = require("./data");

// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors. //map
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.//filter
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let DirectorsName = movies.map(Names=>Names.director)
  return DirectorsName;
  }
   console.log(getAllDirectors(movies));
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
 let spielbergMovies = movies.filter(spielberg=>(spielberg.director==='Steven Spielberg')&&(spielberg.genre.indexOf('Drama')>=0));
 return spielbergMovies.length;

}
console.log(`Spielberg directed ${howManyMovies(movies)} drama movies`);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  let sumScore = movies.reduce((acc, scores)=> scores.score + acc, 0)
  let averageScore = (sumScore / movies.length).toFixed(2)
  return averageScore;
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
 
  let dramaMovies = movies.filter(drama=>(drama.genre.indexOf('Drama')>=0));
  let allDramaScore = dramaMovies.map(Dscores=>Dscores.score)
  
  let sumDramaScore = allDramaScore.reduce((acc, scores)=> scores + acc, 0)
  let averageScore = (sumDramaScore / allDramaScore.length).toFixed(2);
  return averageScore;

  //---------MI DREBRAYE ANTERIOR JAJA -----//
 /*let dramaMovies = movies.filter(drama=>(drama.genre.indexOf('Drama')>=0));
   let allDramaScore=[]
   dramaMovies.forEach(DM => allDramaScore.push(DM) )
   console.log(allDramaScore);
   let sumDramaScore = allDramaScore.reduce((acc, scores)=> scores.score + acc, 0)
   let averageScore = sumDramaScore / allDramaScore.length
   return averageScore.toFixed(2);*/
}

console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
   let newMovies = [...movies];
   let yearMovies = newMovies.sort((firstYear, lastYear)=>firstYear.year - lastYear.year);
   return yearMovies;
}
 console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let newMoviesArray=[...movies];
  let twentyMovies = [];
   for(let i = 0; i<20; i++){
     twentyMovies.push(newMoviesArray[i]);
   }
   
   let alphabetMovies = twentyMovies.sort((a, b) => a.title.localeCompare(b.title))
   return alphabetMovies;
}
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



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
