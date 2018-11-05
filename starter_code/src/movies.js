/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 0
function turnHoursToMinutes(arregloPeliculas){
  var newMovies = arregloPeliculas.map(function(pelicula){
    var duracion=pelicula.duration;
    var indexHoras=duracion.indexOf('h');
    var horas=0;
    var minutos=0;
    if(indexHoras != -1){
      horas=duracion.slice(0,indexHoras);
      horas=horas*60;
    }
    console.log(horas);
    var indexMinutos=duracion.indexOf('m');
    console.log(indexMinutos);
    if(indexMinutos != -1 && indexHoras != -1)
      minutos=duracion.slice(indexHoras+2,indexMinutos);
    if(indexMinutos != -1 && indexHoras == -1)
      minutos=duracion.slice(0,indexMinutos);
    var copy = Object.assign({}, pelicula);
    var totalMinutos = parseInt(horas) + parseInt(minutos);
    copy.duration = totalMinutos;
    return copy;
  });
    return newMovies;
}

// Get the average of all rates with 2 decimals
function ratesAverage(arregloPeliculas){
  var suma=0;
  var promedio;
  arregloPeliculas.forEach(function(pelicula){
    if(isNaN(parseFloat(pelicula.rate)))
      suma=suma+0;
    else
      suma=suma+parseFloat(pelicula.rate);
  });
  promedio=suma/arregloPeliculas.length;
  return promedio;
}

// Get the average of Drama Movies
function dramaMoviesRate(arregloPeliculas){
  var newMoviesDrama = arregloPeliculas
                      .filter(pelicula => (pelicula.genre
                      .filter(genero => genero === 'Drama')).length>0);
  if(newMoviesDrama.length > 0)
    return parseFloat(ratesAverage(newMoviesDrama).toFixed(2));
}

// Order by time duration, in growing order
function orderByDuration(arregloPeliculas){
  var newMoviesSort = arregloPeliculas
                      .map(pelicula => Object.assign({}, pelicula));
  newMoviesSort.sort(function(movie1, movie2){
      if(movie1.title > movie2.title)
        return 1;
      if(movie1.title < movie2.title)
        return -1;
      return 0;
  });
  newMoviesSort.sort(function(movie1, movie2){
    return movie1.duration - movie2.duration;
  });
  return newMoviesSort;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(arregloPeliculas){
  var newMoviesDrama = arregloPeliculas
                      .filter(pelicula => (pelicula.genre
                      .filter(genero => genero === 'Drama'))
                      .length>0);
  var newMoviesDramaSpielberg = newMoviesDrama
                      .filter(pelicula => pelicula.director === 'Steven Spielberg');
  if(newMoviesDrama.length===0)
    return undefined;
  return "Steven Spielberg directed " + newMoviesDramaSpielberg.length + " drama movies!";
}

// Order by title and print the first 20 titles
function orderAlphabetically(arregloPeliculas){
var arregloTitulos = [];
  var newMoviesSort = arregloPeliculas
                      .map(pelicula => Object.assign({}, pelicula));
  newMoviesSort.sort(function(movie1, movie2){
      if(movie1.title > movie2.title)
        return 1;
      if(movie1.title < movie2.title)
        return -1;
      return 0;
  });
  newMoviesSort.forEach(function(pelicula,index){
    if(index<20)
      arregloTitulos.push(pelicula.title);
  });

  return arregloTitulos;
}

// Best yearly rate average
function bestYearAvg(arregloPeliculas){
  var anios=[];
  if(arregloPeliculas.length===0)
    return undefined;
  arregloPeliculas.forEach(function(pelicula){
    if(anios.find(anio => anio === pelicula.year) === undefined){
      var nuevoAnio = new Object();
      nuevoAnio.year=pelicula.year;
      anios.push(nuevoAnio);
    }
  });
  anios.forEach(function(anio){
    var suma=0;
    var promedio=0;
    var contPeliculasAnio=0;
    arregloPeliculas.forEach(function(pelicula){
      if(pelicula.year === anio.year){
        if(isNaN(parseFloat(pelicula.rate)))
          suma=suma+0;
        else
          suma=suma+parseFloat(pelicula.rate);
          contPeliculasAnio++;
      }
    });
    promedio=suma/contPeliculasAnio;
    anio.averageRate = promedio;
  });

  anios.sort((anio1, anio2) => parseInt(anio1.year) - parseInt(anio2.year));
  anios.sort((anio1, anio2) => anio2.averageRate - anio1.averageRate);

  return "The best year was " + anios[0].year +" with an average rate of " + anios[0].averageRate;
}
