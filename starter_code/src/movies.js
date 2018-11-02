/* eslint no-restricted-globals: 'off' */
var movies = require("./data.js");

// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies){
    var minutos =movies.map((elem)=>{
      duracion = elem.duration 
      if (duracion.length === 7) {
    var a = duracion.charAt(0)
    var b = duracion.charAt(3)
    
    var Hora = parseInt(a)
    var dmin = parseInt(b)
    
    var duracionCorregida = Hora*60 + dmin
    
    elem.duration = duracionCorregida
    return elem
    }
    
    else if (duracion.length === 8) {
    
    var a = duracion.charAt(0)
    var b = duracion.charAt(3)
    var c = duracion.charAt(4)
    
    var Hora = parseInt(a)
    var dmin = parseInt(b)
    var seg = parseInt(c)
    
    var duracionCorregida = Hora*60 + dmin*10 +seg
    
    elem.duration = duracionCorregida
    return elem
    }
        })
        return minutos
    }
  
  turnHoursToMinutes(movies)

// Get the average of all rates with 2 decimals 

function ratesAverage (movies){
    
}

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
