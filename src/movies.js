// Iteration 1: All directors? - Get the array of all directors.

/*const getAllDirectors = (array) => {
  const directors = movies.map(function(films){
    return films.director
  })
  return directors
}*/
const getAllDirectors = (array) => {
  return array.map(function(film) {
    return film.director
  })
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (array) => {
  const spielbergFilms = array.filter((film)=>{
    return film.director === "Steven Spielberg" && film.genre.includes("Drama")
  })
  return spielbergFilms.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (array) => { 
  if (array.length === 0) {
    return 0
  } const averageSum = array.reduce((acc, film) => {
    if (Number(film.rate)) {
      return acc + film.rate
    } else {
      return acc
    }
  }, 0)
  return Number((averageSum / array.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (array)=> {
  if (array.length === 0) {
    return 0
  } const dramaArray = array.filter((film) => {
    return film.genre.includes("Drama")
  }) 
  const dramaSum = dramaArray.reduce((acc, film) => {
    if (dramaArray.length === 0) {
      return 0
    } else if (Number(film.rate)) {
      return acc + film.rate
    } else {
      return acc
    }
  }, 0)
  return Number((dramaSum / dramaArray.length).toFixed(2))
}

/*const dramaMoviesRate = (array) => {
  const dramaArray = array.filter((films)=> {
    return films.genre.includes("Drama")
  })
  return ratesAverage(dramaMoviesRate)
}*/

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

/*const orderByYear = (array)=> {
  const newArray = array.map((film) => {film})
    const moviesByYear = newArray.sort((movie1, movie2) => {
        return movie1.year - movie2.year
    })
    return moviesByYear
}*/

const orderByYear = (array) => {
    const newArray = array.map((film) => {film})
    const orderedByTitle = newArray.sort()
    const orderedByYearFinal = orderedByTitle.sort((film1, film2) => {
        return film1.year - film2.year
    })
  return orderedByYearFinal
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (array) => {
    const newArray = array.map((film)=> {return film.title})
    const newArrayOrdered = newArray.sort()
    return newArrayOrdered.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
 
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
