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
  
  var totalSum = moviesArray.reduce(function(accumulator, currentMovie){
    return accumulator+currentMovie.rate;
  },0);
  return  parseFloat(totalSum / moviesArray.length);
}

// Get the average of Drama Movies
function dramaMoviesRate(moviesArray){

    var movies = moviesArray;
  	var dramaRates = [];
  	var totalSum = 0;
  	var dramaMovieCount = 0
  	var average = 0;
  	
  	movies.forEach(function(element)	{
  		
  		for (let i = 0; i < element.genre.length; i++){
  			if (element.genre[i] === 'Drama' && isNaN(parseFloat(element.rate)) !== true){
  				
  				dramaMovieCount++;
  				totalSum += parseFloat(element.rate);
  				console.log(element.title + ' ' + element.rate);

        }
        if (element.genre[i] === 'Drama' && isNaN(parseFloat(element.rate)) === true){
           dramaMovieCount++;
        }
   		}
   	});
   	average = totalSum/dramaMovieCount;
    average = (Math.round(average*100)) / 100;
    
    if (dramaMovieCount == 0){ return undefined;}
    else{ return average;}

}

// Order by time duration, in growing order


		
  function orderByDuration(moviesArray) {
    moviesArray.sort(function (a, b) {
      if (a.duration === b.duration) {
        if (a.title > b.title) {
          return 1;
        }
      }
      return a.duration - b.duration;
    });
    return moviesArray;
  }


// How many movies did STEVEN SPIELBERG
function howManyMovies(moviesArray){
  if (moviesArray.length == 0){
    return undefined;
  }
  movieList = [];
  spielbergMovies = moviesArray.filter(function(movie){
    return movie.director === 'Steven Spielberg';
  });
  

	spielbergMovies.forEach(function(element)	{		
		for (let i = 0; i < element.genre.length; i++){
  			if (element.genre[i] === 'Drama'){
  				movieList.push(element);
  			}
		}
  
	});
 
    return "Steven Spielberg directed "+ movieList.length + " drama movies!";
  
  


}

// Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  
  // Array ordenador
  var newArray = [];
    
  // Sorting por título
  moviesArray.sort(function (a,b){
    	if (a.title > b.title){
    		return 1;
      }
      if (a.title < b.title){
    		return -1;
    	}
    });
    
    // Si array inferior a 20, pasar todos.
    if (moviesArray.length <= 19){
      for (let i =  0; i < moviesArray.length;  i++){
        newArray[i] = moviesArray[i].title;
      }
    }
    // SI array inferior a 20, pasar todos.
    else {
      for (let i =  0; i < 20;  i++){
        newArray[i] = moviesArray[i].title;
      }
    }
    
    return newArray;

}


// Best yearly rate average
