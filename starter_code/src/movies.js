/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {
    return movies.map(function(movie) {
      var nbOfHours = 0
      var nbOfMinutes = 0
      var splitValues = movie.duration.split(" ")
      if (splitValues.length === 2) {
        nbOfHours = parseInt(splitValues[0])
        nbOfMinutes = parseInt(splitValues[1])
      }
      else if (splitValues[0].includes('min')) {
        nbOfMinutes = parseInt(splitValues[0])
      }
      else if (splitValues[0].includes('h')) {
        nbOfHours = parseInt(splitValues[0])
      }
      return {
        title: movie.title,
        year: movie.year,
        director: movie.director,
        duration: nbOfHours*60 + nbOfMinutes,
        genre: movie.genre,
        rate: movie.rate,
      }
    })
  }

 // Get the average of all rates with 2 decimals 
function ratesAverage (movies) {
    average = (((movies
        .map(x => parseFloat(x.rate)))
        .reduce((total, num) => total + num))/movies.length)
        .toFixed(2);
    return parseFloat(average);
}
  
console.log(ratesAverage(movies));

//   Get the average of Drama Movies
function dramaMoviesRate (movies) {
 return parseFloat((((movies
    .filter(x => x.genre
        .includes('Drama'))
        .map(x => parseFloat(x.rate)))
        .reduce((total, num) => total + num))/movies.length)
        .toFixed(2));
}

console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order
function orderByDuration (movies){
    let order = movies.sort(function(a,b){
        if (a.duration > b.duration){return 1}
        if (a.duration < b.duration){return -1}
        if (a.title > b.title){return 1};
        return -1
    });
    return order;
  }
  console.log(orderByDuration(movies));

// How many movies did STEVEN SPIELBERG
function howManyMovies (movies){
    if (movies.length === 0) return undefined;
      var spielbergMovies = movies.filter(function(el){
        return el.genre.includes('Drama') && el.director.includes('Steven Spielberg')
      });
      return `Steven Spielberg directed ${spielbergMovies.length} drama movies!`
    }
console.log(howManyMovies(movies));

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    movies.sort(function (a, b) {
      return a.title < b.title ? -1 : 1;
    });
    var top20Movies = [];
    var limit = 20;
    if (movies.length < 20) {
      limit = movies.length;
    }
    for (var i = 0; i < limit; i++) {
      top20Movies.push(movies[i].title);
    }
    return top20Movies;
  }
  
  console.log(orderAlphabetically(movies));


// Best yearly rate average

function bestYearAvg(){
    
}

