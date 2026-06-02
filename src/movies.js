function getAllDirectors(moviesArray) {
  return moviesArray.map(({ director }) => director);
}

function getUniqueDirectors(moviesArray) {
  return [...new Set(getAllDirectors(moviesArray))];
}

function howManyMovies(moviesArray) {
  return moviesArray.filter(
    ({ director, genre }) =>
      director === "Steven Spielberg" && genre.includes("Drama")
  ).length;
}

function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;

  const total = moviesArray.reduce(
    (acc, movie) => acc + (movie.score || 0),
    0
  );

  return +((total / moviesArray.length).toFixed(2));
}

function dramaMoviesScore(moviesArray) {
  return scoresAverage(
    moviesArray.filter(({ genre }) => genre.includes("Drama"))
  );
}

function orderByYear(moviesArray) {
  return [...moviesArray].sort((movieA, movieB) => {
    return movieA.year === movieB.year
      ? movieA.title.localeCompare(movieB.title)
      : movieA.year - movieB.year;
  });
}

function orderAlphabetically(moviesArray) {
  return moviesArray
    .map(({ title }) => title)
    .sort((first, second) => first.localeCompare(second))
    .slice(0, 20);
}

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    let minutes = 0;

    const hourPart = movie.duration?.match(/(\d+)h/);
    const minutePart = movie.duration?.match(/(\d+)min/);

    if (hourPart) minutes += Number(hourPart[1]) * 60;
    if (minutePart) minutes += Number(minutePart[1]);

    return {
      ...movie,
      duration: minutes
    };
  });
}

function bestYearAvg(moviesArray) {
  if (!moviesArray.length) return null;

  const yearData = {};

  moviesArray.forEach(({ year, score }) => {
    if (!yearData[year]) yearData[year] = [];
    yearData[year].push(score || 0);
  });

  let bestYear = "";
  let bestAverage = -1;

  Object.keys(yearData).forEach(year => {
    const avg =
      yearData[year].reduce((sum, value) => sum + value, 0) /
      yearData[year].length;

    if (avg > bestAverage || (avg === bestAverage && year < bestYear)) {
      bestAverage = avg;
      bestYear = year;
    }
  });

  return `The best year was ${bestYear} with an average score of ${bestAverage.toFixed(
    1
  )}`;
}