/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(peliculas){
    if(peliculas.length == 0) return
    var minuteMovies = peliculas.map(function(pelicula){
        return Object.assign({}, pelicula, {duration:transform(pelicula.duration)}) 
    })
    return minuteMovies
}

function transform(horas){
  
    var horaMin = [0]
    var minutosTotales = 0


    
    if(horas){
        if(horas.includes("min") && horas.includes("h")){
            horas = horas.replace("min", "")
            horaMin = horas.split("h ")
            minutosTotales = parseInt(horaMin[0]*60) + parseInt(horaMin[1]);
        } else if(horas.includes("min")) {
            minutosTotales = parseInt(horas)
        } else if(horas.includes("h")){
            horas = horas.replace("h", "")
            minutosTotales = 60 * parseInt(horas)
        }
    }

    return minutosTotales
}

// Get the average of all rates with 2 decimals 
function ratesAverage(peliculas){
    var total = peliculas.reduce(function(acu,pelicula){
        if(!pelicula.rate){
            return acu
        }
        return acu + parseFloat(pelicula.rate);
    },0)
    return parseFloat(parseFloat((total/peliculas.length).toFixed(2)))
}

// Get the average of Drama Movies
function dramaMoviesRate(peliculas){
    if(peliculas.length == 0) return
    var dramas = peliculas.filter(function(pelicula){
        var genero = pelicula.genre.filter(function(gen){
            return gen == 'Drama'
        })
        return genero.length != 0
    })
    if(dramas.length == 0){
        return undefined
    }
    return ratesAverage(dramas)
}

// Order by time duration, in growing order
function orderByDuration(peliculas){
    //var peliculasMin = turnHoursToMinutes(peliculas)
    var peliculasMinSorted = peliculas.sort(function(pelicula1, pelicula2){
        if (pelicula1.duration < pelicula2.duration){
            return -1;
        }
        if (pelicula1.duration > pelicula2.duration){
            return 1;
        }
        if(pelicula1.title<pelicula2.title){
            return -1
        }
        if(pelicula1.title>pelicula2.title){
            return 1
        }
        return 0;
    })
    console.log(peliculasMinSorted[0].duration)
    return peliculasMinSorted
}

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
