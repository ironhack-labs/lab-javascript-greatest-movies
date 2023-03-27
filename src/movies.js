// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(function (arr) {
    return arr.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDramas = moviesArray.filter(function (spielbergMovies) {
    return (
      spielbergMovies.director === "Steven Spielberg" &&
      spielbergMovies.genre.includes("Drama")
    );
  });
  return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const averageScore = moviesArray.reduce(function (acc, val) {
    if (val.score === undefined) {
      return acc;
    }
    return Number(acc) + Number(val.score);
  }, 0);
  return Number((averageScore / moviesArray.length).toFixed(2));
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.genre !== "Drama") {
    return 0;
  }
  const averageScore = moviesArray.reduce(function (acc, val) {
    return Number(acc) + Number(val.score);
  }, 0);
  console.log(Number(averageScore / moviesArray.length));
  return Number(averageScore / moviesArray.length);
}

console.log(dramaMoviesScore(movies));

//     return avgScoreDramas;
//   } else {
//     const avgScoreDramas = moviesArray.reduce(acc, val) {
//       if (moviesArray.genre === "Drama") {
//         return Number(acc) + Number(val.score);
//     }, 0)}
//     return avgScoreDramas;
//   }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let yearsArr = moviesArray.map(function (obj) {
    return obj.year;
  });

  yearsArr.sort(function (a, b) {
    return b - a;
  });
  return yearsArr;
}
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let titlesArr = moviesArray.map(function (obj) {
    return obj.title;
  });

  // titlesArr.sort(function (a, b) {
  //   return b - a;
  // });

  if (titlesArr.length > 20) {
    let arr20 = [];
    for (let i = 0; i < 20; i++) {
      arr20.push(titlesArr[i]);
    }
    return arr20.sort((a, b) => a.localeCompare(b));
  } else {
    return titlesArr.sort((a, b) => a.localeCompare(b));
  }
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let movieMins = 0;

  moviesArray.forEach((element) => {
    if (moviesArray.duration.length === 2) {
      movieMins = Number(moviesArray.duration[0] * 60);
    } else if (moviesArray.duration.length <= 7) {
      movieMins = Number(
        moviesArray.duration[0] * 60 + moviesArray.duration[3] * 10
      );
    } else {
      movieMins = Number(
        moviesArray.duration[0] * 60 +
          moviesArray.duration[3] * 10 +
          moviesArray.duration[4]
      );
    }
    element.duration = movieMins;
  });
  return moviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
