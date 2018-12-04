/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
//USAMOS UN MAP??
// Get the average of all rates with 2 decimals 
function ratesAverage(moviesRate){
  let average= moviesRate.reduce (function(acum, value){
    return acum + parseFloat(value.rate);
  },0);
  return Math.round ((average/moviesRate.length)*100)/100;
}

// Get the average of Drama Movies
function dramaMoviesRate (moviesGenere){
  let dramaMovies= [];
  dramaMovies = moviesGenere.filter (function (movie){ //primero, filtramos todas las peliculas del array que contengan Drama en su genre. 
    return movie.genre.indexOf("Drama") !== -1; //El indexOf te da la posicion de "Drama" en el array "genre". Con lo cual, si esto fuera cierto, nos daria un nº entre 0 y genre.lenght. En caso contrario daría -1. Entonces le decimos que si NO es -1 el typeOf, que aplique el filtro, y por lo tanto aplique el filtro.
  });
  if (dramaMovies.length==0){ //Entonces, tenemos una nueva array llamada "dramaMovies" con unicamente las peliculas de drama. Y jasmine nos pide que en caso de que no hayan peliculas de drama, que retorne undefined (si el length es igual a cero, no hay ninguna pelicula de drama)
    return undefined;
  } else {
    let media = dramaMovies.map(function (movie){ //Esto lo hacemos para que las peliculas sin puntuacion, tambien cuentes a la hora de hacer media, entonces le asignamos un valor 0.
      if (movie.rate === ""){
        movie.rate=0;
      }
      return parseFloat(movie.rate); //y lo convertimos todo en numeros para poder sumas luego 
    }).reduce (function (acum, value){ //A partir de aqui conseguimos la media. IMP el reduce se está aplicando al media. 
      return acum + value;
    }, 0);
     return parseFloat((media/dramaMovies.length).toFixed(2)) //IMP: Hacemos parseFloat otra vez, porque el resultado del reduce LO DA EN STRING! Y el toFixed hace que tenga dos decimales (nos lo pide jasmine)
  }
}
dramaMoviesRate(movies)

// Order by time duration, in growing order
function orderByDuration (moviesByDuration){
  let emptyToZero = moviesByDuration.map(function(movie){ //PEEERO PRIMERO TENEMOS QUE CAMBIAR LA DURACION DE HORAS A MINUTOS
    if (movie.duration === ""){
      movie.rate=0;
    }
    //return parseFloat(movie.rate);
  })
  //emptyToZero.sort();
  console.log(emptyToZero)
}
orderByDuration(movies)

//How many movies did STEVEN SPIELBERG
function howManyMovies(moviesByDirector){
  let moviesBySteven =moviesByDirector.filter(function (movie){
    return movie.director.indexOf('Steven Spielberg') !== -1;
  });
  let directorAndGenre =moviesBySteven.filter(function(movie){
    return movie.genre.indexOf('Drama') !== -1;
  });
  if (moviesByDirector.length === 0) {
    return undefined;
  } else {
  return `Steven Spielberg directed ${directorAndGenre.length} drama movies!`;
  }
}

// function howManyMovies(arrayOfMovies, selectDirector, selectGenre){
//   let moviesByDirector =arrayOfMovies.filter(function (movie){
//     return movie.director.indexOf(selectDirector) !== -1;
//   });
//   let directorAndGenre =moviesByDirector.filter(function(movie){
//     return movie.genre.indexOf(selectGenre) !== -1;
//   });
//   if (moviesByDirector.length === 0){
//     return undefined;
//   } else {
//   return `${selectDirector} directed ${directorAndGenre.length} ${selectGenre} movies!`;
//   }
// }
// howManyMovies(movies, 'Steven Spielberg', 'Drama')


// Order by title and print the first 20 titles
function orderAlphabetically (){

};


// Best yearly rate average
function bestYearAvg(movies) {
  if (movies.length === 0) {
    return undefined;
  }else {
    let moviesByYear = {};
    let max = 0;
    let yearMax = "";

    movies.forEach(function(movie) {
      if (moviesByYear[movie.year] === undefined) {
        moviesByYear[movie.year] = [];
        moviesByYear[movie.year].push(parseFloat(movie.rate));
      } else {
        moviesByYear[movie.year].push(parseFloat(movie.rate));
      }
    });
    for (let year in moviesByYear) {
      let avgOfRates = moviesByYear[year].reduce(function(acc,rate) {
        return acc + rate;
      })/moviesByYear[year].length;
      moviesByYear[year] = avgOfRates;
      if (max < moviesByYear[year]) {
        max = moviesByYear[year];
        yearMax = year;
      }
    }
    return `The best year was ${yearMax} with an average rate of ${max}`;
  }
}