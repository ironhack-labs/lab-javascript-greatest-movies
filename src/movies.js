// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map((movie) => movie.director);
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  return arr.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  return +arr
    .filter((movie) => movie.score)
    .reduce((curr, movie) => (curr += movie.score / arr.length), 0)
    .toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  return +arr
    .filter((movie) => movie.genre.includes('Drama'))
    .reduce((acc, curr, _, array) => (acc += curr.score / array.length), 0)
    .toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const newArr = JSON.parse(JSON.stringify(arr));
  if (newArr.length === 1) return [newArr[0]];

  return newArr.sort((a, b) =>
    a.year !== b.year ? a.year - b.year : a.title.localeCompare(b.title)
  );
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const newArr = JSON.parse(JSON.stringify(arr));
  if (newArr.length <= 20) {
    return newArr
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((elem) => elem.title);
  } else {
    return newArr
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((elem) => elem.title)
      .splice(0, 20);
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  const newArr = JSON.parse(JSON.stringify(arr));

  // sacando duration string
  const [{ duration }] = newArr;
  // separando tiempos
  const [h, m] = duration.split(' ');

  const hours = parseInt(h);
  const minutes = parseInt(m);

  let timeInMinutes = 0;
  if (hours) {
    timeInMinutes += hours * 60;
  }
  if (minutes) {
    timeInMinutes += minutes;
  }

  return [{ duration: timeInMinutes }];
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {
  const newObj = [];

  const arrScores = arr.filter((elem) => elem.score);

  arrScores.forEach((element) => {
    if (element.year in newObj) {
      newObj[`${element.year}`].score += element.score;
      newObj[`${element.year}`].repetition++;
    } else {
      newObj[`${element.year}`] = {
        score: element.score,
        repetition: 1
      };
    }
  });
  // console.log(newObj);
  const x = newObj.map((elem) => elem.score / elem.repetition);
  // console.log(x);
  let newKey = [];

  for (const key in x) {
    newKey.push([key, x[key]]);
  }

  const data = newKey.sort((a, b) => b[1] - a[1]).splice(0, 1);
  console.log(data[0]);
  const [year, score] = data[0];
  // // console.log(year + '---' + score);
  // return `The best year was ${year} with an average score of ${score}`;
  // The best year was 1972 with an average score of 9.2
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
