// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (movies) => {
    const myVariable = movies.map(movie=> movie.director)
    return myVariable
  }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => {
    const array = movies.filter(item =>{
      return item.director === 'Steven Spielberg'
    })
    const drama = array.filter(genero => {
      if (genero.genre.includes('Drama')){
        return genero
      }
    })
    return drama.length
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (movies) => {
    const rates = movies.reduce((counter, number)=>{
      return counter + number.rate;
    }, 0)
    if (rates === 0){
      return 0;
    }else if (movies.rate === '' || movies.rate != 0){
        return Math.round(rates/movies.length*100)/100
        }
      }

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (movies) => {
    const array = movies.filter(genero => {
      if (genero.genre.includes('Drama')){
        return genero
      }})
      return ratesAverage(array)
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movies) => {
    const array = movies.sort((a, b) => {
      return (b.year - a.year)
  })
  return array
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (newArray) => {
    const onlyTitle = newArray.map(newArray => newArray.title)
    const orderedTitle = onlyTitle.sort()
    return orderedTitle.slice(0, 20)
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (someArr) => {
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

const bestYearAvg = (someArr) => {
    if (someArr.length === 0){
        return null
    }
    return `The best year was YEAR with an average rate of RATE`
}