/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const ratesAverage = arr => {
	return parseFloat(arr.reduce(function (accumulator, currentValue) {
		const result = accumulator + parseFloat(currentValue.rate) / arr.length;
		return result
	}, 0).toFixed(2))
}


ratesAverage(movies)


// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
	const dramaFilms = arr.filter(g => {
		if (g.genre.includes('Drama')) {
			return true
		}

	})
	return parseFloat(dramaFilms.reduce(function (accumulator, currentValue) {
		let averg = parseFloat(currentValue.rate) / dramaFilms.length
		if (isNaN(averg)) {
			return accumulator
		}
		const result = accumulator + averg;

		return result
	}, 0).toFixed(2))
}
dramaMoviesRate(movies)

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

//quitar las letras 
//ordenar por duracion con sort restando a-b

function orderByDuration(movies) {
	let orderedArr = movies.sort((a, b) => {
		if (a.duration < b.duration) {
			return -1;
		} else if (a.duration > b.duration) {
			return 1;
		} else if (a.duration === b.duration) {
			if (a.title < b.title) {
				return -1;
			} else if (a.title > b.title) {
				return 1;
			} else {
				return 0;
			}
		}
	})
	return orderedArr;
}

orderByDuration(movies)


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
//un filter y un if en el que en genero incluya drama y el director sea Spliberg

function howManyMovies(arr) {

	const result = arr.filter(d => d.director === "Steven Spielberg")

	const result2 = result.filter(g => {
		if (g.genre.includes('Drama')) {
			return true
		}
	})
	return result2.length


}

howManyMovies(movies)


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
//Ordenarlo por orden alfabetico un map y un slice

function orderAlphabetically(arr) {

	const result = arr.map(function (a) {

		return a.title
	}).sort().slice(0, 20);


	return result


}

orderAlphabetically(movies)

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {

	function minutesFromHString(hString) {
		const num = hString.replace(/h/, '')

		return Number(num) * 60
	}

	function minutesFromMinString(minString) {
		const num = minString.replace(/min/, '')

		return Number(num)
	}

	function minutesFromDurationString(duration) {
		const durationArr = duration.split(' ')

		if (durationArr.length === 2) {
			return minutesFromHString(durationArr[0]) +
				minutesFromMinString(durationArr[1])
		}

		if (durationArr[0].includes('h')) {
			return minutesFromHString(durationArr[0])
		}

		return minutesFromMinString(durationArr[0])
	}

	let newArrWithMin = []
	array.forEach(movie => {
		let singleMovie = { ...movie,
			duration: minutesFromDurationString(movie.duration)
		}
		newArrWithMin.push(singleMovie)
	})
	return newArrWithMin

}
// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(allMovies) {

	if (allMovies.length === 0){return null};

	const yearAndRate = [];
	allMovies.forEach(function (movie) {
		const searchArray = yearAndRate.filter(function (movieOnratesArr) {
			return movieOnratesArr.year === movie.year
		})
		if (searchArray.length === 0) {
			yearAndRate.push({
				year: movie.year,
				rates: [parseFloat(movie.rate), ]
			})
		} else {
			const position = yearAndRate.findIndex(function (movieOnratesArr) {
				return movieOnratesArr.year === movie.year
			})
			yearAndRate[position].rates.push(parseFloat(movie.rate));
		}
	})

	let yearlyAverage = yearAndRate.map(function (ratedYear) {
		return {
			year: ratedYear.year,
			totalrate: ratedYear.rates.reduce(function (accumulator, currentValue) {
				return accumulator + currentValue;
			}) / ratedYear.rates.length
		}
	}).sort(function (a, b) {
		if (a.totalrate > b.totalrate) return -1;
		if (a.totalrate < b.totalrate) return 1;
		if (a.totalrate === b.totalrate) {
			if (a.year < b.year) return -1;
			if (a.year > b.year) return 1;
			return 0
		}
	});

	return `The best year was ${yearlyAverage[0].year} with an average rate of ${yearlyAverage[0].totalrate}`
}