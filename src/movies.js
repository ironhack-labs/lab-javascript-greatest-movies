// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const result = moviesArray.map(element => {
        return element.director
    })
    return result
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const result = moviesArray.filter(element => {
        return element.director.includes('Steven Spielberg') &&
            element.genre.includes('Drama')
    })

    return result.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }

    const result = moviesArray.reduce((acc, element) => {
        if (!element.score) {
            element.score = 0
        }
        return acc + element.score
    }, 0)

    return Number((result / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const result = moviesArray.filter(element => {
        return element.genre.includes('Drama')
    })
    const result2 = result.reduce((acc, element) => {
        return acc + element.score
    }, 0)

    if (result.length === 0) return 0

    return Number((result2 / result.length).toFixed(2))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    return moviesArrayCopy.sort((a, b) => {

        if (a.year < b.year) {
            return -1
        }
        if (a.year > b.year) {
            return 1
        }

        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        }


        //return a.year - b.year
    })





}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    moviesArrayCopy.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        }
    })

    const result = moviesArrayCopy.map(element => {
        return element.title
    })

    if (result.length < 20) {

        return result

    } else {
        return result.splice(0, 20)
    }


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const arrayWithMins = moviesArray.map(element => {
        const objectCopy = { ...element };
        // const duration = objectCopy.duration
        if (objectCopy.duration.length === 2) {
            objectCopy.duration = Number(objectCopy.duration[0]) * 60
        } else {
            let arr = objectCopy.duration.replace('min', '').split('h ')
            let horas = arr[0]
            let mins = arr[1]
            objectCopy.duration = Number(horas) * 60 + Number(mins)
        }
        return objectCopy
    })

    return arrayWithMins
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null
    }

    /*   const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
  
  
      moviesArrayCopy.sort((a, b) => {
  
          if (a.year < b.year) {
              return -1
          }
          if (a.year > b.year) {
              return 1
          }
      })
  
      console.log(moviesArrayCopy)
  
      const yearArray = [
          {
              year: ""
              rate: ""
          }
      ]
      const newArray = moviesArrayCopy.map(element => {
          const previousYear = ""
          if (element.year ===)
      })
  
  
  
  */

}
