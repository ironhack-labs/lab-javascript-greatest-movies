// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
	const directorsArray = moviesArray.map(eachMovie => {
		return eachMovie.director;
	});
	return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
	const dramaMovies = moviesArray.filter(eachMovie => {
		return eachMovie.genre.includes('Drama');
	});
	const stevenDramaMovies = dramaMovies.filter(eachMovie => {
		return eachMovie.director === 'Steven Spielberg';
	});
	return stevenDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
	if (moviesArray.length) {
		const scoreArray = moviesArray.map(eachMovie => {
			if (eachMovie.score) {
				return eachMovie.score;
			} else {
				return 0;
			}
		});

		const totalScore = scoreArray.reduce((acc, currentValue) => {
			return acc + currentValue;
		}, 0);

		return Number((totalScore / moviesArray.length).toFixed(2));
	} else {
		return 0;
	}
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
	const dramaMovies = moviesArray.filter(eachMovie => {
		return eachMovie.genre.includes('Drama');
	});
	if (dramaMovies.length) {
		const scoreArray = dramaMovies.map(eachMovie => {
			if (eachMovie.score) {
				return eachMovie.score;
			} else {
				return 0;
			}
		});

		const totalScore = scoreArray.reduce((acc, currentValue) => {
			return acc + currentValue;
		}, 0);

		return Number((totalScore / dramaMovies.length).toFixed(2));
	} else {
		return 0;
	}
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
	const copiedMoviesArray = JSON.parse(JSON.stringify(moviesArray));
	copiedMoviesArray.sort((a, b) => {
		return a.year - b.year || a.title.localeCompare(b.title); // a.title - b.title;
	});
	return copiedMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
	const copiedMoviesArray = JSON.parse(JSON.stringify(moviesArray));
	const titlesArray = [];

	copiedMoviesArray.sort((a, b) => {
		return a.title.localeCompare(b.title);
	});
	copiedMoviesArray.forEach((eachMovie, index) => {
		if (index >= 20) {
			return titlesArray;
		}
		titlesArray.push(eachMovie.title);
	});
	return titlesArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
	const copiedArray = JSON.parse(JSON.stringify(moviesArray));
	const newArray = copiedArray.map(eachMovie => {
		let duration = eachMovie.duration.split(' ');
		let hours = 0;
		let minutes = 0;
		if (duration.length === 2) {
			hours = duration[0].replace('h', '');
			minutes = duration[1].replace('min', '');
		} else {
			if (duration[0].includes('min')) {
				minutes = duration[0].replace('min', '');
				hours = 0;
			} else if (duration[0].includes('h')) {
				hours = duration[0].replace('h', '');
				minutes = 0;
			}
		}
		eachMovie.duration = parseInt(hours * 60) + parseInt(minutes);
		return eachMovie;
	});

	return newArray;

	//const newArray = JSON.parse(JSON.stringify(moviesArray));
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
	if (!moviesArray.length) {
		return null;
	} else if ((moviesArray.length = 1)) {
		return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`;
	}
	const newArray = JSON.parse(JSON.stringify(moviesArray));
	newArray.sort((a, b) => {
		return a.year - b.year;
	});
	let firstYear = newArray[0].year;
	let lastYear = newArray[newArray.length - 1].year;
	const arrayOfYearRates = [];

	for (let currentYear = firstYear; currentYear <= lastYear; currentYear++) {
		const eachYearArray = newArray.filter(eachMovie => {
			return eachMovie.year === currentYear;
		});
		if (eachYearArray.length) {
			arrayOfYearRates.push(eachYearArray);
		}
	}
	// console.log('OOOOOOOOOOOOO', arrayOfYearRates);

	// const yearAndAvg = [];

	// arrayOfYearRates.forEach(eachObject => {
	// 	let eachElement = { year: 0, avgRate: 0 };
	// 	eachElement.year = eachObject.year;
	// });
}
