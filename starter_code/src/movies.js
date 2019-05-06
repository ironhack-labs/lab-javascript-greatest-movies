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

function ratesAverage(lista) {

    //quitar aquellso que no tendna rate


    let numItems = lista.length;

    if (numItems === 0) {
        return;
    }

    let sumaTotal = lista.reduce((total, item) => {

        if(item.rate ===undefined || item.rate===''){
            return total;
        }else{
            return total + parseFloat(item.rate);
        }


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

    let lista = listaMovies
        .map((movie) => {
            return movie.title
        })
        .sort((a, b) => {
            return a.localeCompare(b);
        });


    if (lista.length > 20) {
        lista = lista.slice(0, 20);
    }


    return lista;
}

/* ************************************************************ */

function bestYearAvg(listaMovies) {


    
    function getRespuestoFromModel(model) {
        return `The best year was ${model.year} with an average rate of ${model.rate}`
    }
    
    if (listaMovies.length === 0) {
        return;
    }

    if (listaMovies.length === 1) {
        return getRespuestoFromModel(listaMovies[0]);
    }


    /*
    * buscar cual es el max rate de todos los años
    * los datos viene como rate:"8.0"
    * vamos a crear un objeto data{year,maxrate} y paso 2 sacar el item
    * */

    //buscar todos los años
    let listaYear = [];
    listaMovies.forEach(movie => {

        let year = movie.year;

        let indexYear = listaYear.indexOf(year);
        if (indexYear === -1) {
            listaYear.push(year);
        }
    });


    let listaRatePerYear = listaYear.map(y => {

        //filtrar todas las peliculas del año
        let listaMoviesYear = listaMovies.filter((item => {
            return item.year === y;
        }));

        let promedio = ratesAverage(listaMoviesYear);

        return {'year': y, 'rate': promedio};

    });

    let bestYear = {year: null, rate: 0};

    listaRatePerYear.forEach(yearRate => {

        if(yearRate.rate === bestYear.rate && yearRate.year > bestYear.year){
            bestYear = yearRate;
        }

        if (yearRate.rate > bestYear.rate) {
            bestYear = yearRate;
        }
    });



    //buscar el maxRate de todos los años

    return getRespuestoFromModel(bestYear);

}