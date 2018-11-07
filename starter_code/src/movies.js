/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(movies){
  return movies.map(function(movie){
    var newEl = Object.assign({}, movie);
    var durationArr = newEl.duration.split(' ');

    if (durationArr.length === 2){
      var minutes = parseFloat(durationArr[0]) * 60;
      var minutes2 = parseFloat(durationArr[1]);
      newEl.duration = minutes + minutes2;
    } else if (durationArr.length === 1 && durationArr[0].indexOf('h') > -1){
      newEl.duration = parseFloat(durationArr[0]) * 60;
    } else if (durationArr.length === 1 && durationArr[0].indexOf('min') > -1){
      newEl.duration = parseFloat(durationArr[0]);
    }
    return newEl;
  });
}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies){
  var average = movies.reduce(function(acc, num){
    return acc + Number(num.rate);
  }, 0);

  var finalNumber = Number(average.toFixed(2));

  return finalNumber / movies.length;
}

// Get the average of Drama Movies

function dramaMoviesRate(movies){
  var dramaMovies = movies.filter(function(movie){
    return movie.genre.indexOf('Drama') > -1;
  });

  if (dramaMovies.length === 0){
    return undefined;
  }
  var averageDrama = dramaMovies.reduce(function(acc, num){
    return acc + Number(num.rate);
  }, 0);

  var finalNumberDrama = Number(averageDrama.toFixed(2));


  return Number((finalNumberDrama / dramaMovies.length).toFixed(2));
}

// Order by time duration, in growing order

function orderByDuration(arr){
  var sortedArr = arr.sort(function (a, b) {
    if (a.duration !== b.duration){
      return a.duration - b.duration;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return sortedArr;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(arr){
  if (arr.length === 0){
    return undefined;
  }
  var stevenMovies = arr.filter(function(ele){
    return ele.genre.indexOf('Drama') > -1 && ele.director === 'Steven Spielberg';
  });
  return 'Steven Spielberg directed ' + stevenMovies.length + ' drama movies!';
}

// Order by title and print the first 20 titles
function orderAlphabetically(arr){
  return arr.sort(function(a, b){
    return a.title.localeCompare(b.title);
  })
  .map(function(film) {
    return film.title;
  })
  .slice(0, 20);
}

// Best yearly rate average
