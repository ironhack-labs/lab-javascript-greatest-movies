/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes turnHoursToMinutes
function turnHoursToMinutes(arr){
  let mov = Object.assign([],arr);
  return mov.map(m => {
    let movie = Object.assign({}, m)
      //console.log( movie.duration.split(" "))
      let listDuration = movie.duration.split(" ")
      if(listDuration.length == 1){
        if(listDuration[0].includes("min")){
          movie.duration  = parseInt(listDuration[0].split("min")[0])
        }else{
          movie.duration = parseInt(listDuration[0].split("h")[0])*60
        }
         
      } else{
        let toMins = parseInt(listDuration[0].split("h")[0])*60 + parseInt(listDuration[1].split("min")[0])
         movie.duration = toMins;
      }
      return movie
  } )  
}

// Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
  return Number((arr.reduce((acumulador, movie) => {
    return acumulador + Number(movie.rate);
    }, 0)/arr.length).toFixed(2))

};

// Get the average of Drama Movies
function dramaMoviesRate(arr) {
  let filtroDrama = arr.filter(movie => {
    return movie.genre.indexOf("Drama") !== -1;
  });
  if (!filtroDrama.length) {
    return undefined
  }
  return Number(ratesAverage(filtroDrama).toFixed(2));
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
function howManyMovies(arr) {
  if (arr.length === 0){
    return undefined;
  }
  //primero filtrar el género y luego por el director
  let filtroDrama = arr.filter(movie => {
    return movie.genre.indexOf("Drama") !== -1;
  });
  let movieSteven = filtroDrama.filter(movie => {
    return movie.director.indexOf("Steven Spielberg") !== -1;
  }).length;
  return `Steven Spielberg directed ${movieSteven} drama movies!`
}

// Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let newArray = arr.sort((a, b) => {
    if (a.title > b.title) {
        return 1;
    }
    if (a.title < b.title) {
      return -1
    } 
   return 0;
})
   let arregloTitulo = newArray.map(function (movie) {
    return movie.title;
  });
  return arregloTitulo.slice(0, 20);
}


// Best yearly rate average


