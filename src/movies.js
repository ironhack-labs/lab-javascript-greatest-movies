// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {

  const directorsArr = moviesArr.map(directorName=> directorName.director)
  return directorsArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {

  const spielbergDramaMovies = moviesArr.filter(movie =>{
    return (movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') !== -1 ) 
  })
  return spielbergDramaMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {

  if(!moviesArr.length) return 0 ;
  else{
    const sumScores = moviesArr.reduce((a,b)=>{
      if(!b.score){
        b.score = 0;
        return a + b.score ;
      }else{
        return a + b.score ;
      }
    },0)
    const avgOfScores = sumScores/moviesArr.length;
    return Number(avgOfScores.toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  
    let dramaMovies = moviesArr.filter(drama => drama.genre.indexOf('Drama') !== -1);
    if(!dramaMovies.length) return 0;
    else{
      let sumDramaScores = dramaMovies.reduce((a,b) => a + b.score ,0);
      let avgDramaScores = sumDramaScores / dramaMovies.length;
  
      return Number(avgDramaScores.toFixed(2))
    }
    
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  const sortMoviesByYear = [...moviesArr];
  
  sortMoviesByYear.sort((a,b)=>{
    if(a.year - b.year == 0) return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    else return a.year - b.year;
  });
  return sortMoviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {

  const sortedMoviesArr = [...moviesArr];

  sortedMoviesArr.sort((a,b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
  const titleArr = sortedMoviesArr.map( movie => movie.title );
  
  if(titleArr.length <= 20) return titleArr;
  else {
    const sortedMovieTitle = [];
    for (let i = 0; i < 20 ; i++) {
      sortedMovieTitle.push(titleArr[i]);  
    }
    return sortedMovieTitle;
  }

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
  
  const changeDurToMin = moviesArr.map(movie => {
    if(movie.duration.indexOf('min') !== -1) {
      if(Number(movie.duration[4])){
        movie.duration = Number(movie.duration[0])*60 + Number(movie.duration[3]+movie.duration[4])
      }
      else {
        movie.duration = Number(movie.duration[0])*60 + Number(movie.duration[3])

      }
    } else if(movie.duration.indexOf('min') == -1){
      movie.duration = Number(movie.duration[0])*60;
      
    }
    return movie;
  })
    
  return changeDurToMin;

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
