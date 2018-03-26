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
    if (moviesArray[i].rate > 0){
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

console.log("Drama Movies Rate: " + dramaMoviesRate(movies))

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
  var orderA = [];
  for(i = 0; i < moviesArray.length; i++){
    orderA.push(moviesArray[i].title)
  }
  orderA.sort()
  var twentyFirst = orderA.slice(0,20)
  return twentyFirst;
}

orderAlphabetically(movies);

// Best yearly rate average

function bestYearAvg (moviesArray) {
  if (moviesArray.length > 0){
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
    
    var a = orderByYear(moviesArray);
    
    function yearAvg(moviesArray){
      var stringYearAvg = [];
      var yearSumRate;
      var yearRate;
      if (moviesArray.length === 1) {
        yearSumRate = parseFloat(moviesArray[0].rate);
        return yearSumRate;
      } else {
        for (i = 0; i < (moviesArray.length - 1); i++){
          yearSumRate = parseFloat(moviesArray[i].rate);
          yearRate = 1;
          if (moviesArray[i].year === moviesArray[(i+1)].year){
            yearSumRate += parseFloat(moviesArray[i+1].rate);
            yearRate++;
          } else {
            stringYearAvg.push(parseFloat(yearSumRate/yearRate))
            yearRate = 1;
            stringYearAvg.push(moviesArray[i].year)
          }
        }
        return stringYearAvg
      }
    }
    
    var b = yearAvg(moviesArray)

    var orderAvg = [];
    
    for (i = 0; i < b.length; i++) {
      orderAvg.push(b[i]);
      i++
    }
    
    orderAvg.sort().reverse();
    
    var y = b.indexOf(orderAvg[0]);
    
    return 'The best year was ' + b[y+1] + ' with an average rate of ' + orderAvg[0];
  }
}

bestYearAvg(movies)