/* eslint no-restricted-globals: 'off' */
console.log("hello world");
/* Turn duration of the movies from hours to */


console.log ("there are " + movies.length + " movies in the list");

function turnHoursToMinutes (movieList){
  const newList = movieList;
  const hoursToMinutes = newList.map (function (movie, index) {    
    const durationSplit = movie.duration.split(" ");
    if (durationSplit.length == 2) {
      hour = Number(durationSplit[0].replace("h", ""));
      min = Number(durationSplit[1].replace("min", ""));
      newList.duration = (hour * 60 + min);
      movie.durationInMin = (hour * 60 + min);
    } else if (durationSplit.length == 1 && durationSplit[0].includes("h")) {
      hour = Number(durationSplit[0].replace("h", ""));
      min = 0;
      newList.duration = (hour * 60 + min);
      movie.durationInMin = (hour * 60 + min);
    } else {
      hour = 0;
      min = Number(durationSplit[0].replace("min", ""));
      newList.duration = (hour * 60 + min);
      movie.durationInMin = (hour * 60 + min);
    }
//    return movie;
    return newList[index];
  })
  return hoursToMinutes;
}
console.log(turnHoursToMinutes(movies));
turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
//console.log(movies[0].rate);
function ratesAverage (movieList) {
  dramaRatingCounter = 0;
  const ratingSum = movieList.reduce((acc, val) => {

    return acc + parseFloat(val.rate)
  }, 0)
  return Number((ratingSum / movieList.length).toFixed(2));
}
console.log("Average Rating of all Movies: " + ratesAverage(movies));
ratesAverage(movies);


// Get the average of Drama Movies
function dramaMoviesRate (movieList) {
  const ratesDrama = movieList.filter((el) => el.genre.includes("Drama"))
    if (ratesDrama.length === 0) {
    return;
  } else {
    console.log("Number of Drama Movies: " + (ratesDrama.length));
    return ratesAverage(ratesDrama);
  }
}
console.log("Averagee Rating of Drama Movies: " + dramaMoviesRate(movies));
dramaMoviesRate(movies);


// Order by time duration, in growing order
function orderByDuration (movieList) {
  const movieOrderedByDuration = movieList.sort (function(a,b) {
    if (a.durationInMin === b.durationInMin) {
      a.title.localeCompare(b.title)
    } else if (a.durationInMin > b.durationInMin) {
      return 1;
    } else {
      return -1;
    }
  })
  return movieOrderedByDuration;
}
console.log(orderByDuration(movies));
orderByDuration(movies);

// How many movies did STEVEN SPIELBERG
function howManyMovies (movieList) {
  const numberOfMovies = movieList.filter (function(movie) {
    return (movie.director == "Steven Spielberg" && movie.genre.includes("Drama"))
  })
  if (numberOfMovies.length == 0)  return undefined
  else if (numberOfMovies.length === 0) return ("Steven Spielberg directed 0 drama movies!")
  else if (numberOfMovies.length > 0) return ("Steven Spielberg directed " + numberOfMovies.length + " drama movies!")
  else return ;
  //  console.log(numberOfMovies);
}
console.log(howManyMovies(movies));
howManyMovies(movies);

// Order by title and print the first 20 titles
function orderAlphabetically  (movieList) {
  const orderedByTitleArr = movieList.sort ((a, b) => a.title.localeCompare(b.title))
  const bestTwenty = orderedByTitleArr.filter ((x, index) => index < 20)
//  console.log(bestTwenty);
  const bestTwentyTitles = bestTwenty.map ((el) => el.title)
//  console.log(bestTwentyTitles);
  return bestTwentyTitles;
}
orderAlphabetically (movies);

// Best yearly rate average
/*function bestYear (movieList) {
  const orderByYear = movieList.sort ((a,b) => a.year.localeCompare(b.year))
  console.log(orderByYear);
  var groupCount = 1;
  for (let i=0; i<orderByYear.length; i++) {

    if (orderByYear[i].year == orderByYear[i+1].year){
      orderByYear[]
    }
  }
}

bestYear(movies);*/