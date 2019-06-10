/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArray){
  let result = ""
  let time = moviesArray.map(movie => {
  result = movie.duration.split(" ")
  if(result.length === 2){
    horas = parseInt(result[0])*60
    minutos = parseInt(result[1])
    duration = horas+minutos
  }
  else if (result[0].includes("h"))
  {
    duration = parseInt(result[0])*60
  }
  else{
      duration = parseInt(result[0])
    }
    
  return {duration : duration}
  })
  return time
}

function ratesAverage(moviesArray){
  let movieRate = moviesArray.reduce((acumulador, valoractual)=>{
  return acumulador + valoractual.rate
},0)/moviesArray.length
return parseFloat(movieRate.toFixed(2))
}

function dramaMoviesRate(moviesArray){
  let dramaMovie
  let drama = moviesArray.filter(function(movie){
    return movie.genre.includes("Drama")
  });
  if(drama.length == 0) return undefined
  return ratesAverage(drama)
    
}
function orderByDuration(moviesArray){

 let orden = moviesArray.sort(function(a, b){
  if(a.duration == b.duration){
    if (a.title > b.title) return 1;
    if (a.title == b.title) return 0;
    if (a.title < b.title) return -1;
  }
  return a.duration-b.duration})
  return orden
}

function howManyMovies(moviesArray){
  if(moviesArray.length == 0) return undefined
let drama = moviesArray.filter(function(movie){
  return movie.genre.includes("Drama") && movie.director.includes("Steven Spielberg")
});

return `Steven Spielberg directed ${drama.length} drama movies!`

}

function orderAlphabetically(moviesArray){
  let orden = moviesArray.map(movie => movie.title).sort().splice(0,20) 
  return orden
}

