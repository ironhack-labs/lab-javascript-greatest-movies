/* eslint no-restricted-globals: 'off' */


// Turn duration of the movies from hours to minutes 
 
function turnHoursToMinutes(){
	let arr=movies.map(function (movies){
		let hours= movies.duration.substring(0,1);
		let minutes = movies.duration.substring(2).replace("min",""); 
		//console.log("hours", hours, " min:",minutes, " total", Number(hours)*60+Number(minutes));
		//movies.splice(3,1,)
		//movie.duration = Number(hours)*60+Number(minutes);
	});
	return arr;
	
}
 

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
