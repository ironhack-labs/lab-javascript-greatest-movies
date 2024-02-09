// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
    return movies.map(movie => movie.director);
  }
  
  console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

//filter movies with steven spielberg, out of this which ones are drama. Show in numbers.


function howManyMovies(movies) {
    if (movies.length === 0) {
      return 0;
    }
  
    let stevenDramaFilter = movies.filter(movie =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
    
    return stevenDramaFilter.length;
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
   
    const sumScores = movies.reduce((accumulator, movie) => accumulator + movie.score, 0);
    
   
    const average = sumScores / movies.length || 0; 
    
    return Number(average.toFixed(2));
  }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

    const dramaMovieFilter = movies.filter(movie => movie.genre === "Drama");
    if (dramaMovieFilter.length === 0) {
        return 0;
      }
    
    const sumDramaMovie = dramaMovieFilter.reduce((accumulator, movie) => accumulator + movie.score, 0);
  
    const averageMovieDrama = sumDramaMovie / dramaMovieFilter.length || 1; 
  
    return Number(averageMovieDrama.toFixed(2)); 

  }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sliceMovies = movies.slice(0, 250);

  const orderedByYear = sliceMovies.sort(function(a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  console.log(orderedByYear);
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const orderAlphaTwenty = moviesArray.slice(0, 20); 
  const orderedByTitle = orderAlphaTwenty.slice().sort((a, b) => a.title.localeCompare(b.title)); 
  return orderedByTitle; 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
