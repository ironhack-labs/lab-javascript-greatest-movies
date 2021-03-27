// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (movies)=>{
    let allDirectors = movies.map((movie)=>{
       return movie.director
    })
    return allDirectors
  }
  
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies= (movies)=>{
  let dramasOfSpielberg = movies.filter((movie)=>{
    return movie.director == "Steven Spielberg" && movie.genre.includes("Drama")
    })
  return dramasOfSpielberg.length
   }
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies)=>{
  if(movies.length == 0) return 0
  let totalRates = movies.reduce((acc,movie)=>{
    if(movie.rate){
      return acc + movie.rate
    }else {
      return acc
    }
  },0)
  return Number((totalRates/movies.length).toFixed(2))
}
  
// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate= (movies)=>{
  const listOfDramaMovies = movies.filter((movie)=>movie.genre.includes("Drama"))
  return ratesAverage(listOfDramaMovies)
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const ordenedAlphabetically = (movies)=>{
  return movies.sort((a,b)=>{
          if(a.title<=b.title) return -1
          if(a.title>b.title) return 1
          return 0
         })
}

const orderByYear = (movies)=>{
  const copyOfMovies = [...movies]
  const ordenedByTitle = ordenedAlphabetically(copyOfMovies)
  ordenedByTitle.sort((a,b)=>{
    return a.year-b.year
  })
  return ordenedByTitle
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies)=>{
  const copyOfMovie = [...movies]
  let sortAlphabetically = ordenedAlphabetically(copyOfMovie)
  let first20AlphabeticallyOrdenedMovies = sortAlphabetically.filter((movie,index)=>{
    return index<20
  },0)
  const listOfTiltes = first20AlphabeticallyOrdenedMovies.map((movie)=>movie.title)
  return listOfTiltes
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
