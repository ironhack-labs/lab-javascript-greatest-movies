// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movieArray) {
	const directors = movieArray.map((x) => {
		return x.director
	})
	/* console.log(directors) */
	return directors
}
/*
let director = getAllDirectors(movies)
console.log(director) */
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
	if (movies.length === 0) {
		return 0
	}
	let director = movies[0].director

	/* console.log("director: ", director) */
	const spielbergMoviesCounter = movies.filter(function (movie) {
		if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
			return movie
		}
	})

	return spielbergMoviesCounter.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
	if (movies.length === 0) {
		return 0
	}

	/* console.log(movies) */
	const avgRates = movies.reduce(function (acc, val) {
		if (!val.rate) {
			return acc + 0
		}

		return acc + val.rate
	}, 0)

	/* console.log(avgRates) */

	return Math.round((avgRates / movies.length) * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
	if (movies.length === 0) {
		return 0
	}
	let dramaMovies = movies.filter(function (movie) {
		if (movie.genre.includes("Drama")) {
			return movie
		}
	})
	const avgRates = ratesAverage(dramaMovies)

	return avgRates
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
	const yearlySortedMovie = movies.sort(function (movie1, movie2) {
		if (movie1.year === movie2.year) {
			return -1
		}

		return movie1.year - movie2.year
	})
	const newArray = Array.from(yearlySortedMovie)
	return newArray
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
	const titlesArr = movies.map(function name(movie) {
		return movie.title
	})

	const orderedTitleAlph = titlesArr
		.sort(function (title1, title2) {
			if (title1 < title2) {
				return -1
			}
			if (title1 === title2) {
				return 0
			}
			if (title1 > title2) {
				return 1
			}
		})
		.slice(0, 20)

	return orderedTitleAlph
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
	const moviesDurationInMinutes = movies.map((movie) => {
		if (movie.duration) {
			let durationArr = movie.duration.split(" ")

			movie.duration = durationArr.reduce((acc, val) => {
				let hour = 0
				let min = 0
				if (val.includes("h")) {
					hour = parseInt(val.slice(0, -1))
					acc += hour * 60
				} else {
					min = parseInt(val.slice(0, -3))
					acc += min
				}
				return acc
			}, 0)
		}
		return movie
	})
	/* 	console.log(moviesDurationInMinutes) */
	return moviesDurationInMinutes.slice()
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
	if (movies.length === 0) {
		return null
	}

	if (movies.length === 1) {
		let oneMovie = movies.reduce((acc, val) => {
			acc += val.rate
			return acc / 1
		}, 0)
		return oneMovie
	}

	let yearArray = movies.sort((movie1, movie2) => {
		if (movie1.year < movie2.year) {
			return -1
		}
	})

	let yearAvg = movies.reduce((acc, val) => {
		if (acc) {
			acc.push(val)
		}
	}, [])

	return yearArray
}
