// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const allDirectors = moviesArray.map(movies => movies.director );
   
    return  allDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  //Filter the movies with director Steven Spielberg and which genre is Drama
    const directedBy = moviesArray.filter(movie => movie.director === 'Steven Spielberg' &&  movie.genre.includes("Drama"));
 // Return the number of movies
    return directedBy.length;
 }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const totalAverage = moviesArray.reduce(function (acc, val) {
      //If score is undefined return acc = 0 (Initial Value)
      if (val.score === undefined) {
        return acc;
      } 
       
      return acc + val.score;
      
    }, 0);

    if (totalAverage === 0) {
      return 0;
    } 

    return Math.round((totalAverage / moviesArray.length) * 100) / 100;
  }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const getDramas = moviesArray.filter(dramas => dramas.genre.includes("Drama"));
    const totalAverage = getDramas.reduce(function (acc, val) {
        if (val.score === undefined) {
          return acc;
        }
    
        return acc + val.score;
      }, 0);
    
      if (totalAverage === 0) {
        return 0;
      }
      return Math.round((totalAverage / getDramas.length) * 100) / 100;
    }
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // Making a Clone
  const moviesByYearArray = moviesArray.map(x => x);
    const alphMoviesByYearArray =  moviesByYearArray.sort((a, b) => {
      if (a.title < b.title) {
        return -1
      }
      return a.year - b.year
    })
    return alphMoviesByYearArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  
  const clone = moviesArray.map(x => x);

  const sortByTitle = clone.map(title => title.title)
  ;

  const allTitles = sortByTitle.sort();

  const Top20Movies = allTitles.splice(0,20);
  return Top20Movies;




}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
