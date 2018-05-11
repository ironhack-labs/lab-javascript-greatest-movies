/* eslint no-restricted-globals: 'off' */


// ************ turnHoursToMinutes hacer con un reduce *****************/
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movieArray) {

    return movieArray.map(function (item) {
        var newMovieArry = Object.assign({}, item);
        var transformToMinutes = newMovieArry.duration.split(' ');

        if (transformToMinutes.length === 2) {
            var hour = Number(transformToMinutes[0].slice(0, transformToMinutes.indexOf('h'))) * 60;
            var minutes = Number(transformToMinutes[1].replace('min', ''));
            newMovieArry.duration = hour + minutes;
        }

        if (transformToMinutes.length === 1) {
            if (transformToMinutes[0].includes('h')) {
                newMovieArry.duration = Number(transformToMinutes[0].slice(0, transformToMinutes.indexOf('h'))) * 60;
            }
            else if (transformToMinutes[0].includes('min')) {
                newMovieArry.duration = Number(transformToMinutes[0].replace('min', ''));
            }

        }
        return newMovieArry
    })
}

// Get the average of all rates with 2 decimals 
/*
    function ratesAverage(movies) {
        var ratesAverage = movies.reduce(function (preview, next) {
            return preview + parseFloat(next.rate)
        }, 0) / movies.length;

        return Math.round(ratesAverage * 100) / 100;
    }
*/

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
    var sum = movies.reduce(function (acc, movie) {
        // return acc + Number(movie.rate);
        return acc + parseFloat(movie.rate);
    }, 0);
    // console.log((sum / movies.length).toFixed(2));
    return (Number((sum / movies.length).toFixed(2)));
}
ratesAverage(movies);


// Get the average of Drama Movies
/*
    function dramaMoviesRate(movies) {
        var filterMoviesDrama = movies.filter(function (item) {
            return item.genre.some(
                function (item) {
                    return item === 'Drama';
                })
        });
        return filterMoviesDrama.length ? ratesAverage(filterMoviesDrama) : undefined;
    }
*/

function dramaMoviesRate(movies) {
    var arrayDramaMovies = movies.filter(function (movie) {
        if (movie.genre.indexOf("Drama") != -1) {
            return movie;
        }
        else {
            return undefined;
        }
    });
    // Devolvemos undefined si no hay películas de drama
    if (arrayDramaMovies.length === 0) {
        return undefined;
    }
    else {
        var sumDramaMovies2 = arrayDramaMovies.reduce(function (acc, movie) {
            return acc + Number(movie.rate);
        }, 0);

        return Number((sumDramaMovies2 / arrayDramaMovies.length).toFixed(2));
    }

}

dramaMoviesRate(movies);

// Order by time duration, in growing order

/*
    function orderByDuration(movies) {
        var moviesParseToMinutes = turnHoursToMinutes(movies);

        return moviesParseToMinutes.sort(function (item1, item2) {
            return item2.duration - item1.duration;
        });
    }
*/

function orderByDuration(movies) {
    var newOrderMovies = movies.sort(function (movieRate1, movieRate2) {
        if (movieRate1.duration === movieRate2.duration ) {
            return movieRate1.title < movieRate2.title ? -1 : 1;
        }
        else {
            return movieRate1.duration - movieRate2.duration;
        }
    });
    return newOrderMovies;
}
orderByDuration(turnHoursToMinutes(movies));


// How many movies did STEVEN SPIELBERG

function howManyMovies(movieArray) {
    if (!movieArray.length) {
        return undefined;
    }

    var steveMovies = movieArray.filter(function (item) {
        return item.director === 'Steven Spielberg' &&
            item.genre.some(
                function (item) {
                    return item === 'Drama';
                });
    });

    return 'Steven Spielberg directed ' + steveMovies.length + ' drama movies!';
}

// Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
    var moviesTitle = moviesArray.map(function (item) {
        return item.title;
    }).sort(function (title1, title2) {
        return title1.localeCompare(title2)
    });

    return moviesTitle.length > 20 ? moviesTitle.filter((item, i) => i < 20) : moviesTitle;
}

// Best yearly rate average
function bestYearAvg(movies) {
    if (movies.length === 0) {
        return undefined;
    }

    var year = 0;
    var yearRates = [];

    var orderArray = movies.sort(function (item1, item2) {
        return item1.year - item2.year;
    }).reduce(function (preview, next) {
        if (year === 0) {
            preview.push({ 
                year: next.year, 
                rate: next.rate
                });
        } else if (next.year > year) {
            preview.push(
                {
                    year: year,
                    rate: yearRates.reduce(
                        function (preview, next) {
                            return preview + Number(next);
                        }, 0) / yearRates.length
                }
            );
            yearRates = [];
        }

        if (year <= next.year) {
            year = next.year;
            yearRates.push(next.rate);
        }

        return preview;
    }, []).sort(function (item1, item2) {
        return item2.rate - item1.rate;
    });

    return 'The best year was ' + orderArray[0].year + ' with an average rate of ' + orderArray[0].rate
}