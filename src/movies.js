

// Iteration 1: All directors? - Get the array of all directors.

  function getAllDirectors (movies) {
    return movies.map((movie) => { return movie.director})
  }
console.log(getAllDirectors(movies))

/*  _Bonus_: It seems some of the directors had directed multiple movies so they 
will pop up multiple times in the array of directors. How could you "clean" a bit this 
array and make it unified (without duplicates)? */

  const justDirectors = getAllDirectors(movies)
  new Set(justDirectors)
  let uniqueDirectors = uniqueDirectors.from(new Set(uniqueDirectors))
  console.log(uniqueDirectors)
  
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

  function howManyMovies (movies) {
    const spielbergDrama = movies.filter((movie) => {
      return "Steven Spielberg" === movie.director && movie.genre.includes("Drama")
    })
    return spielbergDrama.length
  }
  console.log(howManyMovies(movies))


  
  
  // Iteration 3: All rates average - Get the average of all rates with 2 decimals
  
  
  function ratesAverage (movies) {

    const rateAverage = movies.reduce((acc, movie) => {
      if (movie.hasOwnProperty('rate') && typeof movie.rate === "number") {
        return acc + movie.rate / movies.length 
      } else {
        return acc
      }
    }, 0)
    return parseFloat(rateAverage.toFixed(2))
  }
console.log(ratesAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate (movies) {
  const justDrama = movies.filter((movie) => {
    return  movie.genre.includes("Drama")
  })
  return ratesAverage(justDrama)
}
console.log(dramaMoviesRate(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies) {
  return movies.slice().sort((movie1, movie2) => {
    if (movie1.year > movie2.year) {
      return 1
    } else if (movie2.year > movie1.year) {
        return -1
    } else {
      return movie1.title.localeCompare(movie2.title)
    }  
  })
}
  console.log(orderByYear(movies))
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles



function orderAlphabetically(movies) {
  const titles = movies.map((movie) =>  movie.title)
  const sortedTitles = titles.sort() 
  return sortedTitles.slice(0,20)
  
}
console.log(orderAlphabetically(movies))
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

