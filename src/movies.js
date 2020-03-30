/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (moviesArr) => {

	return [...moviesArr]
		.sort((movie1, movie2) => {

			if (movie1.year === movie2.year) {
				return movie1.title.toUpperCase() < movie2.title.toUpperCase() ? -1 : movie1.title === movie2.title ? 0 : 1

			} else {
				return movie1.year < movie2.year ? -1 : 1
			}
		})
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = (moviesArr) => {

    return moviesArr
		.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
		.reduce((acc, movie) => ++acc, 0)

}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (moviesArr) => {

	return [...moviesArr]
		.sort((movie1, movie2) => {
			let movie1Title = movie1.title.toUpperCase()
			let movie2Title = movie2.title.toUpperCase()
			
			return  (movie1Title < movie2Title)   ? -1 :
					(movie1Title === movie2Title) ?  0 : 1
		})
		.map(movie => movie.title)
		.splice(0, 20)

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (moviesArr) => {

	if (moviesArr.length <= 0) {

		return 0

	} else {
		
		let moviesRatingSum = moviesArr
			.filter(movie => typeof movie.rate === "number" && Object.keys(movie).length > 0)
			.reduce((accumulator, movie) => accumulator += movie.rate, 0)

		let moviesQty = moviesArr.length
		
		let avg = parseFloat((moviesRatingSum / moviesQty).toFixed(2))

		return avg
	}


}


// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (moviesArr) => {

	let filteredDrama = moviesArr.filter(movie => movie.genre.includes("Drama"))

	return ratesAverage(filteredDrama)

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (moviesArr) => {

	return moviesArr.map(movie => {

		let hoursIndex = movie.duration.indexOf('h')

		let minutesIndex = movie.duration.indexOf('min')
		
		let movieClone = {...movie}

		if (hoursIndex != -1) {

			let hours = (movieClone.duration.slice(0, hoursIndex) * 60)

			if (minutesIndex != -1) {

				let minutes = parseInt((movieClone.duration.slice(hoursIndex + 1, minutesIndex)))

				movieClone.duration = hours + minutes

				return movieClone

			} else {

				movieClone.duration = hours
				return movieClone
			}

		} else {
			
			movieClone.duration = parseInt(movieClone.duration.slice(0, minutesIndex))
		
			return movieClone 
		}

	})

}



// BONUS Iteration: Best yearly rate average - Best yearly rate average

const bestYearAvg = (moviesArr) => {

	
	if (moviesArr.length === 0) {
		
		return null
	}

	const yearsAverage = moviesArr
		.map(movie => movie.year)
		.filter((movieYear, index, moviesArray) => moviesArray.indexOf(movieYear) === index) // Esta linea he buscado en internet. La entiendo perfectamente, pero no se me habria ocurrido en la vida, la verdad. Fuente: https://gist.github.com/telekosmos/3b62a31a5c43f40849bb
		
	// Creo que esto se podria concatenar tambien, pero estoy demasiado cansado como para pensar la manera correcta. La consola solo me escupe errores jajaja
	yearsObjectAverage = yearsAverage
		.map(movieYear => {
			return {
				year: movieYear,
				averageRate: ratesAverage(moviesArr.filter(movie => movie.year === movieYear))
			}
		})
	
	console.log(yearsObjectAverage)

	yearsObjectAverage = yearsObjectAverage.sort((year1, year2) => {

		return 	year1.averageRate < year2.averageRate 	? -1 : 
				year1.averageRate === year2.averageRate ? -1 : 1
	})


	console.log(yearsObjectAverage)

	return `The best year was ${yearsObjectAverage[0].year} with an average rate of ${yearsObjectAverage[0].averageRate}` 


}

//Me ha faltado 1 iteracion, pero creo que me rindo jajajaja
