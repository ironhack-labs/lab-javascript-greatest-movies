// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
  let directorsArr = moviesArray.map((movie) => {
    return movie.director;
  });
  return directorsArr;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getUniqueDirectors(arrToSort) {
  return [...new Set(arrToSort)];
}
getUniqueDirectors(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  let dramaBySpielbergArr = moviesArray.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama') === true
    );
  });
  return dramaBySpielbergArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let scoreArr = moviesArray.map((movie) => {
    if (movie.score === '' || !movie.score) {
      return 0;
    } else {
      return movie.score;
    }
  });
  let sum = scoreArr.reduce((total, num) => {
    return total + num;
  }, 0);

  return parseFloat((sum / scoreArr.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaArr = moviesArray.filter((movie) => {
    return movie.genre.includes('Drama') === true;
  });
  if (dramaArr.length === 0) {
    return 0;
  }
  let dramaScoresArr = dramaArr.map((drama) => {
    return drama.score;
  });
  let sum = (
    dramaScoresArr.reduce((total, num) => {
      return total + num;
    }, 0) / dramaScoresArr.length
  ).toFixed(2);
  return parseFloat(sum);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let byYearArr = [...moviesArray];

  byYearArr.sort((a, b) => {
    if (a.year - b.year === 0) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return byYearArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let titleArr = [
    ...moviesArray.map((movie) => {
      return movie.title;
    }),
  ];

  return titleArr.sort((a, b) => a.localeCompare(b)).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let newArr = [...moviesArray].map((movie) => {
    let durationArr = movie.duration.split(' ');
    if (durationArr.length === 1) {
      let h = +durationArr[0][0] * 60;
      return { ...movie, duration: h };
    }

    let h = +durationArr[0][0] * 60;
    let min = /\d+/.exec(durationArr[1]);
    min = +min[0];

    return { ...movie, duration: h + min };
  });
  return newArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  if (moviesArray.length === 1) {
    return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`;
  }

  let yearArr = [...moviesArray.map((movie) => movie.year)];
  let uniqueYearArr = [...new Set(yearArr)];

  let avgArr = [];
  uniqueYearArr.forEach((year) => {
    let yearMoviesArr = [
      ...moviesArray.filter((movie) => {
        return movie.year === year;
      }),
    ];

    let sumOfTheYear = [...yearMoviesArr.map((movie) => movie.score)].reduce(
      (total, num) => {
        return total + num;
      },
      0
    );
    avgArr.push(sumOfTheYear / yearMoviesArr.length);
  });

  let highestAvg = avgArr[0];

  for (let i = 0; i < avgArr.length; i++) {
    if (avgArr[i] > highestAvg) {
      highestAvg = avgArr[i];
    }
  }
  let ind = avgArr.indexOf(highestAvg);

  return `The best year was ${uniqueYearArr[ind]} with an average score of ${highestAvg}`;
}
