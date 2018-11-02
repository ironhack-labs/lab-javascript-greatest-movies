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

function ratesAverage (movies2){
  var promedio = 0
  for(var i = 0; i < movies2.length; i++){
   promedio = promedio + parseFloat(movies2[i].rate)
  }
  return (parseFloat((promedio/movies2.length).toFixed(2)))
}

// Get the average of Drama Movies

function dramaMoviesRate (movies2){
  var drama = 0
  var cont= 0
  for(var i = 0; i < movies2.length; i++){
    for(var j=0;j<movies2[i].genre.length; j++ ){
        if(movies2[i].genre[j] === "Drama"){
          drama = drama + parseFloat(movies2[i].rate) 
          cont++
        }
    }
    
  }
  return (parseFloat((drama/cont).toFixed(2)))
}
// Order by time duration, in growing order

function orderByDuration (arr){

  var x= turnHoursToMinutes(arr)
  console.log(x)
  
  
  
   var d = x.map(function(i){
     return i.duration
   })
  
  
  
   var order = d.sort(function(a,b){
     return a-b
   })
  
  
  var ordenado = []
  
  for(var i=0 ; i < x.length ; i++){
  
   if(order[i] ===  x[i].duration){
       ordenado.push( x[i])
   }
  
  }
   return ordenado
  
  }


// How many movies did STEVEN SPIELBERG


function dramaMoviesRate (arr){

  var arre=[];
    for(var i = 0; i < arr.length; i++){
      if (arr[i].director === 'Steven Spielberg') {
          var cont=0;
            for(var j=0;j<arr[i].genre.length; j++ ){
  
          
              if (arr[i].genre[j]==="Drama"){
              arre.push(arr[i]) }
  
              }
  
      }
    }
    
    return arre;
  }

// Order by title and print the first 20 titles


// Best yearly rate average
