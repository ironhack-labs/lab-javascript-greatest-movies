/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(data) {


    let listaNew = [];


    data.forEach(movieOriginal => {


        let movie = {
            title: movieOriginal.title,
            year: movieOriginal.year,
            director: movieOriginal.director,
            duration: movieOriginal.duration,
            genre: movieOriginal.genre,
            rate: movieOriginal.rate
        };


        let isTimeMin = movie.duration.indexOf("min") > -1;
        let isTimeH = movie.duration.indexOf("h") > -1;


        let duracion = movie.duration.toString()
            .replace('h', '')
            .replace('min', '')
            .split(' ');


        let minutosDuration = 0;
        let horasDuration = 0;

        if (isTimeMin && isTimeH) {
            horasDuration = parseInt(duracion[0]);
            minutosDuration = parseInt(duracion[1]);

        } else {

            if (isTimeMin) {
                minutosDuration = parseInt(duracion[0]);
            }

            if (isTimeH) {
                horasDuration = parseInt(duracion[0]);
            }
        }


        movie.duration = horasDuration * 60 + minutosDuration;

        listaNew.push(movie);

    });

    return listaNew;


}

function ratesAverage(arrayOfRating) {

    let numItems = arrayOfRating.length;

    if (numItems === 0) {
        return;
    }

    let sumaTotal = arrayOfRating.reduce((total, item) => {
        return total + item.rate;
    }, 0);


    let promedio = sumaTotal / numItems;

    promedio = Math.round(promedio * 100) / 100;

    return promedio;
}

function dramaMoviesRate(movies) {

    /*step 1 filter only genre drama*/
    let listaMovieDrama = movies.filter(function (itemMovie) {

        /* step 1a buscar en genre si hay drama*/
        let indexDrama = itemMovie.genre.indexOf('Drama');

        return indexDrama > -1;
    });

    return ratesAverage(listaMovieDrama);


}


function orderByDuration(listaMovies) {

    return listaMovies.sort((a, b) => {

        if (a.duration === b.duration) {
            return a.title.localeCompare(b.title);
        }

        if (a.duration > b.duration) {
            return 1;
        } else {
            return -1;
        }


    });
}

function howManyMovies(listaMovies) {

    if (listaMovies.length === 0) {
        return;
    }

    let director = 'Steven Spielberg';
    let genero = 'Drama';

    let lista = listaMovies
        .filter(m => {
            return m.director === director
        })
        .filter(m => {
            let indexGenero = m.genre.indexOf(genero);

            return indexGenero > -1;
        });

    let num = lista.length;


    return `Steven Spielberg directed ${num} drama movies!`

}


/* *************************************************** */

function orderAlphabetically(listaMovies) {

    let lista= listaMovies
        .map((movie) => {
            return movie.title
        })
        .sort((a, b) => {
            return a.localeCompare(b);
        });


    if(lista.length>20){
        lista=lista.slice(0,20);
    }


    return lista;
}

/* ************************************************************ */

function bestYearAvg(listaMovies){

    if(listaMovies.length===0){
        return ;
    }


}