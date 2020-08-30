// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  return movies.map((movie) => movie.director);
}

// // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  console.log(
    movies.filter(
      (movie) =>
        movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    )
  );
  let filterArr = movies.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );

  return filterArr.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (arr) => {
  return arr.length === 0
    ? 0
    : Number(
        (
          arr
            .filter((element) => element.rate)
            .reduce((acc, cur) => acc + cur.rate, 0) / arr.length
        ).toFixed(2)
      );
};

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
  return ratesAverage(arr.filter((element) => element.genre.includes('Drama')));
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (arr) => {
  return [...arr].sort((a, b) => {
    return a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year;
  });
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (arr) => {
  return arr
    .map((element) => element.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (arr) => {
  return arr.map((movie) => {
    let newMovie = {};
    newMovie.title = movie.title;
    newMovie.year = movie.year;
    newMovie.director = movie.director;
    newMovie.duration = convertHour(movie.duration);
    newMovie.genre = movie.genre;
    newMovie.rate = movie.rate;
    return newMovie;
  });
};

function convertHour(str) {
  if (typeof str === 'number') return str;
  return str
    .split(' ')
    .map((elem) => {
      if (elem.includes('h')) return elem.split('h')[0] * 60;
      if (elem.includes('min')) return Number(elem.split('min')[0]);
    })
    .reduce((acc, cv) => acc + cv, 0);
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

const bestYearAvg = (arr) => {
  if (arr.length === 0) return null;

  if (arr.length === 1) {
    return `The best year was ${arr[0].year} with an average rate of ${arr[0].rate}`;
  }

  if (arr.length > 1) {
    let obj = {
      year: [],
      rate: []
    };
    arr.map((movie) => {
      let yearRate = [];
      for (let i = 0; i < arr.length; i++) {
        if (movie.year === arr[i].year) yearRate.push(arr[i].rate);
      }

      let average = yearRate.reduce((acc, cv) => acc + cv, 0) / yearRate.length;
      obj.year.push(movie.year);
      obj.rate.push(average);
      return movie;
    });

    let bestRate = Math.max(...obj.rate);
    let indexOfBestRate = obj.rate.indexOf(bestRate);

    let bestYears = [];
    obj.rate.map((rating, idx) => {
      if (rating === bestRate) return bestYears.push(obj.year[idx]);
      return;
    });
    return `The best year was ${Math.min(
      ...bestYears
    )} with an average rate of ${obj.rate[indexOfBestRate]}`;
  }
};
