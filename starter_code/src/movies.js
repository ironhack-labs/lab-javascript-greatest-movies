var theActualMovies = require("./data.js");

/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {
	
	movies.forEach(function(movie){
		var theDuration = [];

		theDuration[0] = movie.duration.split("h");
		theDuration[1] = movie.duration[1].split("min")

		// plainHours = parseInt(plainHours);
		// plainMinutes = parseInt(plainMinutes);

		// movie.duration = ((plainHours * 60) + plainMinutes);
		
		// console.log("" + movie.duration + "min");
		// movie.duration[0] = plainHours;
		// movie.duration[1] = plainMinutes;

		//return movies.duration;
		//console.log(theDuration);
		return theDuration;
	});
	return movies;
}


turnHoursToMinutes(theActualMovies);


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
