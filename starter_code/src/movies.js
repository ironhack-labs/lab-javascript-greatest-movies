/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
// let movies = require('./data');
let moviesTime = turnHoursToMinutes(movies);

function turnHoursToMinutes(movies){
    let arrNew = [];
    movies.map((movie) => {
        // Dividir o tempo em 2 ('h' e 'm')
        let tempo = movie.duration.split(' ');

        // pegar a hora
        let hours = parseInt(tempo[0]);
        
        // pegar o minuto
        let minutes;

        //validar se minuto existe
        if (tempo.length <= 1) {
            minutes = 0;
        } else {
            minutes = parseInt(tempo[1]);
        }

        if (tempo.length = 0) {
            hours = 0;
        }
        // multiplicar horas por 60 e somar minutos        
        let hoursToMinutes = (hours * 60) + minutes;

        movie.duration = hoursToMinutes;

        //retornar para o objeto
        arrNew.push(movie);
    })
    return arrNew;
}

// console.log(turnHoursToMinutes(movies));


// Get the average of all rates with 2 decimals 

function ratesAverage(movies){
    // console.log(movies)
    let rates = movies.reduce((acc, movie) => {
        
    return  acc + parseFloat(movie.rate)
    },0);
    let avgRates = rates / movies.length;
    return avgRates.toFixed(2);
}

// console.log(ratesAverage(movies));

// Get the average of Drama Movies


function dramaMoviesRate(movies){

    // filtrar filmes que contem DRAMA
    dramaMovies = [];
    movies.map(function(movie){

            movie.genre.map(function(genre){

                if (genre == 'Drama') {
                    dramaMovies.push(movie)
                }

            });

    });
    
    // Somar notas dos filmes de Drama
    dramaRate = dramaMovies.reduce(function(acc,movie){

        return acc + parseFloat(movie.rate);

    },0);

    // Calcular a média das notas

    dramaRate = dramaRate / dramaMovies.length;

    return dramaRate.toFixed(2);      

}

//console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order

function orderByDuration(movies){
    
    movies.map(function(movie){

        movie.sort();
        console.log(movie);
    })
}

console.log(orderByDuration(moviesTime));

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
