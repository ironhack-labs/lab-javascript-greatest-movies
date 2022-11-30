// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((film) => film.director);

  //Bonus 1.1
  directors.filter((directors, director) => {
    if (directors != director) return director;
  });

  return JSON.parse(JSON.stringify(directors));
}

console.log("Directores:", getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter((movies) => movies.director === "Steven Spielberg" && movies.genre.includes("Drama")).length;
}

console.log("Steven Spielberg movies:", howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;

  return +(
    moviesArray
      .map((movie) => movie.score)
      .filter((score) => typeof score === "number")
      .reduce((a, b) => a + b) / moviesArray.length
  ).toFixed(2);
}

console.log("Score average:", scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaFilms = moviesArray.filter((movie) => movie.genre.includes("Drama"));

  const scoreDrama = dramaFilms.map((score) => score.score);
  const averageScore = scoreDrama.reduce((a, b) => a + b, 0) / scoreDrama.length;

  return dramaFilms.length ? +averageScore.toFixed(2) : 0;
}

console.log("Score Drama:", dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return JSON.parse(JSON.stringify(moviesArray)).sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
}

console.log("By year:", orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return JSON.parse(JSON.stringify(moviesArray))
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
}

console.log("Alphabetically:", orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return JSON.parse(JSON.stringify(moviesArray)).map((movie) => {
    const time = movie.duration
      .replace(/h|min/g, "")
      .split(" ")
      .map((num) => +num);

    const timeNum = (time.length > 1 ? [time[0] * 60, time[1]] : [time[0] * 60]).reduce((a, b) => a + b, 0);

    movie.duration = timeNum;

    return movie;
  });
}

console.log("To minutes:", turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) return null;

  const filterScoreAvgByYear = moviesArray
    .reduce((accum, value) => {
      const year = value["year"];

      let existYear = accum.find((x) => x.year === year);
      if (!existYear) {
        accum.push({ year, score: [] });
        existYear = accum.find((x) => x.year === year);
      }

      existYear.score.push(value.score);

      return accum;
    }, [])
    .map((movie) => {
      const avgScore = parseFloat((movie.score.reduce((a, b) => a + b) / movie.score.length).toFixed(2));

      movie.score = avgScore;

      return movie;
    })
    .sort((a, b) => b.score - a.score || a.year - b.year);

  return `The best year was ${filterScoreAvgByYear[0].year} with an average score of ${filterScoreAvgByYear[0].score}`;
}

console.log("Best year:", bestYearAvg(movies));
