// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) { 
  const directors = arr.map(function(item){
  return item.director;
});
return directors

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const spielbergDrama = arr.filter(function(item){
    return item.director === 'Steven Spielberg' && item.genre.includes('Drama')
  })
return spielbergDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies){

  if (!movies.length) {
    return 0;
  }
  const arrayOfScores = movies.map(value => {
    return value.rate;
  });
  const sumOfScores = arrayOfScores.reduce((sum, score, index, original) => {
    return sum + score;
  }, 0);
  return sumOfScores / movies.length;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(movie => {

    return movie.genre.includes('Drama');
  });

  return dramaMoviesScore(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const arrayCopy = [...movies];
  return arrayCopy.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      const firstMovieTitle = a.title.toLowerCase();
      const secondMovieTitle = b.title.toLowerCase();
      if (firstMovieTitle > secondMovieTitle) {
        return 1;
      } else if (firstMovieTitle < secondMovieTitle) {
        return -1;
      } else {
        return 0;
      }
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(orderArr) {
  const durationMovies = orderArr.map((movie)=> movie.title);
  const orderMovies = durationMovies.sort((movie1, movie2)=>{
    if (movie1.year > movie2.year){
      return 1
    }else if (movie1.year < movie2.year){
      return -1
    } else {
      return 0
    }

  });

  return orderMovies

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.map(movie => {
    const duration = movie.duration.split(' ');
    let minutes = 0;
    for (let time of duration) {
      if (time.includes('h')) {
        minutes += parseInt(time) * 60;
      } else {
        minutes += parseInt(time);
      }
    }
    return {
      ...movie,
      duration: minutes
    };
  });
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
