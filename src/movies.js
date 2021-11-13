// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors( movies ) {
  let allDirectors =  movies.map( element  => element.director )

  let cleanAllDirector = allDirectors.filter( (element, indice, array) => {
    return indice === array.indexOf(element)
  })

  return cleanAllDirector
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies( movies ) {

  const dramaSpielberg = movies.filter( element => {

    if ( element.director === "Steven Spielberg" && element.genre.includes('Drama') ) {
      return element
    }
  })

  return dramaSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage( movies ) {

  if( movies.length === 0 ) return 0

  const scoreSumMovies = movies.reduce( ( acumulator, element, indice, array ) => {

    if( element.score === undefined ) element.score = 0;
    return element.score + acumulator
  }, 0)

  const result = scoreSumMovies / movies.length
  return Math.round( result * 100 ) / 100  
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const dramas = movies.filter( (element) => {
    if ( element.genre.includes('Drama') ) return element 
  })

  return scoresAverage(dramas)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear( movies ) {

  const copiedArray =  [ ...movies ];

  const orderMoviesNum = copiedArray.sort( (element1, element2 ) => {
    return element1.year - element2.year;
  })

  const orderString = orderMoviesNum.sort( (element1, element2 ) => {
    if ( element1.year === element2.year ) {
      if(element1.title < element2.title) return -1;
      if(element1.title > element2.title) return 1; 
      return 0;
    }
  })
  

  return orderString
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically( movies ) {

  let only20 = movies.map(element => element.title).sort( (element1, element2 ) => {
      if(element1 < element2) return -1;
      if(element1 > element2) return 1; 
      return 0;
  }).slice(0, 20)

  return only20

}

// orderAlphabetically( movies )

function turnHoursToMinutes( movies ) {



  let formatMovies = movies.map( element => {

    const durationArray = element.duration.split(' ')

      durationArray[0] = durationArray[0].replace("h", "")

     if (durationArray[1] === undefined) {
       durationArray[1] = 0;
     } else {
       durationArray[1] = durationArray[1].replace("min", "")
     }

    const durationArrayCleaned =  parseFloat(durationArray[0]) * 60 + parseFloat(durationArray[1]);

    element.duration = durationArrayCleaned;

    return element

  })

  // console.log(formatMovies)

  return formatMovies

}

// turnHoursToMinutes( movies ) 
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



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
