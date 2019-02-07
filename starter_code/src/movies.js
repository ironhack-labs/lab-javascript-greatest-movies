/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr){
    var newArray = arr.map(function(movie){
        var minutes= Number(movie.duration[3]+movie.duration[4]);
        var hoursConverted= Number(movie.duration[0]) * 60
        var totalDuration = hoursConverted + minutes;
        var arrayCloneModified = Object.assign({}, movie, {duration: totalDuration})
        return arrayCloneModified;
   })
   return newArray
}

// Get the average of all rates with 2 decimals 
function ratesAverage(arr){
    var newArray = arr.map(function(movie){
        return movie.rate
    })
    var sumOfRates = newArray.reduce(function(accumulator, currentValue){
        return accumulator + currentValue
    })
    sumOfRates /= newArray.length
    return Math.round(sumOfRates*100)/100
}

// Get the average of Drama Movies
function dramaMoviesRate(arr){
    var dramaMovieArray = arr.filter(function(movie){
        return movie.genre.includes("Drama")
    })
    var dramaRatesArray = dramaMovieArray.map(function(movie){
        return movie.rate
    })
    var dramaSumRateArray = dramaRatesArray.reduce(function(accumulator, currentValue){
        return accumulator + currentValue
    })
    console.log(dramaMovieArray.length)
    dramaSumRateArray /= dramaMovieArray.length
    return Math.round(dramaSumRateArray*100)/100
}

// Order by time duration, in growing order
function orderByDuration(arr){
    var arrayToOrder = turnHoursToMinutes(arr);
    var ordered = arrayToOrder.sort(function(firstMovie, secondMovie){
        return firstMovie.duration - secondMovie.duration
    })
    return arrayToReturn
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr){
    var dramaMovieArray = arr.filter(function(movie){
      
        return movie.genre.includes("Drama")
    })
    var arrSteven = dramaMovieArray.filter(function(movie){
        return movie.director.includes("Steven Spielberg")
    })
    return("Steven Spielberg directed " + arrSteven.length + " drama movies!")
}

// Order by title and print the first 20 titles
function orderAlphabetically(arr){
    var orderAbc = arr.sort(function(firstMovie, secondMovie){
        if (firstMovie.title < secondMovie.title){
            return -1
        }
        if (firstMovie.title > secondMovie.title){
            return 1
        }
        return 0
    })
    var arrayAbcOnlyTitle = arr.map(function(movie){
        return movie.title
    })
    return arrayAbcOnlyTitle.slice(0,20)
}

// Best yearly rate average
function bestAverageYear(arr){

}