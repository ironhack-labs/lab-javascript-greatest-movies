// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(m => m.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const filteredMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
     return filteredMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
     return 0
    }
    
    const totalScores = moviesArray.reduce((accumulator, movie) => {
     return accumulator + movie.score
    }, 0)
    
    const averageScore = totalScores / moviesArray.length
    const roundedAverage = averageScore.toFixed(2)
    
     return parseFloat(roundedAverage)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'))
    const averageScore = dramaMovies.reduce((sum, movie) => sum + movie.score, 0) / dramaMovies.length
     return averageScore
    }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = [...moviesArray].sort((a, b) => a.year - b.year)
     return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = [...moviesArray].sort((a, b) => a.title.localeCompare(b.title))
    const limitedMovies = sortedMovies.slice(0, 20)
     return limitedMovies
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function(movie) {
        const duration = movie.duration
        let durationInMinutes = 0
        
        if (duration.includes('h') && duration.includes('min')) {
          let hours = parseInt(duration.split('h')[0])
          let minutes = parseInt(duration.split(' ')[1].split('min')[0])
          durationInMinutes = hours * 60 + minutes
        } else if (duration.includes('h')) {
          let hours = parseInt(duration.split('h')[0])
          durationInMinutes = hours * 60
        } else if (duration.includes('min')) {
          let minutes = parseInt(duration.split('min')[0])
          durationInMinutes = minutes
        }
        
        return {
          movie,
          duration: durationInMinutes
        }
      })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null
      }
      
      const yearMap = {}
      
      movies.forEach(function(movie) {
        const year = movie.year
        const score = movie.score
        
        if (!yearMap[year]) {
          yearMap[year] = {
            scoreSum: score,
            count: 1
          };
        } else {
          yearMap[year].scoreSum += score
          yearMap[year].count++
        }
      });
      
      let highestAvg = -Infinity
      let bestYear = null
      
      for (const year in yearMap) {
        const avg = yearMap[year].scoreSum / yearMap[year].count
        
        if (avg > highestAvg) {
          highestAvg = avg
          bestYear = parseInt(year)
        } else if (avg === highestAvg && parseInt(bestYear) > parseInt(year)) {
          bestYear = parseInt(year)
        }
      }
      
      return parseInt(bestYear)
        
}
