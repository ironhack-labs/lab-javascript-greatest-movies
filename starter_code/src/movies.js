/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
// var movies = [
//   {
//     title: 'The Shawshank Redemption',
//     year: '1994',
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     rate: '9.3'
//   },
//   {
//     title: 'The Godfather',
//     year: '1972',
//     director: 'Francis Ford Coppola',
//     duration: '2h 55min',
//     genre: ['Crime', 'Drama'],
//     rate: '9.2'
//   },
//   {
//     title: 'The Godfather: Part II',
//     year: '1974',
//     director: 'Francis Ford Coppola',
//     duration: '3h 22min',
//     genre: ['Crime', 'Drama'],
//     rate: '9.0'
//   }];

  // var movies = [{ title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }];

function turnHoursToMinutes(arr) {
    
      var finalArr = [];
      var newArr = arr.map(function(movie){
        var timeString = movie.duration;
        var timeStringArray = timeString.split(" ");
        var hours;
        var minutes;
        if(timeStringArray.length === 1) {
          if(timeStringArray[0].indexOf('h') > 0) {
            minutes = 0;
            hours = parseInt(timeStringArray[0][0]);
          } else {
            hours = 0;
            minutes = parseInt(timeStringArray[0].split("m")[0]);
          }
        } else {
          hours = parseInt(timeStringArray[0][0]);
          minutes = parseInt(timeStringArray[1].split("m")[0]);
        }     
        var newDuration = hours * 60 + minutes;
        return newDuration;
      });  
      
      arr.forEach(function(element, index) {
        var newElement = Object.assign({}, element);
        newElement.duration = newArr[index];
        finalArr.push(newElement);
      });;
      return finalArr;
}


// Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
  var sum = 0;
  arr.forEach(function(movie) {
    sum += movie.rate;
  });
  return parseFloat(sum / arr.length);
}

// Get the average of Drama Movies
function dramaMoviesRate(arr) {
  var sum = 0;
  var count = 0;
  if (arr.length === 1) {
    return parseFloat(arr[0].rate);
  } else if (!lookForDramaMovie(arr)) {
    return undefined;
  } else {
    arr.forEach(function(movie) {
      if(movie.rate === '') {
        sum += 0; 
        count++;
      } else if (movie.genre.indexOf('Drama') >= 0) { 
        sum += parseFloat(movie.rate);
        count++;  
      } 
    });
  }
    return parseFloat((sum / count).toFixed(2));
}

function lookForDramaMovie(arr) {
  var hasDramaMovie = false;
  arr.forEach(function(movie) {
    if (movie.genre.indexOf('Drama') >= 0 ) {
      hasDramaMovie = true;
    }
  });
  return hasDramaMovie;
}


// Order by time duration, in growing order
function orderByDuration(arr) {

  return arr.sort(function(a,b) {
    if (a.duration < b.duration) {
      return -1;
    }
    if (a.duration > b.duration) {
      return 1;
    }
    // names must be equal
    if (a.duration === b.duration) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
    }
    return 0;
  });
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr) {
  if (arr.length <= 0) {
    return undefined;
  }
  var filteredArray = arr.filter(function(movie) {
    return movie.director === 'Steven Spielberg' 
    && movie.genre.indexOf('Drama') >= 0;
  });
  // console.log(filteredArray);

  if (filteredArray.length <= 0) {
    return 'Steven Spielberg directed 0 drama movies!';
  } else if (filteredArray.length > 0) {
    return `Steven Spielberg directed ${filteredArray.length} drama movies!`;
  }
}

// Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  var alphabeticalArray = arr.sort(function(a,b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  var sortedArray = alphabeticalArray.map(function(movie) {
    return movie.title;
  });
  console.log(sortedArray.length);
  if (sortedArray.length > 20) {
    sortedArray = sortedArray.filter(function(movie) {
      return sortedArray.indexOf(movie) < 20;
    });
    return sortedArray;
  } else {
    return sortedArray;
  }
}

function orderByYear(arr) {
  var orderedByYear = arr.sort(function(a,b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    return 0;
  });
  return orderedByYear;
}

// Best yearly rate average
function bestYearAvg(arr) {
  
  var yearAverages = [];
  var orderedByYear = orderByYear(arr);

  orderedByYear.forEach(function(movie) {
    var lastIndex = orderedByYear.lastIndexOf(movie.year);
    // console.log(lastIndex);
  });
  arr.forEach(function(movie) {
    var filteredByYear = orderedByYear.filter(function(movie, i, arr) {
      return movie.year === arr[0].year;
    });
    var rate = ratesAverage(filteredByYear);
    yearAverages.push(rate);
  });
  
  var sortedArray = yearAverages.sort(function(a,b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  console.log(sortedArray);
  // if (sortedArray.length <= 0) {
  //   return undefined;
  // } else {
  //   var winner = sortedArray[sortedArray.length - 1];
  //   return `The best year was ${winner.year} with an average rate of ${winner.rate}`;
  // }

}