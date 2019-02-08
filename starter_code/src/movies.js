/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// function turnHoursToMinutes (array) {

//   var moviesCopy = array.map(function(){

//   })

// }


function transformString(string) {

  var newDuration = ""

  var indexHours = string.indexOf("h")

  var indexMinutes = string.indexOf("m")

  var indexSpace = string.indexOf(" ")

  if(string.includes("h") && string.includes("min")) {

    var transformHours = string.slice(0, indexHours) * 60

    var transformMinutes = parseInt(string.slice(indexSpace + 1, indexMinutes)) 
    
    newDuration = transformHours + transformMinutes

    return newDuration
    
  } else if(!string.includes("h") && string.includes("min")){

    var minutes = parseInt(string.slice(indexSpace + 1, indexMinutes))

    return minutes

  } else if(string.includes("h") && (!string.includes("min"))) {

    var hours = string.slice(0, indexHours) * 60

    return hours

  }

}



function turnHoursToMinutes (movies) {



  var copyMovies = movies.map(function(peli){


  return Object.assign({},peli,{duration: transformString(peli.duration)})    


  })

  return copyMovies

}




// Get the average of all rates with 2 decimals 


function ratesAverage (movies) {

  var total = 0

  movies.forEach(function(peli) {

    total += parseFloat(peli.rate)
   
  })

  total =  total.toFixed(2)

  var averageTotal = (total / movies.length)

  averageTotal = parseFloat(averageTotal.toFixed(2))

  return averageTotal
}


console.log(ratesAverage(movies))



// Get the average of Drama Movies



function dramaMoviesRate(movies) {

  var drama = []

  var moviesLength = movies.length

  movies.forEach(function(peli) {

    peli.genre.forEach(function(names) {

      if(names === "Drama") {

        drama.push(names)


      }

    })

  })

  var dramaLength = drama.length

  console.log(drama.length)

  var average = 0

  average += dramaLength / moviesLength

  return average


}

console.log(dramaMoviesRate(movies))



// Order by time duration, in growing order 


function separateString (string) {

  var durationArray = []

  var indexHours = string.indexOf("h")

  var indexMinutes = string.indexOf("m")

  var indexSpace = string.indexOf(" ")

  if(string.includes("h") && string.includes("min")){

      var hours = parseInt(string.slice(0, indexHours))

      var minutes = parseInt(string.slice(indexSpace + 1, indexMinutes))

      durationArray.push(hours, minutes)

  } else if (!string.includes("h") && string.includes("min")) {

        var minutes = parseInt(string.slice(indexSpace + 1, indexMinutes))

        durationArray.push(0, minutes)

  } else if(string.includes("h") && (!string.includes("min"))) {

        var hours = parseInt(string.slice(0, indexHours))

        durationArray.push(hours, 0)

  }

 return durationArray

}

separateString("20min")


function sortDurationArray (separateString) {

  var sorted = array.sort(function(a, b) {

    return a - b

  })

}





// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
