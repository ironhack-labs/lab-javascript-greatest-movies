// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let Directors = moviesArray.map(movie => movie.director)
    let uniqueDirectors = [...new Set(Directors)]
    return uniqueDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenMovies = moviesArray.filter(movie => movie.director == "Steven Spielberg" && movie.genre.includes('Drama'))
    return stevenMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0) {
        return 0
    }
    else {
        let averScore = moviesArray.reduce((acc, movie)=> {
            if (movie.score) {
                return acc + movie.score
            } else {
                return acc
            }
        },0)/moviesArray.length
        return Number(averScore.toFixed(2))
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(movie=>movie.genre.includes('Drama'))
    if (dramaMovies.length == 0) {
        return 0
    }
    else {
        let averScore = dramaMovies.reduce((acc,movie)=>{
            if(movie.score){
                return acc + movie.score
            } else {
                return acc
            }
        },0)/dramaMovies.length
        return Number(averScore.toFixed(2))
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    //clone an array: [...array]
    let orderedMovies = [...moviesArray].sort((a,b)=>{
        if (a.year == b.year) {
            if (a.title < b.title) {
                return -1 //a comes first
            } else {
                return 1 //b comes first
            }
        } else {
            return a.year - b.year //a comes first
        }
    })
    return orderedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let orderedMovies = [...moviesArray].sort((a,b)=>{
        if (a.title < b.title) {
            return -1 //a comes first
        } else {
            return 1 //b comes first
        }
    }).map(movie=>movie.title).splice(0,20)
    return orderedMovies
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newMoviesArray = [...moviesArray].map(movie=>{
        duration = movie.duration.split(' ')
        if (duration.length == 2) {
            duration = Number(duration[0].replace('h',''))*60 + Number(duration[1].replace('min',''))
        } else if (duration[0].includes('h')) {
            duration = Number(duration[0].replace('h',''))*60
        } else {
            duration = Number(duration[0].replace('min',''))
        }
        return {...movie, duration: duration}//copy the object and change the property
    })
    return newMoviesArray
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length == 0) {
        return null
    } else {
        //get all years
        let years = moviesArray.map(movie=>movie.year)
        let uniqueYears = [...new Set(years)]
        let newArr = uniqueYears.map(year=>{
          let movieThisYear = moviesArray.filter(movie=>movie.year == year)
          let averScoreThisYear = movieThisYear.reduce((acc,movie)=>{
            if(movie.score){
              return acc + movie.score
            } else {
              return acc
            }
          },0)/movieThisYear.length
          return {year: year,averScore: averScoreThisYear}
        })
        newArr.sort((a,b)=>{
            if(a.averScore == b.averScore){
                if (a.year < b.year){
                  return -1
                } else {
                  return 1
                }
              } else{
              return -a.averScore + b.averScore
              }
        })
        return `The best year was ${newArr[0].year} with an average score of ${newArr[0].averScore}`
        
    }



}
