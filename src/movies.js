function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((item) => item.director);

  return directors.filter(
    (director, index) => directors.indexOf(director) === index
  );
}

function howManyMovies(moviesArray) {
  return moviesArray.reduce((count, movie) => {
    const isSpielberg = movie.director === "Steven Spielberg";
    const isDrama = movie.genre.includes("Drama");

    return isSpielberg && isDrama ? count + 1 : count;
  }, 0);
}

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  let sum = 0;

  moviesArray.forEach((movie) => {
    sum += movie.score ? movie.score : 0;
  });

  return Number((sum / moviesArray.length).toFixed(2));
}

function dramaMoviesScore(moviesArray) {
  const dramaList = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (dramaList.length === 0) return 0;

  const average =
    dramaList.reduce((acc, movie) => acc + (movie.score || 0), 0) /
    dramaList.length;

  return Number(average.toFixed(2));
}

function orderByYear(moviesArray) {
  const copiedMovies = [...moviesArray];

  copiedMovies.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }

    return a.year - b.year;
  });

  return copiedMovies;
}


function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map((movie) => movie.title);

  return titles.sort((a, b) => a.localeCompare(b)).slice(0, 20);
}

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const durationText = movie.duration;

    let totalMinutes = 0;

    const hourPart = durationText.match(/(\d+)h/);
    const minutePart = durationText.match(/(\d+)min/);

    if (hourPart) {
      totalMinutes += Number(hourPart[1]) * 60;
    }

    if (minutePart) {
      totalMinutes += Number(minutePart[1]);
    }

    return {
      ...movie,
      duration: totalMinutes,
    };
  });
}

function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const groupedYears = {};

  moviesArray.forEach((movie) => {
    if (!groupedYears[movie.year]) {
      groupedYears[movie.year] = {
        total: 0,
        count: 0,
      };
    }

    groupedYears[movie.year].total += movie.score || 0;
    groupedYears[movie.year].count += 1;
  });

  let topYear = null;
  let topAverage = 0;

  Object.keys(groupedYears).forEach((year) => {
    const current =
      groupedYears[year].total / groupedYears[year].count;

    if (
      current > topAverage ||
      (current === topAverage && year < topYear)
    ) {
      topAverage = current;
      topYear = year;
    }
  });

  return `The best year was ${topYear} with an average score of ${topAverage.toFixed(
    2
  )}`;
}