/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
  var newArray = movies.map(function(e){
    var newDuration = 0;
    var hours = e.duration.split("h");
    if(hours[1]===""){
      newDuration = hours[0] * 60;
      console.log(newDuration)
    } else if(hours.length==1){
      newDuration=hours[0].split("min")
      newDuration = parseInt(newDuration[0])
      console.log(newDuration)
    }else{
    var minutes = hours.join("-");
    
    minutes = minutes.split("min")
    minutes = minutes[0]
    minutes = minutes.split("-")
    console.log(minutes)
     newDuration=(minutes[0] * 60 + parseInt(minutes[1]))
    console.log(e.duration)
    }
    return {title: e.title,
    year: e.year,
    director: e.director,
    duration: newDuration,
    genre: e.genre,
    rate: e.rate
    }
    //return {duration: newDuration}
  })
  return newArray;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  var average = movies.reduce(function(accumulator, e){
    return accumulator +  parseFloat((e.rate)/movies.length);
  }, 0)
  return Math.round(average*100)/100;
}

// Get the average of Drama Movies
function dramaMoviesRate (movies) {
  var dramaArray = movies.filter(function(e) {
    return e.genre.includes('Drama');
  });
  if(dramaArray.length == 0) {
    return
  }
  return ratesAverage(dramaArray);
}

// Order by time duration, in growing order
function orderByDuration(movies) {
  var result = movies.sort(function(a, b){
      if( a.duration - b.duration > 0 ) {
        return 1;
      } else if ( a.duration - b.duration < 0) {
        return -1;
      }
      else {
        return a.title.localeCompare(b.title);
      }
  })
  return result;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  if (movies.length == 0) {
    return
  }
  var films =  movies.filter(function(e){
    return e.genre.includes('Drama');
  }).filter(function(e){
    return e.director === 'Steven Spielberg';
  }).length;
  if (films == 0) {
    return "Steven Spielberg directed 0 drama movies!"
  }
  return 'Steven Spielberg directed ' + films + ' drama movies!'
}

// Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  var films = arr.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  }).map(function(e){
    return e.title;
  })
  return films.slice(0, 20);
}

// Best yearly rate average
function bestYearAvg(arr){
  if(arr.length==0){
    return
  }
  var bestYear = "";
  var bestRate = 0;
  var newArray= [];
  arr.forEach(function(e){
    newArray = arr.filter(function(element){
      return element.year === e.year;
    })
    var rate = ratesAverage(newArray);
    if(rate > bestRate){
      bestRate = rate;
      bestYear = e.year;
    } else if(rate == bestRate){
      bestRate = rate;
      if(parseInt(e.year)<parseInt(bestYear)){
        bestYear = e.year;
      } else{
        bestYear = bestYear;
      }
    }
  })
  return "The best year was " + bestYear + " with an average rate of " + bestRate;
}