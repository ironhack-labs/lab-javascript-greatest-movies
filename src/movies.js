

// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors (movie) {

  const allMoviesDirectors = movie.map (function (eachMovie){

    return  eachMovie.director

  })
  return allMoviesDirectors
 
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movie) {

  const stevenSpilberg = movie.filter(function (eachMovie) {

    return  eachMovie.director.includes('Spielberg') && eachMovie.genre.includes('Drama') 

  })

  return stevenSpilberg.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movie) {

 const moviesScore = movie.reduce(function (acc, eachMovie) {

  let sumMovie = 0

   if (eachMovie.score !== '') {

    sumMovie = acc + eachMovie.score

    }


   return  sumMovie
    
      
  }, 0 );

   let moviesAverage = 0 

    if ( movie.length !== 0 ){

      moviesAverage = moviesScore / movie.length

    }
   
  return Number (moviesAverage.toFixed(2))
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movie) {
  /*

 const dramaMovies = movie.filter(function(eachMovie){

   return eachMovie.genre.includes('Drama')

  })
  

 const dramaAverage = dramaMovies.reduce(fuction( acc, dramaMovies){

    const averageDramaResult = acc + movies

  })


 */ 



}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movie) {

 const allMoviesYearsCopy = JSON.parse(JSON.stringify(movie))
    
  allMoviesYearsCopy.sort (function (a, b) {

    if (a.title < b.title) return -1; 

    if (a.title > b.title) return 1; 

    if (a.title === b.title) return 0; 

  })

  allMoviesYearsCopy.sort(function(a, b) {

    if (a.year < b.year) return -1; 

    if (a.year > b.year) return 1; 

    if (a.year === b.year) return 0; 

  })
   
  return allMoviesYearsCopy

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movie) {

  const orderMoviesAToZ = JSON.parse(JSON.stringify(movie))

  const orderTitles = orderMoviesAToZ.map (function (eachMovie){

    return  eachMovie.title

  })

  orderTitles.sort()
    
  return orderTitles.slice(0, 20)

}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

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



const movies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  },
]

window.addEventListener('load', () => {

  orderByYear (movies);

})