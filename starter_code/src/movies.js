/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(moviesArr) {

  return moviesArr.map(function(element) {

    function stringToMinutes(string) {
    var arr = string.split('h')
    var hours = Number(arr[0])
    var minutes = Number(arr[1].split("min")[0])
    
      return hours*60+minutes
    } 
  })
}
/* function stringToMinutes(string) {
    var arr = string.split('h')    
    if (arr.length < 2) {
        arr.unshift("0")        
    }    
    var hours = Number(arr[0])
    var minutes = Number(arr[1].split("min")[0])

    return hours*60+minutes
}

*/ 


// Get the average of all rates with 2 decimals 

function ratesAverage (array) {

var sum = array.reduce(function(accu, current) {

return accu + parseFloat(current.rate)

}, 0) 

var count = array.length

return sum / count;

}

// Get the average of Drama Movies


function dramaMoviesRate (array) {

var filter = array.filter(function(first){
 return first.genre.includes("Drama")
})

var rating = filter.reduce(function(accu, current) {

  return accu + parseFloat(current.rate)
  
  }, 0) 
  
var count = array.length
  
  return rating / count;
  

}



// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
