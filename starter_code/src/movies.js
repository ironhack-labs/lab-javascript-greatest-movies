/* eslint no-restricted-globals: 'off' */
function turnHoursToMinutes() {
  // let copyMovies = [...movies];
  let total;
  let newArray = movies.map(elm => {
    let elm2 = { ...elm };
    let durationArr = elm2.duration.split(" ");
    if (durationArr.length == 2) {
      let hours = parseInt(durationArr[0]) * 60;
      let minutes = parseInt(durationArr[1]);

      total = hours + minutes;
    } else if (durationArr.length == 1 && durationArr.includes("h")) {
      total = parseInt(durationArr[0]) * 60;
    } else {
      total = parseInt(durationArr[0]);
    }
    return { ...elm2, duration: total };
  });
  return newArray;
}

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  const allRate = movies.reduce((acc, elm) => {
    return acc + elm.rate;
  }, 0);

  return Math.round((allRate * 100) / movies.length) / 100;
}

// Get the average of Drama Movies

// Order by time duration, in growing order
function orderByDuration() {
  movies.sort((a,b) => {
    if(a.duration == b.duration){
return 
    }
  }
  else {
    return a.duration - b.duration
  })
  return movies
}

// How many movies did STEVEN SPIELBERG
function howManyMovies() {
  const stevenSpielbergMovies = movies.filter(
    elm => elm.director == "Steven Spielberg"
  );
  //console.log(stevenSpielbergMovies);
  const moviesDrama = movies.filter(elm => elm.genre.includes("Drama"));

  //console.log(moviesDrama);

  if (!stevenSpielbergMovies) {
    return undefined;
  } else if (stevenSpielbergMovies == true && !moviesDrama) {
    return "Steven Spielberg directed 0 drama movies!";
  } else {
    return "Steven Spielberg directed 1 drama movie";
  }
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const titlesMovies = movies.map(elm => elm.title);
  const orderedTitles = titlesMovies.sort();

  return orderedTitles.splice(0, 20);
}
// Best yearly rate average*/
