/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(unArray) {
  var newArray = unArray.map(function(movie){

     var arr = movie.duration.split(" ")

     if (arr.length == 2) {
       var duration = parseInt(arr[0].replace("h","")*60) + parseInt(arr[1].replace("min",""))
       return Object.assign({},movie, {duration: duration})
     } else {
       if (arr[0].includes("h")) {
       var duration = parseInt(arr[0].replace("h","")*60)
      return Object.assign({},movie, {duration: duration})
       } else {
       var duration = parseInt(arr[0].replace("min",""))
      return Object.assign({},movie, {duration: duration})
       }
      }
    })
    
    return newArray
    
}



// Get the average of all rates with 2 decimals 

function ratesAverage(unArray2) {

  var averageRateArray = unArray2.reduce(function(ac, movie){
      return {
        averageRate: ac.averageRate + parseFloat(movie.rate)
  }, {
    averageRate: 0
  });
  
  return console.log(Number((averageRateArray.averageRate).toFixed(2)))
  
  
  }

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
