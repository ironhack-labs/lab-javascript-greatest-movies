// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
  const directorsArray = movies.map(film => film.director);
  return directorsArray;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllFilteredDirectors(arr) {
  const directorsWithDuplicates = movies.map(film => film.director);
    const filtered = directorsWithDuplicates.filter(function(director, index){
      return directorsWithDuplicates.indexOf(director) === index
    })
    return filtered
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const moviesDirectedBySteven = arr.filter(function(movie){
      if (movie.director === 'Steven Spielberg'){
        return movie;
      }
    }).filter(function(movie){
      return movie.genre.includes('Drama')
    });
    return moviesDirectedBySteven.length
    }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0){
    return 0;
  }
  const scoreSum = arr.reduce(function(sum, movie){
    return (movie.score || 0) + sum
  }, 0)

  return parseFloat((scoreSum / arr.length).toFixed(2))
};
  
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaMoviesArray = arr.filter(function(movie){
    return movie.genre.includes('Drama')
  })

  if(!dramaMoviesArray.length) {
    return 0
  }

  const scoresSum = dramaMoviesArray.reduce(function(sum, arrayElement){
    return arrayElement.score + sum
  }, 0)

  return parseFloat((scoresSum / dramaMoviesArray.length).toFixed(2))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const sorted = [...arr].sort(function(a,b){
    if (a.year === b.year){
      return a.title.localeCompare(b.title)
    }

    return a.year - b.year
  })
  return sorted
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const sorted = [...arr].sort(function(a,b){
    if (a.title < b.title){
      return -1
    } else if (b.title < a.title){
      return 1
    }
  })
  const listOfTitles = sorted.map(movie => movie.title);
  return listOfTitles.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  return arr.map(movie => {
    let timeArr = movie.duration.split('h');
    movie.duration = parseInt(timeArr[0] * 60) + parseInt(timeArr[1] || 0)
    return movie
  }); 
  
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getAllFilteredDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
