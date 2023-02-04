// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  //const newMoviesArray = moviesArray.map((movie) => {
  //    return movie.director;
  //});

  const newMoviesArray = moviesArray.map((movie) => movie.director);
  return newMoviesArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const genreMovies = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
  return genreMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//Retorna se Array vazio
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }

  //1° calcular total dos scores
  //const totalScore = moviesArray.reduce((acumulator, valorAtual) => {acumulator + valorAtual.score});
  //return totalScore
  const totalScore = moviesArray.reduce((acumulator, valorAtual) => {
    if (!valorAtual.score) {
      valorAtual.score = 0;
    }
    return acumulator + valorAtual.score;
  }, 0);

  //Retorna a média com mais de 2 casas decimais
  const mediaScore = totalScore / moviesArray.length;
  return Number(parseFloat(mediaScore).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramas = moviesArray.filter((drama) => {
    return drama.genre.includes("Drama");
  });
  if (!dramas.length) {
    return 0;
  }
  const totalScoreDramas = dramas.reduce((acumulator, valorAtual) => {
    //if (!valorAtual.score){
    //  return 0;
    //}
    return acumulator + valorAtual.score;
  }, 0);
  const mediaScoreDrama = totalScoreDramas / dramas.length;
  return Number(parseFloat(mediaScoreDrama).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  //const copyMoviesArray = moviesArray.map(movie => movie); // cópia rasa | shallow copy
  //console.log(copyMoviesArray);
  newMovieArray = [...moviesArray];

   newMovieArray.sort((a, b) => {
     let order = a.year - b.year;
     if (order === 0) {
       return a.title.localeCompare(b.title);
     }
     return order;
   });

  //  newMovieArray
  //    .sort((a,b) => a.title.localeCompare(b.title))
  //   .sort((a,b) => a.year - b.year)

  // newMovieArray.sort((a,b) => a.title.localeCompare(b.title))
  // newMovieArray.sort((a,b) => a.year - b.year)
   return newMovieArray
}

//return newMovieArray;
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
//function orderAlphabetically(moviesArray) {
//  const newMovieArray = [...moviesArray];

//  newMovieArray.sort((a, b) => a.title - b.title);

//  return newMovieArray;
//}
//let newMovieArray.sort((a, b) => a.title.localeCompare(b.title))
//let orderByName = a.year.localeCompare(b.year);
// (orderByName === 0) {
// return a.title - b.title;

//}

//const orderByName = a.title.localeCompare(b.title);
//if (orderByName === 0) {
//  a.title - b.title;
//}

//newMovieArray.sort((a, b) => a.title.localeCompare(b.title))
//newMovieArray.sort((a, b) => b.length - a.length);
//}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
//function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
//function bestYearAvg(moviesArray) {}
