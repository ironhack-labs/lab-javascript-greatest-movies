/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array) {
  array.map(function(element) { 
     var arr = element.split('h')    
     if (arr.length < 2) {
      arr.unshift("0")        
  }    
  var hours = Number(arr[0])
  var minutes = Number(arr[1].split("min")[0])  })

    return hours*60+minutes
}

// Get the average of all rates with 2 decimals 

function ratesAverage (array) {

var sum = array.reduce(function (accumulator, current) {

 return accumulator + parseFloat(current.rate)

}, 0)

 return Math.round(sum) / array.length
}


// Get the average of Drama Movies

// Why is Jasmin still unhappy? Could you please help me with:
  // Return Average even if one of the movies does not have rate!
  // It should return the average of the array, float!

function dramaMoviesRate (array) {

  var onlyDrama = array.filter(function(element) {
  return element.genre.includes("Drama");
  });

  if (onlyDrama.length === 0) {return undefined;}

  var sumDrama = onlyDrama.reduce(function(accumulator, current){ 
  return accumulator + parseFloat(current.rate) 
  }, 0)

  var averageRating = Math.round(sumDrama) / onlyDrama.length;

  return averageRating
}

console.log(averageRating)


// Order by time duration, in growing order

/*
function orderByDuration (array) {

array.sort(function(a, b) {
return b.duration - a.duration}) 
}
*/

// How many movies did STEVEN SPIELBERG

function howManyMovies (array) {

  if (array.length === 0) {return undefined}

  var dramaBySteven = array.filter(function(element) {
    return element.genre.includes("Drama") && element.director === "Steven Spielberg"
  })

  if (dramaBySteven.length === 0) {return "Steven Spielberg directed 0 drama movies!"}
 
  else {return "Steven Spielberg directed " + dramaBySteven.length + " drama movies!"}

}

// Order by title and print the first 20 titles


function orderAlphabetically (array) {

var firstTwenty = array.filter(function(element, index) {
return index < 20
})

var sortAlphabetically = firstTwenty.sort(function(a,b) {
  if (a > b) {return -1}
})

}


// Best yearly rate average
