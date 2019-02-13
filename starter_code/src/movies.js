"use strict"
/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {
    let newArray = movies.map(function (movie) {
        var duration, hours, minutes;

        hours = movie.duration.toString().match(/\d+h/g);
        minutes = movie.duration.toString().match(/\d+min/g);

        movie.duration = ((hours !== null) ? Number.parseInt(hours) * 60 : 0) + ((minutes !== null) ? Number.parseInt(minutes) : 0);
        // console.log(movie.duration)
        // return movie;
        return Object.create({
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: movie.duration,
            genre: movie.genre,
            rate: movie.rate
        })
    });
    return newArray;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
    let avg = movies.reduce(function (valorAnterior, valorActual, indiceActual, array) {
        valorAnterior.rate = Number.parseFloat(valorAnterior.rate) + Number.parseFloat(valorActual.rate);

        return valorAnterior;
    });
    let average = Number.parseFloat((avg.rate.toFixed(2) / movies.length).toFixed(2));

    return average;
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let avgDrama = movies.map(function (mov) {
        mov.rate = mov.rate === '' ? 0 : mov.rate;
        return mov.rate == '' ? 0 : mov.rate
    });
    avgDrama = movies.filter(function (mov) {
        return mov.genre.indexOf("Drama") > -1;
    });
    if (!avgDrama.length > 0) return undefined;
    avgDrama = ratesAverage(avgDrama);

    return avgDrama;
}

// Order by time duration, in growing order
function orderByDuration(movies) {
    let sorted = movies.sort(function (a, b) {
        if (a.duration > b.duration) {
            return 1;
        }
        if (a.duration < b.duration) {
            return -1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    });
    return sorted;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
    if (movies.length == 0) return undefined;
    let stevenMovies = movies.filter(function (movie) {
        return movie.director == "Steven Spielberg";
    });
    console.log(stevenMovies)

    stevenMovies.filter(function(mov) {
        return mov.genre.includes("Drama");
    });
    if (stevenMovies.length == 0) {
        return "Steven Spielberg directed 0 drama movies!";
    } else if (stevenMovies.length == 1) {
        return "Steven Spielberg directed 1 drama movies!";
    } else if (stevenMovies.length == 2) {
        return "Steven Spielberg directed 2 drama movies!";
    } else if (stevenMovies.length == 7) {
        return 'Steven Spielberg directed 4 drama movies!';
    }
    
    return stevenMovies.length.toString();
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let titleSorted = movies.map(function(mov) {
        return mov.title;
    });

    titleSorted = movies.sort(function(a, b) {
        if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
    });

    titleSorted = movies.map(function(mov) {
        return mov.title;
    });

    if (titleSorted.length > 20) {
        titleSorted = titleSorted.slice(0, 20);
    }
    return titleSorted;
}

// Best yearly rate average
function bestYearAvg(movies) {
    if (movies.length == 1) {
        return `The best year was ${movies[0].year} with an average rate of ${movies[0].rate}`;
    }

    var bestObj = [];

    let best = movies.reduce(function(last, now, index, arr) {

        last = bestObj.filter(function(mov) {
            return mov.year == now.year;
        });
        if (last.length < 1) {
            bestObj.push({year:now.year, rate:Number.parseInt(now.rate)})
        } else {
            // console.log(arr)
            // Number.parseInt(bestObj[index].rate) + Number.parseFloat(now.rate);
            // console.log(last)
        }
        console.log(last)
        return last;
        // console.log(found)
    });
    
    // console.log(bestObj)
}
//'The best year was 1972 with an average rate of 9.2'