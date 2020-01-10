/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = arr =>
  +(arr.reduce((a, b) => a + +b.rate, 0) / arr.length).toFixed(2);

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  const dramaMovies = arr.filter(a => a.genre.includes("Drama"));
  return !dramaMovies.length
    ? 0
    : +(
        dramaMovies.reduce((a, b) => (a += Number(b.rate)), 0) /
        dramaMovies.length
      ).toFixed(2);
}

// Iteration 3: Ordering by year - Order by time duration, ascending (in growing order)

const orderByYear = arr =>
  arr.sort((a, b) =>
    a.year - b.year ? a.year - b.year : b.title < a.title ? 1 : -1
  );

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const howManyMovies = arr =>
  arr.filter(
    a => a.director.includes("Steven Spielberg") && a.genre.includes("Drama")
  ).length;

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  return arr
    .sort((a, b) => (a.title >= b.title ? 1 : -1))
    .slice(0, 20)
    .reduce((a, b) => [...a, b.title], []);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function formatTime(duration) {
  let time = 0;
  if (!duration.length) return 0;
  if (/h/.test(duration)) time = +duration[0] * 60;
  if (/min/.test(duration))
    time += +duration.substring(duration.length - 5, duration.length - 3);
  return time;
}

function turnHoursToMinutes(arr) {
  let arr2 = arr.map(a => {
    const newObj = { ...a };
    newObj.duration = formatTime(newObj.duration);
    return newObj;
  });
  return arr2;
  //
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr) {
  if (!arr.length) return null;
  let averageMovies = arr
    .map(a => a.year)
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort()
    .map(a => (a = { year: a, scores: [] }));

  for (let i = 0; i < averageMovies.length; i++) {
    let filmdecetteanne = arr.filter(a => a.year === averageMovies[i].year);

    averageMovies[i].scores.push(
      filmdecetteanne.map(a => a.rate).reduce((a, b) => +a + +b) /
        filmdecetteanne.length
    );
  }
  let winner = averageMovies.sort((a, b) =>
    b.scores - a.scores ? b.scores - a.scores : a.year - b.year
  )[0];

  return `The best year was ${winner.year} with an average rate of ${winner.scores}`;
}
