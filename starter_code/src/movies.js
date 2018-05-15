/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies){
  let moviesTime = movies.map((conversor)=>{
  let tiempo = conversor.duration;
  let horas = tiempo.substring(0,tiempo.indexOf("h")); 
  let minutos = 0;
  let resultado = 0;

  if (tiempo.indexOf(" ")===-1){
    resultado = (parseInt(horas) * 60); 
  } else {
    minutos = tiempo.substring(tiempo.indexOf(" ")+1,tiempo.indexOf("m"));
    resultado = ((parseInt(horas) * 60) + parseInt(minutos));
  }

  return {
    title: conversor.title,
    year: conversor.year,
    director: conversor.director,
    duration: resultado,
    genre: conversor.genre,
    rate: conversor.rate
  }
});
return moviesTime;
}


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
