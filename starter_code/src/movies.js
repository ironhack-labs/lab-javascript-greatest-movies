/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
  return movies.map(peli => {
    let nuevaLisMovies = Object.assign({}, peli);
    //apoyandonos de una función que convierte el tiempo de duración
    nuevaLisMovies.duration = convertirDuracion(nuevaLisMovies.duration);
    return nuevaLisMovies;
  })
}
//funcion apoyo
function convertirDuracion (string){
  var duracionSeparada = string.split(" ");
  var duracionNumero = duracionSeparada.map (function (partetiempo){
  if (partetiempo.includes('h'))
    return parseInt(partetiempo.split('h'))*60
  if (partetiempo.includes('min'))
    return parseInt(partetiempo.split('min'))
  })  
  return duracionNumero.reduce (function(minhoras,minutos){
      return minhoras += minutos    
  },0);
}




// Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
  return Number((arr.reduce((acumulador, movie) => {
    return acumulador + Number(movie.rate);
    }, 0)/arr.length).toFixed(2))
};

// Get the average of Drama Movies
function dramaMoviesRate(arr) {
  let filtroDeDrama = arr.filter(movie => {
    return movie.genre.indexOf("Drama") !== -1;
  });
  if (!filtroDeDrama.length) {
    return undefined
  }
  return Number(ratesAverage(filtroDeDrama).toFixed(2));
};


// Order by time duration, in growing order
function orderByDuration(peliculas){
  if (peliculas.length > 1) {
      return peliculas.sort(function(a, b) {
          if (a.duration == b.duration) {
              if (a.title < b.title)
                  return -1;
              if (a.title > b.title)
                  return 1;
          }
          return a.duration - b.duration;
      });
  }
  return peliculas;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
  if (array.length === 0){
    return undefined;
  }
  //primero filtrar el género y luego por el director
  let filtroDrama = array.filter(movie => {
    return movie.genre.indexOf("Drama") !== -1;
  });
  let movieSteven = filtroDrama.filter(movie => {
    return movie.director.indexOf("Steven Spielberg") !== -1;
  }).length;
  return `Steven Spielberg directed ${movieSteven} drama movies!`
}

// Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  var titlesOnly = []
  arr.forEach((movies) => { return (titlesOnly.push(movies.title)); })
  titlesOnly.sort()  
  let only20 = titlesOnly.slice(0, 20)  
  return (only20)
 }let x = orderAlphabetically(movies)


// Best yearly rate average
