// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((el) => el.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (el) => el.director == "Steven Spielberg" && el.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  } // Ahora hacemo un filter para quedarnos solo con las peliculas que tengan puntuación (score)
  const filteredMovies = moviesArray.filter((movie) => movie.score);
  //Ahora calculamos el total de las puntuaciones de las peliculas que sí tengan puntuación.
  result = filteredMovies.reduce((total, movie) => {
    return total + movie.score;
  }, 0);
  // Ahora calculamos la media de las puntuaciones de las peliculas
  const average = result / moviesArray.length;
  // Redondear la puntuación media a dos decimales se usa el "Math.round()"

  return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray.length) result = 0;

  // Filtrar solo las peliculas de drama
  let dramaMovies = moviesArray.filter((el) => el.genre.includes("Drama"));

  //Sacar la media de las puntuaciones de las peliculas de drama
  let result = scoresAverage(dramaMovies);

  // Redondear la puntuación media a dos decimales se usa el "Math.round()"
  return Math.round(result * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // Creamos una copia del array original usando map
  const orderedMovies = moviesArray.map((movie) => ({ ...movie })); // los "..." copia todas las propiedades enumerables del objeto movie en un nuevo objeto.

  // Ahora ordenamos el array con el método "sort()" para ordenar el array por la propiedad "year"

  orderedMovies.sort((a, b) => {
    if (a.year !== b.year) {
      // el !== compara tanto el valor como el tipo de los operandos, es el ≠
      return a.year - b.year;
    } else {
      return a.title > b.title ? 1 : -1;
      /* ESTO DE ARRIBA SE LLAMA 'operador ternario' ES LO MISMO A LO SIGUIENTE: 
        if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        } */
    }
  });
  return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map((movie) => movie.title);
  titles.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
