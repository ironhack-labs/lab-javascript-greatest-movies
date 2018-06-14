/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes (movies) {
  var retorno = movies.map(function (movie) {
    var duracion = movie.duration.split(" ");
    var total = 0;

    for (var i = 0; i < duracion.length; i++) {
      if (duracion[i].endsWith("h")) {
        total += parseInt(duracion[i].slice(0, duracion[i].indexOf("h")) * 60);
      } else {
        total += parseInt(duracion[i].slice(0, duracion[i].indexOf("min")));
      }
    }

    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: total,
      genre: movie.genre,
      rate: movie.rate
    };
  })

  return retorno;
}

// Order by time duration, in growing order
function ratesAverage(movies) {
  var retorno = movies.reduce(function (suma, movie) {
    if (movie.rate === "")  {
      return suma
    } else {
      return suma + (parseFloat(movie.rate) / movies.length);
    }
  }, 0);

  return parseFloat(retorno.toFixed(2));
}

// How many movies did STEVEN SPIELBERG
function dramaMoviesRate(movies) {
  var filtrado = movies.filter(function(movie) {
    if ("rate" in movie) {
      return movie.genre.includes("Drama");
    }
  });
  if ( filtrado.length == 0) {
    return undefined;
  }
  return ratesAverage(filtrado);
}

function orderByDuration(movies) {
  var ordenado = movies.sort(function(movie1, movie2) {
    if (movie1.duration === movie2.duration) {
      return movie1.title > movie2.title;
    }
    return movie1.duration - movie2.duration;
  })
  return ordenado;
}
// Order by title and print the first 20 titles

function howManyMovies(movies) {
  if (movies.length === 0) {
    return undefined;
  }
  var spielberg = movies.filter(function(movie) {
    return movie.director == 'Steven Spielberg';
  }).filter(function(movie) {
    return movie.genre.includes("Drama");
  })

  return 'Steven Spielberg directed ' + spielberg.length + ' drama movies!';
}

// Best yearly rate average


function orderAlphabetically(movies) {
  var titulos = movies.map(function(movie) {
    return movie.title;
  });
  var ordenado = titulos.sort();

  return ordenado.slice(0, 20);
}
