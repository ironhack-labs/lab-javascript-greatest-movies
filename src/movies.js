// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map (function(movie){
    return movie.director;
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//
function howManyMovies(moviesArray) {
  return moviesArray.filter(function(movie) {
    return movie.genre.includes("Drama") && movie.director === "Steven Spielberg";
  }).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// primero tenemos que hacer una sumar de todo el array
// luego dividir esa suma entre valor del array.length
function scoresAverage(moviesArray) {
  if (moviesArray.length===0){
    return 0;
  }
  return Number((moviesArray.reduce(function(suma, puntuación){
    return suma + (puntuación.score || 0); 
  }, 0) / moviesArray.length).toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
//Filtrar: Crear una lista que solo contenga películas del género "Drama".
//Calcular: Usar esa lista filtrada para sacar el promedio usemos funcion anterior
function dramaMoviesScore(moviesArray) {
  const dramas = moviesArray.filter(function(pelicula) {
    return pelicula.genre.includes("Drama");
  });
    if (dramas.length===0) {
      return 0;
    }
  return scoresAverage(dramas);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { 
  const copiaPelis = [...moviesArray];
  
  const ordenadas = copiaPelis.sort(function(a,b){
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
      }

    return a.year-b.year;
  
  })
 
   return ordenadas;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  // 1. Mapeamos para obtener solo los títulos (strings)
  const soloNombres = moviesArray.map(function(pelicula) {
    return pelicula.title;
  });

  // 2. Ordenamos (por defecto .sort() ordena strings de la A a la Z)
  const ordenados = soloNombres.sort();

  // 3. Cortamos para quedarnos con los 20 primeros
  const top20 = ordenados.slice(0, 20);

  // 4. Entregamos el resultado
  return top20;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
