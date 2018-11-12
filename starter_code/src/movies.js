/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function durationInNumber (duration) { //hacemos una funcion externa para calcular el tiempo todo en min que se meta en duration de cada string y cambia datos en numeros
    duration = duration.split(' '); //convertimos el string de duracion en un array de dos string, uno para horas y otro de minutos según el formato

    var newDuration = 0;
    for (var i = 0; i<duration.length; i++) {
        if (duration[i].indexOf ("h") != -1) { //le decimos que si la duracion en la posicion iesima del los arrays no es undefined -1 en horas "h" que lo multiplique por 60
           newDuration += Number(duration[i].replace ('h', '')) * 60; //el replace cambia la h por un espacio vacío
        }
        else if (duration[i].indexOf("min") != -1) { //si tiene minutos le quitamos el min
           newDuration += Number(duration[i].replace ('min', '')) //le sumamos el anterior time que ya lleva las horas para hacer un único 
        }
    }
    return newDuration;
}

function turnHoursToMinutes (movies) {
   return movies.map (function (movie){ //el .map pilla un array y devuelve otro array con una modificación, no lo clona
       movie = Object.assign ({}, movie); // en esta línea copiamos totas las opciones de cada objeto del array a uno vacio
       movie.duration = durationInNumber(movie.duration); //le decimos que en esa copia de array que hace map nos sustituya la duración por la nueva duracion
       return movie;

   });                      
}
// Get the average of all rates with 2 decimals 

function ratesAverage (movies) {
   var rates = movies.reduce(function(sum, movie) { //sumamos todos los rate del array
       return sum += Number(movie.rate); 
   }, 0);
   return Number((rates / movies.length).toFixed(2)); //toFixed lo usamos para que tenga dos decimales
}

// Get the average of Drama Movies

function dramaMoviesRate (movies) {
   var dramaMovies = movies.filter (function(movie) { //creamos un array que nos meta todas las veces que aparece drama como genero y no es undefined
       return movie.genre.indexOf('Drama') != -1;

   });
   if (dramaMovies.length != 0) {
       return ratesAverage (dramaMovies) // en vez de hacer de nuevo una funcion para calcular la media, usamos la anterior funcion pero ahora que ataque a dramaMovies
   }
   else {
       return undefined;
   }

}
// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average