/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movie_array){
  var new_movie_array = movie_array.map((movie)=>{
    //console.log(movie.title)
    var movie_hora = movie.duration.split(' ')[0].split('').filter(char=>char>0)[0]
    var movie_min = movie.duration.split(' ')[1].split('min').filter(char=>char>0)[0]

    //console.log("Horas " + movie_hora + " Minutos " + movie_min)
    movie.duration = (movie_hora*60 + movie_min*1)
    return movie
  })
  //console.log(new_movie_array)
  return new_movie_array
}

// Get the average of all rates with 2 decimals 
function obtienePromedio(array){
  var suma = 0;
  var promedio = 0;
  for (var i=0;i<array.length;i++){
    suma+= array[i].rate*1
  }
  //console.log("Total de obj "+ array.length)
  promedio = suma / array.length
  //console.log("El promedio es: "+ promedio.toFixed(2))
  return promedio.toFixed(2)
}

// Get the average of Drama Movies
function dramaMoviesRate(array){
  var suma = 0;
  var promedio = 0;
  var drama_movies = 0;

  for (var i=0;i<array.length;i++){
    if(array[i].genre.indexOf('Drama')!= -1){
    suma+= array[i].rate*1
    drama_movies++;
    }
  }
  promedio = suma / drama_movies
  return promedio.toFixed(2)
}

// Order by time duration, in growing order
function ordenaDuracion(array){
  var arrOrdenado = array.sort(function(a,b){
  if(a.duration > b.duration){
    return 1
  }
  if (a.duration < b.duration){
    return -1
  }
  if(a.duration === b.duration && a.title < b.title ){
    return -1
  }
  return 0
})
  return arrOrdenado
}
// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
  var drama_Steven_movies = 0;
  for (var i=0;i<array.length;i++){
    if(array[i].genre.indexOf('Drama')!= -1 && array[i].director.indexOf('Steven Spielberg')!= -1){
    drama_movies++;
    }
  }
  return drama_Steven_movies
}

// Order by title and print the first 20 titles
function orderAlphabetically(array){
  var arrOrdenado = array.sort(function(a,b){
  if(a.title > b.title){
    return 1
  }
  if (a.title < b.title){
    return -1
  }
  return 0
})
  for(var i=0;i<20;i++){
  console.log(arrOrdenado[i].title)}
  return arrOrdenado
}

// Best yearly rate average

function encuentraMejor(movie_array){
  var years = []
  var rates = []
  var avg_rate=0;
  var new_movie_array = movie_array.map((movie)=>{
    if(years.indexOf(movie.year)===-1){
        years.push(movie.year)
    }
    return movie
  })
  var years = years.sort()
  //console.log(years)
var years_rates = []
  for(var i=0;i<years.length;i++){
    var rate = 0
    var cuenta = 0
    for(var j=0;j<movie_array.length;j++){
      if(movie_array[j].year===years[i]){
        rate+=movie_array[j].rate*1
        cuenta++
      }
    }
    years_rates.push({
      year:years[i],
      rate_avg:(rate/cuenta).toFixed(2)
      })
  }
  var bueno = years_rates.sort(function(a,b){
  if(a.rate_avg < b.rate_avg){
    return 1
  }
  if (a.rate_avg > b.rate_avg){
    return -1
  }
  return 0
})
return bueno[0]
}
