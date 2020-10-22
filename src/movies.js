// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array){
    const directors = array.map((movies) => movies.director);
    return directors;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array){ 
    if (array.length === 0) return 0;
    const filteredSpielberg = array.filter((movies) => {return movies.director === `Steven Spielberg` && movies.genre.includes(`Drama`)})
    return filteredSpielberg.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    const average = movies.filter(movies => movies.rate).reduce(function(accum, currVal) {
      return accum + currVal.rate / movies.length;
    }, 0)
    return Number(average.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const dramas = movies.filter(elem => elem.genre.includes(`Drama`))
    const dramasAverage = dramas.reduce(function(accum, currVal) {
    return accum + currVal.rate / dramas.length;
}, 0)
return Number(dramasAverage.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const yearOrder = [...movies].sort((a, b) => {
        if (a[`year`] === b[`year`]) {
            return (a[`title`].localeCompare(b[`title`]))
        }
        return (a[`year`] - b[`year`])
    })
    return yearOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    return array.map((movies) => movies.title)
      .sort((a, b) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        else if (a === b) return 0;
      })
      .slice(0, 20);
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
