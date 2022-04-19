// The `movies` array from the file `src/data.js`.



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  let directores = array.map((director,i)=>array[i].director)
    return directores;
  }
  
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  let director;
  let acc = 0;
  let genre = '';
  let arrayGenre;
  
  if (array.length === 0){ // si el array esta vacio regresa valor 0
    return 0
  }else{ // si tiene contenido el array, traba lo siguiente:
    let numberOfMovies = array.map((movie,i)=>{ //iteramos sobre el primer array (movies)
        director = array[i].director; //almacenar los valores de los directores en la variable
        arrayGenre = array[i].genre; //almacenamos el array (genre) para trabajar con el en el segundo map
      let movieGenre = arrayGenre.map((genre,j)=>{ //iteramos detro del array (genre) para buscar 'Drama'
        genre = arrayGenre[j];//Almacenamos los generos en la variable genre
      if (director === 'Steven Spielberg' && genre === 'Drama'){// condicionamos que solo las pelis de Drama de Steven sean las que pasen
        acc = acc + 1;// esto es un contador, que se le va sumando +1 cada que una peli pase los filtros
    }
      })
  })
  return acc // retornamos el valor del contador = al numero de pelis de Drama de Steven
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {

  let average = 0;
  let cont = 0;
  let score = 0;
  let value = 0;
  
  if (array.length === 0){
    return 0;
  }else{
    let averages = array.map((avg,i)=>{ //iteramos en el array movies
      if (array[i].score){
      score += array[i].score; // 1---1+2---1+2+3 acumular los scores
      cont = cont + 1;
    }
    })
    value = score / array.length; //asignamos a value la operacion para obtener el promedio
    average = Number(value.toFixed(2));// .toFixed retorna una string ('9.34')por eso aplicamos en metodo Number()--->9.34 
    console.log(score)
    return average; 
  }  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {

  let numberOf = 0;
  let sumScore = 0;
  let average = 0;
  
  let dramaGenre = array.map((genre,i)=>{
    let dramaGenre = array[i].genre;
    let movieScore = 0;
    let dramaScore = dramaGenre.map((score,j)=>{
      if (dramaGenre[j] === 'Drama'){
        sumScore += array[i].score;
        numberOf = numberOf + 1;
      }else if(dramaGenre[j] !== 'Drama'){//este else es para asignar el valor 1 al denominador de la operacion del promedio, y obtener 0 cuando no haya peliculas con el genero drama
        numberOf = 1;
      }
    })
  })
  average = sumScore/numberOf;
  average = average.toFixed(2);
  average = Number(average);
  return average;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {

  let arrayNew = [];

  let ordenadosArray = array.sort((a,b)=>{
       if (a.year === b.year){
         return a.title.localeCompare(b.title)}
return a.year-b.year
  });
  
  arrayNew = ordenadosArray;
  return arrayNew;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let everyTitle = array.map((title,i)=>{
    return array[i].title;})
   return everyTitle.sort().slice(0,20);
}


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
