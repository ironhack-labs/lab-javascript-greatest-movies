let testArr = [
  {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "duration": "2h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.3
  },
  {
    "title": "The Godfather",
    "year": 1972,
    "director": "Francis Ford Coppola",
    "duration": "2h 55min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.2
  },
  {
    "title": "The Godfather: Part II",
    "year": 1974,
    "director": "Francis Ford Coppola",
    "duration": "3h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9
  },
  {
    "title": "The Dark Knight",
    "year": 2008,
    "director": "Christopher Nolan",
    "duration": "2h 32min",
    "genre": [
      "Action",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rate": 9
  }];
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

//Make deep copy of array
const copiedMovies = JSON.parse(JSON.stringify(movies));
//Declare function to change format of duration
function changeDuration(movie) {
  if (movie.duration.includes('h') && movie.duration.includes('min')) {
    let time = movie.duration.replace(/[a-z]/gi, "").split(" ");
    movie.duration = Number(time[0] * 60) + Number(time[1]);
  } else if(movie.duration.includes('h')) {
    let time = movie.duration.replace(/[h]/i, "")
    movie.duration = Number(time*60);
  } else {
    movie.duration = Number(movie.duration.replace(/[a-z\s]/gi, ""))
  }
  return movie;
}
//Execute function to change duration
let mappedMovies = copiedMovies.map(movie => changeDuration(movie));
return mappedMovies;
};

turnHoursToMinutes(testArr);

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


