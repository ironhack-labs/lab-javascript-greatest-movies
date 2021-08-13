// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(films) {
  return films.map(function (movie) {
    return movie.director;
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
  })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(films) {
  return films.filter(function (movie){
    return (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
  }).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(films) {
  if (films.length > 0){
    return Number((films.reduce(function(score, movie){
      return score + movie.score
    }, 0) / films.length).toFixed(2))
    // !!!! !!!! !!!! 
    // i can do better; return average even if one of the movies does not have score
  } else {
    return 0;
  }
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(films) {
  // this counts the number of movies with a score
  let i = 0;
  
  let dramaMoviesScoresSum = films.filter( function (film){
    return (film.genre.includes("Drama"))
  }).reduce( function (sum, obj){
    
    // if the movie has a score
    if (obj.score) {
      i++
      return sum + obj.score
    }
    else return sum;

  }, 0)
  
  if (dramaMoviesScoresSum) return Number((dramaMoviesScoresSum / i).toFixed(2))
  else return 0;
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(films) {
  return films.slice(0).sort(function (a, b){
  
    if (a.title > b.title){
      console.log("win")
      return 1;
    } 
    if (a.title < b.title){
      
      console.log("lose")
       return -1;
    }
    if (a.title == b.title){
      
      console.log("even")
      return 0;
    }
  }).sort(function (a, b){
    return (a.year - b.year);
  })
}  


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(films) {
  return films.map(function(movie){
    return movie.title;
  }).sort(function (a, b){
          if (a > b) return 1;
    if (a< b) return -1;
    if (a === b) return 0;
  }).slice(0, 20)

}

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
