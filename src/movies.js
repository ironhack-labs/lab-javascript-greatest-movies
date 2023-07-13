// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
      let dirArr = moviesArray.map((el) => {
       return el.director
        
    })
    return dirArr
    
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spilbArr = moviesArray.filter(el => {
       if ( el.director === "Steven Spielberg" && el.genre.includes('Drama') ) {
        return el
       }
    }) 
    return spilbArr.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    
    let sumRates = moviesArray.reduce((acc, el) => {
        if(el.score === '' || !el.score) {
            el.score = 0;
        }
        return acc + el.score
    }, 0)
    if(moviesArray.length === 0) {
        return 0;
    }
    return Math.round(sumRates/moviesArray.length*100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    let dramaArr = moviesArray.filter(el => {
        if (el.genre.includes('Drama')) {
          return el

        } else if(!el.genre.includes('Drama')) {
            return 0
        }
    })
          
    return scoresAverage(dramaArr);

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    
    let yearArr = moviesArray.slice(0)   
    yearArr.sort((a, b) => {
      
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        }
       
      else 
        return a.year-b.year
})
  return yearArr

}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let titleArr = moviesArray.slice(0)
   
     let  ordTitleArr = titleArr.map(el => {
       return el.title
     })
     
     return ordTitleArr.sort().slice(0, 20)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newMoviesArr = moviesArray.slice(0)
    newMoviesArr.map(el => {
        if (el.duration.includes('h')) {
            let hoursInd = el.duration.indexof('h')
            let hours = parseInt(duration.substring(0, hoursInd))

        }
        if (el.duration.includes('min')) {
            let minInd = el.duration.indexof('min')
            let min = parseInt(duration.substring(hoursInd + 1, minInd))

        }
        let timeDuration = hours * 60 + min
        newMoviesArr.duration = timeDuration

    })
    return newMoviesArr
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
