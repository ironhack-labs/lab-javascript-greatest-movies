// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const allDirectors = arr.map(function (obj) {
    return obj.director;
  });
  return allDirectors;
}

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const stevenSpielberg = arr.filter(function (obj) {
    return obj.director === 'Steven Spielberg' && obj.genre.includes('Drama');
  });
  return stevenSpielberg.length;
}

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    const newArr = arr.map(function (obj) {
      if (typeof obj.score === 'undefined')
        return {
          title: obj.title,
          year: obj.year,
          director: obj.director,
          genre: obj.genre,
          score: ''
        };
      return obj;
    });
    const totalSum = newArr.reduce(function (acc, value) {
      return acc + value.score;
    }, 0);
    return Number((totalSum / arr.length).toFixed(2)); // esto esta bien
  }
}

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(arr) {
  const drama = arr.filter(function (obj) {
    return obj.genre.includes('Drama');
  });
  if (drama.length === 0) {
    return 0;
  } else {
    return scoresAverage(drama);
  }
}

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const newArr = arr.map(function (obj) {
    return obj;
  });
  const orderingByYear = newArr.sort(function (a, b) {
    return a.year - b.year || a.title.localeCompare(b.title);
  });
  return orderingByYear;
}

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const newArr = orderByYear(arr);
  const alpha = newArr.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  const title = alpha.map(function (obj) {
    return obj.title;
  });
  return title.slice(0, 20);
}

// ###############################################################################
// ############################# DONE!!! #########################################
// ###############################################################################
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  const newArr = arr.map(function (obj) {
    const hoursToMinutes = Number(obj.duration.slice(0,obj.duration.indexOf('h')) * 60)
    const minutes = Number(obj.duration.slice(obj.duration.indexOf('h') +1, obj.duration.indexOf('min')))
    return {
      title: obj.title,
      year: obj.year,
      director: obj.director,
      duration: Number(hoursToMinutes) + Number(minutes),
      genre: obj.genre,
      score: obj.score
    }; 
   })
  return newArr
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  if (arr.length === 0) {
    return null;
  }
  if (arr.length === 1) {
    return `The best year was ${arr[0].year} with an average score of ${arr[0].score}`;
  }
  const newArr = arr.map(function (obj) {
    return [obj.year, obj.score]
  })
  let years =[]
  for (str of newArr)
  if (!years.includes(str[0])) {
    years.push(`${str[0]}, ${0}`)
  } 

//   const newArr2 = years.map(function (year) {
//     for (arr of newArr) {
//       if (arr.includes(year)) {
//          return [`${year[0]}`, `${year[1] += arr[1]}`]
//     }
//   }
//  })
  // let newYear = {}
  // for (let i = 0; i < newArr.length; i++) {
  //   if (newYear.includes())
  // }
  return newArr2
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
