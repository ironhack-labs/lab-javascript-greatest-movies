// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    const directorsArray = movies.map(elm => {
        const Director = elm.director
        return Director
    })
    const directorsUniqueArray = directorsArray.filter ( (elm,index) => {
        return directorsArray.indexOf(elm) == index
    }) 
    return directorsUniqueArray
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const spielbergMovies = movies.filter (elm => elm.director === 'Steven Spielberg')
    
    const spielbergDramaMovies = spielbergMovies.filter (elm2 => elm2.genre.includes('Drama'))
        
    return spielbergDramaMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    const cleanMovies = movies.map(elm => {
        if (elm.rate) { 
            return elm.rate
        }
        else {
            return 0
        }
    })
    const totalPoints = cleanMovies.reduce ((acc, elm) => acc + elm , 0)
    const totalMovies = cleanMovies.length
    
    if (totalMovies === 0) {
        return 0
    }
    
    const rateAverage = totalPoints / totalMovies
    
    if (rateAverage % 10 === 0) {
        return rateAverage
    }
    else {
        return +rateAverage.toFixed(2)
    }
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(films) {

    const dramaMovies = films.filter (elm => elm.genre.includes('Drama'))

    const cleanDramaMovies = dramaMovies.map(elm => {
        if (elm.rate) { 
            return elm.rate
        }
        else {
            return 0
        }
    })

    const totalDramaPoints = cleanDramaMovies.reduce ((acc, elm) => acc + elm , 0)
    const totalDramaMovies = cleanDramaMovies.length
    
    if (totalDramaMovies === 0) {
        return 0
    }

    const rateDramaAverage = totalDramaPoints / totalDramaMovies
    
    if (rateDramaAverage % 10 === 0) {
        return rateDramaAverage
    }
    else {
        return +rateDramaAverage.toFixed(2)
    }
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies) {
    const orderedMovies = [...movies]
    orderedMovies.sort((a,b) => {
         if (a.year - b.year === 0) {
             const orderedByTitle = a.title.localeCompare(b.title)

             if (orderedByTitle > 0) {
                 return 1
             }
             if (orderedByTitle < 0) {
                return -1
            }
            return 0
        }   
 
        else {
            return a.year - b.year
        }
    })

    return orderedMovies

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    
    const copyMovies = [...movies]
    const movieTitles = copyMovies.map(elm => elm.title)

    movieTitles.sort((a,b) => {
        return a.localeCompare(b)
    })

    if (movieTitles.length > 20) {
            movieTitles.splice(20)
    }
    
    return movieTitles
    
}
  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    const minuteMovieA = [...movies] //solo con esto no me lo coge como array distinto al original
    
    const minuteMovies = minuteMovieA.map (elm => { //el array era copia real pero los objetos seguían por referencia??
        const intermediateElm = {...elm}
        return intermediateElm
    })

    minuteMovies.forEach (elm => {
        const hoursInMinutes = parseInt(elm.duration.substring(0, 1)) * 60
        const minutes = parseInt(elm.duration.substring(3, 7))
        let durationMinutes = hoursInMinutes + minutes
        
        if (elm.duration.includes('h') === false) {
            durationMinutes = parseInt(elm.duration.substring(0, 3))
        }

        if (elm.duration.includes('min') === false) {
            durationMinutes = parseInt(elm.duration.substring(0, 1) * 60)
        }

        elm.duration = parseInt(durationMinutes)
    })

    return minuteMovies
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

/* 
    SORT movies array
    
    MAP contest array
      with Object: year, rates[], average
    
    UNIQUIFY contest array x year
    
    forEach contest array(      )
            contest.rate = movies.filter(by year)
            contest.average = contest.rate.reduce
    
    SORT contest array x average

    console.log
*/
function bestYearAvg(movies) {

    if (!movies.length) {
        return null
    }
    //hago copia "real" de array y elementos interiores
    const averageMovieA = [...movies] 
    const averageMovies = averageMovieA.map (elm => { 
        const intermediateElm = {...elm}
        return intermediateElm
    })

    averageMovies.sort((a,b) => a.year - b.year)

    const movieYearsA = averageMovies.map(elm => elm.year) // extract the years list

    const movieYears = movieYearsA.filter((elm, index) => { // and make it unique
    return movieYearsA.indexOf(elm) == index
    })

   const contestArray = movieYears.map(elm => { //create contestArray from the years list
       contestObject = {
           year: elm,
           rates: [],
           yearAverage: 0
       }
       return contestObject
   })

   contestArray.forEach(elm => {
       fillerYear = elm.year
       elm.rates = averageMovies.filter(elm2 => elm2.year === fillerYear).map(elm => elm.rate)// add all the year's rates to the arrar
       elm.yearAverage = elm.rates.reduce((acc,elm3) => acc + elm3, 0) / elm.rates.length// calculate the average
   })

   contestArray.sort((a,b) => b.yearAverage - a.yearAverage)

   console.log(`The best year was ${contestArray[0].year} with an average rate of 8.5${contestArray[0].yearAverage.toFixed(1)}`)
}

// Jasmine puede decir misa, pero el código pasa los 3 últimos test en Codepen: https://codepen.io/chinostrike/pen/bGpgPmL