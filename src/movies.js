// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsOnly = []
    moviesArray.map((eachElement) => {
        
        return directorsOnly.push(eachElement.director)
    }) 
    return directorsOnly
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let count = 0;
    let stevenDrama = moviesArray.filter( (eachMovie) => {
        if (eachMovie.director === "Steven Spielberg" && eachMovie.genre.indexOf("Drama") !== -1 ) {
        return true
    } else {
        return false
    }
    })
    return stevenDrama.length
    
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    let result = moviesArray.reduce((acc, eachNumber) => {
        if ( eachNumber.score === undefined) {
            return acc 
        } else {
            return acc + eachNumber.score
        }
    }, 0)
    return result / moviesArray.length
}  // ME FALLA REDONDEAR A DOS DECIMALES con toFixed()

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let filterDrama = moviesArray.filter ((eachElem) => {
        if (eachElem.genre.includes("Drama")) {
            return true
        } else {
            return false
        }
            }
    
    ) 
    if (filterDrama.length == 0) {
        return 0
    }
    console.log(filterDrama)
  let counter = 0
    let scoreDrama = filterDrama.reduce((acc, eachElement) => {
        if (eachElement.score !== undefined) {
          counter++  
          return acc + eachElement.score
        } else {
          counter++
          return acc
        }
    },0  )
    
    return scoreDrama / counter
}
    /* Claramente, el SUPERcondicional que he hecho en el.filter no es la
    solución que tocaba, pero he intentando aplicar otros metodos y no
    me salía. */
    


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesArrayClone = structuredClone(moviesArray);
    let moviesForYears = moviesArrayClone.sort((elem2, elem1) => {
        if ( elem2 === elem1) {
            
        } else if (elem2.year < elem1.year) {
            return 1
        } else if (elem2.year > elem1.year) {
            return -1
        } else {
            return 0
        }
    }  ) 
    return moviesForYears.reverse()

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesArrayClone = structuredClone(moviesArray.splice(0,20));
   
    let moviesTitle = []
    moviesArrayClone.forEach((element) => {
      return moviesTitle.push(element.title)
    }   )
    let moviesOrdered = moviesTitle.sort((elem2, elem1) => {
          if (elem2 < elem1) {
            return 1
           } else if (elem2 > elem1) {
            return -1
               } else {
                return 0
               }
          })
          
      return moviesOrdered
  
  }
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
