// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors (array) {
	return array.map (allDirectors => allDirectors.director)
}

//Bonus Iteration 1.1: Clean the array of directors

const cleanDirectorSet = new Set(director)
const cleanDirectorArray = [...cleanDirectorSet]

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (array) {
	return array.filter (dramaMovies => dramaMovies.director === "Steven Spielberg" && dramaMovies.genre.includes ("Drama")).length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (array) {
	if (array.length === 0) {
		return 0
	} else {
		const averageRate = array.reduce ((accumulator, current) => {
			if (!current.rate) {
				return accumulator + 0
			}
			return accumulator + current.rate
		}, 0)
		return Number ((averageRate / array.length).toFixed(2))
	}
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (array) {
	const dramaMoviesArray = array.filter (dramaMovies => dramaMovies.genre.includes ("Drama"))
	const totalDramaRate = dramaMoviesArray.reduce ((accumulator, current) => {
		if (!current.rate) {
			return accumulator + 0
		}
		return accumulator + current.rate
	}, 0)
	if (dramaMoviesArray.length === 0) {
		return 0
	}
	return Number ((totalDramaRate / dramaMoviesArray.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (array) {
	const yearsOrdered = array.slice().sort (function (a, b) {
		if (a.year > b.year) {
			return 1
		}
		if (a.year < b.year) {
			return -1
		}
		if (a.year === b.year) {
			if (a.title > b.title) {
				return 1
			}
			if (a.title < b.title) {
				return -1
			}
		}
	})
	return yearsOrdered
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (array) {
	const sortedTitlesArray = array.map(movie => {
		return movie.title
	}).sort()
	if (sortedTitlesArray.length > 20) {
		let firstTwenty = []
		for (let i=0; i < 20; i++) {
			firstTwenty.push(sortedTitlesArray[i])
		}
		return firstTwenty
	} else {
		return sortedTitlesArray
	}
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
