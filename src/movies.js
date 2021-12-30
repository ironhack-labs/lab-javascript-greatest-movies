// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(movie => movie.director);
  return directors;
}

/* Espaço para fazer o ITERATION 1 BONUS
 
ATENÇÃO: lembre-se de fazer essa parte também!

*/


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaStevenSpielberg = movies.filter(movie => movie.genre.includes("Drama") && movie.director === "Steven Spielberg")
  return dramaStevenSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const scores = [];
  let validScores = 0;

  if(movies.length === 0){
    return 0
  } else {
    for(let i = 0; i < movies.length; i += 1){
      if(movies[i].score === undefined){
        continue
      } else {
      scores.push(movies[i].score);
      validScores += 1;
      }
    }
    const scoresAverage = Math.round((scores.reduce((accumulator, score) => accumulator + score, 0) / movies.length) * 100) / 100;
    /* 
    O teste espera o tamanho do array para calcular a média, mas se um filme está sem o valor do 
    score, acredito que o mais correto seria contabilizar a média considerando apenas aqueles que possuem 
    score atribuído. No caso, podemos utilizar a variável validScores que foi criada na função, caso 
    contrário estaríamos atribuindo uma nota 0 em vez de considerar que não há nota para o filme, 
    e dessa forma causando uma redução no valor da média.
    */
    return scoresAverage; 
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
  const dramaMoviesScores = [];
  if(dramaMovies.length === 0) {
    return 0
  } else {
    for(let i = 0; i < dramaMovies.length; i += 1){
      if(dramaMovies[i].score === undefined){
        continue
      } else {
      dramaMoviesScores.push(dramaMovies[i].score);
      }
    }
  }  
  const dramaMoviesAverage = Math.round((dramaMoviesScores.reduce((accumulator, score) => accumulator + score, 0) / dramaMoviesScores.length) *100) / 100;
  return dramaMoviesAverage;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
/* Os testes passaram, mas não consegui adequar o código para comportar a validação do a.year === b.year 
e nesse caso utilizar o a.title > b.title 
*/
function orderByYear(movies) {
  const moviesSortedByYear = movies.sort((a, b) => (a.year > b.year) ? 1 : -1)
  const moviesSorted = [];
  for (let i=0; i < moviesSortedByYear.length; i +=1){
    moviesSorted.push(moviesSortedByYear[i]);
  }
  return moviesSorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesSortedByTitle = movies.sort((a, b) => (a.title > b.title) ? 1 : -1);
  const moviesSorted = [];
  if(moviesSortedByTitle.length <= 20){
    for(let i=0; i < moviesSortedByTitle.length; i+=1){
      moviesSorted.push(moviesSortedByTitle[i].title);
     } 
    } else {
       for(let i=0; i < 20; i+=1){
         moviesSorted.push(moviesSortedByTitle[i].title);
       }
     }
  return moviesSorted;
  }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const newMovieArray = movies.map(movie => movie)
  const moviesDurationMinutes = newMovieArray.map(movie => parseInt(movie.duration[0])*60 + parseInt(movie.duration.substr(2,3)))
  for (let i = 0; i < newMovieArray.length; i += 1){
    newMovieArray[i].duration = moviesDurationMinutes[i];
  }
  return newMovieArray;
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  /* 
   - Somar movies.score para cada movies.year
   - Calcular o averageRate do movies.year
   - Sortear o movies.year pelo maior AverageRate
  */

  return `The best year was ${year} with an average score of ${averageRate}`
}



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
