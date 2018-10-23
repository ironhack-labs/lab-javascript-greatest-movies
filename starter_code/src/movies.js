/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
    var totalrate = movies.reduce(function(sum,oneMovie){
        return sum + parseFloat(oneMovie.rate);
    
    },0);
    var averagerate = totalrate/movies.length;
    console.log(averagerate);
    return averagerate
}

ratesAverage(movies);




// Get the average of Drama Movies
  
function dramaMoviesRate(movies){
    

    var dramamovies = movies.filter(function(movie){
       return movie.genre.indexOf("Drama")>= 0
        
    })
    console.log(dramamovies);  
  
  
        var dramaMoviesTotalRate = dramamovies.reduce(function(sum,onedramaMovie){
          return sum + Number(onedramaMovie.rate);
      },0)
      console.log(dramaMoviesTotalRate);
  
      var dramaMovieAveragerate = parseFloat(dramaMoviesTotalRate)/dramamovies.length
      console.log(dramaMovieAveragerate);
      return parseFloat(dramaMovieAveragerate);
  
  }
  
  dramaMoviesRate(movies)


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies (moviesArray){
    if (moviesArray.length===0){
        return undefined;
    }
    var dramamovies = moviesArray.filter(function(movie){
        return movie.genre.indexOf("Drama")>= 0 && movie.director ==="Steven Spielberg"
         
     })
     console.log(dramamovies);  
   
   return "Steven Spielberg directed " + dramamovies.length + " drama movies!"
    
    
}
howManyMovies(movies);


// Order by title and print the first 20 titles
function orderAlphabetically(movieArray) {
    var movieTitles=[];
    movieArray.forEach(function(movie){
      movieTitles.push(movie.title);
    });
    movieTitles.sort(function (movie1, movie2){
        if (movie1<movie2){
            return -1
        }
        else {
            return 1
        }
        
        
    
    });
    return movieTitles.slice(0,20);
  }
  orderAlphabetically(movies)


// Best yearly rate average

