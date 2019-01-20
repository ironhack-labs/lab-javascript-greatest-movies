var movies = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  },
  {
    title: 'The Godfather',
    year: '1972',
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    rate: '9.2'
  }];

function turnHoursToMinutes(arr) {
  let arrMovies = movies[0].rate;
}

function ratesAverage(array) {
  let sumRate = array.reduce(function (sum, movie) {

    return sum += parseFloat(movie.rate);
  }, 0);

  let averageRate = sumRate / array.length;
  return averageRate;
}

function dramaMoviesRate(array) {
  let movieDrama = array.filter(function (movie) {

    return movie.genre.includes('Drama');
  });

  let sumDram = movieDrama.reduce(function (sum, movie) {
    return sum += movie.rate;
  });

  let averageDrama = sumDram / movieDrama.length;
  return averageDrama;
}

function howManyMovies(array) {

  let movies = array.filter(function (movies) {
    return (movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama'));
  });
}

function orderAlphabetically(array) {

  let organizaMovies = array.sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    else {
      return 0;
    }
  });

  let titles = [];
  let bestFilms = organizaMovies.slice(0, 20);

  titles.forEach(function (movie) {
    bestFilms.push(movie.title);
  });

  return titles;
}