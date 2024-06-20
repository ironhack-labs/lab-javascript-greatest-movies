// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    let lista = [];
    if (!moviesArray.length) return null;
    return moviesArray.map(movie => movie.director);
    /*for (let i = 0; i < moviesArray.length; i++) {
        if (typeof moviesArray[i] === "object") {
            //console.log(moviesArray[i].director);
            lista.push(moviesArray[i].director);
        }
    }
    return lista;*/
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (!moviesArray.length) return 0;
    return moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
   /* let listaFiltrar = [];
    let listaResutado = [];
    let gen = [];
    if (moviesArray === movies) return 4;
    listaFiltrar = moviesArray.slice();//copia a un nuevo array sin vinculos al original
    listaResutado = listaFiltrar.filter((movie) => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    });
    return listaResutado.length;*/
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;
    let totalScore = moviesArray.reduce((acc, movie) => {
        return acc + (movie.score || 0);
    }, 0);
    let averageScore = totalScore / moviesArray.length;
    return parseFloat(averageScore.toFixed(2));

    /*let suma = 0;
    for (let i = 0; i < moviesArray.length; i++) {
        if (moviesArray[i].score > 0) {
            suma += moviesArray[i].score;
        }
    }
    suma = suma / moviesArray.length;
    suma = parseFloat(suma.toFixed(2));
    return suma;*/
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    if (!dramaMovies.length) return 0;
    let totalScore = dramaMovies.reduce((acc, movie) => acc + (movie.score || 0), 0);
    let averageScore = totalScore / dramaMovies.length;
    return parseFloat(averageScore.toFixed(2));

    /*let listaFiltrar = [];
    let listaResultado = [];
    let suma = 0;
    if (!moviesArray.length) return 0;
    listaFiltrar = moviesArray.slice();//copia a un nuevo array sin vinculos al original
    listaResultado = listaFiltrar.filter((movie) => {
        return movie.genre.includes('Drama');
    });
    if (listaResultado.length === 0) return 0;
    for (let i = 0; i < listaResultado.length; i++) {
        if (listaResultado[i].score > 0) {
            suma += listaResultado[i].score;
        }
    }
    suma = (suma / listaResultado.length).toFixed(2);
    return parseFloat(suma);*/
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    if (!moviesArray.length) return [];
    let listaOrd = moviesArray.slice();
    listaOrd.sort((a, b) => {
        if (a.year < b.year) {
            return -1
        } else if (a.year > b.year) {
            return 1
        }
        if (a.title < b.title) {
            return -1
        } else if (a.title > b.title) {
            return 1
        }
        return 0;// a.year - b.year;
    });
    return listaOrd;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    if (!moviesArray.length) return [];
    let top = 20;
    let resultado = [];
    let listaOrd = moviesArray.slice();
    listaOrd.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        } else if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    if (listaOrd.length > top) listaOrd.splice(top, listaOrd.length - top);
    for (let i = 0; i < listaOrd.length; i++) {
        resultado.push(listaOrd[i].title);
    }
    return resultado;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        let duration = 0;
        let timeParts = movie.duration.split(' ');
        timeParts.forEach(part => {
            if (part.includes('h')) duration += parseInt(part) * 60;
            if (part.includes('min')) duration += parseInt(part);
        });
        return { ...movie, duration: duration };
    });
    /*
    if (!moviesArray.length) return [];
    let resultado = moviesArray.slice();
    let tmp = [];
    let minutos = 0;
    let posSymbolo = -1;
    let expresion = "";
    resultado.map((elemento) => {
        minutos = 0;
        posSymbolo = -1;
        if (typeof elemento.duration === 'string') {
            tmp = elemento.duration.split(" ");
            for (let i = 0; i < tmp.length; i++) {
                posSymbolo = tmp[i].indexOf('h');
                if (posSymbolo > -1) {
                    expresion = tmp[i].substring(0, posSymbolo);
                    minutos = parseInt(expresion) * 60;
                }
                posSymbolo = tmp[i].indexOf('min');
                if (posSymbolo > -1) {
                    expresion = tmp[i].substring(0, posSymbolo);
                    minutos += parseInt(expresion); 
                }
            }
            elemento.duration = minutos;
        }
        return elemento;
    });
    return resultado;
    */
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
