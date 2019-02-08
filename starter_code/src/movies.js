/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(arr){
  return arr.map(function(elm){
    // map recorre el array y devueleve uno igual donde aplica una función
    return Object.assign({}, elm, {duration: changeFormatTime(elm.duration)}) 
    // creame un {} donde guardas una copia de elm y le metes {duration: changeFormatTime(elm.duration)}
  })
}


// Funcion que transforma string de duración a number

// var str = "2h 22min"


function changeFormatTime(str){

  if (str.indexOf("h") !== -1){
    var horas = parseFloat(str.substring(0,2))
    var minutos = parseFloat(str.substring(3,str.legth))
  } else {
    minutos = parseFloat(str)
  }
  return horas * 60 + minutos
}
console.log(changeFormatTime(str))


// Get the average of all rates with 2 decimals 
function ratesAverage(arr){
  var extraccion = arr.reduce(function(acum, elm){

    return acum  elm.parseFloat()
  })
    
  var arrayAverage = extraccion.reduce(function(Acumulador, valorActual){
    return (Acumulador + valorActual)/arr.length
  } 
)
console.log(ratesAverage(movies))

}
// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
