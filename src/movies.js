// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.


// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(element => {
        return element.director
      })
      return directors
      // Bonus:
      // 1st solution:
      // return directors.filter((value, index, array) => {
      //   return array.indexOf(value) === index
      // })
      // 2nd solution:
      // return [...new Set(directors)]
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(element => {
        return element.director === 'Steven Spielberg' && element.genre.includes('Drama')
    }).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0

    const averageScores = (moviesArray.reduce((sum, value) => {
        if (value.score) {
            return sum + value.score
        } else { 
            return sum 
        }
    }, 0) / moviesArray.length).toFixed(2)
    return Math.round(averageScores * 100) / 100
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(element => 
        element.genre.includes('Drama'));
    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderedMovies = [...moviesArray].sort((movie1, movie2) => {
        return movie1.year - movie2.year || movie1.title.localeCompare(movie2.title)
    })
    return orderedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderedTitles = moviesArray.map(element => 
        element.title)
    
    orderedTitles.sort((movie1, movie2) => {
    return movie1.localeCompare(movie2)
    })
    return orderedTitles.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
