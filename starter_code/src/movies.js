/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesObj) {
  let newMoviesObj = moviesObj.map(movie => {
    let item = { ...movie };
    if (item.duration.includes("h")) {
      let hours = Number(item.duration.split("h")[0] * 60);
      let mins = Number(item.duration.split("h")[1].split("min")[0]);
      let total = hours + mins;

      item.duration = Number(total);
      console.log(item.duration);
    } else {
      item.duration = Number(item.duration.split("m")[0]);
    }
    return item;
  });
  return newMoviesObj;
}

function ratesAverage(arr) {
  totalRatings = arr.reduce((accumulator, movie) => {
    return Number((accumulator += movie.rate));
  }, 0);
  return totalRatings / arr.length;
}

ratesAverage(movies);

// Get the average of Drama Movies
// function dramaMoviesRate(arr) {
//   let count = 0;
//   if (arr.rate === "") {
//     return arr.rate;
//   }
//   var dramaMovies = arr
//     .filter(m => m.genre.includes("Drama"))
//     .reduce((acc, movie) => {
//       count++;
//       return acc + parseInt(movie.rate);
//     }, 0);
//   if (dramaMovies) {
//     let result = (dramaMovies / count).toFixed(2);
//     return parseFloat(result);
//   }

// }
function dramaMoviesRate(arr) {
  let filtroDrama = arr.filter(movie => {
    return movie.genre.indexOf("Drama") !== -1;
  });
  if (!filtroDrama.length) {
    return undefined;
  }
  return Number(ratesAverage(filtroDrama).toFixed(2));
}

// function orderByDuration(movieArray) {
//   sortedByDuration = movieArray.sort((a, b) => {
//     if (a.duration < b.duration) {
//       return -1;
//     } else if (b.duration < a.duration) {
//       return 1;
//     }
//     if (a.duration === b.duration) {
//       if (a.title.localeCompare(b.title) === -0) {
//         return a.title;
//       } else if (a.title.localeCompare(b) === 1) {
//         return b.title;
//       }
//     } else {
//       return 0;
//     }
//   });
//   return sortedByDuration;
// }

// orderByDuration(movies);

function orderByDuration(items) {
  //check if length is greater than 1
  if (items.length > 1) {
    //sort and  conditional 1 check if duration is equal and sort by title
    items.sort((a, b) => {
      if (a.duration === b.duration) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
      }
      return a.duration - b.duration;
    });
  }
  return items;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(arr) {
  if (arr.length === 0) return undefined;
  const filtered = arr
    .filter(movie => movie.genre.includes("Drama"))
    .filter(m => m.director === "Steven Spielberg");

  let numberOfMovies = filtered.length;
  return `Steven Spielberg directed ${numberOfMovies} drama movies!`;
}

// Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let newArray = arr.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  let formatted = newArray.map(function(movie) {
    return movie.title;
  });
  return formatted.slice(0, 20);
}

orderAlphabetically(movies);

// Best yearly rate average
