/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (arr) {
    var newArr = arr.map (function (elm){
        var copia = Object.assign({},elm)
        if (copia["duration"].includes("h") && copia["duration"].includes("min")){
            copia.duration = copia.duration[0] * 60 + parseInt(copia["duration"].substr(3,2))
        } else if (copia["duration"].includes("h")){
            copia.duration = copia.duration[0] * 60
        } else {
            copia.duration = parseInt(copia["duration"].substr(0,2))
        }
        return copia
    })
    return newArr
}

console.log(turnHoursToMinutes(movies))

// Get the average of all rates with 2 decimals 

function ratesAverage (arr) {
    var sum = 0;
    arr.forEach (function (movie) {
        sum += parseFloat(movie.rate)
    })
    var average = parseFloat((sum / arr.length).toFixed(2));
    return average
}

console.log(ratesAverage(movies))

// Get the average of Drama Movies

function dramaMoviesRate (arr) {

    var filtered = arr.filter(function(elm) {
        return elm['genre'].indexOf('Drama') >= 0
    })

    var sum = 0;

    if (filtered.length === 0){
        return undefined;
    } else if (filtered.length === 1){
        return parseFloat((filtered[0].rate).toFixed(2)) 
    } else {
    filtered.forEach (function (movie) {
        if (movie.rate !== "") {
            sum += parseFloat(movie.rate)
        } else {
            sum += 0
        }
    })
    var average = parseFloat((sum / filtered.length).toFixed(2));
    return average
    }
}

console.log(dramaMoviesRate(movies))

// Order by time duration, in growing order

function orderByDuration (movies) {

    var copied = movies.map (function (elm){
        var copia = Object.assign({},elm)
        return copia
    })
    
    var sorted = copied.sort(function (a,b) {
        if (a.duration > b.duration) {
            return 1
        } 
        
        if (a.duration === b.duration) {
            if (a.title > b.title){
                return 1
            }
            if (a.title === b.title) {
                return 0
            }
            if (a.title < b.title) {
                return -1
            }
        } 

        if (a.duration < b.duration){
            return -1
        }
   })
   
   return sorted
}

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
