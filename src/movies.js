// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

// {
//   "title":"The Shawshank Redemption",
//   "year":1994,
//   "director":"Frank Darabont",
//   "duration":"2h 22min",
//   "genre":["Crime","Drama"],
//   "score":9.3
// }

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let directorsArray = arr.map((element) => element.director);
  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let spielbergMovies = arr.filter(
    (element) => element.director === 'Steven Spielberg'
  );
  let spielbergDramas = spielbergMovies.filter((element) =>
    element.genre.includes('Drama')
  );
  return spielbergDramas.length;
}

// console.log(
//   howManyMovies([
//     {
//       title: 'The Shawshank Redemption',
//       year: 1994,
//       director: 'Steven Spielberg',
//       duration: '2h 22min',
//       genre: ['Crime', 'Drama'],
//       score: 9.3
//     }
//   ])
// );

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length) {
    let scores = arr.map((element) => element.score);
    console.log(scores);
    let filteredScores = Array.from(scores, (item) => item || 0);
    console.log(filteredScores);
    let average = filteredScores.reduce((acc, value) => acc + value, 0);
    return parseFloat((average / filteredScores.length).toFixed(2));
  } else {
    return 0;
  }
}

// console.log(`The score avg of an empty array is 0: ` + scoresAverage([]));

// console.log(
//   `The score avg is ` +
//     scoresAverage([
//       {
//         title: 'The Shawshank Redemption',
//         year: 1994,
//         director: 'Frank Darabont',
//         duration: '2h 22min',
//         genre: ['Crime', 'Drama'],
//         score: ''
//       },
//       {
//         title: 'The Shawshank Redemption',
//         year: 1994,
//         director: 'Frank Darabont',
//         duration: '2h 22min',
//         genre: ['Crime', 'Drama'],
//         score: 9.7
//       }
//     ])
// );

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let dramas = arr.filter((element) => element.genre.includes('Drama'));
  return scoresAverage(dramas);
}

// console.log(
//   dramaMoviesScore([
//     {
//       title: 'The Shawshank Redemption',
//       year: 1994,
//       director: 'Frank Darabont',
//       duration: '2h 22min',
//       genre: ['Crime'],
//       score: 9.3
//     },
//     {
//       title: 'The Shawshank Redemption',
//       year: 1994,
//       director: 'Frank Darabont',
//       duration: '2h 22min',
//       genre: ['Crime', 'Drama'],
//       score: 9.7
//     }
//   ])
//);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// function orderByYear(arr) {
//   let copiedArr = [...arr]; // using spread to not affect original array
//   let sortedArr = copiedArr.sort(function (a, b) {
//     return a.year - b.year;
//   });
//   return sortedArr;
// }

// helping function from the internet:
// yourArray.sort(function(a, b) {
//   var adate = /* ...parse the date in a.date... */,
//       bdate = /* ...parse the date in b.date... */,
//       rv = adate - bdate;
//   if (rv === 0) {
//       rv = a.title.localeCompare(b.title);
//   }
//   return rv;
// });

function orderByYear(arr) {
  let copiedArr = [...arr]; // using spread to not affect original array
  let sortedArr = copiedArr.sort(function (a, b) {
    let adate = a.year;
    let bdate = b.year;
    let rv = adate - bdate;
    if (rv === 0) {
      rv = a.title.localeCompare(b.title);
    }
    return rv;
  });
  return sortedArr;
}

let testingArr = [
  {
    title: 'The Shawshank Redemption',
    year: 1998,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime'],
    score: 9.3
  },
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.7
  }
];

sortedYear = orderByYear(testingArr);
console.log(`Original arr ` + testingArr[0].year + testingArr[1].year);
console.log(`Sorted arr ` + sortedYear[0].year + sortedYear[1].year);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let copiedArr = [...arr];
  let titles = copiedArr.map((film) => film.title);
  console.log(titles);
  let alphabeticalArr = titles.sort(function (a, b) {
    const nameA = a.toUpperCase(); // ignore upper and lowercase
    const nameB = b.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  return alphabeticalArr.slice(0, 20);
}

// let moviesarr = [
//   { title: 'abc' },
//   { title: 'aaa' },
//   { title: 'abb' },
//   { title: 'deu' },
//   { title: 'feu' },
//   { title: 'coeur' },
//   { title: 'salade' },
//   { title: 'tomate' },
//   { title: 'oignon' },
//   { title: 'kebab' },
//   { title: 'abc' },
//   { title: 'aaa' },
//   { title: 'abb' },
//   { title: 'deu' },
//   { title: 'feu' },
//   { title: 'coeur' },
//   { title: 'salade' },
//   { title: 'tomate' },
//   { title: 'oignon' },
//   { title: 'kebab' }
// ];
//console.log(orderAlphabetically(moviesarr));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  let copiedArr = [...arr];
  // get only the times
  let times = copiedArr.map((film) => film.duration);
  // select the hour and transform it into min
  let modifiedTimes = times.map(
    (time) =>
      parseFloat(time.substr(0, time.indexOf('h'))) * 60 +
      parseFloat(time.slice(time.indexOf(' ') + 1, time.lastIndexOf('min')))
  );
  console.log(modifiedTimes);
  // // add the minutes
  // let modifiedMin = times.map((time) =>
  //   parseFloat(time.slice(time.indexOf(' ') + 1, time.lastIndexOf('min')))
  // );
  // console.log(modifiedMin);

  //replace the times into the original array by the minutes
  let returnArr = [...arr];
  for (i = 0; i < returnArr.length; i++) {
    returnArr[i].duration = modifiedTimes[i];
  }
  //console.log(arr);
  return returnArr;
}
turnHoursToMinutes(testingArr);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

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
