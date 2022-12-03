// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directors = moviesArray.map((objeto) => objeto.director);

    const uniqueDirectors = [];
    directors.map(director => { if (!uniqueDirectors.includes(director)) uniqueDirectors.push(director)});
    return uniqueDirectors;
    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const spielbergDramaMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    return spielbergDramaMovies.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const scoreAverage = moviesArray.map((movie) => movie.score);
    let average = 0;
    
    if(moviesArray.length != 0) {
      average = Math.round((scoreAverage.reduce((a,b) => a + b, 0)/scoreAverage.length) * 100) / 100;}

    return average;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const scoreDramaAverage = moviesArray.filter((movie) => movie.genre.includes('Drama')).map((movie) => movie.score);
    let dramaAverage = 0;
    
      if(scoreDramaAverage.length === 0){
        return dramaAverage;
      } else{
        dramaAverage = Math.round((scoreDramaAverage.reduce((a,b) => a + b, 0)/scoreDramaAverage.length) *         100) / 100;
      
      return dramaAverage;
      }
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

  const moviesOrderedByYear = moviesArray.map(x => x).sort((a,b) => a.year - b.year);
  
  return moviesOrderedByYear;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

  const moviesOrderedByTitle = moviesArray.map(x => x.title).sort();
  
  return moviesOrderedByTitle.filter((x, i) => i < 20);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
