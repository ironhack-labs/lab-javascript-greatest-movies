// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(p => p.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const spielbergDrama = moviesArray.filter((pelicula) => {
    return (
      pelicula.director === "Steven Spielberg" &&
      pelicula.genre &&
      pelicula.genre.includes("Drama")
    );
  });
  return spielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const totalScore = moviesArray.reduce((acumulador, pelicula) => {
    if (pelicula.score) {
      return acumulador + pelicula.score;
    } else {
      return acumulador;
    }
  }, 0);
  const media = totalScore / moviesArray.length;
  return Number(media.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const Drama = moviesArray.filter((pelicula) => {
    return pelicula.genre && pelicula.genre.includes("Drama");
  });
  if (Drama.length === 0) {
    return 0;
  }
  const totalScore = Drama.reduce((acumulador, pelicula) => {
    if (pelicula.score) {
      return acumulador + pelicula.score;
    } else {
      return acumulador;
    }
  }, 0);
  const media = totalScore / Drama.length;
  return Number(media.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
const  moviesCopy = [...moviesArray];

moviesCopy.sort((a, b) => {
    if (a.year !== b.year){
        return a.year - b.year;
}
return a.title.localeCompare(b.title);
});
return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy = [...moviesArray];

    moviesCopy.sort((a, b) => a.title.localeCompare(b.title));
    const titleOnly = moviesCopy.map(pelicula => pelicula.title);
    return titleOnly.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


if (typeof movies !== "undefined") {
    console.log("Resultado del test:", howManyMovies(movies));
    console.log("Media del test:", scoresAverage(movies));
    console.log("Media Drama del test:", dramaMoviesScore(movies));
    console.log("Listado por Año", orderByYear(movies));  
    console.log("Listado Peliculas", orderAlphabetically(movies));
};