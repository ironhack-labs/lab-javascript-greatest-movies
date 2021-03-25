// Iteration 1: All directors? - Get the array of all directors.
let getAllDirectors = (arr) => arr.map((e) => e.director);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
//How could you "clean" a bit this array and make it unified (without duplicates)?
let directors = [];
getAllDirectors(movies).forEach((director) => {
	if (!directors.includes(director)) {
		directors.push(director);
	}
});

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let howManyMovies = (arr) =>
	arr.filter((e) => e.director === "Steven Spielberg" && e.genre.includes("Drama")).length;

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let ratesAverage = (arr) => {
	let filteredArray = arr.filter((movie) => "rate" in movie);
	let average = filteredArray.reduce((acc, movie) => acc + movie.rate / arr.length, 0);
	return Number(average.toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies
let dramaMoviesRate = (arr) => {
	let filteredDramaArray = arr.filter((movie) => movie.genre.includes("Drama"));
	let average = filteredDramaArray.reduce((acc, movie) => acc + movie.rate / filteredDramaArray.length, 0);
	return Number(average.toFixed(2));
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
let orderByYear = (arr) => {
	let sortedByYear = arr.sort((a, b) => a.year - b.year);

	let sortedByName = sortedByYear.sort((a, b) => {
		if (a.year === b.year) {
			return a.title.localeCompare(b.title);
		}
	});
	return [...sortedByName];
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let orderAlphabetically = (arr) => {
	let mySort = [...arr].sort((a, b) => a.title.localeCompare(b.title));
	let myTitles = mySort.map((el) => el.title);
	return myTitles.slice(0, 20);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
let turnHoursToMinutes = (arr) => {
	let newMovies = [];
	const REGEX_HOURS = /\d+h/g;
	const REGEX_MINUTES = /\d+m/g;
	[...arr].forEach((mov) => {
		//Extracting hours from duration
		let hours = mov.duration.match(REGEX_HOURS);
		if (hours !== null) {
			hours = Number(hours[0].slice(0, this.length - 1));
		} else {
			hours = 0;
		}
		//Extracting minutes from duration
		let minutes = mov.duration.match(REGEX_MINUTES);
		if (minutes !== null) {
			minutes = Number(minutes[0].slice(0, this.length - 1));
		} else {
			minutes = 0;
		}
		//Converting hours and minutes into minutes.
		let totalMinutes = hours * 60 + minutes;
		//Adding totalMinutes to object.
		if ("duration" in mov) {
			mov.duration = totalMinutes;
		}
		totalMinutes = 0;
		newMovies.push(mov);
	});
	return newMovies;
};

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
let bestYearAvg = (arr) => {
	if (arr.length === 0) return null;
	let bestAverageRate = 0;
	let bestYearRate = 0;
	//Getting all unique years from arr parameter.
	let years = [];
	arr.map((movie) => movie.year).forEach((year) => {
		if (!years.includes(year)) {
			years.push(year);
		}
	});
	years.forEach((year) => {
		let moviesPerYear = arr.filter((movie) => movie.year === year);
		let currentAvg = moviesPerYear.reduce((acc, movie) => {
			acc += movie.rate / moviesPerYear.length;
			return acc;
		}, 0);
		if (currentAvg > bestAverageRate) {
			bestAverageRate = currentAvg;
			bestYearRate = year;
		} else if (currentAvg === bestAverageRate) {
			if (bestYearRate > year) {
				bestYearRate = year;
			}
		}
	});

	return `The best year was ${bestYearRate} with an average rate of ${bestAverageRate}`;
};
