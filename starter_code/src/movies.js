// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
	var newMovieList = []
	var timeRegex = /(\d+h)?\ ?(\d+\min)?/i;

	movies.forEach(function(movie) {
		newMovie = Object.assign({}, movie) // pour créer une copie de l'objet movie

		var movieDuration = newMovie.duration.match(timeRegex); 
		if (movieDuration[1] != undefined) {
			var fullHours = parseInt(movieDuration[1], 10);
			var hoursInMinutes = fullHours * 60;
		} else { // s'il n'y a pas d'heures
			var hoursInMinutes = 0;
		}
		
		if (movieDuration[2] != undefined) {
			var fullMinutes = parseInt(movieDuration[2], 10);
		} else { // s'il n'y a pas de minutes
			var fullMinutes = 0;
		}
		
		var hoursPlusMinutes = hoursInMinutes + fullMinutes; // calcul final 

		newMovie.duration = hoursPlusMinutes;
		newMovieList.push(newMovie);
	});
	return newMovieList;
}

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
	var total = movies.reduce((acc, currentMovie) => {
		return (acc += Number(currentMovie.rate));
	}, 0);
	const avg = (total / movies.length).toFixed(2);
	return Number(avg);
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
	var dramaMovies = movies.filter((movie) => {
		return movie.genre.includes('Drama');
	});
	if (dramaMovies.length > 0) {
		return ratesAverage(dramaMovies);
	} else {
		return undefined;
	}
}
// Order by time duration, in growing order
function orderByDuration(movies) {
	const sortedMovies = movies.sort(function(a,b) {
		var durationA = a.duration;
		var durationB = b.duration;
		var comparison = 0;
		if (durationA === durationB) {
			return titleComparison(a,b);
		}
		else if (durationA > durationB) {
			comparison = 1;
		} else if (durationA < durationB) {
			comparison = -1;

		}
		return comparison;
	});
	return sortedMovies;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
	if (movies.length == 0) {
		return undefined;
	}
	var dramaMovies = movies.filter(function(movie) {
		return movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama');
	});
	if (dramaMovies.length >= 0) {
		return `Steven Spielberg directed ${dramaMovies.length} drama movies!`;
	}
}

// fonction comparer par titre
function titleComparison(a, b) {
	var titleA = a.title;
	var titleB = b.title;
	var comparison = 0;
	if (titleA > titleB) {
		comparison = 1;
	} else if (titleA < titleB) {
		comparison = -1;
	}
	return comparison;
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
	const sortedMovies = movies.sort(titleComparison);
	selectedMovies = sortedMovies.slice(0, 20); // pour cibler les 20 premiers
	return selectedMovies.map((movie) => movie.title); // pour avoir juste le titre
}

// Best yearly rate average
function bestYearAvg(movies) {
}
