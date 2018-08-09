// ==========================================================
/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr){
	let hour = arr.duration.replace(/h/g, "").replace(/min/g, "").split(" ").map(function(el){ return parseInt(el) })[0]
	let min = arr.duration.replace(/h/g, "").replace(/min/g, "").split(" ").map(function(el){ return parseInt(el) })[1]
	let result = (hour * 60 + min).toString()
	arr.duration = result
	return arr
}


let newMovies = movies.map(function(el){
	return turnHoursToMinutes(el)
})

console.log(newMovies)



// ==========================================================

// Get the average of all rates with 2 decimals 
function ratesAverage(moviesArr){
  let result = moviesArr.reduce(function(accumulator, el){
    return parseFloat(el.rate) + accumulator
  }, 0)
  return parseFloat((result / moviesArr.length).toFixed(2));
}
// test
ratesAverage(movies)



// ==========================================================

// Get the average of Drama Movies
function dramaMoviesRate(arrayRate){
  let filteredArray = arrayRate.filter(function(el){
    return (el.genre.indexOf("Drama") !== -1)
  });
  return ratesAverage(filteredArray);
}
// test
dramaMoviesRate(movies); // "8.32"

// Order by time duration, in growing order
// Order by time duration, in growing order
function orderByDuration(arr){
  let formattedArray = arr.map(function(el){
    return turnHoursToMinutes(el)
  })
  let sortedArray = formattedArray.sort(function(a,b){
    if ( parseFloat(b.duration) > parseFloat(a.duration) ) {
      return - 1
  } else if ( parseFloat(b.duration) < parseFloat(a.duration) ){
      return 1
  } else if ( parseFloat(b.duration) === parseFloat(a.duration) ){
    //formattedArray.sort(function(a,b){
    //  return a.title > b.title ? - 1 : 1
      return b.title > a.title ? -1 : 1
    
  }
  })
  return sortedArray
}

// test
orderByDuration(movies)



// ==========================================================

// How many movies did STEVEN SPIELBERG

function howManyMovies(arr){

  if (arr.length === 0){
    return undefined
  }

  let filteredArray = arr.filter(function(el){
    return (el.genre.indexOf("Drama") !== -1)
  });

  let spielberg = filteredArray.filter(function(el){
    return el.director === "Steven Spielberg"
  })

  if (spielberg.length === 0) {
    return undefined
  }

  return `Steven Spielberg directed ${spielberg.length} drama movies!`
}


// ==========================================================

// Order by title and print the first 20 titles
function orderAlphabetically(orderedTitle){

  let result = orderedTitle.sort(function(a,b){
  return (a.title < b.title) ? -1 : 1 ; 
  })

  if (result.length >= 20){
    return result.slice(0, 20);
  } else {
    return result;}
}

// ==========================================================


// Best yearly rate average
