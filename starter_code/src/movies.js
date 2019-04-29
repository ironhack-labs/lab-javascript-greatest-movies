/* eslint no-restricted-globals: 'off' */

/* import movies as movies from './data.js'; */

/* {
    title: 'The Godfather: Part II',
    year: '1974',
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.0'
  } */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
	return movies.map((movie) => {
		let hoursToMin = 0;
		let minutes = 0;

		if (typeof movie.duration != 'number') {
			if (movie.duration.indexOf('h') != -1) {
				hoursToMin = movie.duration.charAt(0) * 60;
				minutes = +movie.duration.substr(
					movie.duration.indexOf(' ') + 1,
					movie.duration.lastIndexOf('min') - 3
				);
			} else {
				minutes = Number(movie.duration.substr(0, movie.duration.length - 3));
				/* console.log("solo minutos")
        console.log("minutos:", minutes) */
			}
			return {
				...movie,
				duration: hoursToMin + minutes
			};
		} else {
			return {
				...movie
			};
		}
	});
}

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
	const sumRates = movies.reduce((ac, movie) => {
		return ac + movie.rate;
	}, 0);
	/* console.log("avgRate:", +(sumRates / movies.length).toFixed(2)) */
	return +(sumRates / movies.length).toFixed(2);
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
	/*  const dramaMovies = movies.filter(movie => {
     const idx = movie.genre.indexOf('Drama')
     console.log('Genres', movie.genres)
     console.log('Indice', idx)
     if (idx != -1) {
       return true
     }
   }) */
	const dramaMovies = movies.filter((movie) => movie.genre.indexOf('Drama') != -1);
	if (dramaMovies.length != 0) {
		return ratesAverage(dramaMovies);
	}
}

// Order by time duration, in growing order

function orderByDuration(movies) {
	if (movies.length === 1) {
		return movies;
	}
	//console.log(movies)

	return turnHoursToMinutes(movies).sort((a, b) => {
		/* console.log("Duraciones", a.duration, b.duration) */
		if (a.duration < b.duration) {
			return -1;
		} else if (a.duration > b.duration) {
			return 1;
		} else {
			// if a.duration = b.duration
			//console.log("Entro a comparar por titulo", a.title, b.title)
			return a.title.localeCompare(b.title);
		}
	});
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
	if (movies.length != 0) {
		/* console.log(movies) */
		const spielbergMovies = movies
			.filter((movie) => movie.genre.indexOf('Drama') != -1)
			.filter((movie) => movie.director === 'Steven Spielberg');
		/* console.log(spielbergMovies) */
		return `Steven Spielberg directed ${spielbergMovies.length} drama movies!`;
	}
}

// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
	console.log(movies);
	let orderedMovies = movies
		.map((movie) => {
			return movie.title;
			/*  return {
       title: movie.title
     } */
		})
		.sort((a, b) => {
			if (a < b) {
				return -1;
			}
			if (a > b) {
				return 1;
			}
			return 0;
		});

	if (orderedMovies.length > 20) {
		orderedMovies = orderedMovies.slice(0, 20);
		/*  console.log("After slice", orderedMovies.length)
     console.log("After slice array", orderedMovies) */
	}
	return orderedMovies;
}
// Best yearly rate average

/* 
function groupBy(array, key) {
  return array.reduce((result, element) => {
    (result[element[key]] = result[element[key]] || []).push(element)
    return result
  }, {})
}

function bestYearAvg(movies) {
  const groupByYear = groupBy(movies, 'year');
  console.log(groupByYear)

  groupByYear.reduce((ac, year) => {
    return ac +
  })
} */
