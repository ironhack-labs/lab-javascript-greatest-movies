/* eslint no-restricted-globals: 'off' */


// Turn duration of the movies from hours to minutes 
// [Bana] the function doesn't pass the tests 5-8 according to SpecRunner. However, when I enter the tests in the function, I get the expected result.
  
  //[Bana] helper function 
  function stringToMinutes(string) {
    var arr = string.split('h')
    if (arr.length < 2) {
        arr.unshift("0")
    }
    var hours = Number(arr[0])
    var minutes = Number(arr[1].split("min")[0])

    return hours * 60 + minutes
}
  // [Bana] create a new array which shows the duration in minutes
  const newMoviesWithMinutes = []
  function turnHoursToMinutes(array){
      array.map(element => {
          const movieInMinutes = stringToMinutes(element.duration)
  
          newMoviesWithMinutes.push({
              title: element.title,
              year: element.year,
              director: element.director,
              duration: movieInMinutes,
              genre: element.genre,
              rate: element.rate
            })
          })
      return newMoviesWithMinutes
  }



// Get the average of all rates with 2 decimals 
// [Bana] passes all tests
function ratesAverage(array) {
  const sum = array.reduce((sum, element) => sum + parseFloat(element.rate), 0)
  return sum / array.length
}

// Get the average of Drama Movies
// [Bana] the function doesn't pass the 6th test of SpecRunner. However, I do get the expected result when I enter the 6th test in the function
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
    return sumArrayOfDramaWithRates / arrayOfDrama.length
  }
}


// Order by time duration, in growing order
//[Bana] returns undefined. still checking
function orderByDuration(array){
  let newArray = turnHoursToMinutes(array)
  newArray.sort((a,b) => a.duration - b.duration)
}

// How many movies did STEVEN SPIELBERG
// [Bana] doesn't pass all the test
function howManyMovies(array) {
  if (array.length === 0) {
    return undefined
  }
  else {
    const dramaBySpielberg = array.filter(element => element.genre.indexOf('Drama') > 0 && element.director === 'Steven Spielberg')
    return `Steven Spielberg directed ${dramaBySpielberg.length} drama movies`
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
