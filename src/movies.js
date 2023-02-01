// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  // return todos diretores
  const allDirectors = moviesArray.map((movie) => {
    return movie.director;
  });
  return allDirectors;
}
function getSingleDirectors(moviesArray) {
  return [...new Set(getAllDirectors(moviesArray))];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//apenas filmes de Drama
function howManyMovies(moviesArray) {
  let filteredDrama = [];
  moviesArray.filter((eachMovie) => {
    // include procura dentro do array se há a classificação de drama
    if (
      eachMovie.genre.includes("Drama") &&
      eachMovie.director.includes("Steven Spielberg")
    ) {
      filteredDrama.push(eachMovie);
    }
  });
  return filteredDrama.length;
}

function howManyDramaMovies(moviesArray) {
  let filteredDrama = [];
  moviesArray.filter((eachMovie) => {
    if (eachMovie.genre.includes("Drama")) {
      filteredDrama.push(eachMovie);
    }
  });
  return filteredDrama;
}

// genres:
// crime, drama, action, thriller, biography, history, adventure, horror, music
// fantasy, western, comedy, romance, sci-fi, mystery, family, war, animation, film-noir
// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  // calcula score
  let mediaScore = moviesArray.reduce((acc, eachMovie) => {
    if (!eachMovie.score) {
      eachMovie.score = 0;
    }
    return acc + eachMovie.score;
  }, 0);
  // calcula media score
  let mediaMovie = mediaScore / moviesArray.length;
  //return a media em duas casas
  return Number(parseFloat(mediaMovie).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
// apenas Dramas
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((eachMovie) => {
    return eachMovie.genre.includes("Drama");
  });
  if (!dramaMovies.length) {
    return 0;
  }
  // score apenas de filmes com dramas
  let mediaScore = dramaMovies.reduce((acc, eachMovie) => {
    return acc + eachMovie.score;
  }, 0);
  // media dos filmes com dramas
  let mediaMovie = mediaScore / dramaMovies.length;
  // media em das casas decimais apenas dos filmes de Drama
  return Number(parseFloat(mediaMovie).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  //
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// nova array em ordem alfabetica
function orderAlphabetically(moviesArray) {
  const newArray = [...moviesArray];

  let orderedArray = newArray.map((eachMovie) => {
    return eachMovie.title;
  });
  // ordena o array
  let finalArray = orderedArray.sort();
  // apenas 20 filmes
  if (finalArray.length > 20) {
    finalArray = finalArray.splice(0, 20);
  }
  return finalArray;
}


//
//
//
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
