/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arr) {
    var newarr = arr.map(function (mov) {
        var duracion = 0;
        if (isNaN(mov.duration)) {        
            var durarr = mov.duration.split(" ");
            var hrMin = 0;
            var min = 0;
            if (durarr.length < 2) {
                if (durarr[0].includes("h")) {
                    hrMin = durarr[0].split("h")[0] * 60;
                } else {
                    min = durarr[0].split("m")[0];
                }
            } else {
                hrMin = durarr[0].split("h")[0] * 60;
                min = durarr[1].split("m")[0];
            }

            duracion = parseInt(hrMin) + parseInt(min);
        } else {
            duracion = mov.duration;
        }
        return {
            title: mov.title,
            year: mov.year,
            director: mov.director,
            duration: duracion,
            genre: mov.genre,
            rate: mov.rate
        };
    });

    return newarr;
}
// Get the average of all rates with 2 decimals 

function ratesAverage(mov) {
    var totalRates = mov.reduce(function (sum, rates) {
        return rates.rate == "" ? sum : sum + parseFloat(rates.rate);
    }, 0);
    return (totalRates / (mov.length));
}

// Get the average of Drama Movies

function dramaMoviesRate(mov) {
    let moviesDrama = mov.filter(movi => movi.genre.indexOf("Drama") !== -1);
    return moviesDrama.length > 0 ? Number(parseFloat(ratesAverage(moviesDrama)).toFixed(2)) : undefined;
}

// Order by time duration, in growing order
function orderByDuration(arrayMovies){
    if (arrayMovies.length > 1) {
        return arrayMovies.sort((a, b) => {
            if (a.duration == b.duration) {
                if (a.title < b.title)
                    return -1;
                if (a.title > b.title)
                    return 1;
            }
            return a.duration - b.duration;
        });
    }
    return arrayMovies;
    
}
// How many movies did STEVEN SPIELBERG

function howManyMovies(arrayMovies) {
    if (arrayMovies.length > 0) { 
        let arraySpielberg = arrayMovies.filter(movi => movi.genre.indexOf("Drama") !== -1 && movi.director == "Steven Spielberg");
        return "Steven Spielberg directed " + arraySpielberg.length + " drama movies!";
    }
}

// Order by title and print the first 20 titles

function orderAlphabetically(arrayMovies) {
    let moviesOrder =  {};
    moviesOrder = arrayMovies.sort((a, b) => {
        if (a.title < b.title)
            return -1;
        if (a.title > b.title)
            return 1;
        return 0;
    });

    titleMovies = moviesOrder.map(movie => movie.title).splice(0,20);
    return titleMovies;
}

// Best yearly rate average

function bestYearAvg(arrayMovies) {
    if (arrayMovies.length > 1) {
        var result = arrayMovies.reduce(function (group, movie) {
            group[movie.year] = group[movie.year] || [];
            group[movie.year].push(movie.rate);
            return group;
        }, {});
        /*var totalRates = element.reduce(function (sum, rate) {
            return rate == "" ? sum : sum + parseFloat(rate);
        }, 0);
        yearAvg[Object.keys(element)] = (totalRates / (mov.length));*/

        console.log(result2);
    }else if (arrayMovies.length == 1) {
        return "The best year was "+ arrayMovies[0].year+" with an average rate of " + arrayMovies[0].rate;
    }
}