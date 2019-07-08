/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes

function stringToMinutes(string) {

  var arr = string.split("h");
  if (arr.length < 2) {
    arr.unshift("0");
  }
  var hours = Number(arr[0]);
  var minutes = Number(arr[1].split("min")[0]);

  return hours * 60 + minutes;
}

function turnHoursToMinutes(moviesArray) {
  let result = moviesArray.map((movie) => {
    return {
      title: movie.title,
      duration: stringToMinutes(movie.duration)
    }

  })

  return result
}

// Get the average of all rates with 2 decimals

function ratesAverage(array) {
  let result = array.reduce((sum, movie) => {
    console.log("accumulator is: ", sum, "and current value is: ", movie.rate);
    return sum + parseFloat(movie.rate);
  }, 0);

let avg = result / array.length
  return avg
}

// your code:



// Get the average of Drama Movies

function dramaMoviesRate(array) {

  let count = 0

  let result = array.reduce((sum, movie) => {
    console.log("sum : " + sum)
    console.log("movie.rate : " + movie.rate)
    if (movie.genre.includes('Drama')) {
      count++
      console.log("movie.rate for Drama : " + movie.rate)
      if (!movie.rate) {
        return sum
      }
      return sum + parseFloat(movie.rate)
    } else {
      return sum
    }

  }, 0)/count

  if (count === 0) { return undefined}

  return Math.round(result * 100) / 100
}
    


// Order by time duration, in growing order
function orderByDuration(array) {

  array.sort((movie1, movie2) => {
    if (movie1.duration < movie2.duration) {
      return -1
    } else if (movie1.duration > movie2.duration) {
      return 1
    } else {
      if (movie1.title > movie2.title) {
        return 1
      } else {
        return -1
      }

    }

  })
  return array //sorts original array
}
[{ title: 'abc' }, { title: 'bcd' }]
// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
  let dramaArr = array.filter(element => {
    if (element.genre.includes('Drama') && element.director === 'Steven Spielberg')
  { let dramaArrCounter = dramaArr.length
    return `Steven Spielberg directed ${dramaArrCounter} drama movies`
  }
  
else {
  if (element.director === 'Steven Spielberg' && element.genre.includes(!'Drama') ) {
  return `Steven Spielberg directed ${0 } drama movies`
}
}
})
return result
}
// Order by title and print the first 20 titles
function orderAlphabetically(array) {

  let titleArr = array.map(movie =>  movie.title
    );
    
   let sortArray = titleArr.sort()
  
  
  let twentyTitles = sortArray.slice(0, 20)
  
  
return twentyTitles

}

// Best yearly rate average
