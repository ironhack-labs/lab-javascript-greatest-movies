/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arr){
  return arr.map(function(obj){
    var NewMovieArray = []
    NewMovieArray.title = obj.title
    NewMovieArray.year = obj.year
    NewMovieArray.director = obj.director
    NewMovieArray.duration = obj.duration
    NewMovieArray.genre = obj.genre
    NewMovieArray.rate = obj.rate
    var hou = 0
    var min = 0
    if(NewMovieArray.duration.indexOf("min")<0){
      var splitArray = (NewMovieArray.duration)
      hou = parseInt(splitArray)
    }
    else if (NewMovieArray.duration.indexOf("h")<0) {
      var splitArray = (NewMovieArray.duration)
      min = parseInt(splitArray)
    }
    else {
      var splitArray = (NewMovieArray.duration.split(" "))
      hou = parseInt(splitArray[0])
      min = parseInt(splitArray[1])
    }
    NewMovieArray.duration = (hou*60)+min;
    return NewMovieArray

  })
}

turnHoursToMinutes(movies)


// Get the average of all rates with 2 decimals 

function ratesAverage (arr) {
  var sum = arr.reduce(function(acc, n) {
    return acc + parseFloat(n.rate) ;
  }, 0)

  var fullaverage = sum/arr.length
  var roundedAverage = (Math.round(fullaverage*100)/100)
  return roundedAverage
}

ratesAverage(movies)

// Get the average of Drama Movies

function dramaMoviesRate (arr) {
  var dramaMovies = arr.filter (function(element){
    return element.genre.indexOf("Drama")>=0
  })
  if (dramaMovies == "") {
    return undefined
  }
  else {
    return ratesAverage(dramaMovies) 
  }
}

dramaMoviesRate (movies)

// Order by time duration, in growing order

function orderByDuration (arr) {
  var minutesArray = turnHoursToMinutes(arr)
  var sortedArray = minutesArray.sort(function(a, b) {
    return a.duration - b.duration;
  });
  return sortedArray
}

orderByDuration(movies)

// How many movies did STEVEN SPIELBERG

function howManyMovies (arr) {
  if(arr == "") {
    return undefined
  }
  else {
    var spielbergMovies = arr.filter(function(obj) {
      obj.director == "Steven Spielberg"});
    var spielbergDramaMovies = spielbergMovies.filter(function(obj) {
      obj.genre.includes("Drama")})
    if(spielbergDramaMovies = "") {
    return "Steven Spielberg directed 0 drama movies!"
    }
    else {
    return "Steven Spielberg directed "+spielbergDramaMovies.length+" drama movies!"
    }
  }
}

howManyMovies(movies)

// Order by title and print the first 20 titles


// Best yearly rate average
