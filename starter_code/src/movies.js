/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(pelis){
    movies.map(movie => {
    var dura=movie.duration
    var parts = dura.split(" ")
    var div=parseInt(parts[0])
    var div2=parseInt(parts[1])
    var min= div*60 +div2;
    movie.duration=min;
    return movie
  })
  }
  turnHoursToMinutes(movies)
  
// Get the average of all rates with 2 decimals 

function ratesAverage(pelis){
    var arreglo=movies.map(calific=> {
    var rates=calific.rate
    var conv=parseFloat(rates)
    return conv
  })

  var promedio=arreglo.reduce((accumulator,elem)=>{
    return accumulator + elem
  })
  promediofinal=promedio/arreglo.length
  var n=promediofinal.toFixed(2);
  return n
  }
// Get the average of Drama Movies
var miedo=movies.map(x=>{
  return x.genre
  
})

var drama=miedo.filter(pelisMiedo=>pelisMiedo==="Drama")


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
