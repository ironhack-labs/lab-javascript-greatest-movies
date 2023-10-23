// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(function (elm) {
        return elm.director
})
return allDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const onlySteven = moviesArray.filter(function (elm) {
        return elm.director === "Steven Spielberg"
})
return onlySteven
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let scoresAvg = moviesArray.reduce((acc, elm) => {
        if (!elm.score) return acc
        const total = acc + elm.score;
        return total
      }, 0);
      
      let resolved = scoresAvg / moviesArray.length
      return resolved
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const years = moviesArray.map(function (elm) {
        return elm.year
      })
      
      const sortedYears = years.sort((a, b) => a - b)
      return sortedYears
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderAlphabetically = moviesArray.map(function (elm) {
        return elm.title
      })
      
      const ordered = orderAlphabetically.sort()
      final = ordered.splice(0, 20)
      return final
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
