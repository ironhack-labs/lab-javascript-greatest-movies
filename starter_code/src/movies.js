/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(arr){
    if(arr.length === 0) return 0
    const rates = arr.reduce((acc, movie) => (acc + Number(movie.rate)),0)
    return Number((rates / arr.length).toFixed(2))
}

 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){
    const dramaMovies = arr.filter(movie => movie.genre.find(gen => gen === 'Drama'))
    const avg = ratesAverage(dramaMovies)
    return avg
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(arr){
   const result =  arr.sort((movie1, movie2) => {
     if (movie1.duration === movie2.duration){
       return movie1.title < movie2.title ? -1 : 1;
     }else{
      return movie1.duration - movie2.duration
     }     
    })
  return result    
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(arr){
  
  let count = arr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.find(gen => gen === 'Drama')).length
   
  return count
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
  let arrOrder = arr.map(movie => movie.title).sort()
  if (arrOrder.length <= 20){
    return arrOrder
  }else{
    return arrOrder.slice(0,20)
  }
  
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes(arr){
  const copyArr = arr.map(movie => Object.assign({}, movie))

  const result = copyArr.map(movie => {
    movie.duration = minutesFromDurationString(movie.duration)
    return movie
  }) 
  
  return result
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr){
  let result = null

  let years = [...new Set(arr.map(movie => movie.year))]

  if (arr.length === 0) return result

  let avg = years.map(year => {
    arr.reduce((acc, rates) =>{
      if (arr.year === year) return acc + rates
    })
  })

  let number = years.map(year =>{
    arr.filter(movie => movie.year === year)
  }).length

  let media = 0

  (number > 0)? avg/number : avg

  return `The best year was ${arr.year} with an average rate of ${media}`

  
}


// function with minutes



function minutesFromHString(hString) {
  return Number(hString.replace(/h/, '')) * 60
}

function minutesFromMinString(minString) {
  return Number(minString.replace(/min/, ''))
}

function minutesFromDurationString(duration) {
  const durationArr = duration.toString().split(' ')

  if (durationArr.length === 2) {
    return minutesFromHString(durationArr[0])
      + minutesFromMinString(durationArr[1])
  }

  if (durationArr[0].includes('h')) {
    return minutesFromHString(durationArr[0])
  }
  
  return minutesFromMinString(durationArr[0])
}