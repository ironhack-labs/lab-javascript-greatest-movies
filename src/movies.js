// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesPara) {
  if( !moviesPara.length ) return;
  let directors = moviesPara.map ((eachMovie) => {
    return eachMovie.director
  })
  return directors;
}

//console.log (getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(stevenMovies) {
  if( !stevenMovies.length ) return;
  let bestMovies = stevenMovies.filter ((eachMovie) => {
    return ( eachMovie.genre.includes("Drama")  && eachMovie.director === "Steven Spielberg" )
  })
  return bestMovies.length
  
}

//console.log (howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(scores) {
  if( !scores.length ) return;
  let totalScore = scores.reduce((acc, elem) => {
    if (elem.score === undefined) {
      return acc
    } else {
      return acc + elem.score
    }
  }, 0)

  let avg = totalScore / scores.length;
  let digiScore = avg.toFixed(2);
  let twoDigiScore = parseFloat(digiScore)
  return twoDigiScore
}

//console.log (scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(avgMovies) {
  if( !avgMovies.length ) return;
  let dramaMovie = avgMovies.filter((eachMovie)=>{
    return eachMovie.genre.includes('Drama')
  })
  if(!dramaMovie.length){
    return 0
  }
  let avgDramas = dramaMovie.reduce((acc, eachMovie)=>{
    return acc + eachMovie.score
  },0)
  return Number.parseFloat((avgDramas / dramaMovie.length).toFixed(2))
}

//console.log (dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieYear) {
  if( !movieYear.length ) return 0;
  let movieByYear = movieYear.map((movie)=>{
    return movie
  }).sort((movie1, movie2) => {
    if(movie1.year > movie2.year){
      return 1
    }else if(movie1.year < movie2.year){
      return -1
    }else{ 
        if(movie1.title > movie2.title){
        return 1
        }else if(movie1.title < movie2.title){
        return -1
    }
    }
  })
  return movieByYear
}

//console.log (orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieAlpha) {
  if( !movieAlpha.length ) return;
  let movieOrder = [...movieAlpha].sort((movie1, movie2) => {
    if ( movie1.tittle > movie2.title ){
      return 1;
    }else if ( movie1.title < movie2.title ){
      return -1;
    }else{
      return 0;
    }
  });
  if( movieOrder.length > 20 ){
    return movieOrder.slice(0, 20)
  }
  return movieOrder
}

console.log (orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(avgYear) {
  if( !avgYear.length ) return;

  let yearMovieAvg = avgYear.map((movie) => {
    return { year: movie.year, score: movie.score};
  }).sort((movie1, movie2) => { // yearMovieAvg tiene ordenadas las peliculas por año
    if ( movie1.year > movie2.year ){
      return 1;
    }else if ( movie1.year < movie2.year ){
      return -1;
    }else{
      return 0;
    }
  });
   
  /*let sumScore = 0; //sumador
  let yearWin = 0;

  for ( let i = 0; i < yearMovieAvg.length; i++ ){
    if ( yearWin === yearMovieAvg[i] ){
      sumScore += yearMovieAvg.score
    }
  }*/

}

bestYearAvg(movies)


//console.log(`The best year was ${bestYear} with an average score of ${avgScore}`)

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
