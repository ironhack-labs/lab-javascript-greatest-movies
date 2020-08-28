const testArr = [
  {
    title: "Paths of Glory",
    year: 1957,
    director: "Stanley Kubrick",
    duration: "1h 28min",
    genre: ["Drama", "War"],
    rate: 8.4,
  },
  {
    title: "Paths of Glory",
    year: 1957,
    director: "Stanley Kubrick",
    duration: "1h 28min",
    genre: ["Drama", "War"],
    rate: 8.4,
  },
  {
    title: "Django Unchained",
    year: 2012,
    director: "Quentin Tarantino",
    duration: "5h 41min",
    genre: ["Western"],
    rate: 8.4,
  },
  {
    title: "Django Unchained",
    year: 2012,
    director: "Quentin Tarantino",
    duration: "2h 45min",
    genre: ["Western"],
    rate: 8.4,
  },
];

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  const directors = movies.map((movie) => movie.director);
  return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function cleanDirectors(directors) {
  const directorsNames = getAllDirectors(directors);

  const cleanedDirectors = directorsNames.filter(
    (a, b) => directorsNames.indexOf(a) === b
  );
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDramas = movies.filter(
    (movie) =>
      movie.director == "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return spielbergDramas.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (!movies.length) return 0;
  const allRatings = [];
  const getRates = movies.forEach((movie) => {
    if (typeof movie.rate == "number") {
      allRatings.push(movie.rate);
    } else {
      allRatings.push(0);
    }
  });

  const avgRates =
    allRatings.reduce((acc, val) => acc + val) / allRatings.length;
  return Number(avgRates.toFixed(2));
}

ratesAverage(testArr);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));
  const dramaMoviesRate = ratesAverage(dramaMovies);
  return dramaMoviesRate;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const copiedMovies = [...movies];
  const sortedMovies = copiedMovies.sort(
    (a, b) => a.year - b.year || a.title.localeCompare(b.title)
  );
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const copiedMovies = [...movies];
  const sortedMovies = copiedMovies.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const firstTwenty = sortedMovies.slice(0, 20);
  let array = [];
  firstTwenty.forEach((movie) => array.push(movie.title));
  return array;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  const copiedMovies = [...movies];

  /*
  const moviesArray = copiedMovies.map((movie) => {
    let timeArray = movie.duration.replace(/[a-z]/gi, "").split(" ");
    let runningTime = Number(timeArray[0] * 60) + Number(timeArray[1]);
    movie.duration = runningTime;
    console.log(copiedMovies);
    return movie;
  });
  // console.log(moviesArray);
  */
}

function splitDuration (movie){
    let timeArray = movie.duration.replace(/[a-z]/gi, "").split(" ");
}
function convertTime (movie){
    let runningTime = Number(timeArray[0] * 60) + Number(timeArray[1]);
}

turnHoursToMinutes(testArr);

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
