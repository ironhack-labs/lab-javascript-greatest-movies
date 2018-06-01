/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies array from hours to minutes 
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function (elem) {
    var hours = 0;
    var minutes = 0;
    if (elem.duration.indexOf('h') !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf('min') !== -1) {
      minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}
turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  var sum = movies.reduce(function(acc,curr) {
   return acc + Number(curr.rate);
  },0);
  var averageRate = Math.round(sum/ movies.length * 100) / 100;
  return averageRate;
}

ratesAverage(movies)



// Get the average rate of all Drama Movies
function dramaMoviesRate(list) {
    var dramaMovies = list.filter( movie => movie.genre.includes('Drama') );
    if (dramaMovies.length === 0) {
      return undefined;
    } else {
      var dramaAvrg = ratesAverage( dramaMovies );
    }
    return Math.round(dramaAvrg * 100) / 100;
   }

  dramaMoviesRate(movies)

// Order by time duration, in growing order
function orderByDuration(duration){
  return duration.sort(function(a, b){
    if(a.duration > b.duration || a.title > b.title){
      return 1;
    }else{
      return -1;
    }
    })
  }

orderByDuration(movies);

// How many movies did STEVEN SPIELBERG
function howManyMovies(list) {
  if (list.length === 0) {
    return undefined;
  } else {
    var spielbergMovies = list.filter( movie => movie.director === "Steven Spielberg" && movie.genre.includes('Drama')).length; 
    return "Steven Spielberg directed " + spielbergMovies + " drama movies!";
   }
   }

// Order by title and print the first 20 titles
function orderAlphabetically(list) {
    return list.map( movie => movie.title).sort( function(a,b) {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    }).splice(0,20);
  }



// Best yearly rate average
function doesYearExist(arr, obj) {
    for (var i = 0; i < arr.length;i++) {
      if (arr[i].year == obj.year) { return arr[i] }
    }
  }
  
  function bestYearAvg(list) {
    if (list.length == 0) {
      return undefined;
    } else {
      var yearsList = [];
      list.map( function( movie ) {
        var yearItem = doesYearExist( yearsList, movie );
        if ( yearItem ) {
                  yearItem.rate += parseFloat( movie.rate );
                  yearItem.moviesCount += 1;
              } else {
                  yearsList.push( {

          year: movie.year,

         rate: parseFloat( movie.rate ),

         moviesCount: 1
          });
        }
      });
      var yearsAvg = yearsList.map( function(obj) {
        return { year: obj.year, average: parseFloat(obj.rate / obj.moviesCount).toFixed(2) };
      });
      var bestYear = yearsAvg.sort(function(a,b) {
        if ( b.average > a.average || ( b.average === a.average && b.year < a.year) ) {
          return 1;
        } else {
          return -1;
        }
      } )[0];
      return 'The best year was ' +  bestYear.year + ' with an average rate of ' + Math.round(bestYear.average * 100) / 100;
    }
  }
