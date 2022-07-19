// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((director) => director.director);
  console.log(directors);
  return directors;
}

getAllDirectors(moviesArray);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergMovies = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  console.log(spielbergMovies);
  return spielbergMovies.length;
}

howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray == "") {
    return 0;
  }
  const sumaArray = moviesArray
    .filter(function (movie) {
      return movie.score;
    })
    //ES6 .filter((movie) => movie.score)
    .map(function (movie) {
      return movie.score;
    })
    .reduce(function (accumulator, movie) {
      return accumulator + movie;
    });
  //ES6 .reduce((accumulator, movie) => accumulator + movie)
  const media = sumaArray / moviesArray.length;
  console.log(media);
  let mediaDecimales = Math.round(media * 100) / 100;
  return mediaDecimales;
}

scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const averageDrama = moviesArray
    .filter((movie) => movie.genre.includes("Drama"));
    const allDrama = averageDrama 
    .map((movie) => movie.score)
    .reduce((accumulator, value) => accumulator + value);

    if (allDrama.length === 0) { return 0 };

  const mediaDrama = allDrama / averageDrama.length;
  let mediadramaDecimales = Math.round(mediaDrama * 100) / 100;
  return mediadramaDecimales;
}

dramaMoviesScore(movies);


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const ordenarArray = moviesArray
  .sort((a, b) => {
    if (a.year == b.year) {
      return 0;
    }
    if (a.year < b.year) {
      return -1;
    }
    return 1;
  })
  .map((movie) => movie)
  console.log(ordenarArray);
  return ordenarArray;
}

orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
//SOLUCIÓN 1
function orderAlphabetically(moviesArray) {
  const ordenarAlfa = moviesArray
  .sort((a, b) => {
    if (a.title == b.title) {
      return 0;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 1;
  })
  .map((movie) => movie.title)
  console.log(ordenarAlfa);
  for (let i = 0; i < 19; i++){
    console.log(ordenarAlfa[i]);
    
  }
  return ordenarAlfa;
}

orderAlphabetically(movies);

//SOLUCIÓN 2
function orderAlphabetically(moviesArray) {
  const ordenarAlfa = moviesArray
  .sort((a, b) => {
    if (a.title == b.title) {
      return 0;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 1;
  })
  .map((movie) => movie.title)
  let veintePelis = [];
  for (let i = 0; i < 19; i++){
    veintePelis.push(ordenarAlfa[i]);
  }
  console.log(veintePelis);
  return veintePelis;
}

orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
