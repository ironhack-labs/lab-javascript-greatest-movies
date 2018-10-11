
/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array){
  var newarray = array.map(function(element){
      return {
          title: element.title,
          year: element.year,
          director: element.director,
          duration: parseInt(element.duration.substring(0))* 60 + parseInt(element.duration.substring(3,5)),
          genre: element.genre,
          rate: element.rate
      }
  })
  return newarray;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(array){
  var sumRate = array.reduce(function(acc,element){
      if (element.rate === ""){
          element.rate = 0;
      }
      return acc + parseFloat(element.rate);
  },0)
  return parseFloat((sumRate /array.length).toFixed(2))
} 

// Get the average of Drama Movies
function dramaMoviesRate(array){
  var result = array.filter(function(element){
      return element.genre.indexOf("Drama") !== -1
  })
  if(result.length === 0) return undefined;

  return ratesAverage(result)
}

function orderByDuration(movieDataBase){
  var sortedList =  movieDataBase.sort(function(a,b){
    if (a.duration === b.duration){
      if (a.title > b.title){
        return 1
      }
    }
    else {
      return a.duration - b.duration;
    }})
  return sortedList;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
  if(array.length === 0) return undefined;
  var result = array.filter(function(element){
      return element.genre.indexOf("Drama") !== -1
  }).filter(function(element){
      return element.director === "Steven Spielberg"
  })
  return "Steven Spielberg directed "+ result.length + " drama movies!";
}

// Order by title and print the first 20 titles
function orderAlphabetically(array){
  var result = array.map(function(element){
      return element.title;
  }).sort().filter(function(value,index){
      return index < 20;
  })
  return result;
}

// Best yearly rate average
 
/*function bestYearAvg(array) {
  var result = array.filter(function(element) {
    return element.year;
  }).reduce(function(acc, element) {
    if (element.rate === ""){
      element.rate = 0;
    }
    return parseFloat(((acc + parseFloat(element.rate))/array.length).toFixed(2));
    },0)
  }
  }*/
