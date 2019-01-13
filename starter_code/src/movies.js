/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (movies){
    var moviesCopy = movies.map(function(movie){
        var total = 0;
        if (typeof(movie.duration)==="number"){
            total = movie.duration;
        } else {
        var time = movie.duration.split(" ");
            var hour = 0;
            var min = 0;
            time.forEach(function(data){
                if (data.indexOf("h") > -1) {
                    hour = parseInt(data)*60;
                } else {
                    min = parseInt(data);
                } 
            });
            total = hour + min;
        } 
        var newMovies = Object.assign({}, movie, {duration: total})
        return newMovies;
    });
    return moviesCopy;   
}

/*
Notas:
- declarar la función, que recibe un parámetro
- recorrer el array y ver qué tiene
- mientras recorro el array, obtengo su duración
- cojo las horas, cojo los minutos y las horas las multiplico por sesenta. Una vez que las multiplico, le sumo los minutos
- reemplazo la duración por la nueva en minutos
- devuelvo un nuevo array con las copias de objetos
*/

// Get the average of all rates with 2 decimals 

function ratesAverage (movies) {
    var rateMovies = movies.reduce(function(total, movie) {

        return total + movie.rates
    }) 

    



// Get the average of Drama Movies




// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
