/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    let copyArray = array.slice();
    return copyArray.sort(function (a, b) {
        if (a.year > b.year) {
            return 1;
        } else {
            return -1;
        }
    });
}

orderByYear(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

// Didn't work out
/*function howManyMovies(array1){
let filteredMovies = array1.filter(function(drama){
    if (array1.director === "Steven Spielberg" && array1.genre === "Drama"){
        return true;
    } else {
        return false;
    }
})
} 
// Didn't work out
function howManyMovies (newList){
    if (movies.director.includes("Steven Spielberg") && movies.genre.includes("Drama") ) {
        return true
    } else {
        return false
    }
    console.log (movies)
}
*/

// IT IS ALIVE!
function howManyMovies(arr) {
    let filteredArray = arr.filter(function (obj) {

            if (obj.director === "Steven Spielberg") && obj.genre.includes("Drama")) {
            return true;
        } else {
            return false;
        }

    })
console.log(filteredArray)
return filteredArray
}




// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(moviesNew) {
    let copyMovies = moviesNew.slice()
    copyMovies.sort((a, b) => {
        if (a.title > b.title) {
            return 1
        } else {
            return -1
        }
    });
    let titles = copyMovies.map(element => {
        return element.title
    })
    return titles.slice(0, 20)
}

orderAlphabetically(movies)
// Iteration 4: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(moviesArr) {
    let copyMovies = moviesArr.slice()
    let averageRating = copyMovies.map(element => {
        return element.rate / moviesArr.length
    })
    let newAverage = averageRating.reduce(function (sum, el) {
        return sum + el
    }, 0)
    console.log(newAverage.toFixed(2))
}

ratesAverage(movies)

// Iteration 5: Drama movies - Get the average of Drama Movies


    // let dramaMovies = []
    // for (let i = 0; i < moviesArr.length; i++) {
    //   if (moviesArr[i].genre.includes("Drama")) {
    //     dramaMovies.push(moviesArr[i])
    //   }
    // }
    function dramaMoviesRate(moviesArr) {
        
    let dramaMovies = moviesArr.filter(function(movie) { 
      return movie.genre.includes("Drama")
    })

    let movieRates = dramaMovies.map(function(movie) { 
      return movie.rate 
    })

   let sumRates = movieRates.reduce(function(sum, el) {
  return sum + el
    }, 0)

    let averageDramaRatings = sumRates/movieRates.length

    console.log(averageDramaRatings)
    return averageDramaRatings
}

dramaMoviesRate (movies)
    // Iteration 6: Time Format - Turn duration of the movies from hours to minutes

    // BONUS Iteration: Best yearly rate average - Best yearly rate average