// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  // para conseguir array de directores map
  let directorsArray = moviesArray.map( (movie) => {
    return (movie.director);})
  return directorsArray;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  //filtrar para conseguir todos las pelis de Spielberg
  let spielbergMovies = moviesArray.filter ((movie) => {
  return (movie.director.includes("Steven Spielberg"));})
  //filtrar para conseguir los dramas
  let dramaAndSpielberg = spielbergMovies.filter ( (movie) => {return movie.genre.includes("Drama") });
  return(dramaAndSpielberg.length);
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  //map para sacar todas las scores
  let allScoresArray =  moviesArray.map ( (element) => {
    if(!element.score) {
      return 0;
    }
    return element.score});
  let scoresNumber = allScoresArray.length;
  //reduce para sumar todas las scores
  let allScoresSum = allScoresArray.reduce((accumulator, currentValue) => { return accumulator + currentValue;});
  let average = allScoresSum / scoresNumber;
  //Math.round(resultado *100)/100 --> dos decimales
  return (Math.round (average * 100)/100);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  //filtrar para conseguir los dramas
  let dramaMovies = moviesArray.filter ( (movie) => {return movie.genre.includes("Drama") });
  console.log (dramaMovies)
  if (dramaMovies.length === 0) {
    return 0;
  }
  let allDramaScores =  dramaMovies.map ( (element) => {
    if(!element.score) {
      return 0;
    }
    return element.score});
  let scoresNumber = allDramaScores.length;
  //reduce para sumar todas las scores
  let allDramaScoresSum = allDramaScores.reduce((accumulator, currentValue) => { return accumulator + currentValue;});
  //dividir por la longitud
  let average = allDramaScoresSum / scoresNumber;
  //Math.Round(resultado *100)/100 --> dos decimales
  return (Math.round (average * 100)/100);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function compareStrings(a, b) {
  if (a.localeCompare(b) < 0) {
    return -1;
  }
  else {
    return 1;
  }
}


function orderByYear(moviesArray) {
  let orderedArray = moviesArray.sort ((a, b) => {
  if (a.year === b.year)
  {return(compareStrings(a.title,b.title))}
  return a.year - b.year;
  });
  let solution = [...orderedArray];
  return (solution);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = [...moviesArray];
    let orderedArray = newArray.sort ((a, b) => {
    return(compareStrings(a.title,b.title))
    });
    let solution = orderedArray.map( (movie) => {return (movie.title)})
    //return only the first 20 elements
    return (solution.slice(0,20));
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    //clonar el array
    let newArray = [...moviesArray];
    //funcion transformar horas a minutos y mapear el array
    let solution = newArray.map ( (movie) => {
      movie.duration = movie.duration
      return})
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {
  //
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
