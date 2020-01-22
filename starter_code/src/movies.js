/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = arg1 => {
	return (
		arg1
			// make a copy of the array as not to overwrite the original array
			// function(movie) => return movie
			.map(movie => movie)
			// then sort it.
			.sort((a, b) => {
				if (a.year === b.year) {
					if (a.title < b.title) {
						return -1;
					} else if (a.title > b.title) {
						return 1;
					} else {
						return 0;
					}
				}
				return a.year - b.year;
			})
	);
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = arg1 =>
	arg1.filter(
		argFilter =>
			argFilter.genre.includes("Drama") &&
			argFilter.director === "Steven Spielberg"
	).length;

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = arg1 => {
	return (movieTitles = arg1
		.map(movieTitle => movieTitle.title)
		.sort()
		.slice(0, 20));
};

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = arg1 => {
	const result =
		Math.round(
			(arg1.reduce((acc, val) => {
				//if (val.rate >= 0) {return acc + val.rate} else {return parseInt(acc) + 0} 
				return val.rate >= 0 ? acc + val.rate : parseInt(acc) + 0
			}, 0) /
				arg1.length) *
				100
		) / 100;
	return result >= 0 ? result : 0;
};

// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = arg1 => {
	const dramaFilter = arg1.filter(filterName =>
		filterName.genre.includes("Drama")
	);
	const result =
		Math.round(
			(dramaFilter.reduce((acc, val) => {
				return val.rate >= 0 ? acc + val.rate : parseInt(acc) + 0;
			}, 0) /
				dramaFilter.length) *
				100
		) / 100;
	return result >= 0 ? result : 0;
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
//
// This causes a typeof error within the array functios. Why?
// const turnHoursToMinutes = arg1 => {
// 	return arg1.map((movie) => {
// 		  duration = movie.duration.split(' ');
// 	    if (duration[0].includes('min') === true) {hours = '0'} else {
// 		    hours = duration[0].split('h')[0] }
// 	    if (typeof duration[1] === 'undefined') {minutes = '0'} else { 
// 		    minutes = duration[1].split('min')[0] }
//     	movie.duration = parseInt(hours * 60) + parseInt(minutes);
// 	    return movie
//   });
// }


const turnHoursToMinutes = arg1 => {

	const newArray = JSON.parse(JSON.stringify(arg1));
		return newArray.map((movie) => {
			duration = movie.duration.split(' ');
			if (duration[0].includes('min') === true) { hours = '0' } else { hours = duration[0].split('h')[0] }
			if (duration[0].includes('min')) { minutes = duration[0].slice(0,duration[0].indexOf('min')) } else if (typeof duration[1] == 'undefined') { minutes = '0' } else { minutes = duration[1].split('min')[0] }
		  	movie.duration = parseInt(hours * 60) + parseInt(minutes);
		  	return movie
	});
  }
  

// BONUS Iteration: Best yearly rate average - Best yearly rate average
