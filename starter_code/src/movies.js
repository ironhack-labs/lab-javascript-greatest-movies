/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
/*
const orderAlphabetically2 = array => {
    let newArr = [...array]
  
    let secondArr = newArr.sort((a,b) => a.title.localeCompare(b.title))
  
    return secondArr
  
  
  }
  
  const orderByYear = array => {
  
    let newArray = [...array]
    let newArrayByTitle = orderAlphabetically2(newArray)
  
    return newArrayByTitle.sort((a, b) => a.year - b.year)
  
  }   
  */
 const orderByYear = array => {
    let newArray = array.map(movie => movie).sort((a,b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title)
      }
      return a.year - b.year
    })
    return newArray
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = array => {
    let newarray = array.filter(movie => movie.genre.includes("Drama"))
  
    let secondArray = newarray.filter(movie => movie.director.includes('Steven Spielberg'))
  
    return secondArray.length
  }

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = array => {
    let newArr = [...array]
  
    let secondArr = newArr.sort((a,b) => a.title.localeCompare(b.title))
  
    let secondArr20 = secondArr.splice(0,20)

    return secondArr20.map(movie => movie.title)
  }

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = array => {
    if (array.length === 0) return 0
    const newArr = array.map(movie => movie.rate > 0 ? movie.rate : 0)
    const arrReduced = newArr.reduce((accumulator, currentValue) => accumulator + currentValue)
    return Math.round((arrReduced / array.length) * 100) / 100
  } 

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = array => {
    let newArray = array.filter(movie => movie.genre.includes("Drama"))
  
    return ratesAverage(newArray)
  }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
/*
const turnHoursToMinutes = array => {
    let newArr = [...array]
    newArr.map(movies => {
      movies.duration = parseInt(movies.duration.match(/[0-9]/g)[0])*60 + parseInt(movies.duration.match(/[0-9]/g)[1] + movies.duration.match(/[0-9]/g)[2])
    })
    return newArr
  }
  */

 const turnHoursToMinutes = array => {
    return array.map(movie => {
      let minutes = 0
      const { duration } = movie
      const toMinutos = duration.split(' ')

      if( toMinutos.length === 1 ){
        minutes = (toMinutos[0].includes('h') ? parseInt(toMinutos[0]) * 60 : parseInt(toMinutos[0]))
      }else{
minutes = parseInt(toMinutos[0])*60 + parseInt(toMinutos[1])
      }
      
      return {...movie, duration: minutes}
    })
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
