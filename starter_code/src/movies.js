/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes   

function turnHoursToMinutes(arr) {
    var newArr= arr.map(function(el) {
        var newMovie = Object.assign({}, el); // clona el nuevo objeto para no modificar el obj original
        // var newMovie = {};
        // newMovie["duration"] = el.duration;
    
        var stringDuration = newMovie.duration;
        var arrayDuration = stringDuration.split(" ");


        // console.log(arrayDuration);

        if (arrayDuration.length === 2) { // si pongo array.lenght me devuelve undefined y ya me pasó en otro ejercicio
            var hours = parseInt(arrayDuration[0].replace("h", ""));
            var mins = parseInt(arrayDuration[1].replace("min", ""));

            newMovie["duration"] = hours * 60 + mins;

            return newMovie;

        } else if (arrayDuration.length === 1) {
            if (arrayDuration[0].includes("h")) {
                var hours = parseInt(arrayDuration[0].replace("h", ""));

                newMovie["duration"] = hours * 60;

                return newMovie;

            } else if (arrayDuration[0].includes("min")) {
                var mins = parseInt(arrayDuration[0].replace("min", ""));

                newMovie["duration"] = mins;
                
                return newMovie;
            }
        }

    });

    return newArr;
}

// Get the average of all rates with 2 decimals 

function ratesAverage (arr) {
    var sumMovies = arr.reduce(function(acc, el) {
        return acc + parseFloat(el["rate"]);
    }, 0);

    // var arrayLenght = arr.length;
    var avgMovies = sumMovies / arr.length;

    return avgMovies;
}

// Get the average of Drama Movies

function dramaMoviesRate (arr) {
    var dramaMovies = arr.filter(function(el) {
        return el["genre"].includes("Drama");
    })

    return ratesAverage(dramaMovies).toFixed(2);
}


// Order by time duration, in growing order

function orderByDuration (arr) {
    var arrayDurationChanged = turnHoursToMinutes(arr);
    arrayDurationChanged.sort(function(el, el1) {
        return el.duration - el1.duration;
    })
}

// How many movies did STEVEN SPIELBERG

function dramaMoviesFilter (arr) {
    var dramaMovies = arr.filter(function(el) {
        return el["genre"].includes("Drama");
    })

    return dramaMovies;
}

function howManyMovies (arr) {
    var dramaSpilMovies = dramaMoviesFilter(arr);
    var spielbergMovies = dramaSpilMovies.filter(function(el) {
        return el.director === "Steven Spielberg";
    })
    
    return spielbergMovies;
}


// Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    var alphMovies = arr.map(function(el) {
        var newMovies = Object.assign({}, el);

        return newMovies.title;
    })

    var top20 = alphMovies.sort().slice(0,21);
    return top20;
}



// Best yearly rate average



