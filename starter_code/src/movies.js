/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

const turnHoursToMinutes = arr => {
	let auxArr = [...arr]
	auxArr = auxArr.map(elm => {
		const _elm = { ...elm }
		let duration = _elm.duration.toString()
		duration = duration.replace('min', '')
		if (duration.indexOf('h') == -1) {
			_elm.duration = +duration

			return _elm
		}
		duration = duration.replace('h', '')
		duration = duration.replace(' ', '')
		_elm.duration = duration[0] * 60 + +duration.substring(1)
		return _elm
	})
	return auxArr
}

// Get the average of all rates with 2 decimals

const ratesAverage = arr => {
	const total = arr.reduce((acc, elm) => {
		return acc + elm.rate
	}, 0)
	return Math.round((total / arr.length) * 100) / 100
}
// Get the average of Drama Movies

const dramaMoviesRate = arr => {
	const arrAux = arr.filter(elm => elm.genre.includes('Drama'))
	if (arrAux.length > 0) return ratesAverage(arrAux)
}

// Order by time duration, in growing order

const orderByDuration = arr => {
	let arrAux = turnHoursToMinutes(arr)
	return arrAux.sort((a, b) => {
		if (a.duration == b.duration) {
			if (a.title > b.title) return 1
			else if (a.title == b.title) return 0
			else return -1
		}
		return a.duration - b.duration
	})
}

// How many movies did STEVEN SPIELBERG

const howManyMovies = arr => {
	if (arr.length > 0) {
		let movies = arr.filter(elm => elm.genre.includes('Drama') && elm.director == 'Steven Spielberg').length
		return `Steven Spielberg directed ${movies} drama movies!`
	}
}

// Order by title and print the first 20 titles

const orderAlphabetically = arr => {
	arr.sort((a, b) => {
		if (a.title > b.title) return 1
		else if (a.title == b.title) return 0
		else return -1
	})
	let result = []
	arr.forEach(elm => {
		result.push(elm.title)
	})

	if (result.length > 20) result.splice(20)

	return result
}

// Best yearly rate average

const bestYearAvg = arr => {
	if (arr.length == 0) return undefined

	let yearArr = []

	arr.forEach(elm1 => {
		let isIn = false
		for (let i = 0; i < yearArr.length; i++) {
			if (elm1.year == yearArr[i][0].year) {
				yearArr[i].push(elm1)
				isIn = true
			}
		}
		if (!isIn) yearArr.push([elm1])
	})

	console.log(yearArr)
	yearArr.sort((a, b) => ratesAverage(a) - ratesAverage(b))
	return `The best year was ${yearArr[0][0].year} with an average rate of ${ratesAverage(yearArr[0])}`
}
