

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {

    const allDirectors = movies.map (movies => movies.director)
        
    return allDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(movies) {

  const allDirectors = movies.map (movies => movies.director)

  const allDirectorWithoutDuplicates = allDirectors.filter ((director,index) => allDirectors.indexOf(director) === index)
      
  return allDirectorWithoutDuplicates;
}




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies (movies) { 


    const moviesDirectorStevenSpielberg = movies.filter( movie => {
      return movie.genre.find(genre => genre === 'Drama') && movie.director === 'Steven Spielberg'

    })
    
      return moviesDirectorStevenSpielberg.length
  
  
  }


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (movies) {
  
  if (movies.length === 0) return 0

  const ratesValue = movies.filter( movie => movie.hasOwnProperty('rate')).reduce((sum, sumRate) => sum + sumRate.rate, 0)
  const rateAverage = ratesValue / movies.length;

  return parseFloat(rateAverage.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies



function dramaMoviesRate (movies) {


  const moviesDrama = movies.filter( movie => movie.genre.find (genre => genre === 'Drama'))
  const moviesValues = moviesDrama.reduce((sum, sumRate) => sum + sumRate.rate, 0)
  const dramaValuesAverage = moviesValues / moviesDrama.length


  if (moviesDrama.length === 0) return 0


  return parseFloat(dramaValuesAverage.toFixed(2))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


 function orderByYear (movies) {
   
  if ( movies.length === 0 ) return null 

  const moviesNewArr = movies.sort ((a, b) => {

    return a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year
  })

  return moviesNewArr

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles



function orderAlphabetically (movies) {

  const newMovies = movies.slice()

  const moviesOrder = newMovies.sort((a, b) => a.title.localeCompare(b.title)).map( movie => movie.title).slice(0,20)
  
  
  return moviesOrder

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes (movies) {

  const moviesMinutes = movies.map ( movie => {

    const duration = movie.duration

    let hours = parseInt(duration.substring(0, duration.indexOf('h')))
    let minutes = parseInt(duration.substring(duration.indexOf(' ') + 1, duration.indexOf('min')))


    if (isNaN (minutes))  minutes = 0
    if (isNaN (hours)) hours = 0

    const totalMinutes = (hours * 60) + minutes


    return {
      "title": movie.title,
      "year": movie.year,
      "director": movie.director,
      "duration": totalMinutes,
      "genre": movie.genre,
      "rate": movie.rate
    }
  })

  return moviesMinutes 

}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


function bestYearAvg (movies) {


  if (movies.length === 0) return null

  
  const getRepeat = movies.reduce ((acum, value) => {
 
    if (typeof acum[value.year] === 'undefined') {
      acum[value.year] = {
      'sum' : (acum[value.year] || 0) + parseFloat(value.rate),
      'count' : (acum[value.year] || 0) + 1
      }
 
    } else {
       acum[value.year] = {
         'sum' : (acum[value.year].sum || 0) + parseFloat(value.rate),
         'count' : (acum[value.year].count || 0) + 1
       }
    }
 
     return acum
 
   },{})
 
   const keys = Object.keys(getRepeat)
   
   const averageForDate = keys.map (key => {
 
       const average = getRepeat[key].sum / getRepeat[key].count
 
     return {
         'year' : key  ,
         'totalAverage' : average
     }
 
   }).sort((a,b) => {
      return a.totalAverage === b.totalAverage ? b.year - a.year : a.totalAverage - b.totalAverage
    }) 
 
 
   const accessdate = averageForDate[averageForDate.length -1]
 
   const result = `The best year was ${accessdate.year} with an average rate of ${accessdate.totalAverage}`
 
  return result
 
 
 }
