/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function stringToMinutes(string) {
    var arr = string.split('h')
    var hours = Number(arr[0])
    var minutes = Number(arr[1].split("min")[0])

    return hours*60+minutes
}
function stringToMinutes(string) {
    var arr = string.split('h')    
    if (arr.length < 2) {
        arr.unshift("0")        
    }    
    var hours = Number(arr[0])
    var minutes = Number(arr[1].split("min")[0])

    return hours*60+minutes
}



function ratesAverage(array){    
        
    var sumRates = array.reduce(function(acc, movie) {
        return acc + parseFloat(movie.rate)
    }, 0);

    var count = array.length

    return sumRates / count
}

// Get the average of Drama Movies

function dramaMoviesRate(moviesArr){
    var drama = moviesArr.filter(function(movie){
        return movie.genre === "drama";
        

    })
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average

console.log(ratesAverage(movies))
console.log(dramaMoviesRate(movies))