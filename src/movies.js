// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
const movies = require('./data');
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const arrayDirectores = array.map((movie) => {
    return movie.director
  });
  return UnicosArray(arrayDirectores);
}
//console.log(getAllDirectors(movies));

// Funcion para eliminar duplicados
function UnicosArray(directoresDuplicados) {
  if (directoresDuplicados.length === 0) {
    return null;
  }
  //variable unicos :para guardar el array con strings unicas(no duplicadas)
  const directoresUnicos = [];
  //iterar uno por uno mis strings
  for (let i = 0; i < directoresDuplicados.length; i++) {
    //si en unicos incluye el string no lo meta a unicos, en caso de que no(!) aplica el push a unicos
    if (!directoresUnicos.includes(directoresDuplicados[i])) {
      directoresUnicos.push(directoresDuplicados[i]);
    }
  }
  return directoresUnicos;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array1) {
  if (array1.length === 0) {
    return 0
  }
  const peliculasDrama = array1.filter((movie) => {
    if ('Steven Spielberg' === movie.director) {
      return movie.genre.find((genero) => genero === 'Drama');
    }
  });
  return peliculasDrama.length;
}
//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array2) {
  if(array2.length===0){
    return 0
  }
  const suma=array2.reduce((acc,av)=>{
     
    return {total: acc.total + Number(av.score)}
  },{total:0})
  const promedio = suma.total / array2.length;

  return parseFloat( promedio.toFixed(2) )
}

//console.log(scoresAverage(movies))
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array3) {
const arrayDrama =   array3.filter((pelicula)=>{

 return pelicula.genre.find((genero) => genero === 'Drama');

})
//scoresAverage(arrayDrama)
const promedioPelisDrama = scoresAverage(arrayDrama) 
return promedioPelisDrama
}
console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array4) {
  const ascendentearray4=array4.sort((a,b)=>{
    if(a.year>b.year){
      return 1
    }else {
      return -1
    }
  })
  return ascendentearray4
}
console.log(orderByYear(movies))
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



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
