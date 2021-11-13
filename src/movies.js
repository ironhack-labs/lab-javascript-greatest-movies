// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  /*let directors = [];
  
  for (let i = 0; i < movies.length; i++){
    let acumulador = movies.length[i];
    directors.push(acumulador);
  }
  return directors; */

  /*let directors = movies.map(function(movie){
    return movie.director;
  });  
  return directors;*/

  return movies.map(function (movie) {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  /*let containDramaSpielberg = 0;
  let dramaSpielberg = movies.filter((movie) => {
    if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
      containDramaSpielberg++;
    }
  });
  return containDramaSpielberg;*/
  /*return movies.filter(function(movie) {
    if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
      return true;
    }
    else {
      return false;
    }
  }).length;*/
  const stevenDramaMovies = movies.filter((movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return stevenDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length === 0){
    return 0;
  }
  else {
    const totalScore = movies.reduce((acumulador, movie) => {
      if(movie.score){
        acumulador += movie.score;
      }
      
      return acumulador;
    }, 0)
  
    const average = totalScore / movies.length;
    return Math.round((average + Number.EPSILON) *100) / 100; //Math.round y demás para redondear a 2 decimales average.
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(movie => {
    return movie.genre.includes('Drama')
  })
  return scoresAverage(dramaMovies)
}
  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  /*const ordenYearMovies = arrYear.sort((arrYear1, arrYear2) => {
    return arrYear1 - arrYear2;
  });
  return ordenYearMovies;*/

  const moviesCopy = movies.map(movie => movie);
  const ordenYearMovies = moviesCopy.sort((movie1, movie2) => {
    if(movie1.year === movie2.year){
      if (movie1.year > movie2.year){
        return 1;
      }
      else{
        return -1;
      }
    }
    else {
      return movie1.year - movie2.year;
    } 
  });
  return ordenYearMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const titleCopy = movies.map(movies => movies.title);
  const alphabeticOrder = titleCopy.sort((title1, title2) => {
      if (title1 > title2){
        return 1;
      } else if(title1<title2) {
        return -1
      }
      else{
        return 0;
      }
  });
  return alphabeticOrder.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

/*
cont myArray = [2, 5, 9, 14, 1];
const oddNumber = myArray.filter((number) => number % 2);
console.log(oldNumber); ==> [5, 9 ,1]
*/

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
