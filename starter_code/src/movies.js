/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr) {
    var newArray = arr.map(function (elem) {
        var horas = elem.duration.split("");
        var minutos;
        if (horas.includes('h')) {
            if (horas[4] == 'm') {
                minutos = Number(horas[0]) * 60 + Number(horas[3]);
            }
            minutos = Number(horas[0]) * 60 + Number((horas.slice(3, 5).join("")));
            return { duration: minutos }
        }
        var indexm = horas.indexOf('m');
        minutos = Number((horas.slice(0, indexm).join("")));
        return { duration: minutos }
    })
    return newArray;
}

// Get the average of all rates with 2 decimals 
/*function ratesAverage(arr){
    var ratingsArray = arr.map(function(elem){
        return parseFloat(elem.rate);
    });
    var average = ratingsArray.reduce(function(accumulator,current){
        return accumulator+current/ratingsArray.length;
    }, 0);
    return parseFloat(average).toFixed(2);
}*/
function ratesAverage(moviesArray) {
    var rateSum = moviesArray.reduce(function (accumulator, movie) {
        return accumulator + Number(movie.rate);
    }, 0);
    return Number((rateSum / moviesArray.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(arr) {
    var moviesDrama = arr.filter(function (elem) {
        return elem.genre.includes('Drama');
    });
    if (moviesDrama.length == 0) {
        return undefined;
    }
    var rateSum = moviesDrama.reduce(function (accumulator, movie) {
        return accumulator + Number(movie.rate);
    }, 0);
    return Number((rateSum / moviesDrama.length).toFixed(2));
}

// Order by time duration, in growing order
function compare(a, b) {
    if (a.tilte < b.title)
        return -1;
    if (a.title > b.title)
        return 1;
    return 0;
}

function compareALL(a, b) {
    if (a.duration < b.duration)
        return -1;
    if (a.duration > b.duration)
        return 1;
    return compare(a, b);
}

function orderByDuration(arr){
    return arr.sort(compareALL)
}
  /*  var transformed = arr.map(function (elem) {
        if (typeof (elem.duration) == 'String'){
            var horas = elem.duration.split("");
            var minutos;
            if (horas.includes('h')) {
                if (horas[4] == 'm') {
                    minutos = Number(horas[0]) * 60 + Number(horas[3]);
                }
                minutos = Number(horas[0]) * 60 + Number((horas.slice(3, 5).join("")));
                return {duration: minutos};
            }
            var indexm = horas.indexOf('m');
            minutos = Number((horas.slice(0, indexm).join("")));
            return {duration: minutos};
        } else {
            return {duration: minutos};
        }
    })
    var listo = transformed.sort(compareALL);
    var final = listo.map(function(e){
        if (e.duration<60){
            return e.duration= e.toString()+"min";
        } else {
            if (e.duration%60==0){
                return e.duration= (e/60).toString()+"h";
            }
            return e.duration= (e/60).toString()+"h "+(e%60).toString()+"min";
        }
    })
    return final;
}*/

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr){
    if (arr.length==0){
        return undefined;
    }
    var spielberg = arr.filter(function(ele){
        return ele.director=='Steven Spielberg';
    })
    var spielbergdrama = spielberg.filter(function(e){
        return e.genre.includes('Drama');
    })
    return "Steven Spielberg directed "+spielbergdrama.length+ " drama movies!";
    }


// Order by title and print the first 20 titles
function orderAlphabetically(arr){
    var titlesArray =arr.map(function(elem){
        return elem.title;
    });
    if (titlesArray.length<=20){
       return titlesArray.sort()
    } else {
       return titlesArray.sort().slice(0,20);
    }
}
    
// Best yearly rate average

function bestYearAvg(arr){
    if (arr.length==0){
        return undefined;
    }
    var bestYear ={};
    arr.forEach(function(element) {
        if (Object.keys(bestYear).includes(element.year)){
        bestYear[element.year].push(element.rate);
        } else {
        bestYear[element.year]=[]
        bestYear[element.year].push(element.rate);
        }
    })
    var result = {year:0, rate: 0};
    Object.keys(bestYear).forEach(function(ele){
        var rateSum = bestYear[ele].reduce(function (accumulator, rate) {
            return accumulator + rate/bestYear[ele].length;
        }, 0);
        if (rateSum>result.rate){
            result.year=ele;
            result.rate=rateSum;
        }
    })

    return "The best year was "+result.year+" with an average rate of "+result.rate;

    
}
