 
/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(string) {
  let hoursInMinutes = parseInt(string.slice(0,string.indexOf("h"))*60)
  let minutesString = parseInt(string.slice(string.indexOf(" ")+1, string.indexOf("min")))
  return hoursInMinutes+minutesString
}
function moviesArrayMinutes(array) {
let moviesInMinutes = array.map((element) => {
  let newMoviesArray = element
  element.duration = turnHoursToMinutes(element.duration)
  return newMoviesArray
})
return moviesInMinutes
}

console.log(moviesArrayMinutes(movies))

//alternative:
// let moviesInMinutes = movies.map((element)=> {
//   return {
//     title: element.title,
//     year: element.year,
//     director: element.director,
//     duration: turnHoursToMinutes(element.duration),
//     genre: element.genre,
//     rate: element.rate
//   }
// })


// Get the average of all rates with 2 decimals 

function getAverage (array) {
let ratesSum = array.reduce((sum, element) => {
  return sum + parseFloat(element.rate)
}, 0)
let ratesAverage = (ratesSum/array.length).toFixed(2)
return ratesAverage;
}

console.log(getAverage(movies))

// Get the average of Drama Movies

function getDramaAverage(array) {
let dramaMovies = array.filter((element) => {
  return element.genre.includes("Drama");
})
let dramaSum = dramaMovies.reduce((sum, element) => {
  return sum + parseFloat(element.rate)
}, 0) 
let dramaAverage = (dramaSum/dramaMovies.length).toFixed(2)
return dramaAverage;
}

console.log(getDramaAverage(movies))

// Order by time duration, in growing order

function sortMoviesByDuration (array) {
  let moviesByDuration = array.sort((a,b) => {
   return a.duration - b.duration;
  })
  return moviesByDuration;
}
console.log(sortMoviesByDuration(movies))

// How many movies did STEVEN SPIELBERG

function getDramaBySteven (array) {
let stevenDrama = array
.filter((element) => {
  return element.genre.includes("Drama");
}).filter((element) => {
  return element.director.includes("Steven Spielberg");
})
return stevenDrama;
}
console.log(getDramaBySteven(movies))

//alternativve
// let drama = (element) => {
//   return element.genre.includes("Drama")
// }
// let steven = (element) => {
//   return element.director.includes("Steven Spielberg")
// }

// let steDrama = movies
// .filter(drama)
// .filter(steven);


// Order by title and print the first 20 titles
function orderTwentyMovies (array) {
let firstTwentyMovies = array.slice(0, 20);
firstTwentyMovies.sort((a,b) => {
  var x = a.title.toLowerCase();
  var y = b.title.toLowerCase();
  return x < y ? -1 : x > y ? 1 : 0;
})
return firstTwentyMovies;
}

console.log(orderTwentyMovies(movies))

// Best yearly rate average

function groupingYears(array) {
let yearsGroup = array.reduce((years, currentValue) => {
  if ( years.indexOf(currentValue.year) === -1 ) {
    years.push(currentValue.year);
  }
  return years;
}, []).map((year) => {
  return {
      year: year,
      rate: array.filter((element) => {
        return element.year === year;
      }).map((element) => { return element.rate; })
  }
});
return yearsGroup
}
console.log(groupingYears(movies))

function averageRate (array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += parseFloat(array[i]);
  }
  return (sum/array.length).toFixed(2)
}

function yearAverageGroup(array) {
  let yearAver = array.map((element) => {
    let newRatesArray = element
    element.rate = averageRate(element.rate)
    return newRatesArray
  })
  return yearAver
  }
console.log(yearAverageGroup(groupingYears(movies)))

function getMax (array) {
let max = 0
let year = 0
for (let i = 0; i<array.length; i++) {
  if(array[i].rate>max) {
    max = array[i].rate
    year = array[i].year
  }
}
return "The best year for the Cinema was "+year+" with an average rate of "+max
}
console.log(getMax(yearAverageGroup(groupingYears(movies))))
