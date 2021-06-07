
const movies = [
  {
    title: 'The Shawshank Redemption',
    year: 2000,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  },
  {
    title: 'www',
    year: 2000,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 8
  },
  {
    title: 'The Godfather',
    year: 1222,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 10
  },
  {
    title: 'The Godfather',
    year: 1222,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 7
  },
  {
    title: 'The Godfather: Part II',
    year: 1993,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 6
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    score: 5
  },
  {
    title: 'Schindler"s List',
    year: 1993,
    director: 'Steven Spielberg',
    duration: '3h 15min',
    genre: ['Biography', 'Drama', 'History'],
    score: 7
  }
]

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  const directors = moviesArr.map( (movie) => {
    console.log(movie.director)
    return movie.director
  })
  return directors
}

getAllDirectors(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
   const spielbergMovies = moviesArr.filter( movie => movie.director.includes('Spielberg'))
   console.log(spielbergMovies)
   const spielbergDramaMovies = spielbergMovies.filter( movie => {
    //  console.log(movie.genre.includes('Drama'))
      return movie.genre.includes('Drama')
   })
   console.log('Drama', spielbergDramaMovies)
   return spielbergDramaMovies.length
    
  
    // movie.genre.includes('drama'))
}

howManyMovies(movies)

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
  console.log(sum)
  const average = Math.round( (sum / movieArr.length) * 100 ) /100
  console.log (average)
  return average
}

scoresAverage(movies)
   

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

console.log( orderByYear(movies) )


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  const tempMoviesArray = [... moviesArr]
  const alphabeticallyOrderedMovie = [... tempMoviesArray.sort( (movie1,movie2) => movie1.title.localeCompare(movie2.title) ) ]
  console.log( alphabeticallyOrderedMovie )
  console.log( moviesArr)
  const n = Math.min( 20, alphabeticallyOrderedMovie.length )
  const first20 = alphabeticallyOrderedMovie.slice(0, n)
  const first20Titles = []
  for( let i = 0; i<n ; i++){
    first20Titles.push(first20[i].title)
  }
  return first20Titles
}

console.log( orderAlphabetically(movies) )

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function uniformizeTimeFormat(time){
  const trimmedTime = time.trim();
  const h = trimmedTime.indexOf('h')
  const space = trimmedTime.indexOf(' ')
  const min = trimmedTime.indexOf('m')

  const minH = h>0 ? Number.parseFloat( time.slice(0, h) ) : 0;;
  // console.log('minute din ore ', minH)
  const minM = min > 0 ? Number.parseFloat( time.slice(space + 1, min) ) : 0;
  // console.log('minute din minute ', minM)

  return minH * 60 + minM

}

uniformizeTimeFormat('234h 2112m')

function turnHoursToMinutes(moviesArr) {
  // const tempMoviesArray = [... moviesArr]
  const tempMoviesArray = JSON.parse( JSON.stringify( moviesArr ))

  tempMoviesArray.map( movie => {
    // console.log(movie.duration)
    movie.duration = uniformizeTimeFormat(movie.duration)
  })
  return tempMoviesArray
}

console.log('1. ' , movies)
console.log('2. ' , turnHoursToMinutes(movies))


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

  yearsList.forEach( elem => {
    ratingsByYear.push( [elem, [] ] )
  })

  movieArr.forEach( movie => {
    const index = movie.year;
    const tempRating = movie.score > 0 ? movie.score : 0

    ratingsByYear.map( elem => {
      if ( elem[0] == index ){
        elem[1].push(tempRating)
      }
    })
  })

  ratingsByYear.sort( (el1, el2) => numbersArrayAvg(el2[1]) - numbersArrayAvg(el1[1]) );


  const suffering = numbersArrayAvg(ratingsByYear[0][1]);
  const finalNomineesMoviesArray = JSON.parse( JSON.stringify( ratingsByYear )).filter( elem => numbersArrayAvg( elem[1] ) === suffering)

  finalNomineesMoviesArray.sort( (e1, e2) => e1[0] - e2[0])

  const theWinner = finalNomineesMoviesArray[0]


  console.log('^^^^^^^^^^^^^^', finalNomineesMoviesArray)

  



  // const suffering = numbersArrayAvg(ratingsByYear[0][1]);
  // const winnigIndex == 0;

  // for( const i = 0; i<ratingsByYear.length; i++ ){
  //   if( numbersArrayAvg( ratingsByYear[i][1] ) < suffering){
  //     break
  //   }else if( ratingsByYear[i][0] < ratingsByYear[winnigIndex])

  // }





  return `The best year was ${theWinner[0]} with an average score of ${ numbersArrayAvg(theWinner[1])}`;
  // return `The best year was ${theWinner[0]} with an average score of ${ numbersArrayAvg(theWinner[1])}`;
  // return `The best year was ${ratingsByYear[0][0]} with an average score of ${ numbersArrayAvg(ratingsByYear[0][1])}`;

}

console.log( bestYearAvg(movies) )



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
