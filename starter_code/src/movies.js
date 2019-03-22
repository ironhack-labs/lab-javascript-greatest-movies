/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function durationMinute (movie) {
        var movieArr = movie.duration.split(" ");

        if(movieArr.length == 2) return parseInt(movieArr[0])*60 + parseInt(movieArr[1]);
        else {
            if (movieArr[0].includes("h")) return parseInt(movieArr[0])*60 
            else return (parseInt(movieArr[0]))     
        }  
}; 

function turnHoursToMinutes (arr) {
    return arr.map(movie => {
        return Object.assign({}, movie, {duration: durationMinute(movie)})
    })  
}


// Get the average of all rates with 2 decimals 

function ratesAverage(arr) {

    var total = arr.reduce((ac, cValue) => {return ac + cValue.rate}, 0);
    return  parseFloat((total / arr.length).toFixed(2))
}

// Get the average of Drama Movies

function dramaMoviesRate(arr) {
    var dramaArr = arr.filter(movie => movie.genre.includes("Drama"))
    if (dramaArr.length == 0) return undefined
    return ratesAverage(dramaArr)
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
