/* eslint no-restricted-globals: 'off' */
/* let turnHoursToMinutes = [...movies] */
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
    },
    {
      title: 'The Godfather: Part II',
      year: '1974',
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      rate: '9.0'
    }];

// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesList) {
  let newList = [];

  moviesList.forEach(movie => {
    let newMovie = {
      ...movie
    };

    let duration = movie.duration.split(" ");
    //Turns into number and reset it.
    newMovie.duration = 0;

    if (duration === null) {
      minutes = 0;
    }
    //If it only has hours
    else if (duration[0].includes("h") && duration.length === 1) {
      newMovie.duration += parseInt(duration[0]) * 60;
    }
    //More than 1 hour and also has minutes
    else if (duration.length > 1) {
      newMovie.duration += parseInt(duration[0]) * 60 + parseInt(duration[1]);
    }
    //Less than 1 hour and only has minutes
    else {
      newMovie.duration += parseInt(duration[0]);
    }

    newList.push(newMovie);
  });
  return newList;
}

// var minutes = movies.map(function(movie) {
//   var duration2 = min.duration /2;
//   var finalGrade  = elem.finalExam*0.6 + projectsAvg*0.4;
//   return {
//     name: elem.name,
//     finalGrade: Math.round(finalGrade)
//   }
// })

// Get the average of all rates with 2 decimals
function ratesAverage(movie) {
    let Sumaverage = movie.reduce(function (acc, crr) {
        return acc + parseFloat((crr.rate), 10)
    }, 0)
    let average = (Sumaverage / movie.length);
    return average
}

// 21
// Get the average of Drama Movies

function dramaMoviesRate (genero) {
    if (movies[0].genre === 'Drama'){
    let genDrama = genero.reduce(function (acum, obj) {
        return acum + parseFloat((acum.rate), 10)
    }, 0)
}
    let drama = (genDrama / movie.);
    return average
}

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
