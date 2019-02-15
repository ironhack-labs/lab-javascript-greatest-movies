/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array) {
  var newMovies = array.map((objeto) => {
    if (objeto.duration.includes('h') && objeto.duration.includes('min')) {
      var separa = objeto.duration.split(' ');
      newDuration = parseInt(separa[0]) * 60 + parseInt(separa[1]);
    }
    else if (objeto.duration.includes('h') && !objeto.duration.includes('min')) {
      newDuration = parseInt(objeto.duration) * 60;
    }
    else {
      newDuration = parseInt(objeto.duration);
    }
    return Object.assign({}, objeto, { duration: newDuration });
  
  });
  return newMovies;
  }
  turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
//prueba for ***
/*function ratesAverage(array) {
  var sumaNumber = 0;
  for (i=0;i<array.length;i++){
   number = parseFloat(array[i].rate);
   sumaNumber += number
   
  }
  return(sumaNumber)
  }
  ratesAverage(movies);*/

  /*function ratesAverage(array) {
    var sumRate = array.reduce((a,b) => ({
    rate: parseFloat(a.rate + b.rate).toFixed(2)}));
    return sumRate;
    }
    ratesAverage(movies);*/
    function ratesAverage(array) { 
      var sumRate = array.reduce((a, b) => ({rate: parseFloat(a.rate) + parseFloat(b.rate)}));
      return sumRate.rate/array.length;
    }
    ratesAverage(movies);

// Get the average of Drama Movies
function dramaMoviesRate (array) { 
  //filtro por drama

  var filtraDrama = array.filter(elemento => {
  if (elemento.genre.includes('Drama') && elemento.rate != undefined && elemento.rate != '' && elemento.rate != ' '){
  return elemento.genre.includes('Drama');
  }
  else {return undefined}
  });
  console.log(filtraDrama)
  //extraigo un valor de rate
  var reduceFiltraDrama = filtraDrama.reduce((a,b) => ({rate: parseFloat(a.rate) + parseFloat(b.rate)}));
  var dramaRate = reduceFiltraDrama.rate/filtraDrama.length;
  return parseFloat(dramaRate.toFixed(2));
  }
  console.log(movies)
  dramaMoviesRate(movies);
/*
function dramaMoviesRate (array) { 
  var map = array.map((elemento) => {
  if (elemento.genre.includes('Drama')) {
  return parseFloat(elemento.rate);
  }
  else {return elemento.rate = 0;}
  });
  var cuentaDrama = map.filter(number => number != 0)
  var sumDrama = cuentaDrama.reduce((a,b) => {
  return a+b;  
  });
  var total = sumDrama/cuentaDrama.length.toFixed(2);
  return parseFloat(total.toFixed(2));
}
dramaMoviesRate(movies);*/
// Order by time duration, in growing order

function orderByDuration(array) {
  var ordena = turnHoursToMinutes(array);
    return ordena.sort(function (a, b) {
    return b.duration > a.duration;
  });
  }
  orderByDuration(movies);
  
// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
