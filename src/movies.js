// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    let directors = movies.map(function(films){
        return films.director
    }) 
    return directors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function uniqueDirectors(movies) {
    let directors = movies.map(function(movies){
    return movies.director
    })
    let filteredDirectors = [];
    for (let i = 0; i < directors.length; i++)
      if (filteredDirectors.indexOf(directors[i]) === -1) {
        filteredDirectors.push(directors[i])
      }
    return filteredDirectors
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    let stevenSpielbergDrama = movies.filter(function(movie){
    for (let i=0; i<movie.genre.length; i++)
    if ((movie.director === `Steven Spielberg`)   && (movie.genre[i] === `Drama`))
      return movie
  })
    return stevenSpielbergDrama.length
    }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (movies) {
    let rates = movies.map(function(movie){
      return movie.rate
    })
    let totalRates = rates.reduce(function(sum, rate){
      return sum + rate
    }, 0)
    let avgRates =  totalRates / rates.length;
    return avgRates//.toFixed(2)
  }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    let dramaMovies = movies.filter(function(movie){
    for (let i=0; i<movie.genre.length; i++)
    if (movie.genre[i] === `Drama`)
      return movie
  })
    averageDramaRate = 0;
    for (let i = 0; i < dramaMovies.length; i++)
    averageDramaRate += dramaMovies[i].rate / dramaMovies.length;
    return averageDramaRate
    }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    let sorted = movies.sort(function(a, b){
      if ((a.year === b.year) && (a.title < b.title)){
        return -1
      } else
      return a.year - b.year
    })
    return sorted.slice()
    }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let titles = movies.map(function(movies){
        return movies.title
    })
    let firstTwenty = titles.sort(function(a, b){
      if (a < b)
        return -1
    })
    if ((firstTwenty.length = 20) || (firstTwenty < 20)) 
    return firstTwenty
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
