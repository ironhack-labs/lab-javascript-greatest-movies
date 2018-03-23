/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  return array.map(function(elem) {
    var hours = 0;
    var minutes = 0;
    if (elem.duration.indexOf("h") !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf("min") !== -1) {
      minutes = parseInt(
        elem.duration.substring(
          elem.duration.length - 5,
          elem.duration.length - 3
        ),
        10
      );
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}
turnHoursToMinutes(movies);

function orderByDuration (array) {
  array.sort(function (a, b) {
      if (a.duration === b.duration) {
          if (a.title > b.title) {
              return 1;
          }
      }
      return a.duration - b.duration;
  });
  return array;
}
// Get the average of all rates with 2 decimals
function ratesAverage(array) {
  var rate = 0;
  rate = array.reduce(function(accumulator, current) {
    console.log(accumulator, current.rate);
    if(!current.hasOwnProperty('rate')){
      return undefined;
    }
    return accumulator + Number(current.rate);
  }, 0);
  console.log(rate, array.length);
  rate /= array.length;
  return Number(rate.toFixed(2));
}
console.log(ratesAverage(movies));

function dramaMoviesRate(array){
  var flag = false;
  var generoBusqueda = array.filter(function(e){
    if(e.genre.indexOf("Drama") != -1){
      flag = true;
    }
    return e.genre.indexOf("Drama") != -1
    
  });
  if(!flag)  {
    return undefined;
  }
  return ratesAverage(generoBusqueda);
}; 

console.log(dramaMoviesRate(movies));


// How many movies did STEVEN SPIELBERG

function howManyMovies(array) {
  if (array.length == 0) {
    return undefined;
  }
  var dramaList = array.filter(function(drama){
    for (i = 0; i<drama.genre.length;i++){
       if (drama.genre[i] == "Drama") {
        return drama.director == 'Steven Spielberg' 
       }         
    }    
  });

return ("Steven Spielberg directed "+ dramaList.length + " drama movies!");  

}
// Order by title and print the first 20 titles

function orderAlphabetically(array) {
  var moviesOrdered = [];
  array.sort(function(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  for (let i = 0; i < 20 && i < array.length; i++) {
    moviesOrdered.push(array[i].title);
  }
  return moviesOrdered;
}
console.log(orderAlphabetically(movies));

// Best yearly rate average
function bestYearAvg(array) {
  var bestYear = 0;
  var yearAvg = 0;
  var years = [];
  var yearsCount = 0;
  var yearsOrdered = [];
  var year = 0;
  if(array.length == 0) {
    return undefined;
  }
  //function countYears()
  array.sort(function(a, b){
    if(a.year < b.year){
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  for (let i = 0; i < array.length; i++) {
    yearsOrdered.push(array[i]);
  }
  year = yearsOrdered[0];
  yearsOrdered.forEach(e => {
    if(year != e.year){
      yearsCount++;
    }
    years.push(e.year);
  });
  //-------
  /*Quitar las repetidas y terminamos con un array de años unicos.
  Usamos ese array para encontrar la media por año usando un for de reduces con una comparación de valor maximo en bestYear
  */
  uniquifyArray(years);
  years.forEach(element => {
    var rate = array.reduce(function(accumulator, current) {
      if(!current.hasOwnProperty('rate')){
        return undefined;
      }
      if(array.year == element) {
        year = array.year;
        return accumulator + Number(current.rate);
      }
      return 0;
    }, 0);
    rate /= array.length;
    if (rate > bestYear) {
      bestYear = year;
    }
  });
  return "The best year was " + year.year + " with an average rate of " +year.rate;
}

function uniquifyArray(array) {
  var uniqueArray = [];
  var booleano = false;
  var index;
  if(array.length === 0){
    return undefined;
  }else if (array.length === 1){
    return array;
  }
  
    
    for (let x = 0; x <  array.length; x++) {
      if (array.indexOf(array[x],x+1) === -1){
        if (uniqueArray.indexOf(array[x],0) === -1){
          uniqueArray.push(array[x]);
          booleano = true;
        }

      }else{
        if (uniqueArray.indexOf(array[x],0) === -1){
          uniqueArray.push(array[x]);}
          booleano = true;
      }
    
    
  }

  console.log(array);
  console.log(uniqueArray);
  if (booleano){
    return uniqueArray;
  } else {
    return array;
  }
}