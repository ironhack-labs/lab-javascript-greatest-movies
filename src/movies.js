// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return [...new Set(moviesArray.map((movie) => movie.director))];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const scores = moviesArray.map((movie) =>
    movie.score === "" || !movie.score ? 0 : movie.score
  );

  return (
    moviesArray.length &&
    +(scores.reduce((a, b) => a + b) / moviesArray.length).toFixed(2)
  );
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  return scoresAverage([
    ...moviesArray.filter((movie) => movie.genre.includes("Drama")),
  ]);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [
    ...moviesArray.sort(
      (a, b) => a.year - b.year || a.title.localeCompare(b.title)
    ),
  ];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return [
    ...moviesArray
      .map((movie) => movie.title)
      .sort((a, b) => a.localeCompare(b))
      .slice(0, 20),
  ];
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return [
    ...moviesArray.map((movie) => {
      const durations = movie.duration.split(" ");
      if (durations.length === 1) {
        const hour = +durations[0][0] * 60;
        return { ...movie, duration: hour };
      }

      const hour = +durations[0][0] * 60;
      const min = +/\d+/.exec(durations[1]);

      return { ...movie, duration: hour + min };
    }),
  ];
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  if (moviesArray.length === 1) return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`;

  const years = [...new Set(moviesArray.map((movie) => movie.year))]; 
  const avg = [];
  
  years.map((year) => {
    const moviesByYear = [
      ...moviesArray.filter((movie) => movie.year === year),
    ];

    const sumYear = [...moviesByYear.map((movie) => movie.score)].reduce(
      (total, num) => total + num,
      0
    );
    avg.push(sumYear / moviesByYear.length);
  });

  let maxAvgScore = avg.at(1);

  for (let i = 1; i <= avg.length; i++) {
    if (avg.at(i) > maxAvgScore) {
      maxAvgScore = avg.at(i);
    }
  }
  const index = avg.indexOf(maxAvgScore);

  return `The best year was ${years.at(index)} with an average score of ${maxAvgScore}`;
}
