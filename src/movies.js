const movies = require('./data.js');
// Iteration 1 / 1.1: All directors? - Get the array of all directors.
function getAllDirectors(movies) { 
  const allDirectors = movies.map( (movie) => movie.director );
  const uniqueDirectors = allDirectors.filter( (director, i) => allDirectors.indexOf(director) === i);
  return uniqueDirectors;
}
getAllDirectors(movies)
 
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const steven = movies.map( movie => movie.director ).filter( (director) => director === 'Steven Spielberg' );
  return steven.length;
}
howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const allScores = movies.reduce( (sum, score) => sum + score.score, 0);
  return (allScores/movies.length).toFixed(2);
}
scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {  
  const dramaAvg = movies.filter( (type) => type.genre.includes('Drama')).reduce( (sum, grade) => sum +  grade.score,0);
  return ( dramaAvg / ( movies.filter( (type) => type.genre.includes('Drama')).length ) ).toFixed(2);
}
dramaMoviesScore(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const ordered = movies.sort( (elem1,elem2) => {
    switch(true){
      case elem1.year < elem2.year:
        return -1;
      case elem1.year > elem2.year:
        return 1;
      case elem1.year === elem2.year:
        if(elem1.title < elem2.title){return -1;} 
        else if(elem1.title > elem2.title){return 1;}
    }
  })
  return ordered;
}
orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const titles = movies.map( (movie) => movie.title).sort().slice(0,20);
  return titles;
}
orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){
  const allMovies = movies.map (movie => 
    (

    movie.duration  )  )


  return allMovies
}
console.log(turnHoursToMinutes(movies))

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
