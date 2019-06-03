// function turnHoursToMinutes(arr) {
//   var movieDur = arr.map(movie => {
//     return movie.duration;
//   });
//   //var movieLength = movieDur.map(movie => movie.indexOf("h")
//   function toMin(movieDur) {
//     if (movieDur.includes("h")) {
//       var minutes = movieDur.movie[movie.indexOf("h") - 1] * 60;
//       return (
//         minutes +
//         movieDur.movie[(movie.indexOf("m") - 1, movie.indexOf("m") - 2)]
//       );
//     } else
//       returnminutes +
//         movieDur.movie[(movie.indexOf("m") - 1, movie.indexOf("m") - 2)];
//   }
// }

function ratesAverage(arr) {
  const totalRate = arr.reduce((acc, currentRate) => {
    return acc + Number(currentRate.rate);
  }, 0);
  var result = totalRate / arr.length;

  return Number(result.toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(arr) {
  const filteredDramas = arr.filter(movie => {
    if (movie.genre.includes("Drama")) {
      return movie;
    }
  });
  if (filteredDramas.length > 0) return ratesAverage(filteredDramas);
  else return undefined;
}

// Order by time duration, in growing order

function orderByDuration(arr) {
  arr.sort(sortDuration);
  function sortDuration(movie1, movie2) {
    if (movie1.duration < movie2.duration) {
      return -1;
    }
    if (movie1.duration > movie2.duration) {
      return 1;
    }
    if ((movie1.duration = movie2.duration)) {
      if (movie1.title < movie2.title) {
        return -1;
      }
      if (movie1.title > movie2.title) {
        return 1;
      }
      if ((movie1.title = movie2.title)) {
        return 0;
      }
    }
  }
  return arr;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  if (movies.length === 0) {
    return undefined;
  }
  var toto = movies.filter(movie => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return `Steven Spielberg directed ${toto.length} drama movies!`;
}

// function howManyMovies(arr) {
//   // var count = 0
//   if (arr.length === 0) {
//     return undefined;
//   }
//   var array = arr.filter(movie => {
//     return (
//       movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
//     );
//   });

//   console.log(array);

//   return `Steven Spielberg directed ${array.length} drama movies!`;
// }
// Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  var filteredTitle = arr.map(movie => {
    return movie.title;
  });
  console.log(filteredTitle);

  function orderName(movie1, movie2) {
    if (movie1 < movie2) {
      return -1;
    }
    if (movie1 > movie2) {
      return 1;
    }
    if ((movie1 = movie2)) {
      return 0;
    }
  }
  var titleSorted = filteredTitle.sort(orderName);

  console.log(typeof titleSorted);
  console.log(titleSorted);

  if (titleSorted.length < 20) {
    //var movies20 = filteredTitle.slice(16, filteredTitle.length);
    return titleSorted;
  } else return titleSorted.slice(0, 20);
}

// Best yearly rate average
