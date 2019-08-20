/* eslint no-restricted-globals: 'off' */

  
// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
  const sumRating = movies.reduce(function(acc, movie) {
    if (movie.rate == "") {
      return acc + 0;
    }
    return acc + parseFloat(movie.rate);
  }, 0);
  const avgRating = Math.round((sumRating / movies.length) * 100) / 100;

// Get the average of all rates with 2 decimals 
  return avgRating;
}
//TEST 
//ratesAverage(movies) 

 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (movies) {
  const dramaMovies = movies.filter (function(movie) { 
      return movie.genre.indexOf('Drama') != -1;
  });
  if (dramaMovies.length != 0) {
      return ratesAverage (dramaMovies) // en vez de hacer de nuevo una funcion para calcular la media, usamos la anterior funcion pero ahora que ataque a dramaMovies
  }
  else {
      return undefined;
  }

}
//TEST
//dramaMoviesRate(movies)


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(moviesArr) {

  const finalArray = moviesArr.sort((a, b) => {

    if (a.duration < b.duration) {
      return -1;
    } else if (a.duration > b.duration) {
      return 1;
    } else if (a.duration === b.duration) {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
   } 
  })
  console.log(finalArray)
  return finalArray;
}
orderByDuration(movies)



////Crazy non-working experiment
//const orderByDuration = (arr) => {
//  //return a new array, only with movie durations
//  let durArray = []
//  arr.forEach(element => {
//    durArray.push(element.duration)
//  })
//  //formats the string elements to a float value
//  durArray.forEach(element => {
//    element.replace("h ", ".")
//    element.replace("min", "")
//    parseFloat(element)
//    })
//  console.log(typeof(durArray))
//  }
//  orderByDuration(movies)


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = (arr) => {
  if (arr.length === 0) {
    return 0
  }
  const filteredArray = arr.filter((element) => element.director.includes("Steven Spielberg") && movie.genre.includes("Drama"))
  return filteredArray.length

}
//TEST
howManyMovies(movies)
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const sortedArr = movies.sort((movieA, movieB) => movieA.title.localeCompare(movieB.title));
    const orderedTitles = sortedArr.map(list => list.title)
    if (orderedTitles.length > 20) {
      return orderedTitles.slice(0, 20);
    }
    return orderedTitles;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  const result = array.slice(0).map(function (elmt) {
      const minutes = 0
      const elmtcpy = Object.assign({}, elmt)
      if (typeof (elmtcpy.duration) === 'number')
          return elmtcpy
      const parsedString = (elmtcpy.duration.indexOf('h') !== -1) ? elmtcpy.duration.split('h') : ['0', elmtcpy.duration]
      parsedString[0] = parseInt(parsedString[0]) * 60
      if (parsedString[1]) {
          parsedString[1] = parseInt(parsedString[1])
          elmtcpy.duration = parsedString[0] + parsedString[1]
      } else {
          elmtcpy.duration = parsedString[0]
      }
      return elmtcpy
  })
  return result
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
