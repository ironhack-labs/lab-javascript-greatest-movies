/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function ratesAverage(array){
    var sum = array.reduce(function(accum, current){
	    accum = accum + current.rate
	    return accum
    },0)
    
    return sum / array.length 
}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies
function dramaMoviesRate(array){
    var counter = 0;
    var sum = array.reduce(function(accum, current){
        if (current.genre.includes("Drama")){
            accum = accum + current.rate
            counter++
            return accum
        } else {
            return accum
        }   
    },0)
    if (counter === 0){
        return undefined
    }
    return Math.round((sum / counter) * 100) / 100 
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
    if (array.length === 0){
        return undefined
    }
    var movies = array.filter(function(ithem){
        return (ithem.genre.includes("Drama")&&(ithem.director === "Steven Spielberg"))
    }) 
    var result = movies.length

    return "Steven Spielberg directed " + result + " drama movies!"
}


// Order by title and print the first 20 titles
function orderAlphabetically(array){
    if (array.length > 20){
        var titles= array.map(function(ithem){
            return ithem.title
        })
        var sortedTitles = titles.sort(function(a,b){
            return a.localeCompare(b)
        })
        return sortedTitles.splice(20)
    } else{
        var titles= array.map(function(ithem){
            return ithem.title
        })
        var sortedTitles = titles.sort(function(a,b){
            return a.localeCompare(b)
        })
        return sortedTitles
    }

}

// Best yearly rate average
