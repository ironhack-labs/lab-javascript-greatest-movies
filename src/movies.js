
const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const allDirectors = movies.map(eachDirectors =>  eachDirectors.director);
  //Creaamos un array nuevo para limpiar el arrray All Directors con 'Set()'
  const listUnique = [... new Set(allDirectors)]
      
      return listUnique

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) { 
  const SpielbergDrama = movies.filter(eachMovie => { 
    if (eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')) { 
        
        return true
    }
        return false

    })
       
    return SpielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length === 0) {
    return 0
  } else {
    const moviesPromedio =  movies.reduce((acc, eachscore) => {
        if(eachscore.score !== undefined) return acc += eachscore.score 

        return acc
    },0)
        return Number((moviesPromedio / movies.length).toFixed(2))
   } 
}


  
  


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if(movies.length === 0) {
    return 0
  } 
    const dramaMovies = movies.filter(eachMovie => {
      return eachMovie.genre.includes('Drama');
    })
    //console.log(dramaMovies.length)
    if(dramaMovies.length === 0) return 0
  
    const moviesDramaPromedio = dramaMovies.reduce((acc, eachscore) => {
      return acc += eachscore.score 
        
    },0) 
    //console.log(moviesDramaPromedio)
    return Number((moviesDramaPromedio / dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  //const cloneMovies = [... movies]
  const sortCloneMovies = movies.map((movie)=>movie);
  sortCloneMovies.sort(function compare(movie_a, movie_b) {
    //Utilizamos las propiedades ordenamiento -1,0,1
    if (movie_a.year < movie_b.year) return -1; 
    if (movie_a.year > movie_b.year) return 1;
    if (movie_a.year === movie_b.year){ return 0;
    
    }

    });
    //console.log(sortCloneMovies)
    return sortCloneMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  const cloneMovies2 = [... movies ];
  const moviestitle =  cloneMovies2.map(eachDtitle =>  eachDtitle.title);
  //console.log(moviestitle)
  const alphaMovies = moviestitle.sort((movie_a, movie_b) => {
    //Utilizamos las propiedades ordenamiento -1,0,1
    if (movie_a == movie_b) { return 0; }
    if (movie_a < movie_b) { return -1; }
    if (movie_a > movie_b) { return -1; }  
  });
  
  console.log(alphaMovies)
  return alphaMovies.slice(0,20) 
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
