/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array){
  var result = movies.map(function(elem){
    var split = elem.duration.split(" "); 
    var totalMinutes = parseInt(split[0]) * 60 + parseInt(split[1]);
    return {
      title: elem.title,
      year: elem.year,
      director: elem.director,
      duration: totalMinutes,
      genre: elem.genre,
      rate: elem.rate
    }
  })
  return result;
}

// Get the average of all rates with 2 decimals 

function ratesAverage(array){
  var sumRating = array.reduce(function(a, rating){
    return a + parseFloat(rating.rate);
  }, 0);
  average = sumRating / array.length;
  return average;
}

// Get the average of Drama Movies
function dramaMoviesRate(array){
  var filtered = array.filter(function(elem){
    return elem.genre.includes("Drama");
  })
  var sumAverage = filtered.reduce(function(a, rating){
    return a + Number(rating.rate);
  }, 0);
  if (sumAverage === 0){
    return undefined;
  }
  result = sumAverage / filtered.length;
  return Number(result.toFixed(2));
}

// Order by time duration, in growing order
function orderByDuration(array){
  var minutes = turnHoursToMinutes(array);
  var result = minutes.sort(function(a,b) {
    return a.duration - b.duration;
  });
  return result;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
  if (array.length === 0){
    return undefined;
  }
  var filteredOne = array.filter(function(elem){
    return (elem.genre.includes("Drama"));
  });
  var filteredTwo = filteredOne.filter(function(elem){
    return (elem.director.includes("Steven Spielberg"));
  });
  return "Steven Spielberg directed " + filteredTwo.length + " drama movies!";
}

// Order by title and print the first 20 titles
function orderAlphabetically(array){
  var titleArray = [];
  array.forEach(function(elem){
    titleArray.push(elem.title);
  });
  titleArray.sort();
  if (titleArray.length >= 20){
    titleArray = titleArray.slice(0,20);
  }
  return titleArray;
}

// Best yearly rate average
