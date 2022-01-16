// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)? 

function getAllDirectors(movies) {

  const directorsArray = movies.map(function(currentMovie){
    return currentMovie.director;
  })

  //Bonus Cleanup Part

  let newArr = [];

  let filterUniqueArr = directorsArray.filter(function(director){
    if(!newArr.includes(director)){
      newArr.push(director);
      return true;
    }
  });

  let uniqueDirectorsArr = filterUniqueArr.map(function(currentDirector){
    return currentDirector;
  })

  return uniqueDirectorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

  let countOfDramaMoviesBySpielberg = 0;
  
  movies.filter(function(currentMovie){

    if(currentMovie.director === 'Steven Spielberg')
    {
      if(currentMovie.genre.includes('Drama'))
          countOfDramaMoviesBySpielberg++;       
    }
  })
  
  return countOfDramaMoviesBySpielberg;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {

  if(movies.length === 0)
    return 0;

  let sumOfScores = movies.reduce(function(sum,currentMovie){

    if(!currentMovie.hasOwnProperty('score'))
      currentMovie.score = "";

    return sum + currentMovie.score
  }, 0)

  return Number((sumOfScores/movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {

  let dramaMoviesArray = movies.filter(function(currentMovie){

    if(currentMovie.genre.includes('Drama'))
      return true;
  })

  let avgOfDramaMovies = scoresAverage(dramaMoviesArray);

  return avgOfDramaMovies;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

  const orderMoviesByYear = movies.sort(function(movie1, movie2){

    if(movie1.year === movie2.year){
      
      if(movie1.title > movie2.title)
        return 1;

      else 
        return -1;
    }

    return movie1.year - movie2.year;
  })

  const orderedArray = orderMoviesByYear.map(function(movie){
    return movie;
  })

  return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

  let copyOfMoviesArr = movies.map(function(currentMovie){
      
    return currentMovie;
  })

  let sortedAlphabetically = copyOfMoviesArr.sort(function(movie1, movie2){

    if(movie1.title > movie2.title)
      return 1;

    else 
      return -1;
  })

  if(!sortedAlphabetically.length < 20)
  {
    let firstTwentyMovies = sortedAlphabetically.filter(function(currentMovie){

      if(sortedAlphabetically.indexOf(currentMovie) < 20)
        return true;
    })

    let firstTwentyMoviesArr = firstTwentyMovies.map(function(currentMovie){
      
      return currentMovie.title;
    })

    return firstTwentyMoviesArr;
  }

  let titlesOfSorted = sortedAlphabetically.map(function(currentMovie){

    return currentMovie.title;
  })

  return titlesOfSorted;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {

  let copyOfMoviesArr = movies.map(function(currentMovie){
    return currentMovie;
  })

  let Minutes = copyOfMoviesArr.map(function(movie){

    // let currentMovieDuration = movie.duration;

    // let indexOfh = currentMovieDuration.indexOf('h');

    // let indexOfSpacePlus1 = currentMovieDuration.indexOf(" ") + 1;

    // let indexOfm = currentMovieDuration.indexOf('m');

    // let hours = +currentMovieDuration.slice(0, indexOfh);
    
    // let mins = +currentMovieDuration.slice(indexOfSpacePlus1, indexOfm);
   
    // let totalMins = (hours * 60) + mins;
   
    // movie.duration = totalMins;
   
    // return movie;
  })
  return Minutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {

  if(movies.length === "")
    return null;
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
