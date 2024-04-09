// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map((singlemovie) => {
        return singlemovie.director
    })
    return directorsArray
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
        
    return spielbergMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    } else 
    {const totalSum = moviesArray.reduce((acc, val) => {
        if (typeof val.score !== "number") {
            val.score = 0
          } 
        return acc + val.score
    }, 0)
return Number((totalSum / moviesArray.length).toFixed(2))}
}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"));
    if (dramaMovies.length === 0) {
        return 0
    } else {
    const totalSum = dramaMovies.reduce((acc, val) => {

        return acc + val.score
    },0)
    
return Number((totalSum / dramaMovies.length).toFixed(2))}
}

console.log(dramaMoviesScore(movies))



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const clonedArray = moviesArray.slice();
    clonedArray.sort((a, b) => 
    {
        if (a.year === b.year) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
            if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
        }
        else {
            return a.year - b.year
        }
    })
    return clonedArray
  }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const clonedArray = moviesArray.slice();
    clonedArray.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
        if (a.title.toLowerCase() === b.title.toLowerCase()) return 0
    })

    if (clonedArray.length <= 20) {
        return clonedArray.map((object) => object.title)
    }
    else {
        const top20 = (clonedArray.map((object) => object.title)).slice(0, 20)
        return top20
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const clonedArray = moviesArray.slice();
    clonedArray.forEach((object) => {
       let time = object.duration
       let hour = 0
       let min = 0
       if(time.indexOf("h") === -1){
        hour = 0
        min = Number(time.slice(0, time.indexOf("min")))
      }
      else if(time.indexOf("h") > 0) {
        hour = Number(time.slice(0, time.indexOf("h"))) * 60
        min = Number(time.slice(time.indexOf(" "), time.indexOf("min")))
      }
      else {
        console.log('Wrong date format')
      }
      time = hour + min
      object.duration = Number(time)
    })
    return clonedArray
}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null
    } else {

        let bestAvg = 0
        let bestYear = 0

        moviesArray.forEach((array) => {
            const oneYearArray = moviesArray.filter((object) => 
            {object = object.year;
            return object})

        
        })

        
    }
}


