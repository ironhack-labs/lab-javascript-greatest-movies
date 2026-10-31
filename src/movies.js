
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

function getUniqueDirectors(moviesArray) {
  return [...new Set(getAllDirectors(moviesArray))];
}


function howManyMovies(moviesArray) {
  return moviesArray.filter(movie =>
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ).length;
}


function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const total = moviesArray.reduce((sum, movie) => sum + (movie.score || 0), 0);
  return Number((total / moviesArray.length).toFixed(2));
}


function dramaMoviesScore(moviesArray) {
  return scoresAverage(moviesArray.filter(movie => movie.genre.includes('Drama')));
}


function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
}


function orderAlphabetically(moviesArray) {
  return moviesArray.map(movie => movie.title).sort().slice(0, 20);
}


function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    const hours = movie.duration.match(/(\d+)h/);
    const minutes = movie.duration.match(/(\d+)min/);

    return {
      ...movie,
      duration: (hours ? Number(hours[1]) * 60 : 0) + (minutes ? Number(minutes[1]) : 0)
    };
  });
}


function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const years = moviesArray.reduce((totals, movie) => {
    if (!totals[movie.year]) totals[movie.year] = { total: 0, count: 0 };
    totals[movie.year].total += movie.score || 0;
    totals[movie.year].count += 1;
    return totals;
  }, {});

  const bestYear = Object.keys(years).reduce((best, year) => {
    const average = years[year].total / years[year].count;
    const bestAverage = years[best].total / years[best].count;
    if (average > bestAverage || (average === bestAverage && Number(year) < Number(best))) {
      return year;
    }
    return best;
  });

  const average = Number((years[bestYear].total / years[bestYear].count).toFixed(2));
  return `The best year was ${bestYear} with an average score of ${average}`;
}
