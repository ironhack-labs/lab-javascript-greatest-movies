var movies = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  },
  {
    title: 'The Godfather',
    year: '1972',
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    rate: '9.2'
  },
  {
    title: 'The Godfather: Part II',
    year: '1974',
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.0'
  },
  {
    title: 'The Dark Knight',
    year: '2008',
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    rate: '9.0'
  },
  {
    title: '12 Angry Men',
    year: '1957',
    director: 'Sidney Lumet',
    duration: '1h 36min',
    genre: ['Crime', 'Drama'],
    rate: '8.9'
  },
  {
    title: 'Schindler\'s List',
    year: '1993',
    director: 'Steven Spielberg',
    duration: '3h 15min',
    genre: ['Biography', 'Drama', 'History'],
    rate: '8.9'
  },
  {
    title: 'Pulp Fiction',
    year: '1994',
    director: 'Quentin Tarantino',
    duration: '2h 34min',
    genre: ['Crime', 'Drama'],
    rate: '8.9'
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: '2003',
    director: 'Peter Jackson',
    duration: '3h 21min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    rate: '8.9'
  },
  {
    title: 'Il buono, il brutto, il cattivo',
    year: '1966',
    director: 'Sergio Leone',
    duration: '3h 2min',
    genre: ['Western'],
    rate: '8.9'
  },
  {
    title: 'Fight Club',
    year: '1999',
    director: 'David Fincher',
    duration: '2h 19min',
    genre: ['Drama'],
    rate: '8.8'
  }
]

// convert hours to minutes
// "2h" or "4h"
function convertHoursToMinutes(hours){
  var minutesFromHours = hours.split("h");
  return minutesFromHours[0]*60;
}
convertHoursToMinutes("2h")

// "44min"
function covertMinutesToMinutes(minutes){
  var minutesFromMinutes = minutes.split("min");
  // console.log(typeof(minutesFromMinutes[0]))
  return Number(minutesFromMinutes[0]);
}
covertMinutesToMinutes("44min")

// duration: '3h 21min'
function doTheMath(duration){
  var timePieces = duration.split(" ");

  var minutes = timePieces.reduce(function(sum, piece){
    if(piece.includes("h")){
      // add sum + 3*60
      return sum + convertHoursToMinutes(piece)
    }
    return sum + covertMinutesToMinutes(piece)
  }, 0);
  return minutes;
}
doTheMath("3h 21min")

function turnHoursToMinutes(movies){
  var newMoviesArray = movies.map(function(movie){
    var newMovie = {};
    newMovie.title = movie.title;
    newMovie.year = movie.year;
    newMovie.director = movie.director;
    newMovie.duration = doTheMath(movie.duration);
    newMovie.genre = movie.genre;
    newMovie.rate = movie.rate;
    return newMovie;
  })
  return newMoviesArray;
}
turnHoursToMinutes(movies)
// =========================================

// Get the average of all rates with 2 decimals
function ratesAverage(movies){
    var theSum = movies.reduce(function(sum,movie){
        return sum + Number(movie.rate);
    },0);
    var rateAvg = theSum/movies.length;
    //return rateAvg.toFixed(2);
    return Math.floor(rateAvg*100)/100
}

ratesAverage(movies)


//get the average of drama movies

function dramasOnly(movies){
    var dramas = movies.filter(function(movie){
        return movie.genre.includes("Drama");
    })
    return dramas
}

dramasOnly(movies);

function dramaMoviesRate(movie){
    var dramas = dramasOnly(movies);
    if(dramas.length === 0){
        return;
    }
    var dramaRate =ratesAverage(dramas);
    return dramaRate;
}


dramaMoviesRate(movies)
//=========================================================
 //Order by time duration, in growing order

 function orderByDuration(movies){
     movies.sort(function(movieA, movieB){
         //var result =movieA.duration.localeCompare(movieB.duration);  solution not passing test
         var result =movieA.duration - movieB.duration;
         if(result !== 0){
             return result;
         }
         if(movieAtitle < movieB.title){
             return -1;
         }
         if(movieA.title > movieB.title){
             return 1;
         }
         return 0;
     })
     return movies;
 }
orderByDuration(movies)


//How many drama movies with Steven Spielberg

function howManyMovies(movies){
    //get all steves movies
    var stevesMovies = movies.filter(function(movie){
        return movie.director === "Steven Spielberg";
    })
    return stevesMovies
}
