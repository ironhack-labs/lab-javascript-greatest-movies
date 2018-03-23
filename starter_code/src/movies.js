/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

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

function ratesAverage(moviesArray){
  var rates = [];
  for (i = 0; i < moviesArray.length; i++){
    rates.push(parseFloat(moviesArray[i].rate));
  }
  var average = rates.reduce(function(accumulator, current){
    return accumulator + current;
  });
  return parseFloat(((average/rates.length).toFixed(2)));
}

ratesAverage(movies);

// Get the average of Drama Movies

function dramaMoviesRate(moviesArray){
  var dramaRates = [];
  for (i = 0; i < moviesArray.length; i++){
    if (isNaN(moviesArray[i].rate)){
      return NaN;
    } else {
      for (j = 0; j < moviesArray[i].genre.length; j++){
        if(moviesArray[i].genre[j] === 'Drama'){
          dramaRates.push(parseFloat(moviesArray[i].rate))
        } 
      }
    }
  }
  if (dramaRates.length === 0){
    return undefined;
  } else {
    var average = dramaRates.reduce(function(accumulator, current){
      return accumulator + current;
    });
    return parseFloat(((average/dramaRates.length).toFixed(2)));
  }
}

console.log(dramaMoviesRate(movies))

// Order by time duration, in growing order

function orderByDuration(moviesArray){
  var duration = turnHoursToMinutes(moviesArray);
  for(i = 0; i < duration.length; i++){
    duration.sort(function(a, b){
      if (a.duration === b.duration){
        return a.title - b.title
      } else {
        return a.duration - b.duration
      }
    });
  }
  return duration;
}

orderByDuration(movies);

// How many movies did STEVEN SPIELBERG

function howManyMovies(moviesArray){
  if (moviesArray.length > 0){
    var spielbergMovies = 0;
    var filter = moviesArray.filter(function(director){
      return director.director === "Steven Spielberg" && director.genre.indexOf("Drama") >= 0;
    });
      for(i = 0; i < filter.length; i++){
        spielbergMovies++;
      }
      return 'Steven Spielberg directed ' + spielbergMovies + ' drama movies!';
  } else {
    return undefined
  }
}

howManyMovies(movies);

// Order by title and print the first 20 titles

function orderAlphabetically(moviesArray){
  var orderA = moviesArray;
  for(i = 0; i < orderA.length; i++){
    orderA.sort(function(a, b){
        return a.title - b.title
    })
  }
  var twentyFirst = orderA.slice(0,20)
  for (j = 0; j < twentyFirst.length; j++){
    twentyFirst[j] = twentyFirst[j].title
  }
  return twentyFirst;
}

orderAlphabetically(movies);

// Best yearly rate average

function bestYearAvg(){
  function orderByYear(moviesArray){
    for (i = 0; i < moviesArray.length; i++){
      moviesArray[i].year = parseInt(moviesArray[i].year)
    }
    var year = moviesArray;
    for(j = 0; j < year.length; j++){
      year.sort(function(a, b){
        return a.year - b.year
      })
    return year;
    }
  }
  
  orderByYear(movies);
  
  var a = orderByYear(movies);
  
  function bestYearAvg(a){
    var stringYearAvg = [];
    var yearSumRate = 0;
    var yearRate = 0;
    for (i = 0; i < orderByYear(moviesArray) - 1; i++){
      if (orderByYear(moviesArray)[i] === orderByYear(moviesArray)[(i+1)]){
        yearSumRate += orderByYear(moviesArray).rate;
        yearRate++;
      } else {
        stringYearAvg.push(yearSumRate/yearRate)
        yearSumRate = 0;
        yearRate = 0;
        stringYearAvg.push(orderByYear(moviesArray)[i].year)
      }
    }
    return stringYearAvg
  }
}