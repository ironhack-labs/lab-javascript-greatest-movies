/* eslint no-restricted-globals: 'off' */

var movies = movies;

// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr) {
    var newArray = arr.map(function(movie){
        var duracion = movie.duration;

        if (typeof duracion == "string"){
            if(duracion.indexOf("h") > 0 && duracion.indexOf("min") > 0){
                var horas = duracion.split(" ")[0];
                var minutos = duracion.split(" ")[1];
                var calculo = parseInt(horas)*60 + parseInt(minutos);
                duracion = calculo;
            } else if (duracion.indexOf("h") > 0) {
                var horas = parseInt(duracion);
                duracion = horas * 60;
            } else if (duracion.indexOf("min") > 0) {
                var minutos = parseInt(duracion);
                duracion = minutos;
            }
        }

        if (movie.title){
            return {title: movie.title, duration: duracion};
        } else {
            return {duration: duracion};
        }
    });

    return newArray;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(arr) { 
    var sumaPuntuaciones = arr.reduce(function(suma, movie){
        var puntuacion = parseFloat(movie.rate);

        if (isNaN(puntuacion)){
            return suma;
        }
        return suma + puntuacion;
    }, 0)

    var media = sumaPuntuaciones/arr.length;
    return Math.round(media * 100) / 100;
}

// Get the average of Drama Movies
function filtrarPelisDrama(arr){
    var dramaMovies = arr.filter(function(movie){
        return movie.genre.includes("Drama");
    });
    return dramaMovies;
}

function dramaMoviesRate(arr) {
    var dramaMovies = filtrarPelisDrama(arr);

    if (dramaMovies.length == 0) {
        return undefined;
    }
    return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order
function orderByDuration(arr) {
    var peliculas = turnHoursToMinutes(arr);
    
    peliculas.sort(function(a,b){
        if (a.duration == b.duration){
            if(a.title < b.title) return -1;
            if(a.title > b.title) return 1;
            return 0;
        }
        return a.duration - b.duration;
    });

    return peliculas;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr){
    if(arr.length == 0){return undefined}

    var dramaMovies = filtrarPelisDrama(arr);
    var counter = 0;

    dramaMovies.forEach(function(movie){
        if (movie.director == "Steven Spielberg") {
            counter++;
        }
    });

    return "Steven Spielberg directed "+counter+" drama movies!";
}

// Order by title and print the first 20 titles
function orderAlphabetically(arr){
    if(arr.length == 0){return []}

    arr.sort(function(a,b){
        if(a.title < b.title) return -1;
        if(a.title > b.title) return 1;
        return 0;
    });

    var orderedMovies = []
    for(var i = 0; i < 20; i++) {
        if(arr[i]){
            orderedMovies.push(arr[i].title);
        }
    }

    return orderedMovies;
}

// Best yearly rate average
function bestYearAvg(arr){
    
}