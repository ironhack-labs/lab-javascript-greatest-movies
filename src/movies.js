// Iteration 1: All directors? - Get the array of all directors.
let getAllDirectors = (moviesArr) => {
    let directorsArr = moviesArr.map((movieElem) => {
        return movieElem.director
    })
    return directorsArr
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let howManyMovies = (moviesArr) => {
    let filteredArr = moviesArr.filter((movieElem) => {
        //return all movies that have genre drama and director Steven Spielberg
        return movieElem.director == "Steven Spielberg" && movieElem.genre.includes("Drama") == true
    })
    //should return a number 
    return filteredArr.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let ratesAverage = (moviesArr)=>{
    //sum of all the rates usin reduce
    //average the rates using the sum divided by the number of movies
    let sumRatesAll = moviesArr.reduce((acc,movieElem)=>{
        return acc + movieElem.rate
    },0)
    let averageRateAll = sumRatesAll / moviesArr.length

    if(moviesArr.length == 0){
        return 0
    }
    return averageRateAll.toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
let dramaMoviesRate = (moviesArr) => {
    //filter to all drama movies
    //sum of the rates of all drama movies
    //average rate of the drama movies
    // compare with average rate of all movies
    let filteredDramaArr = moviesArr.filter((movieElem) => {
        return movieElem.genre.includes("Drama") == true
    })
    let sumRatesDrama = filteredDramaArr.reduce((acc,dramaMovieElem) => {
        return acc + dramaMovieElem.rate
    },0)
    let averageRateDrama = sumRatesDrama / filteredDramaArr.length

    if (moviesArr.length == 0){
        return 0
    }
    return averageRateDrama.toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
let orderByYear = (movieArr) => {
    let clonedArr = JSON.parse(JSON.stringify(movieArr))

    clonedArr.sort((elem1, elem2) => {
        if(elem1.year > elem2.year){
            return 1
        }
        else if(elem1.year < elem2.year){
            return -1
        }
        else{
            if(elem1.title > elem2.title){
                return 1
            }
            else if(elem1.title < elem2.title){
                return -1
            }
            else {
                return 0
            }
            return 0
        }
    })
  return clonedArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let orderAlphabetically = (movieArr) => {
    let clonedArr = JSON.parse(JSON.stringify(movieArr))

    clonedArr.sort((elem1, elem2) => {
        if(elem1.title > elem2.title){
            return 1
        }
        else if(elem1.title < elem2.title){
            return -1
        }
        else{
            return 0
        }
    })

  let mapTitleArr = clonedArr.map((movieElem) => {
      return movieElem.title
  })
  return mapTitleArr.slice(0,20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
