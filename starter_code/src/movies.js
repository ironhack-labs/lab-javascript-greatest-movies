/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
mv = [{
  title: 'The Shawshank Redemption',
  year: '1994',
  director: 'Frank Darabont',
  duration: '1h',
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
},
{
  title: 'Fight Club',
  year: '1999',
  director: 'David Fincher',
  duration: '2h 19min',
  genre: ['Drama'],
  rate: '8.8'
},
{
  title: 'One Flew Over the Cuckoo\'s Nest',
  year: '1975',
  director: 'Milos Forman',
  duration: '2h 13min',
  genre: ['Drama'],
  rate: '8.7'
},
{
  title: 'Requiem for a Dream',
  year: '2000',
  director: 'Darren Aronofsky',
  duration: '1h 42min',
  genre: ['Drama']
},
{
  title: 'Catch Me If You Can',
  year: '2002',
  director: 'Steven Spielberg',
  duration: '2h 21min',
  genre: ['Biography', 'Crime', 'Drama'],
  rate: '8.1'
},
{
  title: 'Pulp Fiction',
  year: '1994',
  director: 'Quentin Tarantino',
  duration: '2h 34min',
  genre: ['Crime', 'Drama'],
  rate: '8.9'
}];

function turnHoursToMinutes(movie) {
  const newMov = movie.map(stats => {
    let arr = stats.duration.toString().split('h');
    if (arr[1]) {
      stats.duration = parseInt(arr[0]) * 60 + parseInt(arr[1]);
    }
    else if (arr[0] && arr[1] === '') {
      stats.duration = parseInt(arr[0]) * 60;
    }
    else {
      stats.duration = parseInt(arr[0]);
    }
    return {
      title: stats.title,
      year: stats.year,
      direction: stats.director,
      duration: stats.duration,
      genre: stats.genre,
      rate: stats.rate
    }
  });
  return newMov;
}
turnHoursToMinutes(mv);

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  let totalRate = movies.reduce((total, mvs) => parseFloat(total) + parseFloat(mvs.rate), 0);
  return totalRate / movies.length;
}
ratesAverage(mv);
// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(element => element.genre[0] === 'Drama');
  if (dramaMovies.length === 0) {
    return;
  }
  let totalRate = dramaMovies.reduce((total, mvs) => {
    if (mvs.hasOwnProperty('rate') && mvs.rate !== '') {
      return parseFloat(total) + parseFloat(mvs.rate)
    } else {
      return parseFloat(total) + 0;
    }
  }, 0);
  let totalAvg = totalRate / dramaMovies.length;
  return parseFloat(totalAvg.toFixed(2));
}
dramaMoviesRate(mv);

// Order by time duration, in growing order
function orderByDuration(movies) {
  let truth = false;
  const timedMovies = turnHoursToMinutes(movies);
  timedMovies.sort((a, b) => {
    if (a.duration === b.duration) {
      truth = true;
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }

    } else if (a.duration < b.duration) {
      return -1;
    } else {
      return 1;
    }
  });
  console.log(timedMovies);

  const result = timedMovies.map(element => {
    if(truth){
      return {
        title: element.title,
        duration: element.duration
      }
    }
    return {
      duration: element.duration
    }
  })
  return result
}
orderByDuration(mv);

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  if (movies.length === 0) {
    return;
  }
  let dramaMovies = movies.filter(element => element.genre.includes('Drama') && element.director === 'Steven Spielberg');
  return `Steven Spielberg directed ${dramaMovies.length} drama movies!`;
}
howManyMovies(mv);

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let moviesSorted = movies.sort((a, b) => {
    if (a.title < b.title)
      return -1
    if (a.title > b.title)
      return 1
    return 0
  })
  while (moviesSorted.length > 20) { moviesSorted.pop() }
  return moviesSorted.map(elements => elements.title.toString());
}

orderAlphabetically(mv);

// Best yearly rate average
function bestYearAvg(movies) {
  if (movies.length === 0) {
    return;
  }
  const yearsArr = movies.map(element => element.year.toString());
  let bestSum = 0;
  let bestYear;
  for (let j = 0; j < movies.length; j++) {
    let sum = 0;
    let counter = 0;
    for (let i = 0; i < movies.length; i++) {
      if (movies[j].year.toString() === yearsArr[i]) {
        counter++;
        sum += parseFloat(movies[i].rate);
      }
    }
    if (bestSum === sum / counter && parseInt(bestYear) > parseInt(movies[j].year)) {
      bestYear = movies[j].year;
    }
    if (bestSum < sum / counter) {
      bestSum = sum / counter;
      bestYear = movies[j].year.toString();
    }
  }
  return `The best year was ${bestYear} with an average rate of ${bestSum}`;
}
bestYearAvg(mv);
