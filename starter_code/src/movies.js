/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (array) {
  var nuevo =[]
for (var movie of array){
  var horasAMin=  0
 if(movie.duration.length!=5){
  horasAMin= movie.duration[0]*60 
} 
  var decenasMin = 0
  var minutos = 0
  if(movie.duration.length>2 && movie.duration.length!==5){
   decenasMin = movie.duration[3]*10
   minutos = movie.duration[4]*1
  }
  if(movie.duration.length===5){
   decenasMin = movie.duration[0]*10
   minutos = movie.duration[1]*1
  }
  var totalMin = horasAMin+decenasMin+minutos

  var nuevaMovie = movie
  nuevaMovie.duration = totalMin

  nuevo.push(nuevaMovie)

}
return nuevo
}
// Get the average of all rates with 2 decimals 

function ratesAverage(array){
  var suma = 0
  for(var movie of array){
    var rateNumber =movie.rate*1
    suma= suma + rateNumber
  }
  var promedio = Math.round((suma/array.length) * 100) / 100
  return suma/array.length
}




// Get the average of Drama Movies
function dramaMoviesRate (array) {
    var suma = 0
    var numDramas = 0
  for(var movie of array){
    for(var genero of movie.genre){
    if(genero=== "Drama"){
      var rateNumber =movie.rate*1    
      suma= suma + rateNumber
      numDramas++
      }
    }
  }
  var promedio = Math.round((suma/numDramas) * 100) / 100
  if (promedio===NaN){
    return undefined;
  }
  return promedio
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG

function howManyMovies(array) {
  var nuevo = []
  for (var movie of array) {
    for (var genero of movie.genre) {
      if (genero === "Drama") {
        if (movie.director === "Steven Spielberg") {
          nuevo.push(array[array.indexOf(movie)])
        }
      }
    }
  }
  return nuevo;
}

// Order by title and print the first 20 titles


// Best yearly rate average
