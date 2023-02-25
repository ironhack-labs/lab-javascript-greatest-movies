// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(function(movie) {
        return movie.director
    })
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergDramas = moviesArray.filter(function(movie) {
        return movie.genre.includes("Drama") && movie.director === "Steven Spielberg"    
      })
      return spielbergDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray == "") return 0;
    let sum = moviesArray.reduce(function (acc, movie) {
        if (movie.score == "" || movie.score == undefined) return acc
        return acc + movie.score

    }, 0 )

    return Number((sum / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaArray = moviesArray.filter(function (movie) {
        if (movie.genre.includes("Drama")) return movie;
  
      });
        console.log(dramaArray)
  
      return scoresAverage(dramaArray)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderedMovies = moviesArray.slice().sort(function(a,b){
        if (b.year < a.year) {
          return 1
        }
        if (b.year > a.year) {
          return -1
        }
        if (a.year === b.year)
          return (a.title.localeCompare(b.title))

      })
     return orderedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArr = [...moviesArray];
    let sort = newArr.sort((a, b) => {
        return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
    });
    return sort.map(e => e.title).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
