// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {  
     const mappedArr = moviesArray.map((movies) => { 
        return movies.director; 
     }); 
          return mappedArr;
     }
          
        
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramaMovies = 0;
  
    const spielbergMovies = moviesArray.filter((film) => film.director === "Steven Spielberg");
   
    const spielbergMoviesGenre = spielbergMovies.map((element) => element.genre);
    
    const spielbergMoviesDrama = spielbergMoviesGenre.forEach((element1) => {
    element1.forEach((element2)=> {
      if (element2 === "Drama") {
        dramaMovies += 1; 
      }
    })
  })
  return dramaMovies
   
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
    const sumScores = moviesArray.reduce((accumulator, movie) => {
      if (!movie.score) {
        return accumulator;
      }
      return accumulator + movie.score;
    }, 0);
    return Math.round((sumScores / moviesArray.length) * 100) / 100;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramas = moviesArray.filter((movie) => {
      return movie.genre.includes("Drama");
    });
    if (dramas.length === 0) {
      return 0;
    }
    const sumScores = dramas.reduce((accumulator, movie) => {
      if (movie.score) {
        return accumulator + movie.score;
      }
      return accumulator;
    }, 0);
    return Math.round((sumScores / dramas.length) * 100) / 100;
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

const sortedByYearMoviesArray = JSON.parse(JSON.stringify(moviesArray)).sort((a,b)=> a.year - b.year);

const sortedMoviesArray = sortedByYearMoviesArray.sort(function(a,b){
  if(a.year === b.year) { 
  return a.title.localeCompare(b.title)};
})
  
return sortedMoviesArray

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

  const copySortedTwentyArr = JSON.parse(JSON.stringify(moviesArray)).sort((a,b)=> a.title - b.title);

  let titleString = []

  copySortedTwentyArr.forEach((element) => {
    return titleString.push(element.title);
  })

  const sortedAlphabeticallyTitle = titleString.sort(function(a,b){
   return a.localeCompare(b)});

  return sortedAlphabeticallyTitle.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
