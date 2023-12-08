// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(function(movie) {
      return movie.director;
    });
  
    const uniqueDirectors = [];
  
    directorsArray.forEach(director => {

      if (uniqueDirectors.indexOf(director) === -1) {
        uniqueDirectors.push(director);
      }
    });
  
    return uniqueDirectors;
  }



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesSpielberg = moviesArray.filter(function(movie){
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");      
    })
    return moviesSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
      return 0
    }
  
    const totalScore = moviesArray.reduce(function(sum, currentValue) {
      if (typeof currentValue.score === 'number') {
        return sum + currentValue.score;
      } else {
        return sum
      }
    }, 0);
  
    const averageScore = totalScore / moviesArray.length
  
    const roundedAverageScore = parseFloat(averageScore.toFixed(2))
  
    return roundedAverageScore
  }
  


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const filteredMovies = moviesArray.filter(function(movie){
        return movie.genre.includes('Drama')
    })

    if (filteredMovies.length === 0) {
        return 0;
      }
    
    const totalDramaScore = filteredMovies.reduce(function(sum,currentValue){
        if (typeof currentValue.score === 'number') {
            return sum + currentValue.score;
          } else {
            return sum
          }
    },0)

    const averageDramaScore = totalDramaScore/filteredMovies.length

    const roundedDramaScore = parseFloat(averageDramaScore.toFixed(2))

    return roundedDramaScore
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
