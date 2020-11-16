// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

    function getAllDirectors(movies) {
      const directors = movies.map(function(movie) {
        return movie.director;
    });

// Bonus
      let directorsNoDuplicates = [];
      for (let dir of directors) {
          if (!directorsNoDuplicates.includes(dir)) {
              directorsNoDuplicates.push(dir);
          }
      }
      return directorsNoDuplicates;


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const spielbergMovies = movies.filter(function(movie) {
      return (
          movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
      );
  });
  return spielbergMovies.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) return 0;

  let avg = movies.reduce(function(acc, movie) {
      if (movie.rate === undefined || movie.rate === '') {
          return acc;
      } else return acc + movie.rate;
  }, 0);
  avg = Math.round((avg / movies.length) * 100) / 100;
  return avg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  if (movies.length === 0) return 0;

  const DramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));

  console.log(DramaMovies);

  if (DramaMovies.length === 0) return 0;

  let avgDrama = DramaMovies.reduce(function(acc, mov) {
      if (mov.rate === undefined || mov.rate === '') {
          return acc;
      } else return acc + mov.rate;
  }, 0);

  return Math.round((avgDrama / DramaMovies.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  // deep clone movies array
  let clonedMovies = JSON.parse(JSON.stringify(movies));
  // sort by year
  clonedMovies.sort(function(a, b) {
      if (a.year !== b.year) {
          return a.year - b.year;
      } else return a.title.localeCompare(b.title);
  });

  return clonedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let clonedMovies = JSON.parse(JSON.stringify(movies));

  clonedMovies.sort((a, b) => a.title.localeCompare(b.title));

  let ctr = 0;
  clonedMovies = clonedMovies.map(function(movie) {
      if (ctr < 20) {
          ctr++;
          return movie.title;
      } else return '';
  });
  console.log(clonedMovies);

  clonedMovies = clonedMovies.filter((title) => title !== '');

  console.log(clonedMovies);

  return clonedMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  return movies.map(function(movie) {
      let movCp = JSON.parse(JSON.stringify(movie));
      let h = movCp.duration;
      h = h.split(' ');
      console.log(h);
      let min;
      if (h.length === 1) {
          if (h[0][h[0].length - 1] === 'h') {
              min = parseInt(h) * 60;
          } else {
              min = parseInt(h);
          }
      } else {
          min = parseInt(h[0]) * 60 + parseInt(h[1]);
      }
      movCp.duration = min;
      return movCp;
  });

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
  if (movies.length === 0) return null;

  let yearRateArr = [];

  for (movie of movies) {
      let found = false;
      for (yr of yearRateArr) {
          if (yr.year === movie.year) {
              yr.rate.push(movie.rate);
              found = true;
              break;
          }
      }
      if (!found) {
          yearRateArr.push({
              year: movie.year,
              rate: [movie.rate]
          });
      }
  }

  for (y of yearRateArr) {
      let avgRate = y.rate.reduce(function(acc, r) {
          return acc + r;
      }, 0);
      avgRate = Math.round((avgRate / y.rate.length) * 100) / 100;
      y.rate = avgRate;
  }

  let highestRatedYear = {
      year: 0,
      rate: 0
  };

  yearRateArr.sort(function(a, b) {
      return a.year - b.year;
  });

  for (y of yearRateArr) {
      if (y.rate > highestRatedYear.rate) {
          highestRatedYear = y;
      }
  }

  return `The best year was ${highestRatedYear.year} with an average rate of ${highestRatedYear.rate}`;
