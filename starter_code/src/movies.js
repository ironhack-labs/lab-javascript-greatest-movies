/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array){
    var newArray = array.map(function(obj) {
        var timeArray = obj.duration.split(" ");
        var hoursToMinutes = parseInt(timeArray[0]) * 60;
        var minutos = parseInt(timeArray[1]);
        obj.duration = hoursToMinutes + minutos;
        return obj;
    })
    return newArray;
}
// Get the average of all rates with 2 decimals 
function ratesAverage(arr){
    let average = arr.reduce((acc, current) => {
      return acc + (parseFloat(current.rate) / arr.length)
    }, 0)
    return average.toFixed(2)
}

// Get the average of Drama Movies

function dramaMoviesRate(arr){
    var dramaMovies = arr.filter(elem => {
     return elem.genre.indexOf('Drama') !== -1
    })
    return ratesAverage(dramaMovies)
}

// Order by time duration, in growing order
function orderByDuration(durationMovies){
    let orderArr = durationMovies.sort(function(a,b){
      let value1 = a.duration;
      let value2 = b.duration;
      if (value1 < value2) { return -1}
      if (value1 > value2) {return 1}
    })
    return orderArr
}

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
