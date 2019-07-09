/* eslint no-restricted-globals: 'off' */






// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average




// Turn duration of the movies from hours to minutes

/* APUNTE TEO --------

function turnHoursToMinutes(moviesCopy) {

    moviesCopy.forEach(element => {
        console.log(element.duration.split(" "))

    });
    return moviesCopy
}

*/

var moviesCopy = [...movies]

function turnHoursToMinutes(moviesCopy) {

    
    let totalMinutos

    let arrayDuration = moviesCopy.map(element => {
       let durationArray = element.duration.split(" ")
   // console.log (durationArray)

if (durationArray.length == 2) {
      totalMinutos = parseInt(durationArray[0]) * 60 + parseInt(durationArray[1]) }
 //console.log (totalMinutos)
else {
      if (parseInt(durationArray[0]) > 10 ) {
        totalMinutos = parseInt(durationArray[0]) * 60
      } else {
        totalMinutos = parseInt(durationArray[0])
      }
    }
console.log (totalMinutos)
});
}

// ----- Get the average rate - ratesAverage -----

let ratesAverage = moviesCopy => {
    let avgRate = moviesCopy.reduce((acc, elm) => acc + elm.rate, 0) 
    let result = (avgRate / moviesCopy.length)
    let decimals = result.toFixed(2)
    
    return parseFloat(decimals)
}

// Average rate of Drama Movies - dramaMoviesRate -----


let dramaMoviesRate = moviesCopy => {
  let dramaMovies = moviesCopy.filter(elm => elm.genre == 'Drama')
  if(dramaMovies.length == 0) {
    return undefined
  }
  let avgRate = dramaMovies.reduce((acc, elm) => acc + elm.rate, 0) 
  let result = (avgRate / dramaMovies.length)
  let decimals = result.toFixed(2)
  return parseFloat(decimals)
}

// Order the movies by duration - orderByDuration

let orderByDuration = moviesCopy => {
  return (moviesCopy)
}


// Get how many movies - howManyMovies

// Order alphabetically - orderAlphabetically


function orderAlphabetically(moviesCopy) {

let titleMovies = moviesCopy.map(elm => elm.title)

  if(titleMovies.length < 21) {
    return (titleMovies)
  } else {
    return (titleMovies.splice(0,20))
  }
}
