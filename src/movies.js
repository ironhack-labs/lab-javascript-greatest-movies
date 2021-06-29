// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr){
 const directorsName = arr.map(eachMovie => {
    return eachMovie.director;
  });
  return directorsName;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
 function howManyMovies(arr) {
  // const arrOfObj = [];
  // let countOfGenre = 0;

  // const directorS = arr.filter(eachMovie =>{
  //   if(eachMovie.director === 'Steven Spielberg'){
  //     arrOfObj.push()
  //   }
  // });

  // const genreCount = arrOfObj.filter(eachGenre => 
  //   {
  //     if(eachGenre.genre.includes('Drama')){
  //       return countOfGenre = countOfGenre + 1;
  //     }
  //   })  
  //   return countOfGenre;

  // const spilberDramas = arr.filter(movie => {
  //   return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  // })

  const spilberDramas = arr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))

  return spilberDramas.length;



  // return arr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;


 }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(arr){

  if(arr.length === 0)
  {
    return 0;
  }

  const sumScore = arr.filter((arr) => arr.score > 0).reduce((accumulator, currentValue) => {
      let sum = accumulator + currentValue.score;
      return sum;
    }, 0);
    let avgScore = (sumScore / arr.length).toFixed(2);
    return parseFloat(avgScore);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {

  if(arr.length === 0){
    return 0;
  }

  const dramaMovies = arr.filter(movie => {
    return movie.score !== undefined;
  }).filter((movie) => {
    return movie.genre.includes("Drama");
  });

  if(dramaMovies.length === 0){
    return 0;
  }

  const averageDrama = dramaMovies.reduce((acc, movie)=> {
    return acc + movie.score;
  }, 0)

  return Math.round(100 * (averageDrama/dramaMovies.length))/100

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

  return moviesArray.map(movie => movie).sort((a, b) => {
    if(a.year < b.year){
      return -1;
    }else if (a.year > b.year){
      return 1;
    }else if (a.title < b.title ){
      return -1;
    }else if (a.title > b.title){
      return 1;
    } else {
      return 0;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray.map(movie => movie.title).sort((a, b) => {
    if (a < b){
      return -1;
    }else if (a > b){
      return 1;
    } else {
      return 0;
    }
  }).filter((title, i) => i < 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

  const arrOfTime =  moviesArray.map(movie => movie.duration).filter(movie => movie.split("h"))
  

  return arrOfTime;
}

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
