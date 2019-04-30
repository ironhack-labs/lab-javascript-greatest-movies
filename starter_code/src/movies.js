/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const newArray = movies.map(theMovies => {
    const timeArr = theMovies.duration.split(" ");
    const hour = [];
    if (timeArr[0] === undefined) {
      hour.push(0 * 60);
    } else if (timeArr[0] === "54min") {
      hour.push(parseInt(timeArr[0]));
    } else {
      hour.push(parseInt(timeArr[0]) * 60);
    }
    const minutes = [];
    if (timeArr[1] === undefined) {
      minutes.push(0);
    } else {
      minutes.push(timeArr[1]);
    }
    const totalMin = parseInt(hour) + parseInt(minutes);
    return {
      ...theMovies,
      duration: totalMin
    };
  });

  return newArray;
}

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  const avgCalc = movies.reduce((ac, avg) => {
    return ac + avg.rate;
  }, 0);
  return +(parseInt(avgCalc) / movies.length).toFixed(2);
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const dramaFilm = movies.filter(film => film.genre.indexOf("Drama") === 0);

  if (dramaFilm.length !== 0) {
    return ratesAverage(dramaFilm);
  }
}

// Order by time duration, in growing order
function orderByDuration(movies) {
  return movies.sort((a, b) => {
    //-1 mayor en primero  1 menor en primero 0 dejacomo esta
    if (a.duration > b.duration) return 1;
    if (a.duration < b.duration) return -1;
    if (a.title.length === b.title.length) {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
    }
  });
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  const dramaFilmDirector = movies.reduce((count, elm) => {
    if (
      elm.genre.indexOf("Drama") !== -1 &&
      elm.director.indexOf("Steven Spielberg") !== -1
    ) {
      return ++count;
    } else {
      return count;
    }
  }, 0);

  console.log({ dramaFilmDirector });
  if (movies.length ===  0) {
    return undefined
  }else{
      return `Steven Spielberg directed ${dramaFilmDirector} drama movies!`;
  }

}

// Order by title and print the first 20 titles
function orderAlphabetically(movies){

    
    const orderAp = movies.map(theMovies => theMovies.title)

    const filmSort = orderAp.sort()
        
    if(filmSort.length > 20)filmSort.splice(20,filmSort.length - 20)

    return filmSort

    
  console.log(filmSort)
   
    
   
}
orderAlphabetically(movies)



// Best yearly rate average
