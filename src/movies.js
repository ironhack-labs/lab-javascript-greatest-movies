// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors (array){
  const directors = array.map((movie) => {
    return movie.director
  })
  return directors
}
function filterDirectors(item){
  const directors= getAllDirectors(item);
  const filteredDirectors=[];
  directors.forEach((director)=>{
    if( !filteredDirectors.includes(director)){
      filteredDirectors.push(director)
    }
  })
  return filteredDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(countMovies) {
  const dramaMoviesDirectedByStevenSpilberg=countMovies.filter((movie) =>{
    return movie.director ==="Steven Spielberg" && movie.genre.includes("Drama");
    const movieDirectedByStevenSpielberg=movie.director==="Steven Spielberg";
    const movieDirectedByStevenDrama=movie.genre.includes("Drama");
    const isMovieDrama=movie.genre.includes("Drama")>=0;
    if(movieDirectedByStevenSpielberg&&isMovieDrama){
      return true;
    }else{
      return false;
    }
    return movieDirectedByStevenSpielberg && isMovieDrama;
  });
  return dramaMoviesDirectedByStevenSpilberg.length;
}
  

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length===0){
    return 0;
  }

const sumScores=movies.reduce((accumulator, movie)=>{
if(movie.score){
return accumulator + movie.score;
}else {
  return accumulator;
}
}, 0);

const averageScore = sumScores / movies.length;
return +(Math.round(averageScore + "e+2")  + "e-2");
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaMovies=arr.includes("Drama");

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

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
