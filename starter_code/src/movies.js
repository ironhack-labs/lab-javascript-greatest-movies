/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(movies){

    var ratesAverage = movies.reduce(function (sum, item) {
        return sum + item.rate
    },0);
    return ratesAverage/ movies.length;
}


// Get the average of Drama Movies

function dramaMoviesRate (movies) {
  var dramaMovies = movies.filter(function(movie) {
    return movie.genre.find(function(singleGenre){
      return singleGenre === 'Drama'
    })
	})
	
	return  Math.round(ratesAverage(dramaMovies)*100) /100

}




// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
