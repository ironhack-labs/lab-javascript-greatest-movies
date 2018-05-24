/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arrayMovies) {

  return arrayMovies.map(function (element) {
    var hours = 0,
      minutes = 0,
      movie = [];

    if (element.duration == '') {
      hours = 0;
      minutes = 0;
    } else if (element.duration.indexOf('min') < 0) {
      hours = element.duration.slice(0, element.duration.indexOf('h'));
      minutes = 0;
    } else if (element.duration.indexOf('h') < 0) {
      hours = 0;
      minutes = element.duration.slice(0, element.duration.indexOf('min'));
    } else {
      hours = element.duration.slice(0, element.duration.indexOf('h'));
      minutes = element.duration.slice(element.duration.indexOf('h') + 2, element.duration.indexOf('min'));
    }
    movie = {
      "title": element.title,
      "year": element.year,
      "director": element.director,
      "duration": (parseInt(hours) * 60 + parseInt(minutes)),
      "genre": element.genre,
      "rate": element.rate
    };
    return movie;
  });
}

// Get the average of all rates with 2 decimals 
function ratesAverage(arrayMovies) {
  if (arrayMovies.length > 0) {
    return Number((arrayMovies.reduce(function (accumulated, element) {
      if (!element.rate>0) {element.rate=0.00;}
      return accumulated += parseFloat(element.rate);
    }, 0) / arrayMovies.length).toFixed(2));
  } else return undefined;
}

// Get the average of Drama Movies
function dramaMoviesRate(arrayMovies) {
  var moviesDrama = [];

  moviesDrama = arrayMovies.filter(function (element) {
    return element.genre[0]==='Drama' ;//&& element.rate>0;
  });
  return ratesAverage(moviesDrama);
}

// Order by time duration, in growing order
function orderByDuration(arrayMovies) {

  return arrayMovies.sort(function (elementA, elementB) {
    if (elementA.duration > elementB.duration) {
      return 1;
    } else if (elementA.duration < elementB.duration) {
      return -1;
    } else if (elementA.duration === elementB.duration) {
      if (elementA.title > elementB.title) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return 0;
    }
  });
  return arrayMovies;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(arrayMovies) {
  var movies = [];
  if (arrayMovies.length > 0) {
    movies = arrayMovies.filter(function (element) {
      return element.genre.indexOf('Drama') > -1 && element.director === 'Steven Spielberg';
    });
    return ('Steven Spielberg directed ' + movies.length + ' drama movies!');
  } else return undefined;
}

// Order by title and print the first 20 titles
function orderAlphabetically(arrayMovies) {
  var orderedMovies = [];
  var iterator = 0;
  var lengthOfArray = 0;
  if (arrayMovies.length > -1) {
    arrayMovies.sort(function (elementA, elementB) {
      if (elementA.title > elementB.title) {
        return 1;
      } else if (elementA.title < elementB.title) {
        return -1;
      } else {
        return 0;
      }
    });

    lengthOfArray = (arrayMovies.length < 20 ? arrayMovies.length : 20);

    for (var i = 0; i < lengthOfArray; i++) {
      orderedMovies.push(arrayMovies[i].title);
    }
    return orderedMovies;
  } else {
    return undefined;
  }
}

// Best yearly rate average
function bestYearAvg(arrayMovies) {
  var rate=0.0, avg=0.0;
  var arrayOfYears=[]; 

  if (arrayMovies.length>0){
    
    arrayMovies.forEach(function(element, index, array) {
      var counter=0;
      var actualYear=element.year;

      console.log(arrayOfYears.indexOf(actualYear));
      if(arrayOfYears.findIndex(function(element){return element.year===actualYear})===-1){
        rate=array.reduce(function (accumulator, iterator){
          if(iterator.year===actualYear){
            counter++;
            return accumulator += parseFloat(iterator.rate);
          }else{         
            return accumulator;
          }
        }, 0);
        console.log(rate+'/'+counter+'='+rate/counter);
        arrayOfYears.push([{year:element.year, avg:(rate/counter)}]);
      }
    });
    console.log(arrayOfYears);
    arrayOfYears.sort(function (elementA, elementB) {
      if (elementA.avg > elementB.avg) {
        return 1;
      } else if (elementA.avg < elementB.avg) {
        return -1;
      } else {
        return 0;
      }
    }); 
    return ('The best year was '+ arrayOfYears[0].year + ' with an average rate of ' + arrayOfYears[0].avg);
  }  else{
    return undefined;
  } 
}


