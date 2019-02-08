/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

var movies = arr[
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  },
  { 
    title: 'The Godfather',
    year: '1972',
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    rate: '9.2'
  }]

var arr = movies

function turnHoursToMinutes(arr){
  arr.map(function(elm){
    elm.duration.changeFormatTime()
  })
  var keeper = object.assign({}, arr)
  return keeper
}
console.log(keeper)


// Funcion que transforma string de duración a number

// var str = "2h 22min"
var str = arr.duration
var horas = 0
var minutos = 0

function changeFormatTime(str){
  if (str.indexOf("h") !== -1){
    horas = parseFloat(str.substring(0,2))
    minutos = parseFloat(str.substring(3,str.legth))
  } else {
    minutos = parseFloat(str)
  }
  return horas * 60 + minutos
}
//console.log(changeFormatTime(str))


// Get the average of all rates with 2 decimals 
function ratesAverage(arr){
  var extraccion = arr.rate.map(function(elm){

    return elm.parseFloat()
  })
    
  var arrayAverage = extraccion.reduce(function(Acumulador, valorActual){
    return (Acumulador + valorActual)/arr.length
  } 
  )
console.log(ratesAverage(movies))


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
