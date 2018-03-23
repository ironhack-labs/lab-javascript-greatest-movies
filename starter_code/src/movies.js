/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArray) {
  
  return moviesArray.map(function (elem) {
    var hours = 0;
    var minutes = 0;
    
    if(typeof(elem.duration) !== 'number'){
      if (elem.duration.indexOf('h') !== -1) {
        hours = parseInt(elem.duration[0], 10) * 60;
      }
      if (elem.duration.indexOf('min') !== -1) {
        minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
      }
      return Object.assign({}, elem, { duration: hours + minutes });
    }
    else{
      return elem;
    }
  });
}
turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  var sumAverages = movies.reduce(function(accum, currentMov){
    return accum + currentMov.rate;
  },0)
    return parseFloat((sumAverages/movies.length).toFixed(2))
}
// Get the average of Drama Movies
function dramaMoviesRate(movies){
  
    var dramas = movies.filter(function(movie){
      return  movie.genre.indexOf('Drama') !== -1

    });
    if (dramas.length > 0){
      return ratesAverage(dramas)
    } else {
      return
    }
} 

// Order by time duration, in growing order
  function orderByDuration(movies){
    var standardized = turnHoursToMinutes(movies)

    if( standardized.length === 1)
    return movies
    if( standardized.length > 1)
    {
      var sorted = standardized.sort(function(a,b){
        return a.duration - b.duration
      })
      var sortedTitles = sorted.sort(function(x,y){
        if(x.duration - y.duration === 0){
          if(x.title < y.title)
            return -1
          if(x.title > y.title)
            return 1
          return 0
        }else{
          if(x.duration < y.duration)
           return -1
          if(x.duration > y.duration)
            return 1
        }
      })
      return sortedTitles
  }
} 
// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
  dramas = movies.filter(function(movie){
   return movie.genre.indexOf('Drama') !== -1
  })

  var wasAny = dramas.filter(function(movie){
    return movie.director.indexOf('Steven Spielberg') != -1
  })

  if( dramas.length === 0){
    return
  }
  if( wasAny.length === 0){
    return "Steven Spielberg directed 0 drama movies!"
  }
  if( wasAny.length === 1){
    return "Steven Spielberg directed 1 drama movies!"
  }

  return "Steven Spielberg directed " + wasAny.length + " drama movies!"
}
// Order by title and print the first 20 titles

  function orderAlphabetically (movies){
    sortedTitles = movies.sort(function(x,y){
        if(x.title < y.title)
          return -1
        if(x.title > y.title)
          return 1
        return 0   
  })
  var list = []
  if(sortedTitles.length > 0){
    if(sortedTitles.length < 20){
      for(i = 0; i < sortedTitles.length ; i++)
      list[i] = sortedTitles[i].title
      return list
    }
    if(sortedTitles.length >= 20){ 
      for(i = 0; i < 20 ; i++){
      list[i] = sortedTitles[i].title
      }
    }
  }
  return list
}
// Best yearly rate average

function bestYearAvg(movies){
  if(movies.length === 0)
  return 
  if(movies.length > 0)
  var averages = ratesAverage(movies)
  
  function explodeArray(array, prop) {
    //Creamos un array que nos guarda nuevo orden
    var newSorting = [];
    //Recorremos el array antiguo
    for (var i=0; i<array.length; i++) {
      //Antigua propiedad es la dimension principal de nuestro nuevo array
      var p = array[i][prop];
      //En el caso que no existiese dicha propiedad en algun objeto, le metemos una clave vacía
      if (!newSorting[p]) { newSorting[p] = []; }
      //En otros casos hacemos push de la dimension principal de nuestro array actual
      newSorting[p].push(array[i]);
    }
    return newSorting;
  }
  
  
  /* Eso también valdría
  function explodeArray(array, property) {
    return array.reduce(function(accumulator, element) {
      if (!accumulator[element[property]]) { 
          accumulator[element[property]] = []; 
      }
      accumulator[element[property]].push(element);
      return accumulator;
    }, {});
  }
  */

  arrayOfYears = explodeArray(movies, 'year')

  function yearsAverage(array){
    return array.forEach(function(year,key, array){
      var yearAverageSum = year.reduce(function(accum, currentMovie){
        return accum + parseFloat(currentMovie.rate);
        },0)
        //aquí hay una chapucería grande
        array[key].average = yearAverageSum/year.length
      })
  }
  yearsAverage(arrayOfYears);
  console.log(arrayOfYears)
  var arrayOfYears = arrayOfYears.sort(function(a,b){
    return b.average - a.average
  })
  if (arrayOfYears.length === 1){
    return "The best year was " +  arrayOfYears[0][0].year + " with an average rate of " + arrayOfYears[0][0].rate
  }else{}
    if(arrayOfYears.indexOf('average') !== -1){
      return "The best year was " +  arrayOfYears[1][0].year + " with an average rate of " + arrayOfYears[1].average
    }else{
      return "The best year was " +  arrayOfYears[0][0].year + " with an average rate of " + arrayOfYears[0].average
    }
  }