// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map(movie=> movie.director);
  return [...new Set(allDirectors)]
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

  if(moviesArray.length === 0){
    return 0
  } else {
    // where director is spielberg
    // than we count how many are drama
    const dramaSpielberg = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie['genre'].includes('Drama'));
    return dramaSpielberg.length;
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if(!moviesArray.length){
    return 0
  } else {
      let listLength = moviesArray.length;
      const totalScore = moviesArray.reduce((accumulator, currentValue) => {
      if(!currentValue['score']){
        return accumulator;
        // console.log('one of the movies has no score')
        //listLength --;
      } else {
        // console.log(`current value ${currentValue['score']}`)
        accumulator += currentValue['score'];
        // console.log(`accumulator ====== ${accumulator}`)
      };
      return accumulator
    }, 0);
    // console.log(`the total score is: ${totalScore}`)
    // console.log(`the original length is: ${moviesArray.length} and the new one is ${listLength}`)
    // console.log(`the average is: ${totalScore/listLength}`)
    // console.log('DONE!')
    return(totalScore/moviesArray.length).toFixed(2) * 1
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  let dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
  if(!dramaMovies.length){
    return 0
  } else {
    // let sumScoreDrama = dramaMovies.reduce((accumulator, movie)=> accumulator + movie.score, 0);
    return scoresAverage(dramaMovies);
  }


    // const dramaAverage = moviesArray.reduce((scoreAccumulator, currentMovie) => {
    //   if(currentMovie['genre'].includes('Drama')){
    //     scoreAccumulator += currentMovie['score'];
    //     // accumulator = Number(scoreAccumulator.toFixed(2));
    //     return Math.round(scoreAccumulator, 100)
    //   }
    // }, 0);
    // console.log(dramaAverage)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // this is an array of object, so we sort array by the element array[i].year
  let movies = [...moviesArray];
  movies.sort((a, b)=> {
    if(a.year === b.year){
       return a.title.localeCompare(b.title, undefined, {sensitivity: 'base'});
    } else {
      return a.year - b.year;
    }
  } );
  return movies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let alphabticalMovies = [...moviesArray];
  alphabticalMovies.sort((a, b) => a.title.localeCompare(b.title, undefined, {sensitivity: 'base'}));
  let movieTitles = (alphabticalMovies.splice(0, 20)).map(movie => movie.title);
  return movieTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
