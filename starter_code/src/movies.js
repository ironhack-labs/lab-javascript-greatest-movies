/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function (elem) {
        var hours = 0;
        var minutes = 0;
        if (elem.duration.indexOf('h') !== -1) {
            hours = parseInt(elem.duration[0], 10) * 60;
        }
        if (elem.duration.indexOf('min') !== -1) {
            minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
        }
        return Object.assign({}, elem, { duration: hours + minutes });
    });
}
turnHoursToMinutes(movies);
// Get the average of all rates with 2 decimals 

function ratesAverage(moviesArray){
    var sumTotal = moviesArray.reduce(function (acc,elem) {
        return acc + parseFloat(elem.rate);
    },0)
    return sumTotal / moviesArray.length;

}
ratesAverage(movies);


// Get the average of Drama Movies
function dramaMoviesRate(moviesArray){
    var currentDramas = 0;
    var sumDramaFilms = moviesArray.forEach(function (elem) {
        for( var i = 0; i < elem.length; i++){
            if(elem.genre[i] === "Drama"){
                currentDramas ++;
            }
        }
    });
    return currentDramas/ moviesArray.length;
}
dramaMoviesRate(movies);


// Order by time duration, in growing order


/* function orderByDuration(moviesArray){
    
    filmByDuretion = movies.map(function (elem) {
        return elem.duration;
    })
    return filmByDuretion; // Array con solo los datos de la duración de las peliculas.

    filmByDuretion.sort(function (a, b) {
        return a - b;
    });
    return filmByDuretion // Array que retorna oredenada por su duracion

}
 */
function orderByDuration(moviesArray) {

filmArrayDuration = moviesArray.sort(function (a,b) {
    return a.duration - b.duration;
    if(a.duration < b.duration){
        return -1;
    }else if(a.duration > b.duration){
        return 1;
    }else{
        return 0;
    }
    return filmArrayDuration;
    
})
}

orderByDuration(movies);


// How many movies did STEVEN SPIELBERG

function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return undefined;
    }                                           // para pasar el filtro si esta vacio
    var dramaList = moviesArray.filter(function (elem) {
        for (i = 0; i < elem.genre.length; i++) {
            if (elem.genre[i] === "Drama") {
                return elem.director === 'Steven Spielberg'
            }
        }
    });

    return ("Steven Spielberg directed " + dramaList.length + " drama movies!"); // Es un length porque es un array, no???

}


// Order by title and print the first 20 titles


function orderAlphabetically(moviesArray) {

    var orderTitles = moviesArray.sort(function (a,b) {
        var newArray = 0;


        
    })
    
}





// Best yearly rate average


