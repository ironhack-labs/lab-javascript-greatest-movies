/* eslint no-restricted-globals: 'off' */
const getMovieByGenre = (movieArr, genre) => movieArr.filter(movie => movie.genre.includes(genre));

const getMovieByDirector = (movieArr, director) =>
  movieArr.filter(movie => movie.director.toLowerCase() === director.toLowerCase());
// Iteration 1: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = movies => {
  const avgRating = movies.reduce((a, b) => a + Number(b.rate), 0);
  const avgRat = avgRating / movies.length;
  return Number(avgRat.toFixed(2));
};

// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies => {
  const dramaArr = getMovieByGenre(movies, "Drama");
  if (dramaArr.length === 1) return dramaArr[0].rate;
  else if (dramaArr.length === 0) return 0;
  return ratesAverage(dramaArr);
};
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByYear = movies =>
  movies.sort((a, b) => {
    if (a.year === b.year) return a.title > b.title ? 1 : -1;
    return a.year > b.year ? 1 : -1;
  });

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = movies => {
  const spielbergMovies = getMovieByDirector(movies, "Steven Spielberg");
  const dramaBySpielberg = getMovieByGenre(spielbergMovies, "Drama");
  return dramaBySpielberg.length;
};

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = movies =>
  movies
    .sort((a, b) => (a.title > b.title ? 1 : -1))
    .slice(0, 20)
    .map(movie => movie.title);
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies =>
  movies.map(movie => {
    let newHr;
    let newMin;
    const newDuration = movie.duration.split(" ");
    newDuration.forEach(separatedTime => {
      if (separatedTime.includes("h")) newHr = separatedTime.replace("h", "") * 60;
      if (separatedTime.includes("min")) newMin = separatedTime.replace("min", "");
    });
    movie.duration = newHr + Number(newMin);
    console.log(movie.duration);
    return movie;
  });
// BONUS Iteration: Best yearly rate average - Best yearly rate average
