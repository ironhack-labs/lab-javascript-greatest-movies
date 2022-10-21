// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map(( obj ) => {
        let director = obj['director'];
        return director;
    });
    return newArray;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let resultado = []
    if(moviesArray.length == 0){
        return 0
    }else if(moviesArray.length > 0){
        resultado = moviesArray.filter(obj => ( obj.director == 'Steven Spielberg' && obj.genre.indexOf('Drama') > -1));
        return resultado.length;
    }else {
        return 0
    }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let resultado = [];
    if(moviesArray.length == 0){
        return 0;
    } else {
        resultado = moviesArray.filter(obj => (obj.score))
        let suma = resultado.map(obj => parseFloat(obj.score)).reduce(( ac, va ) => ac + va);
        let avg = (suma/moviesArray.length).toFixed(2);
        return parseFloat(avg);
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let resultado = [];
    resultado = moviesArray.filter( obj => obj.genre == 'Drama')
    if(resultado.length > 0 ){
        let suma = resultado.map(obj => parseFloat(obj.score)).reduce((ac, va) => ac + va);
        let avg = (suma/resultado.length)
        return parseFloat(avg.toFixed(2));
    }else{
        return 0;
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let resultado = [];
        if(!moviesArray.length == 0){
            resultado = moviesArray.sort((a,b) => {
                if( a.year < b.year ){
                    return -1
                }else if( a.year > b.year ){
                    return 1
                }else{
                    return a.title.localeCompare(b.title)
                }
            })
        }
    return resultado;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let resultado = [];
    let newArray = [];
    if(!moviesArray.length == 0){
        resultado = moviesArray.sort((a,b) => a.title.localeCompare(b.title))
        resultado.forEach((element, index) => {
            if(index < 20){
                newArray[index] = element.title;
            }else{
                return newArray;
            }
        });
    }
    return newArray;
}

function duracionEnMinutos(duracion){
    let regex = /\d+h\s\d+min/
    let regexHr= /(\d+)(h)/
    let regexMin= /(\d+)(min)/
    let totalMin = 0;
    if(regex.test(duracion)){
        let duracionHoras = regexHr.exec(duracion);
        let duracionMinutos = regexMin.exec(duracion);
        return totalMin = parseInt(duracionHoras[1])*60 + parseInt(duracionMinutos[1]);
    }else if(regexHr.test(duracion)){
        let duracionHoras = regexHr.exec(duracion);
        return totalMin = parseInt(duracionHoras[1])*60;
    }else{
        let duracionMinutos = regexMin.exec(duracion);
        return totalMin = parseInt(duracionMinutos[1]);
    }

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let resultado = [];
    moviesArray.forEach((item, index) => {
        let duracionMovie = duracionEnMinutos(item.duration);
        item.duration = duracionMovie;
        resultado[index] = item;
    })
    return resultado;
}

function removeWithFilter(arr) {
    let outputArray = arr.filter(( av , i ) => i == arr.indexOf(av));
    return outputArray.sort( ( a , b )=> a - b );
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    let resultado = []
    if(moviesArray.length == 0){
        return null
    }else if(moviesArray.length == 1){
        return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`
    }else {
        let years = []
        let uniqueYears = []
        let resultado = []
        moviesArray.forEach((item, index) => {
            years[index] = item.year;
        })
        uniqueYears = removeWithFilter(years);
        uniqueYears.forEach((item) => {
            let arreglo = moviesArray.filter( ( av ) => av.year == item)
            if(arreglo.length == 1){
                resultado.push({year:item, avg_score:arreglo[0].score })
            }else{
                let resultadoAvg = (arreglo.map( obj => obj.score ).reduce((ac, va)=> ac + va))/arreglo.length;
                resultado.push({year:item, avg_score:parseFloat(resultadoAvg.toFixed(1))})
            }
        })
        resultado.sort(( a , b ) => b.avg_score - a.avg_score );
        return `The best year was ${resultado[0].year} with an average score of ${resultado[0].avg_score}`
    }
}
