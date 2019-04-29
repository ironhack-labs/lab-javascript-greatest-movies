/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

const turnHoursToMinutes = movies => {
  return movies.map(movie => {
    let movieCopy = { ...movie };
    let duration = 0;
    //console.log(movieCopy.duration);
    //let hoursPorMinutos = Number(movieCopy.duration.charAt(0) * 60);
    //let minutos = "";
    /* by sachin
if(movieCopy.duration.indexof("min") == -1)
const horas = number(movieCopy.duration)
elseif(movieCopy.duration.indexof("h")== -1)
const min =number(movieCopy.duration) */
    //console.log(movieCopy.duration);
    if (movieCopy.duration.indexOf("min") == -1) {
      const hours = parseInt(movieCopy.duration.charAt(0)) * 60;
      //console.log(hours);
      duration = hours;
    } else if (movieCopy.duration.indexOf("h") == -1) {
      const onlyMinutes = parseInt(movieCopy.duration);
      //console.log(onlyMinutes);
      duration = onlyMinutes;
    } else {
      const hours = parseInt(movieCopy.duration.charAt(0)) * 60;
      const minutes = parseInt(
        movieCopy.duration.substring(2, movieCopy.duration.length)
      );
      duration = hours + minutes;
      //console.log(minutes);
      //console.log(hours);
    }
    movieCopy.duration = duration;
    return movieCopy;
  });
  //} else if (movieCopy.duration[indexMinutos - 2] === " ") {
  //  minutos = movieCopy.duration[indexMinutos - 1];
  // console.log("Estoy en el primero");
  /* } else if (movieCopy.duration[indexMinutos - 2] === "h") {
    minutos = movieCopy.duration[indexMinutos - 1];
    console.log("Estoy en el segundo");
  } else {
    minutos =
      movieCopy.duration[indexMinutos - 2] +
      movieCopy.duration[indexMinutos - 1];
    console.log("Estoy en el tercero"); */
  //}else if (movieCopy.duration[indexMinutes])

  //console.log(minutos);

  //console.log(movieCopy);
  //  Number(movieCopy.duration.substring(3, 5));
  /* const movieTurnHoursToMinutes = { ...moviecopy };
  console.log(movieTurnHoursToMinutes);
  return (movieTurnHoursToMinutes.duration = hoursPorMinutos + Number(minutos)); */
};

//console.log(turnHoursToMinutes);

// Get the average of all rates with 2 decimals
const ratesAverage = movies => {
  let totalRate = movies.reduce((sum, elem) => {
    if (elem.rate == "") {
      elem.rate = 0;
    }
    return sum + parseFloat(elem.rate);
  }, 0);
  //console.log(totalRate);
  const averageRate = totalRate / movies.length;

  return parseFloat(averageRate.toFixed(2));
};

// console.log(`the average is ${averageRate}`);

// Get the average of Drama Movies
const dramaMoviesRate = movies => {
  let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
  if (dramaMovies.legth == 0) {
    return undefined;
  }
  console.log(dramaMovies);
  const dramaAverage = ratesAverage(dramaMovies);
  return dramaAverage;
};
// Order by time duration, in growing order
const orderByDuration = movies => {
  let orderMovies = movies.sort((a, b) => {
    if (a.duration > b.duration) {
      return 1;
    } else if (a.duration < b.duration) {
      return -1;
    } else if (a.duration == b.duration) {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return orderMovies;
};

// How many movies did STEVEN SPIELBERG
const howManyMovies = movies => {
  let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
  let dramaMoviesSpielberg = dramaMovies.filter(movie =>
    movie.director.includes("Steven Spielberg")
  );
};
// Order by title and print the first 20 titles

// Best yearly rate average
