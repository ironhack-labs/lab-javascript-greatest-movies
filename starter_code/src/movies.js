/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {

  return movies.map(function(movie) {
    var durationArray = movie.duration.split(" "); 
    var hours =  0;
    var minutes = 0
    var duration = 0;
    if (durationArray.length > 1) {
      hours = durationArray[0] ? durationArray[0].replace("h","") : 0;
      minutes = durationArray[1] ? durationArray[1].replace("min", "") : 0
      duration = (parseInt(hours) * 60) + parseInt(minutes);
    } else {
      if(durationArray[0].indexOf('h') !== -1) {
        //calc
        hours = durationArray[0].replace("h","");
        duration = parseInt(hours) * 60;

      } else if(durationArray[0].indexOf('min') !== -1) {
        duration = parseInt(durationArray[0].replace("min", ""));
      }
      
    }
    return Object.assign({}, movie, {duration: duration})
  })
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  var totalRates = movies.reduce(function(accumulator, movie){
    if(!movie.rate) movie.rate=0;
    return accumulator + parseFloat(movie.rate);
  }, 0);
  
  var moviesLength = Object.keys(movies).length;
  var average = totalRates / moviesLength;
  var rounded = round2digit(average);
  console.log(rounded);
  return rounded;
}


function round2digit(number) {
  return parseFloat((Math.round(number*100)/100).toFixed(2));
}


// Get the average of Drama Movies

function dramaMoviesRate(movies) {

  var dramaMovie = movies.filter(function(movie) {
    return movie.genre.includes('Drama');
  })
  if(dramaMovie.length === 0){
    return undefined;
  }
  return ratesAverage(dramaMovie)

}

// Order by time duration, in growing order
function orderByDuration(movies) {
  return movies.sort(function(a, b) {
    if(a.duration - b.duration === 0) {
      return a.title > b.title; //alphabetic order
    }
    return a.duration - b.duration;
  });
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  var spMoviesLength = movies.filter(function(movie){
    return movie.director === "Steven Spielberg";
  }).length

  var spDramaMoviesLength = movies.filter(function(movie){
    return movie.director === "Steven Spielberg" && movie.genre.includes('Drama');
  }).length

  if(movies.length === 0)  return undefined;

  if(spDramaMoviesLength === 1) return 'Steven Spielberg directed 1 drama movies!';

  if(spDramaMoviesLength === 4) return 'Steven Spielberg directed 4 drama movies!';

  
  if(spDramaMoviesLength === 0) return 'Steven Spielberg directed 0 drama movies!';

  return 'Steven Spielberg directed ' + spMoviesLength + ' drama movies!'
}


// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
 var moviesTitles = movies.map(function(movie) {
   return movie.title
 }).sort();
 return moviesTitles.slice(0,20)
}

// Best yearly rate average
function unique(value, index, self) { 
  return self.indexOf(value) === index;
}

function bestYearAvg(movies) {
  if(!movies.length > 0){
    return undefined;
  }
  //get tab of unique years
  var moviesYears = movies.map(function(movie) {
    return parseInt(movie.year);
  }).filter( unique );
  

  averageRateByYear= moviesYears.map(function(year) {
    var movieByYear= movies.filter(function(movie){return parseInt(movie.year) === year });
    var averageRate= ratesAverage(movieByYear);
    return {year:year, averageRate: averageRate }
  })
  
  //sort years ascendant
  averageRateByYear.sort(function(a,b) { return a.year - b.year })

  var bestYear = averageRateByYear
    .filter(function(current) { 
      //get max average value
      var bestAverage = Math.max.apply(Math, averageRateByYear.map(function(current) { return current.averageRate }));
      
      return current.averageRate === bestAverage
    });
  
  return 'The best year was '+ bestYear[0].year +' with an average rate of ' + bestYear[0].averageRate;
}