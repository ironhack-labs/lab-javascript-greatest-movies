// this is just a helper function
function stringToMinutes(string) {
    var arr = string.split('h')
    if (arr.length < 2) {
        arr.unshift("0")
    }
    var hours = Number(arr[0])
    var minutes = Number(arr[1].split("min")[0])

    return hours * 60 + minutes
}

// this is the one the tests check for - it takes an array
function turnHoursToMinutes(moviesArr) {
    var resultArr = moviesArr.map(function (el) {
        var obj = {
            title: el.title,
            year: el.year,
            director: el.director,
            duration: stringToMinutes(el.duration),
            genre: el.genre,
            rate: el.rate
        }
        return obj;
    });
    return resultArr;
}

// function turnHoursToMinutes(moviesArr) {
//     var resultArr = []
//     moviesArr.forEach(function(el) {
//         var obj = {
//             title: el.title,
//             year: el.year,
//             director: el.director,
//             duration: stringToMinutes(el.duration),
//             genre: el.genre,
//             rate: el.rate
//         }
//         resultArr.push(obj)
//     });
//     return resultArr;
// }


function ratesAverage(movies) {
    var ratingSum = movies.reduce(function(sum, movie) {
        var rate = movie.rate !== '' ? parseFloat(movie.rate) : 0 // if rating is '' take 0 instead
        return sum + rate
    }, 0)
    var avg = ratingSum / movies.length
    return Math.round(avg * 100) / 100 // rounds to two digits
}


// function ratesAverage(movies) {
//     var ratingSum = 0;
//     movies.forEach(function(movie) {
//         var rate = movie.rate !== '' ? parseFloat(movie.rate) : 0 // if rating is '' take 0 instead
//         ratingSum += rate        
//     })
//     var avg = ratingSum / movies.length
//     return Math.round(avg * 100) / 100 // rounds to two digits
// }



function dramaMoviesRate(movies) {
    var dramaMovies = movies.filter(function(movie) { return movie.genre.includes("Drama") })    
    if (dramaMovies.length > 0) {
        return ratesAverage(dramaMovies)
    }
    return undefined // this is actually implicitly the case as well
}


// function dramaMoviesRate(movies) {
//     var dramaMovies = []
//     movies.forEach(function(movie) {
//         if (movie.genre.includes("Drama")) dramaMovies.push(movie)
//     })
//     if (dramaMovies.length > 0) {
//         return ratesAverage(dramaMovies)
//     }
//     return undefined
// }

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average

console.log(ratesAverage(movies))
console.log(dramaMoviesRate(movies))