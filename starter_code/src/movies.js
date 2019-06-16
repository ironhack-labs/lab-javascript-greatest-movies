/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
//const turnHoursToMinutes = (arr) => {

function turnHoursToMinutes(arr) {
	let newArray = JSON.parse(JSON.stringify(arr));
	let duration = newArray.map(movie => {
	let hour = movie.duration.split('');
	let newHour = 0;
	let minutes = 0;
	if (hour.length <= 2) {
		newHour = parseInt(hour[0] * 60);
		movie.duration = newHour;
		return newArray;
	} else if (hour.length === 5) {
		minutes = parseInt(hour[0] * 10 + parseInt(hour[1]));
		movie.duration = minutes;
		return newArray;
	} else {
		newHour = parseInt(hour [0] * 60);
		minutes = parseInt(hour [3] * 10) + parseInt(hour[4]);
		movie.duration = newHour + minutes;
		return newArray;
	}
}) 
	return newArray;
};

console.log(turnHoursToMinutes(movies));

// Get the average of all rates with 2 decimals 

function ratesAverage(arr) {
	const newRate = arr.reduce((rating, item) => rating + item.rate, 0) / arr.length;
	return parseFloat(newRate);
};

console.log(ratesAverage(movies));

// Get the average of Drama Movies

function dramaMoviesRate(arr) {
	const dramaOnlyRate = arr.filter(limitedGenre => limitedGenre.genre.includes('Drama'));
	if (dramaOnlyRate.length === 0) {
		return undefined;
	} else {
	return parseFloat(ratesAverage(dramaOnlyRate).toFixed(2));
	};
}

console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order

function orderByDuration(arr) {
	let newOrder = JSON.parse(JSON.stringify(arr));
	newOrder = newOrder.sort((a, b) => {
		if (a.duration === b.duration) {
			return a.title.localeCompare(b.title);
		} else {
			return a.duration - b.duration;
		}
	});
	return newOrder;
}

console.log(orderByDuration(movies));

// How many movies did STEVEN SPIELBERG

function howManyMovies(arr) {
	const stevenSpielbergDramaMovies = arr.filter(StevenSpielberg => StevenSpielberg.director === 'Steven Spielberg' && StevenSpielberg.genre.includes('Drama'));
	if (arr.length === 0) {
		return undefined;
	} else {
	return `Steven Spielberg directed ${stevenSpielbergDramaMovies.length} drama movies!`
	}
}

console.log(howManyMovies(movies));

// Order by title and print the first 20 titles

function orderAlphabetically(arr) {
	let titleOfMovies = JSON.parse(JSON.stringify(arr));
	titleOfMovies = arr.sort((a, b) => a.title.localeCompare(b.title));
	return titleOfMovies.slice(0, 20).map(titles => titles.title);
}

// Best yearly rate average

function bestYearAvg(arr) {

}