// Practice JavaScript advanced methods (map, reduce, filter and sort to manipulate arrays).

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  return movies.map( (movie) => movie.director )

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  
  let moviesFromSpielberg = movies.filter( (movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
  return moviesFromSpielberg.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length === 0) return 0

  function sumScores(acc, elem) {
    if (elem.score) acc += elem.score
    return acc
  } 

  let sum = movies.reduce(sumScores, 0)
  let average = sum / movies.length

  return parseFloat(average.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  let dramaMovies = movies.filter( (movie) => movie.genre.includes("Drama") ) 

  if (dramaMovies.length === 0) return 0

  function sumScores(acc, elem) {
    if (elem.score) acc += elem.score
    return acc
  } 

  let sumScoresDramaMovies = dramaMovies.reduce(sumScores, 0)
  let averageScoreDramaMovies = sumScoresDramaMovies / dramaMovies.length

  return parseFloat(averageScoreDramaMovies.toFixed(2))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  // ----> LOOK AT THIS!!!!!!!!! Why it's the opposite in my mind?

  function sortByYear(a, b) {
    if (a.year < b.year) return -1          // a.year goes first
    else if (a.year > b.year) return 1      // b.year goes first
    else if (a.title < b.title) return -1   // both are equal, then order by title!
    else if (a.title > b.title) return 1
    return 0                        
  }

  // sort is a destructive method, so we create a copy:
  let copyMovies = movies.slice()
  return copyMovies.sort(sortByYear)

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  
  function sortByTitle(a, b) {
    if (a.title < b.title) return -1        
    else if (a.title > b.title) return 1  
    else return 0                          
  }

  // sort is a destructive method, so we create a copy:
  let copyMovies = movies.slice()
  let sortedMovies = copyMovies.sort(sortByTitle)
  let twentyFirstMovies = sortedMovies.slice(0, 20)
                                      .map( (movie) => movie.title)

  return twentyFirstMovies
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {


  let copyMovies = movies.slice()

  function toMinutes(duration) {
    // examples of duration: '3h 22min', '2h', '22min'
    let minutes = 0
    let hours = 0

    if (typeof duration === 'string') {

      if (duration.indexOf('h') != -1) {            
        hours = duration.slice(0, duration.indexOf('h'))

        if (duration.indexOf('min') != -1) {
          minutes = duration.slice(duration.indexOf(' '), duration.indexOf('min'))
        }

      } else if (duration.indexOf('min') != -1) {                 // there is only minutes
        minutes = duration.slice(0, duration.indexOf('min'))
      } else if (duration.indexOf('h') != -1) {                   // there is only hours
        hours = duration.slice(0, duration.indexOf('h'))
      }

    }

    let totalMinutes = parseInt(hours) * 60 + parseInt(minutes)
    return totalMinutes
  }

  copyMovies.forEach( (movie) => { 
    //console.log("BEFORE: " + movie.duration)
    movie.duration = toMinutes(movie.duration)
    
    //console.log(`AFTER, IN MINUTES: ${movie.duration}, datatype ${typeof movie.duration}`)
  })
  
  return copyMovies
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

// CACA.... I'll look at this last iteration over the weekend. 

function bestYearAvg(movies) {
  if (movies.length === 0 ) return null


  const groupByYear = (movies, i) => {
    
    // Return the end result (accumulator!!!)
    return array.reduce( (acc, currentValue) => {
      // If an array already present for key (example: '1975'), then push it to the array. 
      // Otherise, create an array (example: '1990') and push the object to the array.
      if (!acc[currentValue[i]]) {
        acc[currentValue[i]] = [];
      }

      acc[currentValue[i]].push(currentValue);

      // Return the current iteration (current value, accumulator), this will be taken as next iteration 'acc' and accumulate
      return acc;
    }, {} ); // empty object is the initial value for result object
  };

  const moviesGroupedByYear = groupByYear(movies, 'year');

  console.log(moviesGroupedByYear)

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
