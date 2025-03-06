// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = [];
    for (let i = 0; i < movies.length; i++) {
        if (!directors.includes(movies[i])) {
         directors.push(movies[i].director);
    }
    }
    return directors
  }
  console.log (getAllDirectors(movies))
  
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const SpilbergMovies = movies.filter((movies)=> {
        return movies.director === 'Steven Spielberg' && movies.genre.includes('Drama');
      });
      console.log (SpilbergMovies.length)
    }
   
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let score = []
    for (let i = 0; i < movies.length; i++) {
         score.push(movies[i].score);
        }
    const suma = score.reduce((acc, el) => acc+el,0);
    const avg = suma/ score.length;
  return avg.toFixed(2);
}
console.log (scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMov = movies.filter((movies)=> {
        return movies.genre.includes('Drama');
      });
      let dramScore = []
      for (let i = 0; i < dramaMov.length; i++) {
           dramScore.push(dramaMov[i].score);
          }
      const suma = dramScore.reduce((acc, el) => acc+el,0);
      const avg = suma/ dramaMov.length;
    return avg.toFixed(2);
 }
console.log (dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
   let byTitle = movies.sort((a, b) => a.title.localeCompare(b.title));;
   let byYear= byTitle.sort((a, b) => a.year - b.year);
   return byYear
}
console.log (orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let titles = [];
    for (let i = 0; i < movies.length; i++) {
         titles.push(movies[i].title);
    }
    let byTitle = titles.sort((a, b) => a.localeCompare(b));
    let fisrt20= byTitle.slice(0, 20);
   return fisrt20;
}
console.log (orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
