/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  var order = movies.slice().sort(function(a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
      // NOTA : El método localeCompare() devuelve un
      //número que indica si la cadena de caracteres actual es anterior, posterior o igual a la
      //cadena pasada como parámetro, en orden lexicográfico.
    }
  });
  return order;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  return movies.reduce(function(acc, val) {
    if (val.director === "Steven Spielberg" && val.genre.includes("Drama")) {
      acc += 1;
    }
    return acc;
  }, 0);
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  var order = movies
    .map(function(a) {
      return a.title;
    })
    .sort(function(a, b) {
      return a.localeCompare(b);
    })
    .splice(0, 20);
  return order;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (!movies.length) return 0;

  var sum = movies.reduce(function(acc, val) {
    return (acc += parseFloat(val.rate || 0));
  }, 0);

// calculo el avarage
  var average = sum / movies.length;

  // parseo el avarage con parseFloat para que me devuelva un numero y luego lo redondeo con tofixed
  //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number/parseFloat
  //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number/toFixed

  var decimalMovies = Number.parseFloat(average.toFixed(2));
  
  return decimalMovies;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    var moviesDrama = movies.filter(function(a){
if (a.genre.includes("Drama"))
{
    return true;
}
});
    if (!moviesDrama.length)
    {
        return 0;
    }

  // llamo al metodo de la iteracion 4 para no generar mas codigo pero ahora le paso el includes de la variable moviesDrama retornando true.  
 var avarage = ratesAverage(moviesDrama);
 return avarage;
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
//creamos una funcion secundaria para cambiar la duracion de las peliculas buscando el index de horas y los minutos
function changeDurationMovies(arr){
var horasIndex  = arr.indexOf("h");

var horas = 0;
if (horasIndex >= 0){
    horas = parseInt(arr.slice(0,horasIndex));
}
var minutos = 0
if (arr.includes("min"))
{
    minutos = parseInt(arr.split(" ").pop());
}

return horas * 60 + minutos;
}

// funcion principal
function turnHoursToMinutes(movies){
return movies.map(function(a){
// creamos una variable que llame al metodo anterior para crear la duracion nueva de la pelicula    
var nuevaHora = changeDurationMovies(a.duration);
//creamos el objeto con la nueva duracion y se lo retornamos
var duracionNuevaPelicula =  
{
    duration: nuevaHora
};

return duracionNuevaPelicula;
});
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies){
if (!movies.length)
{return null
}

//juntamos todos los años de las peliculas 
var años = movies.map(function(a){
    return a.year;
})

//hacemos un filtro de todo este map y lo ordenadomos 

var mejorAño = años.filter(function(a,b){
if (años.indexOf(a) === b)
{
    return true;
}
}).sort(function(a,b){
    return a - b;
})

//calculamos la mejor pelicula


}