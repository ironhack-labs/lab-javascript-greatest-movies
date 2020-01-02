/* eslint no-restricted-globals: 'off' */

// let movies = [{
//     "title": "The Shawshank Redemption",
//     "year": 1994,
//     "director": "Frank Darabont",
//     "duration": "2h 22min",
//     "genre": [
//       "Crime",
//       "Drama"
//     ],
//     "rate": 9.3
//   },
//   {
//     "title": "The Godfather",
//     "year": 1972,
//     "director": "Francis Ford Coppola",
//     "duration": "2h 55min",
//     "genre": [
//       "Crime",
//       "Drama"
//     ],
//     "rate": 9.2
//   },
//   {
//     "title": "The Godfather: Part II",
//     "year": 1974,
//     "director": "Francis Ford Coppola",
//     "duration": "3h 22min",
//     "genre": [
//       "Crime",
//       "Drama"
//     ],
//     "rate": 9
//   },
//   {
//     "title": "The Dark Knight",
//     "year": 2008,
//     "director": "Christopher Nolan",
//     "duration": "2h 32min",
//     "genre": [
//       "Action",
//       "Crime",
//       "Drama",
//       "Thriller"
//     ],
//     "rate": 9
//   },
//   {
//     "title": "12 Angry Men",
//     "year": 1957,
//     "director": "Sidney Lumet",
//     "duration": "1h 36min",
//     "genre": [
//       "Crime",
//       "Drama"
//     ],
//     "rate": 8.9
//   },
//   {
//     "title": "Jurassic Park",
//     "year": 2000,
//     "director": "Steven Spielberg",
//     "duration": "2h 7min",
//     "genre": [
//       "Adventure",
//       "Sci-Fi",
//       "Thriller"
//     ],
//     "rate": 8.1
//   },
//   {
//     "title": "Jaws",
//     "year": 1975,
//     "director": "Steven Spielberg",
//     "duration": "2h 4min",
//     "genre": [
//       "Adventure",
//       "Drama",
//       "Thriller"
//     ],
//     "rate": 8
//   }
// ]

/*** ES5 ***/
// function orderByYear(movies) {
//   let newArray = movies.map(string => string)
//   newArray.sort((a, b) => {
//     if (a.year === b.year) {
//       return a.title.localeCompare(b.title);
//     }
//     return a.year - b.year;
//   });
//   return newArray;
// }

/*** ES6 ***/
const orderByYear = (movies) => {
  let newArray = movies.map(string => string)
  newArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return newArray;
}

// console.log(orderByYear(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

/*** ES5 ***/
// function howManyMovies(movies) {
//   let directorFilter = movies.filter(function (movie) {
//     return movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') !== -1;
//   });
//   return directorFilter.length;
// }

/*** ES6 ***/
const howManyMovies = (movies) => {
  const directorFilter = movies.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') !== -1);
  return directorFilter.length;
}

// console.log(howManyMovies(movies));

//movie.genre.includes('Drama') poderia colocado isso na lugar do indexOf !!!!

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

/*** ES5 ***/
// function orderAlphabetically(movies) {
//   let orderMovies = [...movies]
//   orderMovies.sort(function (a, b) {
//     return a.title.localeCompare(b.title);
//   });
//   let firstTwentyTitles = orderMovies.filter(function (movie, index) {
//     return index < 20;
//   })
//   let theTitle = firstTwentyTitles.map(function (movie) {
//     return movie.title;
//   })
//   return theTitle;
// }

/*** ES6 ***/
const orderAlphabetically = (movies) => {
  let orderMovies = [...movies]
  orderMovies.sort((a, b) => a.title.localeCompare(b.title));
  let firstTwentyTitles = orderMovies.filter((movie, index) => index < 20);
  let theTitle = firstTwentyTitles.map((movie) => movie.title)
  return theTitle;
}

// console.log(orderAlphabetically(movies));

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

/*** ES5 ***/
// function ratesAverage(movies) {
//   if (movies.length === 0) {
//     return 0;
//   } else {
//     let rateSum = movies.reduce(function (rateTotal, movie) {
//       if (movie.rate) {
//         return rateTotal + movie.rate;
//       }
//       return rateTotal;
//     }, 0)
//     let rateAverage = (rateSum / movies.length).toFixed(2);
//     return Math.round(rateAverage * 100) / 100;
//   }
// }

/*** ES6 ***/
const ratesAverage = (movies) => {
  if (movies.length === 0) {
    return 0;
  }
  const rateSum = movies.reduce((rateTotal, movie) => {
    if (movie.rate) {
      return rateTotal + movie.rate;
    }
    return rateTotal;
  }, 0)
  const rateAverage = (rateSum / movies.length).toFixed(2);
  return Math.round(rateAverage * 100) / 100;
}

// console.log(ratesAverage(movies));

//parseFloat é o + do return !!!!


// Iteration 5: Drama movies - Get the average of Drama Movies

/*** ES5 ***/
// function dramaMoviesRate(movies) {
//   let genreDrama = movies.filter(function (movie) {
//     return movie.genre.includes('Drama');
//   })
//   return ratesAverage(genreDrama);
// }

/*** ES6 ***/
const dramaMoviesRate = (movies) => {
  const genreDrama = movies.filter((movie) => {
    return movie.genre.includes('Drama');
  })
  return ratesAverage(genreDrama);
}
console.log(dramaMoviesRate(movies));


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

/*** ES5 ***/
function turnHoursToMinutes(movies) {
  return movies.map(function (movie) {
    let duration = movie.duration.split(' ').reduce(function (total, time) {
      if (time.indexOf('h') != -1) {
        return parseInt(time[0]) * 60 + total;
      }
      if (time.indexOf('min') != -1) {
        return parseInt(time.substr(0, 2)) + total;
      }
    }, 0)
    return {
      ...movie,
      duration: duration
    };
  })
}

/*** ES6 ***/
function turnHoursToMinutes(movies) {
  return movies.map((movie) => {
    let duration = movie.duration.split(' ').reduce((total, time) => {
      if (time.indexOf('h') != -1) {
        return parseInt(time[0]) * 60 + total;
      }
      if (time.indexOf('min') != -1) {
        return parseInt(time.substr(0, 2)) + total;
      }
    }, 0)
    return {
      ...movie,
      duration: duration
    };
  })
}

//1 transformar JSON.parse para JS e depois JSON.stringify para string.

// BONUS Iteration: Best yearly rate average - Best yearly rate average

//movies.sort((a, b) => a.title.localeCompare(b.title));

// let orderMovies = movies.sort((a, b) => a.title.localeCompare(b.title));
// return orderMovies;