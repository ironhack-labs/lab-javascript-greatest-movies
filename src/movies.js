// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  directors = movies.map(function (current, index, arr) {
    return current.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(data) {
  let movies = data.filter(function (element) {
    if (
      'Steven Spielberg' === element.director &&
      element.genre.includes('Drama')
    )
      return element;
  });
  return movies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(scores) {
  if (scores.length === 0) return 0;

  const result = scores

    .map((task) => {
      if (typeof task.score === 'number') {
        return task.score;
      } else return 0;
    })

    .reduce((acc, current) => [+acc + +current]);

  return +(result[0] / scores.length).toFixed(2);
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(data) {
  let total = 0;
  let count = 0;

  data.forEach((element) => {
    if (element.genre.includes('Drama')) {
      total += element.score;
      count++;
    }
  });
  if (!count) return 0;
  return +(total / count).toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(data) {
  newData = [...data];

  function compare(a, b) {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  }

  newData.sort(compare);
  return newData;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(data) {
  newData = [...data];

  function compare(a, b) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  }

  newData.sort(compare);
  let result = newData.map((task) => task.title);
  if (result.length > 20) result.splice(20, result.length);
  return result;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(data) {
  newData = [...data];
  if (newData.length === 0) return [{ duration: 0 }];
  newData.forEach((element, i) => {
    let min = 0;
    let duration = element.duration;
    strArray = duration.split(' ');
    let hours = strArray[0].replace('h', '');
    if (strArray[1]) {
      min = strArray[1].replace('min', '');
    }
    newData[i].duration = +hours * 60 + +min;
  });
  return newData;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) return null;
  const result = movies

    .map((task) => [task.year, task.score])
    .sort((a, b) => a[0] - b[0]);

  let sum = 0;
  let count = 0;
  let comb = [];
  let movieC = 0;

  for (let i = 0; i < result.length; i++) {
    if (i === result.length - 1) {
      movieC++;
      sum += result[i][1];
      sum = sum / movieC;

      comb[count] = [result[i][0], sum];
    } else {
      if (result[i][0] === result[i + 1][0]) {
        sum += result[i][1];
        movieC++;
      } else {
        sum += result[i][1];
        movieC++;
        sum = sum / movieC;
        comb[count] = [result[i][0], sum];
        count++;
        movieC = 0;
        sum = 0;
      }
    }
  }

  let high = 0;
  let answer = '';
  comb.forEach((element) => {
    if (element[1] > high) {
      answer = `The best year was ${element[0]} with an average score of ${element[1]}`;
      high = element[1];
    }
  });
  console.log(answer);
  return answer;
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
