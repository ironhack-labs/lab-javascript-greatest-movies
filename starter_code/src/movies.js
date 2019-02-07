/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
/*
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
*/

var turnHoursToMinutes = function(arr){
  arr.map(function(elm){
    elm.duration.changeFormatTime()
  })  
  console.log(turnHoursToMinutes) 

  var keep = object.assign({},arraySalida[0], arr);


  //var take = Object.assign({}, a, {name: 'test'});
  
  return keep
}


// Funcional que transforma string de duración a number
var str = "2h 22min"
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
console.log(changeFormatTime(str))






var b = object.assign({},arr[0], {movies.name}
  
  b.forEach.changeFormatTime(arr.duration)

// Get the average of all rates with 2 decimals 
function ratesAverage(arr){

}

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
