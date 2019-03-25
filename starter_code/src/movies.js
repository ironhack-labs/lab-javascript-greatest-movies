/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
//dont do this one!!!!!!!!!

// function turnHoursToMinutes(movies) {
//   var durations = movies.forEach(val => {
//     return movies.duration;
//   });

//   var num = durations.split(" ");

// "2h", "22min"
// "1h","30min"

//var minutes = movies.hour() * 60 + movies.minute();
// }

// ////////Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  var total = 0;
  movies.forEach(val => {
    total += Number(val.rate);
  });
  return total / movies.length;
}

// //////////Get the average of Drama Movies

function dramaMoviesRate(movies) {
  var dtotal = 0;

  var dramaMovies = movies.filter(movie => {
    return movie.genre.includes("Drama");
  });

  // console.log("all drama movies are : " + dramaMovies);

  dramaMovies.forEach(dramaMovie => {
    dtotal += Number(dramaMovie.rate);
  });
  // console.log("total of all drama movies: " + dtotal);

  return dtotal / dramaMovies.length;
}

// //////////Order by time duration, in growing order

function orderByDuration(movies) {
  movies.sort((a, b) => {
    if (a.duration < b.duration) return -1;
    if (a.duration > b.duration) return 1;
    if (a.duration === b.duration) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
    }
  });
  return movies;
}

// ////////How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  var stevenDrama = movies.filter(eachMovies => {
    return (
      eachMovies.director === "Steven Spielberg" &&
      eachMovies.genre.includes("Drama")
    );
  });
  if (stevenDrama.length === 0) {
    return;
  } else
    return "Steven Spielberg directed " + stevenDrama.length + " drama movies!";
}

//---------------second way that I tried for this question, but not sure if it is true??!:

// function howManyMovies(movies) {

//  var dramaMovies= movies.forEach(val=>{
// var list= movies.genre.includes("Drama")
//  })
// var stevenDrama= function (dramaMovies){
//  return dramaMovies.director==="Steven Spielberg"
// }

// for (var i=0; i<stevenDrama.length; i++)
// var number=[i]

// if (stevenDrama.length == 0) {
//   return undefined;
// } else return `Steven Spielberg directed ${stevenDrama.length} drama movies!`;
// }

// /////////Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  var titleOrder = movies.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
  });
  var twentyTitle = titleOrder.map(eachMovie => eachMovie.title);
  return twentyTitle.slice(0, 19);
}

//  /////////////Best yearly rate average of movies

//  regroupe years + take the max rating

function bestYearAvg(movies) {
  function groupBy(objectArray, property) {
    return objectArray.reduce(function(acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

  var groupedYears = groupBy(movies, "year");
  console.log(groupedYears);

  var maxRatedMovie = Math.max(...groupedYears);

  console.log(maxRatedMovie);

  return maxratedMovie;
}

// TESTING PUSH VIA VSCODE
