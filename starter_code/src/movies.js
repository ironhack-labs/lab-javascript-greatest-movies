/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


movies.forEach(function (element) {

  var minutos = element.duration;


  separador = (" ");
  arrayMinutos = minutos.split(separador);

  if (arrayMinutos.length === 1) {

    var horas = arrayMinutos[0];

    separador = ("h");

    arrayHorasUnicas = (parseInt(horas.split(separador))) * 60;

  } else {

    var horas = arrayMinutos[0];

    separador = ("h");

    arrayHorasUnicas2 = (parseInt(horas.split(separador))) * 60;


    var minutos2 = arrayMinutos[1];
    separador2 = ("min");
    arrayConjunto = parseInt(minutos2.split(separador2));

  }

  arrayDefinitivo = arrayHorasUnicas2 + arrayConjunto;

  
  console.log(arrayDefinitivo);

  //console.log(arrayDefinitivo);
  var arrayFuera = [];
  arrayFuera.push(arrayDefinitivo);
  //console.log(arrayFuera);
  return arrayFuera;



});


moviesEnMinutos = movies.slice();

console.log(moviesEnMinutos);











// movies.forEach(function (element) {
//   var duracion = element.duration;

//   separador = ("h");

//   arrayFinal = duracion.split(separador);
//   //console.log(arrayFinal);
//   var horas = parseInt(arrayFinal[0]);
//   //console.log(horas);



//   separador2 = ("min");
//   arrayFinal2 = arrayFinal[1].split(separador2);

//   //console.log(arrayFinal2);

//   var minutos = parseInt(arrayFinal2[0]);



//   //console.log(minutos);

//   var totalHoras = horas * 60;

//   var totalDuration = 0;
//   //console.log(minutos);

//   if (minutos == isNaN()) {
//     minutos = 0;
//     totalDuracion = totalHoras + minutos;
//     //console.log(totalDuracion);
//   }
//   else {
//     console.log(minutos);
//     //totalDuracion = totalHoras + minutos;
//     //console.log(totalHoras, minutos, totalDuracion);
//   }

  //console.log(totalHoras, minutos, totalDuration);







// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
