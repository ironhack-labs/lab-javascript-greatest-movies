/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr) {
  var newArray = arr.map(function(element) {
    var newEl = Object.assign({}, element);
    var minutes = newEl.duration.replace('h','').replace(' ', ':').replace('min','');
    var totalHour = minutes.split(':');
    console.log(totalHour);
    if (totalHour.length === 2) {
    var definitiveHour = (60*Number(totalHour[0]) + Number(totalHour[1]));
    } else if (totalHour[0]<10) {
      var definitiveHour = 60 * Number(totalHour[0]);
    } else {
      var definitiveHour = Number(totalHour[0]);
    }
    newEl.duration = definitiveHour;
    return newEl;
  })
  return newArray;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
  var averageRate = arr.reduce(function(acc,element) {
    if (element.rate) {
    return acc + parseFloat(element.rate);
    } else { 
      return acc;
    }
  }, 0)
  var rate = parseFloat(averageRate/arr.length);
  rate = Math.round(rate*100)/100;
  return rate;
}

console.log('The average rate of all the movies is: ', ratesAverage(movies));


// Get the average of Drama Movies
function dramaMoviesRate(arr) {
  var dramaMovies = arr.filter(function (element) {
    for (var i=0;i<element.genre.length;i++) {
        return element.genre[i] === 'Drama';
    }
  })
  if (dramaMovies.length<=0) {
    return undefined;
  } else {
  return ratesAverage(dramaMovies);
  }
}

console.log('The average rate of all the Drama movies is: ', dramaMoviesRate(movies));


// Order by time duration, in growing order
function orderByDuration(arr) {
  var sortedMovies = arr.sort(function (a,b) {
    if (a.duration === b.duration) {
      return a.title>b.title;
    } else if (a.duration>b.duration) {
      return 1;
    } else {
      return -1;
    }
  })
  return sortedMovies;
}


// How many movies did STEVEN SPIELBERG
function howManyMovies(arr) {
  var howManySpielbergMovies = '';
  var dramaMovies = arr.filter(function(element) {
    for (var i=0;i<element.genre.length;i++) {
        return element.genre[i] === 'Drama';
    }
  })
  if (dramaMovies.length<=0) {
    return undefined;
  }
  var spielbergDramaArray = dramaMovies.filter(function(element) {
    return element.director === 'Steven Spielberg';
  })
  if (spielbergDramaArray.length==0) {
    howManySpielbergMovies = 'Steven Spielberg directed 0 drama movies!';
  } else {
    howManySpielbergMovies = "Steven Spielberg directed " + spielbergDramaArray.length + " drama movies!";
  }
  return howManySpielbergMovies;
  }


// Order by title and print the first 20 titles
function orderAlphabetically(arr) {
}

// Best yearly rate average
function bestYearAvg(arr) {

}