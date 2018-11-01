/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
  for(var elemento of movies){
    var hora = elemento.duration[0] * 60
    var minutos = elemento.duration[3]+elemento.duration[4]
    var tiempo = hora + parseInt(minutos)
    return elemento.duration = tiempo.toString()
  }
}

// Get the average of all rates with 2 decimals 

function ratesAverage(arreglo){
  var suma = arreglo.reduce((accumulator, num)=>{
    return accumulator + parseFloat(num.rate)
  },0)
  return (suma/arreglo.length).toFixed(2)
}

// Get the average of Drama Movies

function dramaMoviesRate(arreglo){
  var countDrama = 0
  var suma = arreglo.reduce((accumulator, num)=>{
    for(var genero of num.genre){
      if(genero === "Drama"){
        var existeDrama = true
        countDrama ++
      }
    }
    if(existeDrama) return accumulator + parseFloat(num.rate) 
    else return accumulator
  },0)
  return (suma/countDrama).toFixed(2)
}

// Order by time duration, in growing order

function orderByDuration(arreglo){
  return arreglo.sort( (objeto1,objeto2) => objeto1.duration - objeto2.duration)
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(arreglo){
  return arreglo.filter(objeto =>{
    for(var drama of objeto.genre){
      if(drama === "Drama"){
        var dramaExiste = true
      }
    }   
     return objeto.director === "Steven Spielberg" && dramaExiste === true
  })
}

// Order by title and print the first 20 titles

function orderAlphabetically(arreglo){
  arreglo.sort(function(a, b) {
    var nameA = a.title.toUpperCase(); // ignore upper and lowercase
    var nameB = b.title.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  })
var titulos = []
  for(var i = 0; i < arreglo.length; i++){
    titulos.push(arreglo[i].title)
  }
return titulos
}

// Best yearly rate average
