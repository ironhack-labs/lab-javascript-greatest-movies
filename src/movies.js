// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

/* FORMA PRO -> CARLOS:
function getAllDirectors(moviesArray) {

   
    const setDirectorsArr = new Set(directorsArr)

    return Array.from(setDirectorsArr)
}
*/

/*FORMA SIMPLE:
function getAllDirectors(moviesArray) {
    const directorsArr = moviesArray.map (movie => movie.director);
    return directorsArr;
}
*/

//CON BONUS:
function getAllDirectors(moviesArray) {
  const directorsArr = moviesArray.map((movie) => movie.director);

  const directorsSetArr = directorsArr.reduce((acc, director) => {
    if (!acc.includes(director)) {
      acc.push(director);
    }
    return acc;
  }, []);
  return directorsSetArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const dramaMoviesSpielberg = moviesArray.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return dramaMoviesSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const sumScores = moviesArray.reduce(function (acc, movie) {
    if (movie.score) {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);
  const averageSum = sumScores / moviesArray.length;
  const roundedAverage = Math.round(averageSum * 100) / 100;

  return roundedAverage;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

//-----------------NO SE FORMULARLO PARA PONER EN VERDE should return 0 if there is no Drama movie-------------------------------------------------------------------------
/*function dramaMoviesScore(moviesArray) {
  const dramaMoviesArr = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  const sumScores = dramaMoviesArr.reduce(function (acc, movie) {
    return acc + movie.score;
  }, 0);
  const averageSum = sumScores / dramaMoviesArr.length;
  const roundedAverage = Math.round(averageSum * 100) / 100;

  return roundedAverage;
}*/

// En este me sale en rojo... should only calculate the average for drama movies

function dramaMoviesScore(moviesArray) {
const sumDramaScores = moviesArray.reduce(function (acc, movie){
  if (!movie.genre.includes("Drama")){
    return 0;
  }else {
    return acc + movie.score
  }
}, 0);
const averageSum = sumDramaScores / moviesArray.length;
const roundedAverage = Math.round(averageSum * 100) / 100;
return roundedAverage;
}

//En definitiva... en cada formulación me deja algo en rojo :(
  
//---------------------------------------------------------------------------------------------

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const cloneArr = [...moviesArray];
  cloneArr.sort((mov1, mov2) => {
    if (mov1.year > mov2.year) {
      return 1;
    } else if (mov1.year < mov2.year) {
      return -1;
    } else {
      return mov1.title.localeCompare(mov2.title);
    }
  });
  return cloneArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const cloneArr = [...moviesArray];
  const arrTitle = cloneArr.map(function (movie) {
    return movie.title;
  });
  const ordenedTitle = arrTitle.sort((mov1, mov2) => {
    if (mov1 > mov2) {
      return 1;
    } else {
      return -1;
    }
  });

  return ordenedTitle.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
