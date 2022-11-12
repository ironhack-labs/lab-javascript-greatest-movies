// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const sameLength = [];
  const directorsArr = moviesArray.map((movies) => {
    sameLength.push(movies.director);
  });
  return sameLength;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
  return 0;
  }
  
  const dramaMoviesBySteven = moviesArray.filter((movie) => {
   return movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama')

  })

  return dramaMoviesBySteven.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const moviesScore = moviesArray.reduce((acc, movies) => {
  return movies.score ? acc + movies.score : acc
  
  },0)
   const averageMovies = moviesScore / moviesArray.length
   return Number(averageMovies.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const drama = moviesArray.filter((movies) => {
    return movies.genre.includes('Drama')
  })
  if(drama.length === 0){
    return 0;
  }
  const dramaScore = drama.reduce((acc, movies) => {
    return  acc + movies.score 
  },0)
  const dramaAvg = dramaScore / drama.length
  return  Number(dramaAvg.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newMoviesArr = moviesArray.splice(0,moviesArray.length);
 const arrOrderYear = newMoviesArr.sort((movie1, movie2) => {
   if(movie1.year > movie2.year){
    return 1
   }
   else if(movie1.year < movie2.year){
    return -1
   }

   if(movie1.title > movie2.title){
    return 1
   }else if(movie1.title < movie2.title){
    return -1
   }
    return 0
  })
  return arrOrderYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newArr = moviesArray.splice(0,moviesArray.length)
  const alphaMovies = newArr.sort((movie1,movie2) => {
    if(movie1.title > movie2.title){
      return 1
     }
     else if(movie1.title < movie2.title){
      return -1;
     }
      return 0 ;

    })
    const titleOnly = alphaMovies.map((movies) => movies.title);
    const tillTwenty = titleOnly.splice(0,20);
    return tillTwenty
    
  }
  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
