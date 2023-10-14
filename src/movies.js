// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirector = moviesArray.map((movie) => {
    return movie.director;
  });
  return allDirector;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const howMany = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    ); // Drama entre parentesis y dentro de un parentesis porque esta dentro de un array, includes es un método y los métodos terminan en paréntesis includes()
  });
  return howMany.length; // se puede hacer poniendo en la linea anterior, la linea 17, }).length ===> esto es válido y es mejor codificación
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  /*const moviesWithScore = moviesArray.filter((movie) => {
    return movie.score;
  });*/ // es lo mismo que en la linea 31. Son dos formas de ponerlo. Al poner return true, si es true te lo va a devolver directamente.

  const moviesWithScore = moviesArray.filter((movie) => {
    if (movie.score) {
      return true;
    }
  });

  /*const onlyScore = moviesWithScore.map((movie) => {
    return movie.score;
  })

  const sum = onlyScore.reduce((acc, elem) => {
    return acc + elem;
  })

  return sum / moviesArray.length;

  console.log(sum)
  console.log(onlyScore)

  console.log("peliculas", moviesArray)

  console.log("puntuacion", moviesWithScore)
  */

  const allScores = moviesWithScore.map((movie) => {
    return movie.score;
  });
  const sumTotal = allScores.reduce((acc, score) => {
    return acc + score;
  }, 0);

  let avg = sumTotal / moviesArray.length;

  return Number(avg.toFixed(2));

  // Number==> convertir string en número.
  // .toFixed() ==> en el paréntesis se pone los números de decimales que quieres que coja
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copyArr = [...moviesArray];

  const orderMovies = copyArr.sort((movieA, movieB) => {
    if (movieA.year === movieB.year) {
      return movieA.title.localeCompare(movieB.title);
    }
    return movieA.year - movieB.year;
  });
  return orderMovies; // no se porque se me olvida poner este return
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .sort((m1, m2) => {
      return m1.title.localeCompare(m2.title);
    })
    .map((movie) => {
      return movie.title;
    })
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
