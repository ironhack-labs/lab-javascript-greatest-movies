// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  // extraemos todos los directores en un array
  const directors = moviesArray.map((movie) => movie.director);

  //creamos un Set a partir del array de directores para eliminar duplicados
  const uniqueDirectorsSet = new Set(directors);

  //convertimos el Set de vuelta a un array para devolverlo
  const uniqueDirectorsArray = Array.from(uniqueDirectorsSet);

  return uniqueDirectorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  // filtrar el array para obtener solo las películas de drama dirigidas por Steven Spielberg
  const spDramaMovies = moviesArray.filter(
    (movie) =>
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
  );
  // devolver la longitud del array filtrado, que es el número de películas que cumplen con los criterios
  return spDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  // verificar si el array está vacío
  if (moviesArray.length === 0) {
    return 0;
  }

  // usar reduce para sumar todas las puntuaciones, ignorando las películas sin puntuación
  const totalScore = moviesArray.reduce((accumulator, movie) => {
    // verificar si la película tiene una puntuación
    if (movie.score) {
      return accumulator + movie.score;
    } else {
      // si la película no tiene puntuación, la ignoramos
      return accumulator;
    }
  }, 0);

  // calcular el promedio y redondear a 2 decimales
  const averageScore = (totalScore / moviesArray.length).toFixed(2);
  return parseFloat(averageScore);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    // Filtramos el array para obtener solo las películas de drama
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

    // Verificamos si hay películas de drama
    if (dramaMovies.length === 0) {
        return 0;
    }

    // Usamos reduce para sumar todas las puntuaciones de las películas de drama
    const totalScore = dramaMovies.reduce((accumulator, movie) => {
        // Verificamos si la película tiene una puntuación
        if (movie.score) {
            return accumulator + movie.score;
        } else {
            // Si la película no tiene puntuación, la ignoramos
            return accumulator;
        }
    }, 0);

    // Calculamos el promedio y lo redondeamos a 2 decimales
    const averageScore = (totalScore / dramaMovies.length).toFixed(2);

    return parseFloat(averageScore);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    // crear una copia del array original para no modificarlo
    const moviesCopy = [...moviesArray];

    // ordenar el array copiado por año de lanzamiento y, en caso de empate, por título
    moviesCopy.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });

    return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    //hacer una copia de arry para no modificar el original
    const moviesCopy = [...moviesArray];
    //ordenar por titulo
    moviesCopy.sort((a, b) => a.title.localeCompare(b.title));
    //obtener las 20 primeras peliculas y mostrar el titulo
    const titles = moviesCopy.slice(0, 20).map(movie => movie.title);
    return titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
