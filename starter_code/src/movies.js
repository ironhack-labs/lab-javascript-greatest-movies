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

// Get the average of all rates with 2 decimals 

function ratesAverage (arr) {
    var sum = 0;
    arr.forEach (function (movie) {
        sum += parseFloat(movie.rate)
    })
    var average = parseFloat((sum / arr.length).toFixed(2));
    return average
}

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

// Order by time duration, in growing order

function orderByDuration (arr) {
    
    var sorted = arr.sort(function (a,b) {
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

function howManyMovies (arr) {
    if (arr.length === 0){
        return undefined
    } else {
        var filtered = arr.filter (function (elm){
        return elm.director === 'Steven Spielberg' && elm['genre'].includes('Drama')
    })
    return "Steven Spielberg directed " + filtered.length + " drama movies!" 
    }
}

// Order by title and print the first 20 titles

function orderAlphabetically (arr) {

    var sorted = arr.sort (function (a,b) {
        return a['title'].localeCompare(b['title'])
    })

    var onlyTitles = []
    sorted.forEach (function(elm){
        onlyTitles.push(elm.title)
    })

    if (onlyTitles.length <= 20){

        return onlyTitles

    } else {
        onlyTitles = onlyTitles.slice(0,20)
        return onlyTitles
    }

}

// Best yearly rate average

function bestYearAvg (arr) {

    if (arr.length === 0){
        return undefined
    }

    var years = []
    arr.forEach (function(movie){
        years.push(movie.year)
    })

    var rates = []
    years.forEach (function(year) {
        var currentYear = arr.filter (function(movie){
            return movie.year === year
        })
        rates.push(ratesAverage(currentYear))
    })
    
    var ratesByYear = []

    for (var i = 0; i < years.length; i++){
        ratesByYear[i] = {}
        ratesByYear[i].year = years[i]
        ratesByYear[i].rate = rates[i]
    }

    var sorted = ratesByYear.sort (function(a,b) {
        return b.rate - a.rate
    })

    if (sorted.length === 1){
        return "The best year was " + sorted[0].year + " with an average rate of " + sorted[0].rate
    }
    else if (sorted[0].rate === sorted[1].rate) {
        
        var bestRate = sorted[0].rate

        var tied = sorted.filter (function (elm) {
            return elm.rate === bestRate
        })
    
        var tiedAndSorted = tied.sort (function (a,b){
            return a.year - b.year
        })
    
        return "The best year was " + tiedAndSorted[0].year + " with an average rate of " + tiedAndSorted[0].rate

    } else {
        return "The best year was " + sorted[0].year + " with an average rate of " + sorted[0].rate
    }

}