
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {

  // constructing the directorsArray
  const directors = moviesArr.map( (movie) => {
    return movie.director
  })

  //constructing an array that contains each directors without repetition 

  return directors
}

// eliminateDuplicates from a given array
function eliminateDuplicates(arr){
  const result = []
  arr.forEach( el => {
    if( ! result.includes(el) ){
      result.push(el)
    }
  })
  return result
}

//return directors, no repetition
function getAllDirectorsNoDuplicates(moviesArr){
  return eliminateDuplicates(getAllDirectors(movies));
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
   const spielbergMovies = moviesArr.filter( movie => movie.director.includes('Spielberg'))
   const spielbergDramaMovies = spielbergMovies.filter( movie => movie.genre.includes('Drama'))
   return spielbergDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movieArr) {
  if(movieArr.length === 0){
    return 0
  }  

  const sum = movieArr.reduce( (acum, movie) =>{
    if( movie.score ){
      return acum + movie.score
    }
    return acum    
  }, 0 )

  const average = Math.round( (sum / movieArr.length) * 100 ) /100
  return average
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  return scoresAverage( moviesArr.filter( movie => movie.genre.includes('Drama')))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) { 
  const moviesChronologicalyOrdered = [... moviesArr.sort( (movie1, movie2) => {
    if( movie1.year - movie2.year){
      return movie1.year - movie2.year
    }
    return movie1.title.localeCompare( movie2.title)
  }) ]
  return moviesChronologicalyOrdered
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  const tempMoviesArray = [... moviesArr]
  const alphabeticallyOrderedMovie = [... tempMoviesArray.sort( (movie1,movie2) => movie1.title.localeCompare(movie2.title) ) ]

  const n = Math.min( 20, alphabeticallyOrderedMovie.length )
  const first20 = alphabeticallyOrderedMovie.slice(0, n)

  const first20Titles = []
  for( let i = 0; i<n ; i++){
    first20Titles.push(first20[i].title)
  }

  return first20Titles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function uniformizeTimeFormat(time){
  const trimmedTime = time.trim();
  const h = trimmedTime.indexOf('h')
  const space = trimmedTime.indexOf(' ')
  const min = trimmedTime.indexOf('m')

  const minH = h>0 ? Number.parseFloat( time.slice(0, h) ) : 0;;
  // console.log('minutes from hour ', minH)
  const minM = min > 0 ? Number.parseFloat( time.slice(space + 1, min) ) : 0;
  // console.log('minutes from minutes ', minM)

  return minH * 60 + minM
}

function turnHoursToMinutes(moviesArr) {
  // const tempMoviesArray = [... moviesArr]
  const tempMoviesArray = JSON.parse( JSON.stringify( moviesArr ))

  tempMoviesArray.map( movie => {
    // console.log(movie.duration)
    movie.duration = uniformizeTimeFormat(movie.duration)
  })
  return tempMoviesArray
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average


function numbersArrayAvg(arr){
  return arr.reduce( (acum, el ) => acum + el) / arr.length
}



function bestYearAvg(movieArr) {
  if(movieArr.length == 0) {
    return null;
  }

  const yearsList = []
  movieArr.forEach( elem => {
    const year = elem.year
    if( !yearsList.includes(year) ){
      yearsList.push(year)
    }    
  })

  const ratingsByYear = []

  //we'll store the ratings for each year in an array with elements of type [year, [ ratingsArray ]]
  // Example: [ [1990, [5, 4, 6, 7, 6, 7] ] , [1991, [8, 9, 8, 9, 8, 9] ], ... ]
  // At first we initialize the array with pairs [ year, emptyRatingsArray ]
  yearsList.forEach( elem => {
    ratingsByYear.push( [elem, [] ] )
  })


  // we populate the ratingsArrays
  movieArr.forEach( movie => {
    const index = movie.year;
    const tempRating = movie.score > 0 ? movie.score : 0

    ratingsByYear.map( elem => {
      if ( elem[0] == index ){
        elem[1].push(tempRating)
      }
    })
  })

  // numbersArrayAvg() calculates the average of the second element in a [year, ratings] pair, ergo the averageYearlyRating for the given year
  // ordering [year, ratings] pairs by averageYearlyRating (inverted order)
  ratingsByYear.sort( (el1, el2) => numbersArrayAvg(el2[1]) - numbersArrayAvg(el1[1]) );

  // In the ordered list, the first pair corresponds to the year with the greatest average
  const maximumAverage = numbersArrayAvg(ratingsByYear[0][1]);

  // finalNomineesMoviesArray keeps an indepth copy of all the pairs [year, maximumAverage]
  const finalNomineesMoviesArray = JSON.parse( JSON.stringify( ratingsByYear )).filter( elem => numbersArrayAvg( elem[1] ) === maximumAverage)

  // we arrange the finalNomineesMoviesArrays by year, in ascending order
  finalNomineesMoviesArray.sort( (e1, e2) => e1[0] - e2[0])

  // the first pair is the one with the the smallest year ( from the top rated ones)
  const theWinner = finalNomineesMoviesArray[0]

  return `The best year was ${theWinner[0]} with an average score of ${ numbersArrayAvg(theWinner[1])}`;
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
