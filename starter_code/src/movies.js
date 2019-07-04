/* eslint no-restricted-globals: 'off' */


// Turn duration of the movies from hours to minutes
  //helper function 
  function stringToMinutes(string) {
    var arr = string.split('h')
    if (arr.length < 2) {
        arr.unshift("0")
    }
    var hours = Number(arr[0])
    var minutes = Number(arr[1].split("min")[0])

    return hours * 60 + minutes
}

  // returns the array with adjusted format for duration (from hours to minutes)
  // [Bana] passes all tests
  function turnHoursToMinutes(moviesArray) {
    let result = moviesArray.map((movie) => {
      console.log("movie.genre : " + movie.genre)
      return {
        title: movie.title,
        duration: stringToMinutes(movie.duration),
        genre: movie.genre
      }
    })
  
    return result
  
  }


// Get the average of all rates with 2 decimals 
// [Bana] passes all tests
function ratesAverage(array) {
  const sum = array.reduce((sum, element) => sum + parseFloat(element.rate), 0)
  return sum / array.length
}

// Get the average of Drama Movies
// [Bana] passes all tests
function dramaMoviesRate(array) {
  //[Bana] create an array of objects with drama movies only
  const arrayOfDrama = array.filter(element => element.genre.indexOf("Drama") >= 0)
  
  //[Bana] create an array of rates only. The rates are all turned to strings
  const rateToString = arrayOfDrama.map(element => element.rate.toString())

  //[Bana] create a new array that only includes rates that have a value by only filtering elements that have a length greater than zero
  const arrayOfDramaWithRates = rateToString.filter(element => element.length > 0)
  
  //[Bana] sum up all the rates
  const sumArrayOfDramaWithRates = arrayOfDramaWithRates.reduce((sum, element) => sum + parseFloat(element), 0)
  if(arrayOfDrama.length === 0){
    return undefined
  }
  else {
    //[Bana] devide the sum of all rates for drama movies by the the number of drama movies to get the average
    return Math.round(sumArrayOfDramaWithRates / arrayOfDrama.length  * 100)/100
  }
}


// Order by time duration, in growing order
// [Bana] passes all tests
function orderByDuration(array) {

  let result = array.sort((movie1, movie2) => {
    if (movie1.duration < movie2.duration) {
      return -1
    } else if (movie1.duration > movie2.duration) {
      return 1
    } else { // movie1.duration === movie2.duration
      if (movie1.title > movie2.title) {
        return 1
      } else {
        return -1
      }
    }
  })
  return result

}

// How many movies did STEVEN SPIELBERG
// [Bana] passes all tests
function howManyMovies(array) {
  if (array.length === 0) {
    return undefined
  }
  else {
    const dramaBySpielberg = array.filter(element => element.genre.includes('Drama') && element.director === 'Steven Spielberg')
    return `Steven Spielberg directed ${dramaBySpielberg.length} drama movies!`
  }
}


// Order by title and print the first 20 titles
// [Bana] passes all tests
function orderAlphabetically(array){
  const arrayOfTitles = array.map(element => element.title)
  const sortedArrayOfTitles = arrayOfTitles.sort()
  if(arrayOfTitles.length < 20){
    return sortedArrayOfTitles
  }
  else{
    return sortedArrayOfTitles.slice(0,20)
  }
}

// Best yearly rate average
// [Bana] work in progress
  // 1st goal: return the year with the highest average
  // Idea: 
  // 1.) get an array of objects with the format {year1: xy, rates: [rate, rate, rate], year2: ...},
  // 2.) get an array of objects with the format {year1; xy, averageRate: xy..., year2}
  // 3.) sort the object in descending order & return the average of the first object
  // 2. goal: in case there is a tie, it should return the oldest year

function bestYearAvg(array){
  if(array.length === 0){
    return undefined
  }

}