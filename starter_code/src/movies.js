/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  //creamos el array para pasar a minutos
  return movies.map(elm => {
    const newMovies = { ...movies };
    //llamamos a la segunda función para tener mas clean la principal
    newMovies.duration = minTransform(elm.duration);
    return newMovies;
  });
}
function minTransform(time) {
  //a esta funcion le llega por argumentos time que es elm.duration en la principal
  let minHourArr = time.split(" ");
  //realizamos un split para separar horas y minutos
  let hours = parseInt(minHourArr[0]);
  //realizamos un ParseInt() para dejarlo en formato de numero y poder trabajar con las horas
  let minutes = parseInt(minHourArr[1]);
  //realizamos otro ParseInt() a los minutos
  if (minHourArr.length == 1) {
    //miramos si tiene solo horas o solo minutos por la posible situación
    if (minHourArr[0].includes("h")) {
      hours *= 60;
      return hours;
    } else if (minHourArr[0].includes("min")) {
      return hours;
    }
  } else {
    return hours * 60 + minutes;
  }
}

// Get the average of all rates with 2 decimals

function ratesAverage(rates) {
  const ratios = rates.reduce((ac, rate) => {
    const numberRates = parseFloat(rate.rate);
    //Realizamos parseFloat() para pasar el String a decimal y poder operar con el
    const media = numberRates + ac;
    return media;
    //retornamos la media, acordandonos de poner que el contador empiece en 0
  }, 0);
  const averageFinal = ratios / rates.length;
  //dividimos para obtener la media

  const roundedItems = averageFinal.toFixed(2);
  //redondeamos al segundo decimal
  return parseFloat(roundedItems);
  //retornamos el resultado
}
// Get the average of Drama Movies
function dramaMoviesRate(drama) {
  const dramaMovies = drama.filter(drama => drama.genre == "Drama");
  if (dramaMovies.length == 0) return undefined;
  const dramaRates = dramaMovies.reduce((ac, drama) => {
    if (drama.rate == "") {
      drama.rate = 0;
    }
    const numberRates = parseFloat(drama.rate);
    //Realizamos parseFloat() para pasar el String a decimal y poder operar con el

    const media = numberRates + ac;
    return media;
    //retornamos la media, acordandonos de poner que el contador empiece en 0
  }, 0);
  const averageFinal = dramaRates / dramaMovies.length;
  //dividimos para obtener la media

  const roundedItems = averageFinal.toFixed(2);
  //redondeamos al segundo decimal
  return parseFloat(roundedItems);
}
// Order by time duration, in growing order
function orderByDuration(orderingMovie) {
  const OrderedArray = orderingMovie.sort((a, b) => {
    if (a.duration > b.duration) {
      return 1;
    } else if (a.duration < b.duration) {
      return -1;
    } else if (a.duration == b.duration) {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
    }
  });
  return OrderedArray;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  if (movies.length == 0) {
    return undefined;
  }
  let moviesBy = movies.filter(movie => movie.director == "Steven Spielberg");
  console.log(moviesBy);
  let dramasBy = moviesBy.filter(movie => movie.genre.includes("Drama"));
  console.log(dramasBy);

  if (dramasBy.length == 0) {
    return `Steven Spielberg directed 0 drama movies!`;
  } else {
    return `Steven Spielberg directed ${dramasBy.length} drama movies!`;
  }
}

// Order by title and print the first 20 titles
function orderAlphabetically(orderingMovies) {
  const mapArray = orderingMovies.map(movie => movie.title);
  const titleOrdered = mapArray.sort();
  if (titleOrdered.length > 20)
    titleOrdered.splice(20, titleOrdered.length - 20);
  return titleOrdered;
}
// Best yearly rate average
