// Iteration 1: All directors? - Get the array of all directors.
let getAllDirectors = (movies) => {
	let directors = movies.map((movie) => movie.director);
	return directors;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
let removeDuplicates = (movies) => {
	let directors = getAllDirectors(movies);
	let uniqueDirectors = directors.filter(
		(director, index) => directors.indexOf(director) === index
	);
	return uniqueDirectors;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let howManyMovies = (movies) => {
	let dramaMoviesByStevenSpielberg = movies.filter(
		(movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
	);
	return dramaMoviesByStevenSpielberg.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let ratesAverage = (movies) => {
	if (!movies.length) return 0;
	let sumOfRatings = movies.reduce((accumulator, current) => {
		if (!current.rate) current.rate = 0;
		return accumulator + current.rate;}, 0);
	let avgRatings = sumOfRatings / movies.length;
	avgRatings = Number(avgRatings.toFixed(2));
	return avgRatings;
};

// Iteration 4: Drama movies - Get the average of Drama Movies
let dramaMoviesRate = (movies) => {
	if (!movies.length) return 0;
	let dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));
	if (!dramaMovies.length) return 0;
	let sumOfRatings = dramaMovies.reduce(
		(accumulator, current) => accumulator + current.rate, 0);
	let avgRatings = sumOfRatings / dramaMovies.length;
	avgRatings = Number(avgRatings.toFixed(2));
	return avgRatings;
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
let orderByYear = (movies) => {
	let orderedMoviesByYear = [...movies].sort((a, b) => {
		if (a.year === b.year) return a.title < b.title ? -1 : 1;
		else return a.year - b.year;
	});
	return orderedMoviesByYear;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let orderAlphabetically = (movies) => {
	let orderedMoviesByTitle = [...movies].sort((a, b) => a.title < b.title ? -1 : 1);
	let orderedTitlesOnly = orderedMoviesByTitle.map((movie) => movie.title);
	let firstTwentyAlphabetized = orderedTitlesOnly.filter((movie, index) => index < 20);
	return firstTwentyAlphabetized;
}; 

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
let turnHoursToMinutes = (movies) => {
	let durations = movies.map((movie) => movie.duration); //return value example: "2h 22min"
	let split = durations.map((duration) => {duration = duration + ""; return duration.split(" ");}); //return value example: ["2h", "22min"]
	let time = split.map((duration) => {
		if (!duration[1] && duration[0].includes("min")) {		 //if there are only minutes
			minutes = duration[0].replace(/[^0-9]/g, ""); 		 //evaluates to the minutes without the text and returns it, ie. 22
			minutes = Number(minutes);
			return minutes;
		} else if (!duration[1] && duration[0].includes("h")) {  //if there are only hours
			hoursToMinutes = duration[0].replace(/[^0-9]/g, ""); //evaluates to the hours without the text and returns it, ie. 2
			hoursToMinutes = Number(hoursToMinutes) * 60; 		 //multiply 2 by 60 to get the total minutes in the hours
			return hoursToMinutes;
		} else {												 //else there are both hours and minutes
			hoursToMinutes = duration[0].replace(/[^0-9]/g, ""); 
			hoursToMinutes = Number(hoursToMinutes) * 60; 		 
			minutes = duration[1].replace(/[^0-9]/g, ""); 		 
			minutes = Number(minutes);
			return hoursToMinutes + minutes;				
		}});
	let replaceWithMinutes = movies.map((movie, index) => {movie.duration = time[index]; return movie;});
	return replaceWithMinutes;
};

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
