/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
	var sumRate = null;

	array.forEach(movie => {
		var ratenumber = Number(movie.rate);
		sumRate += ratenumber;
	});

	if (isNaN(sumRate) === false){ 
  	return;
	}
  return Math.round(sumRate/array.length*100)/100;
}

// Get the average of Drama Movies

function isDrama(string) {
		if (string === "Drama") {
			return true;
		} else {
			return false;
		}
	}

function containsDrama(array){
	var yesContainsDrama = null;
	array.forEach(element => {
		if (isDrama(element) === true) { 
			yesContainsDrama = true;
		} 
	})
	return yesContainsDrama;
};

function dramaMoviesRate(array) {
	var dramaMovies = array.filter(movie => {
		return containsDrama(movie.genre) === true;
		});
	return ratesAverage(dramaMovies);

}
	
// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
