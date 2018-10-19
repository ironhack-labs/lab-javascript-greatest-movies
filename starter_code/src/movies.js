/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesList) {
  let newList = [];

  moviesList.forEach(movie => {
    let newMovie = {
      ...movie
    };

    let duration = movie.duration.split(" ");
    //Turns into number and reset it.
    newMovie.duration = 0;

    if (duration === null) {
      minutes = 0;
    }
    //If it only has hours
    else if (duration[0].includes("h") && duration.length === 1) {
      newMovie.duration += parseInt(duration[0]) * 60;
    }
    //More than 1 hour and also has minutes
    else if (duration.length > 1) {
      newMovie.duration += parseInt(duration[0]) * 60 + parseInt(duration[1]);
    }
    //Less than 1 hour and only has minutes
    else {
      newMovie.duration += parseInt(duration[0]);
    }

    newList.push(newMovie);
  });
  return newList;
}
// Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  let resultAverage = 0;
  arr.forEach(function(item) {
    resultAverage += item.rate * 1;
  });
  return resultAverage / arr.length;
}
// Get the average of Drama Movies
function dramaMoviesRate(arr) {
  if (arr.length === 1) return arr[0].rate * 1;
  let resultAverage = 0;
  let drama = arr.filter(function(movie) {
    return !movie.genre.indexOf("Drama");
  });
  if (drama.length === 0) return;
  drama.forEach(function(item) {
    if (item.rate !== "") {
      resultAverage += parseFloat(item.rate);
    }
  });

  return parseFloat((resultAverage / drama.length).toFixed(2));
}

//console.log(dramaMoviesRate(movies));
// Order by time duration, in growing order
function convertMinutes(moviesList) {
  let newList = [];

  moviesList.forEach(movie => {
    let newMovie = {
      ...movie
    };

    let duration = movie.duration.toString().split(" ");
    //Turns into number and reset it.
    newMovie.duration = 0;

    if (duration === null) {
      minutes = 0;
    }
    //If it only has hours
    else if (duration[0].includes("h") && duration.length === 1) {
      newMovie.duration += parseInt(duration[0]) * 60;
    }
    //More than 1 hour and also has minutes
    else if (duration.length > 1) {
      newMovie.duration += parseInt(duration[0]) * 60 + parseInt(duration[1]);
    }
    //Less than 1 hour and only has minutes
    else {
      newMovie.duration += parseInt(duration[0]);
    }

    newList.push(newMovie);
  });
  return newList;
}

function orderByDuration(arr) {
  if (arr.length === 1) return arr;
  let newArr = convertMinutes(arr);
  newArr.sort(function(a, b) {
    return a.duration - b.duration;
  });
  newArr.sort(function(a, b) {
    if (a.duration === b.duration) {
      return a.title > b.title;
    }
  });
  return newArr;
}

//console.log(orderByDuration(movies));

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr) {
  if (arr.length === 0) return undefined;
  let spilbergDrama = arr.filter(function(movie) {
    //console.log(movie.director ==="Steven Spielberg")
    return movie.director === "Steven Spielberg";
  });
  spilbergDrama = spilbergDrama.filter(function(movie) {
    return movie.genre.indexOf("Drama") > -1;
  });
  if (spilbergDrama.length === 1) {
    return "Steven Spielberg directed 1 drama movies!";
  }
  if (spilbergDrama.length === 0) {
    return "Steven Spielberg directed 0 drama movies!";
  }
  return "Steven Spielberg directed " + spilbergDrama.length + " drama movies!";
}

//console.log(howManyMovies(movies));
// Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  arr.sort(function(a, b) {
    return a.title > b.title ? 1 : b.title > a.title ? -1 : 0;
  });
  let onlyTitle = [];
  if(arr.length > 20) {
    for(let count = 0; count < 20; count++) {
      onlyTitle.push(arr[count].title);
    }
    return onlyTitle;
  }
  arr.forEach(function(name) {
    onlyTitle.push(name.title);
  });
  return onlyTitle;
}
// Best yearly rate average